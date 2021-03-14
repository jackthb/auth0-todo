import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export default function TodoForm({ children }) {
  const [todo, setTodo] = useState('');
  const { addTodo } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };
  return (
    <div>
      <form className='form my-6 ' onSubmit={handleSubmit}>
        <div className='flex flex-col text-sm mb-2'>
          <label className='font-bold mb-2 text-gray-800' htmlFor='todo'>
            To-do:
          </label>
          <input
            type='text'
            name='todo'
            id='todo'
            className='border-gray-200 p-2 rounded-lg border appearance-none focus:outline-none focus:border-gray-500'
            value={todo}
            placeholder='ex. Learn about auth'
            onChange={(e) => setTodo(e.target.value)}
          ></input>
        </div>
        <button
          type='submit'
          className='w-full rounded bg-blue-500 text-white py-2 px-4 hover:bg-blue-600'
        >
          Submit
        </button>
      </form>
      {children}
    </div>
  );
}
