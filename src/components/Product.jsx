import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
  console.log(product._id['$oid']);
  return (
    <Link to={{
      pathname:`/products/${product._id['$oid']}`, 
    state:{product},
    }}>
    <div className='bg-gray-100 my-15'>
    <div className='text-center '>
    <img className='bg-primary' src="./assets/pizza1.jpg" alt="pizza" />
     <h2 className='my-5 font-bold text-lg '>{product.name}</h2>
     <span className=' bg-gray-500 rounded-full px-5 py-1 text-white'>{product.size}</span>
    </div>

     <div className='flex justify-between items-center mx-2'>
         <span className='font-bold py-2'> RS {product.price}</span>
         <button className='bg-red-500 rounded-full text-white px-5 py-1 hover:bg-red-600'>Add</button>
     </div>
     </div>
    </Link>
  )
}

export default Product