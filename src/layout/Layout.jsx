import { Outlet } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout() {
  return (
    <>
    <div className='dark:bg-[#181D22] bg-white'>
      <Header />
      <div className='mx-10'>
        <Outlet />
      </div>
      <Footer/>
    </div>
    </>
  )
}
