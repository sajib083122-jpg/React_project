import { useState } from 'react'


function App() {
  
  const todos = [
    {id: 1, name: 'Learn React', done: true},
    {id: 2, name: 'Build a Project', done: false},
    {id: 3, name: 'Deploy Application', done: true},
  ];

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='bg-green-600 text-white text-bold text-4xl text-center'>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
          <input type="checkbox" checked={todo.done} readOnly/>
          <span>{todo.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
  }
      
export default App
