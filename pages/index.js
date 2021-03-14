import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, minifyRecords } from './api/utils/Airtable';
import { TodosContext } from '../context/TodosContext';
import { useContext, useEffect, useState } from 'react';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import TodoForm from '../components/TodoForm';

import Background from '../components/Background';
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
      <main className='h-full overflow-y-hidden overflow-x-hidden'>
        <Background className>
          <div className='mx-4'>
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
            {!user && (
              <p className='text-5xl py-40 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                Login to save to-dos!
              </p>
            )}
          </div>
        </Background>
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
