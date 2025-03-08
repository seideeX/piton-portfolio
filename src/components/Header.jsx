import {React, useState} from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/index'
import {Menu, X} from 'lucide-react'

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => (
        setToggle(!toggle)
    );

    return (
        <div className="sticky top-0 z-50 py-3 bg-yellow-500  shadow-md shadow-amber-300  text-white">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                        <span className="text-xl tracking-tight font-bold">PITON</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='text-white hover:text-blue-700 transition duration-200'>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex space-x-12 justify-center items-center">
                        <a href="#" className="border border-blue-700 py-2 px-3 rounded-md text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition duration-400">Sign In</a>
                        <a href="#" className="bg-blue-700 py-2 px-3 rounded-md font-semibold">Create an Account</a>
                    </div>
                    <div className="lg:hidden md:flex-col justify-end">
                        <button onClick={handleToggle}>
                            {toggle ? <X/> : <Menu/>}
                        </button>
                        {toggle && (
                            <div className="fixed right-0 z-20 bg-neutral-900 w-full flex flex-col p-12 justify-center items-center lg:hidden">
                                <ul>
                                    {navItems.map((item, index) => (
                                        <li key={index} className="py-4">
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex space-x-6">
                                    <a href="#" className="border border-blue-700 py-2 px-3 rounded-md text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition duration-400">Sign In</a>
                                    <a href="#" className="bg-blue-700 py-2 px-3 rounded-md font-semibold">Create an Account</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header