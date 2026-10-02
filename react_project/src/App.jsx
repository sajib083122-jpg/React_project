import { useState } from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import Greeting from './Greeting'

function App() {
  const isLoggedIn = false; // Change this to true or false to test the conditional rendering

  if (isLoggedIn) {
    return (
      <>  
      <h1 className='bg-green-300 text-4xl font-bold text-center py-4'>Welcome, User!</h1>
      </>
    )
  }
  else {
   return (
      <>
      <h1 className='bg-red-300 text-4xl font-bold text-center py-4'>Please log in.</h1>
      </>
    )  
  }
}

export default App
