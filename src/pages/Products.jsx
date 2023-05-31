import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import jsonData from '../database/products.json';
function Products() {
    const [products, setProducts] = useState(jsonData);

    useEffect(()=>{
      
        
    },[])
    console.log(products);
  return (
    <>
    <div className='container mx-auto my-10'>
        <h1 className='text-3xl font-bold py-4'>
            Products
        </h1>
        <div className='grid lg:grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-2'>

           {products.map((product,index)=>
            <Product product={product} key={index}/>
           )}            
            
        </div>
    </div>
    </>
  )
}

export default Products