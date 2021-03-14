import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, minifyRecords } from './api/utils/Airtable';
import { TodosContext } from '../context/TodosContext';
import { useContext, useEffect } from 'react';
import { getSession, useUser } from '@auth0/nextjs-auth0';
import TodoForm from '../components/TodoForm';

export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { user, error, isLoading } = useUser();
  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Head>
          <title>auth0-todo</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <Navbar user={user} />
          {user && (
            <>
              <h1 className='text-2xl text-center mb-4'>My Todos</h1>
              <TodoForm>
                <ul>
                  {todos &&
                    todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
                </ul>
              </TodoForm>
            </>
          )}
        </main>
      </div>
    );
  }
  return <a href='/api/auth/login'>Login</a>;
}

export async function getServerSideProps(context) {
  // const session = await getSession(context.req);
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: minifyRecords(todos),
        // user: session?.user || null,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: 'something went wrong!',
      },
    };
  }
}
