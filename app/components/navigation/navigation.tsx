"use client"
import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='px-8 py-2 flex justify-between items-center bg-primary-color'>

            <img className=' w-28' src="/branding/lspr-ng-logo.png"></img>
            <nav className={` ${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                <ul className='absolute left-0 md:relative grid grid-flow-row md:grid-flow-col gap-4'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Enterprise</a></li>
                    <li><a href='#'>Courses</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </nav>

        <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div className='ctas hidden md:flex'>
            <Image className='mr-4' width={24} height={24} alt='shopping-cart' src="/icons/shopping-cart.svg"></Image>

            <button className='h-12 px-2 bg-button_primary'>Sign In</button>
        </div>
        </div>

        
    )
}