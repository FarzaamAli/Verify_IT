import { useState } from 'react'
import './App.css'

import banner from './assets/banner1.svg'
import img1 from './assets/image1.svg'
import img2 from './assets/image2.svg'
import img3 from './assets/image3.svg'
import img4 from './assets/image4.svg'
import img5 from './assets/image5.svg'
import img7 from './assets/image7.svg'
import img9 from './assets/image9.svg'
import job from './assets/job.svg'
import procurment from './assets/procurment.svg'
import partnership from './assets/partnership.svg'
import working from './assets/working.svg'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Banner */}
      <div className='bg-auto w-[1370px] mx-auto mt-[90px] text-white p-14' style={{ backgroundImage: `url(${banner})` }} >
        <h1 className='text-5xl font-semibold'>ADEPT</h1>
        <p className='mt-3 mb-2 text-xl'>Aggregated Data Evaluation & Profiling Tool</p>
        <p className='opacity-60 w-[415px]'>Your trusted ally in real-time company verification, helping you make informed and secure business decisions.</p>
        <button className='bg-white text-black py-2 px-5 rounded-full mt-10 font-semibold'>Learn More</button>
      </div>

      {/* quote */}
      <div className='w-[58%] underline italic font-bold mx-auto text-center mt-16'>
        "In a world with increasing fraud risks, job seekers, organizations, and procurement professionals need a reliable way to verify company credibility. ADEPT is designed to streamline this process by aggregating and analyzing open-source data to distinguish reputable companies from fraudulent entities."
      </div>

      {/* AIMS */}
      <div className='mt-10 space-y-12'>
        <h1 className='text-2xl text-center'>AIMS</h1>
        <div className='flex justify-around '>
          {/* panel 1 */}
          <div className='w-[25%] space-y-8'>
            <div className=' shadow-xl shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px]  mx-auto space-y-4 '>
              <div class="flex justify-center items-center">
                <img src={img1} alt="" />
              </div>
              <h1 className='font-bold text-center  mx-auto'>Empowering <br />Decision-Making</h1>
            </div>
            <p className='text-center px-6'>ADEPT equips users with reliable data to confidently evaluate the legitimacy and reputation of companies. This ensures informed decision-making for job seekers, procurement teams, and businesses, helping them avoid risky associations.</p>
          </div>
          {/* panel 2 */}
          <div className='w-[25%] space-y-8'>
          <div className='  shadow-xl shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img2} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Centralizing <br /> Open-Source Insights</h1>
            </div>
            <p className='text-center px-6'>By consolidating data from multiple open-source platforms, ADEPT offers a comprehensive view of a company’s online presence. This centralization saves users time and enhances the accuracy of verification.</p>
          </div>
          {/* panel 3 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img3} alt="" />
            </div>
            <h1 className='font-bold text-center w-[45%] mx-auto'>Safety & Security</h1>
            </div>
            <p className='text-center px-6'>ADEPT’s fraud detection capabilities help users identify potential scams and high-risk entities. With real-time alerts on suspicious activity, users can stay protected from fraudulent companies.</p>
          </div>
        </div>
      </div>





      {/* Why ADEPT matters */}
      <div className='mt-20 space-y-12'>
        <h1 className='text-2xl text-center'>Why ADEPT Matters</h1>
        <div className='flex justify-around '>
          {/* panel 1 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img4} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Rising Fraudulent Companies</h1>
            </div>
            <p className='text-center px-6'>ADEPT addresses the growing risk of fraud by identifying dubious companies and flagging suspicious activities, making it easier for users to avoid scams and unsafe partnerships.</p>
          </div>
          {/* panel 2 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img5} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Saves Time</h1>
            </div>
            <p className='text-center px-6'>Traditional verification is time-intensive. ADEPT automates data collection and analysis, providing a quick and reliable alternative to manual checks, especially valuable for job seekers and procurement professionals.</p>
          </div>
          {/* panel 3 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img3} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Fraud Detection</h1>
            </div>
            <p className='text-center px-6'>ADEPT promotes a safer job market and business landscape by providing clear, accessible information on company credibility. This builds trust and transparency in professional relationships.</p>
          </div>
        </div>
      </div>


      {/* Key Features */}
      <div className='mt-20 space-y-12'>
        <h1 className='text-2xl text-center'>Key Features</h1>
        <div className='flex justify-around '>
          {/* panel 1 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img7} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Reputation <br />Scoring</h1>
            </div>
            <p className='text-center px-6'>Using sentiment analysis and data from online presence, ADEPT generates a credibility score to help users assess a company’s reliability.</p>
          </div>
          {/* panel 2 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img2} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Data <br /> Aggregation</h1>
            </div>
            <p className='text-center px-6'>ADEPT collects and consolidates data from diverse sources, including regulatory databases, social media profiles, and company websites, providing users with comprehensive insights.</p>
          </div>
          {/* panel 3 */}
          <div className='w-[25%] space-y-8'>
            <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={img9} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Reporting and Visualization</h1>
            </div>
            <p className='text-center px-6'>ADEPT presents findings through clear reports and data visualizations, making complex data easy to understand and act upon.</p>
          </div>
        </div>
      </div>


      {/* How it works
      <div className='mt-20 space-y-12'>
        <h1 className='text-2xl text-center'>How ADEPT Works</h1>
        <div class="flex justify-center items-center">
          <img src={working} alt="" />
        </div>
      </div> */}


      {/* real world */}
      <div className='mt-20 space-y-12'>
        <h1 className='text-2xl text-center'>Real-World Applications (FYP Impact and Value)</h1>
        <div className='flex justify-around '>
          {/* panel 1 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={job} alt="" />
            </div>
            <h1 className='font-bold text-center w-[45%] mx-auto'>Job Seeker</h1>
            </div>
            <p className='text-center px-6'>Evaluate the legitimacy of potential employers and avoid fraudulent job offers.</p>
          </div>
          {/* panel 2 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={procurment} alt="" />
            </div>
            <h1 className='font-bold text-center w-[45%] mx-auto'>Procurement</h1>
            </div>
            <p className='text-center px-6'>Quickly assess vendor credibility, minimizing supply chain risks.</p>
          </div>
          {/* panel 3 */}
          <div className='w-[25%] space-y-8'>
          <div className=' shadow-lg shadow-[#072A4A] p-5 rounded-2xl w-[70%] h-[240px] mx-auto space-y-4'>
            <div class="flex justify-center items-center">
              <img src={partnership} alt="" />
            </div>
            <h1 className='font-bold text-center  mx-auto'>Partnership</h1>
            </div>
            <p className='text-center px-6'>Ensure transparency when evaluating potential partners, fostering trust and reliability</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>

      </div>



    </>
  )
}

export default App
