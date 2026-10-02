import { useState } from 'react'


function App() {
  
  const users = [
    {id: 1, name: 'Sajib', role: 'Admin'},
    {id: 2, name: 'Tiyash', role: 'Developer'},
    {id: 3, name: 'Sarthok', role: 'Designer'},
  ];

  return (
    <div className="App">
      <h1 className="text-3xl text-red-500 font-bold underline text-center">User List</h1> 
      {users.map((user) => (
        <div key={user.id} className="user-card bg-gray-100 p-4 m-2 rounded shadow">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-700">{user.role}</p>
        </div>
      ))}
    </div>
  )
  }
      
   
  

export default App
