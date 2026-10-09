import { useState } from 'react'


function App() {
  
  const [fruit, setFruit  ] = useState(["apple", "banana", "orange"])

  function updateName() {
    // alert('Clicked')
    setFruit([...fruit, "grape"])
  }


  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='bg-green-600 text-white text-bold text-4xl text-center'>Fruits: {fruit.join(", ")}</h1> 
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={updateName}>
        Update
      </button>
     
    </div>
  )
  }
      
export default App
