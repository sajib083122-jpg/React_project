import { useState } from 'react'


function App() {
  
  const [count, setCount] = useState(100)

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='bg-green-600 text-white text-bold text-4xl text-center'>{count}</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
  }
      
export default App
