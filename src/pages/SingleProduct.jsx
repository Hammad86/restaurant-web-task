import React from 'react'

function SingleProduct() {
  return (
    <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" >Back</button>
            <div className="flex">
                <img className="img-fluid w-20" src='../assets/pizza1.jpg' alt="pizza" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">hello</h1>
                    <div className="text-md">hello</div>
                    <div className="font-bold mt-2">hello</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
  )
}

export default SingleProduct