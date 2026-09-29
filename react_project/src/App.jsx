import { useState } from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      
    <div className= 'bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Header/>
        <Content/>
        <Greeting/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
