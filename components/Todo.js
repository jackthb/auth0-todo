import React, { useContext, useState } from 'react';
import { TodosContext } from '../context/TodosContext';
export default function Todo({ todo }) {
  const [viewDel, setViewDel] = useState(false);
  const { updateTodo, deleteTodo } = useContext(TodosContext);
  const handleToggleCompleted = () => {
    const updatedFields = { ...todo.fields, completed: !todo.fields.completed };
    const updatedTodo = { id: todo.id, fields: updatedFields };
    updateTodo(updatedTodo);
  };

  return (
    <li className='bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4'>
      <input
        type='checkbox'
        name='completed'
        id='completed'
        checked={todo.fields.completed}
        className='mr-2 form-checkbox h-5 w-5'
        onChange={handleToggleCompleted}
      ></input>
      <p
        className={`flex-1 text-gray-800 ${
          todo.fields.completed ? 'line-through' : ''
        }`}
      >
        {todo.fields.description}
      </p>
      {viewDel ? (
        <>
          <button
            type='button'
            className='text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded'
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
          <button
            type='button'
            className='h-7 w-7 ml-2'
            onClick={() => setViewDel(!viewDel)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </>
      ) : (
        <button
          type='button'
          className='h-7 w-7 '
          onClick={() => setViewDel(!viewDel)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}
    </li>
  );
}
