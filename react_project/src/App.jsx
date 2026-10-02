import { useState } from 'react'


function App() {
  const isLoggedIn = false; // Change this to true or false to test the conditional rendering

  const user = ["Sajib", "Tiyash", "Sarthok"];

  
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">

        <h1 className='bg-blue-600 text-white text-4xl front-bold text-center'>My App</h1>
         
        { isLoggedIn ? (
          <>
          <p className='text-lg font-semibold text-gray-700'>Here are the users:</p>
          <ul>
            {user.map((name, index) => (
              <li key={index} className='text-blue-600 hover:text-blue-500'>
                {name}
              </li>
            ))}
          </ul>
          </>
          
        ) : (
          <h1 className="bg-red-500 text-white text-4xl font-bold text-center">Please log to see the users.</h1>
        )}
      </div>
    )
  }
      
   
  

export default App
