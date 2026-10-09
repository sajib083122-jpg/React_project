import { useState } from 'react'


function App() {
  
  const [user, setUser] = useState({ name: 'SAJIB',
    age: 25,
   })

  function updateName() {
    // alert('Clicked')
    setUser({
      ...user,
       name: 'Sajib Saha',
       age: 33, })
  }


  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='bg-green-600 text-white text-bold text-4xl text-center'>My name is: {user.name}</h1>
      <p className='text-gray-700 text-lg'>Age: {user.age}</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={updateName}>
        Update
      </button>
     
    </div>
  )
  }
      
export default App
