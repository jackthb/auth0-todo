import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export default function Navbar({ user }) {
  const { setNewTodo, newTodo } = useContext(TodosContext);

  const handleSetNew = () => setNewTodo(!newTodo);
  return (
    <nav className='flex justify-between py-4 items-center'>
      <p className='text-4xl font-extrabold text-grey-800'>auth0-todo</p>
      <div className='flex'>
        {user && (
          <>
            <a
              className='text-2xl py-2 mr-4 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
              onClick={handleSetNew}
            >
              Add to-do
            </a>
            <a
              href='/api/auth/logout'
              className='text-2xl py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
            >
              Logout
            </a>
          </>
        )}
        {!user && (
          <a
            href='/api/auth/login'
            className='text-2xl py-2 px-4 text-white rounded bg-blue-500 hover:bg-blue-600'
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
