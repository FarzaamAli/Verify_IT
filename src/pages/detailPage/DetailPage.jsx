import React from 'react'
import CircularPercentageBar from '../../utilities/circlularProgressBar'
import { NavLink } from 'react-router-dom'
import engro from '../../assets/engro.png'
export default function DetailPage() {
    return (
        <>

            <div className='dark:bg-[#1B2127] bg-[#F2F5F8] p-10 rounded-xl mt-5' >
                <div className='flex items-center'>
                    {/* Company Logo */}
                    <div className='absolute rounded-full w-[119px] h-[119px] text-center flex items-center justify-center bg-white'>
                        <img src={engro} width='100px' alt="" />
                    </div>

                    {/* Company Banner */}
                    <div className=' bg-gradient-to-b from-[#0C5293]  to-[#2a6ba5] mx-[70px] px-20 text-white flex items-center justify-center text-3xl font-bold  rounded-lg py-3 h-[98px] w-[1245px]'>
                        ENGRO CORP.
                    </div>
                </div>


                {/* Info */}
                <div className='flex justify-between'>

                    {/* Detail Tabs */}
                    <div className='w-[70%] mx-7 mt-14  rounded-xl'>
                        {/* nav */}
                        <div className='rounded-t-xl bg-[#D9E0EB]   dark:bg-[#1E2837]  p-3 font-semibold'>
                            <ul className='flex justify-around w-[80%] gap-2'>
                                <li className='text-center text-[#2A4571] bg-[#E7EAEE] dark:bg-[#2c3645]  rounded-lg w-[120px] h-[55px] flex items-center justify-center'><NavLink className={({ isActive }) =>
                                    isActive ? "bg-gradient-to-b from-[#0C5293]  to-[#2a6ba5] text-white w-full h-full rounded-lg text-center flex items-center justify-center" : "text-black"}>Summary</NavLink></li>
                                <li className='text-center text-[#2A4571] dark:text-white bg-[#E7EAEE] dark:bg-[#2c3645]  rounded-lg w-[120px] h-[55px] flex items-center justify-center'><div>Legal</div></li>
                                <li className='text-center text-[#2A4571] dark:text-white bg-[#E7EAEE] dark:bg-[#2c3645] rounded-lg w-[120px] h-[55px] flex items-center justify-center'>Financial</li>
                                <li className='text-center text-[#2A4571] dark:text-white bg-[#E7EAEE] dark:bg-[#2c3645] rounded-lg w-[120px] h-[55px] flex items-center justify-center'>Social</li>
                                <li className='text-center text-[#2A4571] dark:text-white bg-[#E7EAEE] dark:bg-[#2c3645] rounded-lg w-[120px] h-[55px] flex items-center justify-center'>Technical</li>
                            </ul>
                        </div>
                        {/* Detail */}
                        <div className='rounded-b-xl bg-white  dark:bg-[#181D22] dark:text-[#BBC5D5] py-5 px-5 font-semibold'>

                            <div>
                                Engro Corporation Limited is a Pakistani conglomerate headquartered in Karachi. Its businesses include energy, petrochemicals, fertilizers, port terminals, and telecommunications towers. Engro was founded as Esso Fertilizer in 1965.
                            </div>
                            {/* Location */}
                            <div className=' my-5 gap-4 flex items-center'>
                                <img src="src\assets\Vector.svg" alt="" srcset="" />
                                <div><b>Location:</b> Mountain View, California, the US</div>
                            </div>
                            {/* Industry */}
                            <div className='my-3 gap-3 flex items-center'>
                                <img src="src\assets\industry.svg" alt="" />
                                <div><b>Industry:</b> Technology and Communications</div>
                            </div>
                        </div>
                        {/* Graph div */}

                        <div className='rounded-t-xl bg-[#D9E0EB]  dark:bg-[#1E2837] dark:text-white text-[#182B4A] p-3 mt-5 '>
                            <div className='flex items-center justify-between h-10 p-5'>

                                <div className='font-semibold 182B4A text-lg'>Sessions</div>
                                <ul className='flex justify-around gap-4'>
                                    <li className='text-center text-[#319DFF]  flex items-center justify-center'>Today</li>
                                    <li className='text-center flex items-center justify-center'>1d</li>
                                    <li className='text-center  flex items-center justify-center'>1w</li>
                                    <li className='text-center  flex items-center justify-center'>1m</li>
                                    <li className='text-center  flex items-center justify-center'>1y</li>
                                </ul>
                            </div>
                        </div>
                        {/* Graph */}
                        <div className='rounded-b-xl bg-white  dark:bg-[#181D22] text-[#BBC5D5] py-5 px-5 font-semibold'>
                            <img src="src\assets\gl.svg" alt="" />
                        </div>
                    </div>

                    {/* Score Div */}

                    <div className='w-[30%]  mx-7 mt-14  pt-0 bg-white dark:bg-[#181D22] rounded-xl'>
                        <div className='rounded-t-xl bg-[#D9E0EB] dark:bg-[#1E2837] h-[55px] text-center text-xl text-[#35568B] dark:text-[#a1bff0] font-semibold mx-auto flex items-center justify-center  '>
                            Analystics
                        </div>
                        {/* Percentage wheel */}
                        <div className='w-fit mx-auto my-12'>
                            <CircularPercentageBar targetPercentage={80} />
                        </div>

                        {/* Score Prespective */}
                        <div className='bg-[#D9E0EB] dark:bg-[#1e2837] dark:text-[#C9D2E1] text-[#1E2837] rounded-xl p-2 mx-auto w-[50%]  mb-12 font-semibold'>
                            <ul className=' mx-auto'>
                                <li className='text-lg w-fit mx-auto my-3'>Legal : 10</li>
                                <li className='text-lg w-fit mx-auto my-3'>Technical : 9</li>
                                <li className='text-lg w-fit mx-auto my-3'>Social : 8</li>
                                <li className='text-lg w-fit mx-auto my-3'>Fiancial : 7</li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
