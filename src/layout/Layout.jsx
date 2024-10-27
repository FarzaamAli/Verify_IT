import { Outlet } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <div className='mx-10'>
        <Outlet />
      </div>
    </>
  )
}
