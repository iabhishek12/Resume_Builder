import React from 'react'
import NavbarMainConatiner from '../../NavbarComponents/NavbarMainConatiner'
import UserSidebar from './UserSidebar'
import { Outlet } from 'react-router-dom'

const MainUserLayout = () => {
  return (
    <section>
        <NavbarMainConatiner/>

        <section className='flex'>
          <aside className='h-[calc(100vh-70px)] bg-white w-[16%]'><UserSidebar/></aside>
          <aside className='h-[calc(100vh-70px)]  w-[84%] flex justify-center items-center' ><Outlet/></aside>

        </section>
   
    </section>
  )
}

export default MainUserLayout
