import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <>

      <div className='dark:bg-[#1B2127] bg-[#F2F5F8] rounded-b-xl  p-10 flex'>
        {/* Info main Div */}
        <div className='p-14 pt-20 w-[35%] h-[732px] rounded-xl text-white bg-gradient-to-b from-[#305b9a]  to-[#1c4686] '>
          {/* Text Div */}
          <div className='mb-16 space-y-1'>
            <p className='font-semibold text-[18px]'>Send Message</p>
            <h1 className='text-[28px] font-semibold '>
              Contact Information
            </h1>
            <p className='text-[#C9C9C9] text-[18px]'>
              Say something to start a live chat!
            </p>
          </div>


          {/* Info div */}
          <div className='space-y-10 mb-16'>
            {/* Phone */}
            <div className='flex gap-10'>
              <img className='' src="src\assets\phone.svg" alt="" />
              <p className='inline'>+1 234 56789</p>
            </div>

            {/* Email */}
            <div className='flex gap-10'>
              <img src="src\assets\mail.svg" alt="" />
              <p className='inline'>Adept@info.com</p>
            </div>

            {/* Location */}
            <div className='flex gap-10'>
              <img src="src\assets\loc.svg" alt="" />
              <p className='inline'>Karachi, Pakistan</p>
            </div>

          </div>
          {/* Social Links */}
          <div className='flex justify-between w-[40%]'>
            <a><img src="src\assets\twitter.svg" alt="" /></a>
            <a><img src="src\assets\insta.svg" alt="" /></a>
            <a><img src="src\assets\discord.svg" alt="" /></a>

          </div>
        </div>

        {/* Form Div */}
        <div className='w-[65%]'>
          <form className='mt-[125px] ' action="">
            <div className='grid grid-cols-2 gap-y-20 justify-items-center align-middle'>
              {/* First Name */}
              <div>
                <label htmlFor="">First Name</label>
                <input className='border-b-2 bg-[#F2F5F8] border-[#151515] block w-[250px] p-1' type="text" />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="">Last Name</label>
                <input className='border-b-2 bg-[#F2F5F8] border-[#151515] block w-[250px] p-1' type="text" />
              </div>

              {/* Email Phone */}
              <div>
                <label htmlFor="">Email</label>
                <input className='border-b-2 bg-[#F2F5F8] border-[#151515] block w-[250px] p-1' type="text" />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="">Phone</label>
                <input className='border-b-2 bg-[#F2F5F8] border-[#151515] block w-[250px] p-1' type="text" />
              </div>
            </div>

            {/* Subject */}
            <div className='w-[79%] mx-auto mt-20 '>
              <label htmlFor="" className='font-bold block mb-3'>Select Subject?</label>
              <div className='flex gap-x-8'>
                <div><input type="radio" name="" id=""  className='mr-1'/>General Inquiry</div>
                <div><input type="radio" name="" id=""  className='mr-1'/>General Inquiry</div>
                <div><input type="radio" name="" id=""  className='mr-1'/>General Inquiry</div>
                <div><input type="radio" name="" id=""  className='mr-1'/>General Inquiry</div>
              </div>
            </div>

            {/* Message */}
            <div className='w-[79%] mx-auto mt-16 '>
              <label htmlFor="message" className=' block mb-1'>Message</label>
              <input type="text" name="message" placeholder='Write your message' id="message" className='h-fit border-b-2 bg-[#F2F5F8] border-[#151515] block w-full ' />
              
            </div>

            <div className=' w-[79%] flex justify-end mx-auto mt-16 '>
            <img src="src\assets\item.svg" className='mt-[-30px] mx-auto' alt="" srcset="" />
              <button className='bg-gradient-to-b from-[#305b9a]  to-[#1c4686] rounded-lg w-[120px] h-[55px] font-semibold text-lg text-white' type="submit"> Submit</button>
            </div> 
          </form>
        </div>
      </div>
    </>
  )
}
