import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Books from '../components/Books'
import Special from '../components/Special'
import What from '../components/What'
import Testimony from '../components/Testimony'
import Laurels from '../components/Laurels'
import Blogs from '../components/Blogs'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Books/>
      <Special/>
      <What/>
      <Testimony/>
      <Laurels/>
      <Blogs/>
      <Newsletter/>
    </div>
  )
}

export default Home
