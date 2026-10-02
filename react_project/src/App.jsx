import { useState } from 'react'


function App() {
  
  const Products = [
    {id: 1, name: 'Laptop', inStock: true},
    {id: 2, name: 'RAM', inStock: false},
    {id: 3, name: 'ROM', inStock: true},
  ];

  return (
    <ul>
      {Products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.inStock ? (<span className="text-green-500 font-bold ">In Stock</span>) 
          : (<span className="text-red-500 font-bold ">Out of Stock</span>)}
        </li>
      ))}
    </ul>
  )
  }
      
   
  

export default App
