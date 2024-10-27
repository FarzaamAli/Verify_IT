import { useState } from 'react'
import './App.css'
import CircularPercentageBar from './utilities/circlularProgressBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-[rgb(243,243,245)] p-4' >
        {/* Company Banner */}
        <div className=' bg-[rgb(9,28,37)] text-white m-7 font-semibold h-[100px] rounded-lg py-3 px-5'>
          ENGRO CORP.
        </div>

        {/* Company Logo */}
        <div className='rounded-full py-3 px-5 ml-14 my-[235px] -z-8 top-[-20px] border-blue-80 w-20 h-20 bg-red-500 absolute'>
          LOGO
        </div>

        {/* Info */}
        <div className='flex justify-between'>

          {/* Detail Tabs */}
          <div className='w-[70%] mx-7 mt-14 p-3 bg-gray-200 rounded-lg'>
            {/* nav */}
            <div className='rounded-t-lg  bg-gray-400 p-3 font-semibold'>
              <ul className='flex justify-around'>
                <li className='text-center'>Summary</li>
                <li className='text-center'>Legal</li>
                <li className='text-center'>Financial</li>
                <li className='text-center'>Social</li>
                <li className='text-center'>Technical</li>
              </ul>
            </div>
            {/* Detail */}
            <div className='rounded-b-lg  bg-gray-100 py-5 px-5 font-semibold'>

              <div>
                Engro Corporation Limited is a Pakistani conglomerate headquartered in Karachi. Its businesses include energy, petrochemicals, fertilizers, port terminals, and telecommunications towers. Engro was founded as Esso Fertilizer in 1965.
              </div>
            </div>
          </div>

          {/* Score Div */}

          <div className='w-[30%]  mx-7 mt-14  pt-0 bg-gray-200 rounded-lg'>
            <div className='rounded-t-lg bg-blue-500 text-center text-[20px] font-semibold items-center mx-auto h-10 '>
              Analystics
            </div>
            {/* Percentage wheel */}
            <div className='w-fit bg-slate-400 mx-auto'>
              <CircularPercentageBar targetPercentage={80} />
            </div>

            {/* Score Prespective */}
            <div className='bg-slate-400 px-5 mx-auto w-[70%] font-semibold'>
              <ul>
                <li>Legal : 10</li>

                <li>Financial : 10</li>
                <li>Social : 10</li>
                <li>Technical : 10</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
