import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, minifyRecords } from './api/utils/Airtable';
import { TodosContext } from '../context/TodosContext';
import { useContext, useEffect } from 'react';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import TodoForm from '../components/TodoForm';

export default function Home({ initialTodos, user }) {
  const { todos, setTodos } = useContext(TodosContext);
  useEffect(() => {
    setTodos(initialTodos);
  }, []);

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
            <TodoForm>
              <ul>
                {todos &&
                  todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
              </ul>
            </TodoForm>
          </>
        )}
        {!user && <p>Login to save todos!</p>}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context.req, context.res);
  let todos = [];
  try {
    if (session?.user) {
      todos = await table
        .select({
          filterByFormula: `userId = '${session.user.sub}'`,
        })
        .firstPage();
    }
    return {
      props: {
        initialTodos: minifyRecords(todos),
        user: session?.user || null,
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
