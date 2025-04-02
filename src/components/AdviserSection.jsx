import React from 'react'
import { advisers } from '../constants'
import { Facebook, Mail, Linkedin } from 'lucide-react';
const AdviserSection = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-center">Meet the Advisers</h2>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {advisers.map((item, index) => (
                    <div key={index} className='w-80 h-auto mx-auto'>
                        <img src={item.img} alt="" className='rounded-t-lg w-80 h-100'/>
                        <div className='px-6 text-center'>
                            <h2 className="text-2xl mt-4">{item.name}</h2>
                            <p className='italic text-neutral-500'>{item.rank}</p>
                            <div className="flex justify-center items-center space-x-4 my-4">
                                <Facebook className='text-neutral-500 hover:cursor-pointer'/>
                                <Mail className='text-neutral-500 hover:cursor-pointer'/>
                                <Linkedin className='text-neutral-500 hover:cursor-pointer'/>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdviserSection