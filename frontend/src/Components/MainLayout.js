import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return (
   <>
   {/* <Sidebar/> */}



   {/* <SignUp/> */}
   {/* <Login/> */}


   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default MainLayout