import React from 'react'
import Manu from './Manu'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Manu/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default Layout
