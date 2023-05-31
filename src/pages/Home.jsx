import React from 'react'
import Products from './Products'


function Home() {
  return (
    <>
    <div className='hero container mx-auto flex items-center justify-between'>
        <div className='w-1/2 my-16'>
            <p className='text-xl '><em>Are You Hungary!</em></p>
            <h1 className='text-4xl md:text-6xl font-bold'>Don't wait!</h1>
            <button className='px-6 py-2 bg-red-500 rounded-full text-white mt-5 hover:bg-red-600'>Order now</button>
        </div>

        <div className='w-1/2'>
            <img className='w-4/5' src="./assets/pizza1.jpg" alt="pizza" />
        </div>
    </div>
    <Products/>
    
    </>
  )
}

export default Home