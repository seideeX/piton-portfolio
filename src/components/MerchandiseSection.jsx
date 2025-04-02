import React from 'react'
import { merchandise } from '../constants'

const MerchandiseSection = () => {
  return (
    <div className='mt-20 border-b border-neutral-900'>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center">Buy a Merch</h2>
        <div className="flex flex-wrap mt-10 lg:mt-20 justify-center mb-20">
            {merchandise.map((item, index) => (
                <div key={index} className='flex flex-col justify-center w-100 h-auto mx-auto space-y-6'>
                        <img src={item.img} alt="" className='w-100 h-100'/>
                        <h2 className='text-3xl lg:text-5xl text-center'>{item.name}</h2>
                        <p className='text-xl text-center text-neutral-500 font-bold'>Price: {item.price}</p>
                        <a href="#" className="border border-blue-700 px-3 py-2 rounded-lg text-center hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-md shadow-indigo-500">Buy Now</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MerchandiseSection