import React, { useState } from 'react'
import Container from './Container'
import manuImg from '../assets/menu.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Manu = () => {
    let [show , setShow] = useState(false)
    let hendelbar = ()=>{
        setShow(!show)
        
    }
  return (
      <div className='bg-[#0C0C0C]'>
          <Container>
              <div className="flex justify-between py-4 items-center">
                  <div className=" lg:w-[30%]">
                      <img src={manuImg} alt="" />
                  </div>
                  <div className={`lg:w-[70%] lg:text-start text-center absolute lg:static duration-500 ${show==true? ' top-[70px] bg-[red] w-full left-0' 
                  : ' top-[70px] left-[-200px] '}`}>
                      <div className="lg:flex justify-between  ">
                          <ul className='lg:flex justify-between gap-x-[32px] '>
                              <li className=' font-open font-normal text-[16px] text-[#ffff]'>Home</li>
                              <li className=' font-open font-normal text-[16px] text-[#ffff]'>Pages</li>
                              <li className=' font-open font-normal text-[16px] text-[#ffff]'>Contact Us</li>
                              <li className=' font-open font-normal text-[16px] text-[#ffff]'>Blog</li>
                              <li className=' font-open font-normal text-[16px] text-[#ffff]'>Landing</li>
                          </ul>
                          <div className="">
                              <div className="lg:flex justify-between gap-x-[50px]">
                                  <div className="">
                                      <span className=' font-open font-normal text-[16px] text-[#ffff]'>Log / Registration</span>
                                  </div>
                                  <div className="">
                                      <h2 className=' font-open font-normal text-[16px] text-[#ffff]'>Book Table</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div className=" lg:hidden" onClick={hendelbar}>
                    {show ? <RxCross2 className=' text-[20px] text-[#ffff]' /> : <FaBars className=' text-[#ffff] text-[20px]'/>}
                      </div>
              </div>
          </Container>
      </div>
  )
}

export default Manu
