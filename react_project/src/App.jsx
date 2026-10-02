import { useState } from 'react'


function App() {
  
  const user = ["Sajib", "Tiyash", "Sarthok"];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-center">Hello, React!</h1>
      <ul>
        {user.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
  }
      
   
  

export default App
