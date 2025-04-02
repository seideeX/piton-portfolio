import React from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
const HeroSection = () => {
    return (
        <div className='flex flex-col mt-6 lg:mt-10 items-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide uppercase font-semibold'><span className='bg-gradient-to-b from-blue-800 to-blue-300 text-transparent bg-clip-text'>Philippine Infomration</span> <span className='bg-gradient-to-b from-yellow-600 to-yellow-300 text-transparent bg-clip-text'>Technology of the North</span></h1>
            <p className='mt-10 text-xl text-neutral-600 text-center'>Philippine Information Technology of the North is a dynamic community dedicated to advancing IT knowledge, fostering innovation, and connecting professionals and students. Through events, training, and collaboration, we empower the next generation of tech leaders.</p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-blue-700 py-2 px-3 mx-3 rounded-md font-semibold">Apply Now</a>
                <a href="#" className="border border-blue-700 py-2 px-3 mx-3 rounded-md text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition duration-400">See Services</a>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="border border-blue-900 rounded-lg shadow-lg shadow-indigo-500/50 p-6 w-1/2 mx-5 my-4 hover:scale-90 transition duration-300">
                    <img src={logo} alt="Piton Logo" className='h-auto w-auto'/>
                    <p className='text-xl text-center'>Philippine Information Technology of the North</p>
                    <p className='italic text-sm text-center text-neutral-500 mt-4'>Official Logo</p>
                </div>
                <div className="border border-amber-400 rounded-lg shadow-lg shadow-yellow-400/70 p-6 w-1/2 mx-5 my-4 hover:scale-90 transition duration-300">
                    <img src={logo2} alt="ITA Logo" className='h-auto w-auto'/>
                    <p className='text-xl text-center'>Information Technology Associates</p>
                    <p className='italic text-sm text-center text-neutral-500 mt-4'>Official Logo</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection