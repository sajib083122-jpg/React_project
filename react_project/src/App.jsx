import { useState } from 'react'


function App() {
  const isLoggedIn = true; // Change this to true or false to test the conditional rendering

  
    return (
      <div>
        { isLoggedIn ? (
          <h1 className="bg-green-500 text-white text-4xl font-bold text-center">Welcome back, user!</h1>
        ) : (
          <h1 className="bg-red-500 text-white text-4xl font-bold text-center">Please log in to continue.</h1>
        )}
      </div>
    )
  }
      
   
  

export default App
