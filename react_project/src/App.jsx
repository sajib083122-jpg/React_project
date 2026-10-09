import { useState } from 'react'


function App() {
  
  const [user, setUser] = useState('SAJIB')

  function updateName() {
    // alert('Clicked')
    setUser('Sajib Saha')
  }


  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='bg-green-600 text-white text-bold text-4xl text-center'>My name is: {user}</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={updateName}>
        Update
      </button>
     
    </div>
  )
  }
      
export default App
