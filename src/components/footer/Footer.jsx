import React from 'react'
import footer from '../../assets/Footer.svg'
import ned from '../../assets/ned.svg'
import flogo from '../../assets/flogo.svg'
import flogo2 from '../../assets/flogo2.svg'
import fmess from '../../assets/fmess.svg'
import fphone from '../../assets/fphone.svg'
import fgit from '../../assets/fgit.svg'
import banner from "../../assets/banner1.svg"
import f from "../../assets/f.jpg"
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-cover w-[full] mx-auto h-[308px] mt-[90px] text-white p-14 bottom-0' style={{ backgroundImage: `url(${f})` }}>
            {/* footer content */}
            <div className='flex justify-around border-b-2 pb-5 items-center mb-5'>
                <img src={flogo2} alt="" />
                <img src={ned} alt="" />

                {/* Quick Links */}
                <div className='text-center space-y-3'>
                    <h1 className='font-semibold text-lg '>Quick Links</h1>
                    <ul className='space-y-3'>
                        <li><NavLink to={"/About"}>About Us</NavLink></li>
                        <li><NavLink to={"/About"}>Methadology</NavLink></li>
                        <li><NavLink to={"/About"}>How Adept Works?</NavLink></li>
                    </ul>
                </div>

                {/* Contact us */}
                <div className='text-center space-y-5'>
                    {/* <h1 className='font-semibold text-lg '>Contact Us</h1> */}
                    <ul className='space-y-4'>
                        {/* <li><NavLink to={"/About"}><img className='inline-block mr-3' src={fphone} alt="" />+1 234 56789</NavLink></li>
                        <li><NavLink to={"/About"}><img className='inline-block mr-3' src={fmess} alt="" />Adept@info.com</NavLink></li> */}
                        <li><button className='bg-white text-black py-2 px-10 rounded-full font-semibold'><NavLink>Contact Us</NavLink></button></li>
                    </ul>
                </div>
            </div>
            {/* Copyrights */}
            <div className='flex justify-between'>
                <div>
                    <a href="https://github.com/FarzaamAli/Verify_IT" target='blank'>
                    <img src={fgit} alt="" />
                    </a>
                </div>
                <div>
                    All Rights Reserved © | @ADEPT
                </div>
            </div>
        </div>

    )
}
