import React from 'react';
import {servicesection} from "../constants/index.jsx";

const FeatureSection = () => {
    return (
        <div className='relative mt-20 border-b border-neutral-900 min-h-[800]'>
            <div className="text-center">
                <span className="bg-neutral-900 text-blue-700 rounded-full text-sm uppercase font-bold px-2 py-1">
                    Services
                </span>
                <h2 className='mt-10 text-3xl sm:text-5xl lg:text-6xl tracking-wide'>We offer <span className='bg-gradient-to-b from-blue-800 to-blue-300 text-transparent bg-clip-text'>quality services.</span></h2>
            </div>
            <div className="mt-10 lg:mt-20 flex flex-wrap">
                {servicesection.map((item, index) => (
                    <div className="w-full my-10" key={index}>
                        <div className="flex justify-between items-center space-x-12">
                            <img src={item.img} alt="" className='rounded-xl shadow-xl shadow-indigo-500/80 hover:scale-105 transition duration-300' />
                            <div className='flex flex-col items-center'>
                                <h2 className='text-3xl sm:text-5xl lg:text-6xl mb-8'>{item.title}</h2>
                                <p className='text-xl text-neutral-500'>{item.desc}</p>
                                <a href="#" className="border border-blue-700 py-2 px-3 rounded-xl w-80 text-center mt-5 hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-md shadow-indigo-500">
                                    Avail
                                </a>                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection