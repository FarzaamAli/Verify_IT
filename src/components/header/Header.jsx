import React from 'react'
import { NavLink } from 'react-router-dom';



export default function Header() {
    return (
        <div className='flex justify-between align-middle dark:bg-[#232A35] bg-white items-center py-2 px-5 drop-shadow-md'>
            {/* LOGO */}

            <div className='font-bold text-2xl w-[10%] text-[#2279CC]'>
                <img src="src\assets\logo_light.svg" className='dark:invert dark:hover:invert-0 hover:invert' alt="" srcset="" />
            </div>
            {/* Search Bar */}
            <form class=" max-w-md mx-auto w-[75%]">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Companies..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-b from-[#0C5293]  to-[#2a6ba5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            {/* Nav Bar */}
            <div className='font-semibold ' >
                <ul className='flex space-x-5'>
                    <li ><NavLink className={({ isActive }) =>
                        isActive ? "text-[#35568B]" : "dark:text-[#C7D7ED] text-black"} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-[#35568B]" : "dark:text-[#C7D7ED] text-black"} to={"/About"}>About</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-[#35568B]" : "dark:text-[#C7D7ED] text-black"} to={"/Contact"}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
