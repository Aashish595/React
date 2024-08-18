import React from 'react'
// import Home from './component/home/home'
import Footer from './component/footer/footer'
import { Outlet } from 'react-router-dom'
import Header from './component/header/header'

function Layout() {
  return (
    <>
    <Header/>
     <Outlet/>  {/*this is not changable above nd below item willl be not change */}
    {/* <Home/> */}
    <Footer/>
    
    </>
  )
}

export default Layout
