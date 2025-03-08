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
                    <div className="w-full m-5" key={index}>
                        <div className="flex justify-between items-center space-x-12">
                            <img src={item.img} alt="" />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection