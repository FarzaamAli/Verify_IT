import React from 'react'
import working from "../../assets/working.svg"

export default function About() {
  return (
    <div className='space-y-10'>
      <h1 className='text-[#182B4A] font-bold text-3xl text-center mt-20'>How ADEPT Works?</h1>
      <div className='  border-2 rounded-xl bg-gradient-to-b from-[#0C5293] to-[#2a6ba5] p-2'>
        <div className='flex items-center justify-center p-8 bg-white w-full'>

        <img src={working} alt="" />
        </div>
      </div>
    </div>
  )
}
