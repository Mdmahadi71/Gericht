import React from 'react'
import Container from './Container'

const Newsletter = () => {
  return (
    <div className=' bg-[#0C0C0C] py-[50px]'>
        <Container>
            <div className=" mx-auto text-center border-[2px] border-[#F5EFDB] p-[70px]">
                <h6 className=' font-upright font-medium text-[23px] text-[#FFFFFF]'>Newsletter</h6>
                <h2 className=' font-upright font-bold text-[#DCCA87] lg:text-[64px] text-[32px]'>Subscribe to Our Newsletter</h2>
                <p className=' font-normal font-upright text-[16px] text-[#FFFFFF] my-[10px]'>And never miss latest Updates!</p>
                
                <div className=" flex justify-center">
                    <input type="text" className=' border-[2px] border-[#F5EFDB] h-[50px] lg:w-[300px] w-[150px] outline-none 
                    rounded-[5px] font-upright font-light text-[15px] bg-[#0C0C0C] ' name="" placeholder='Email Address' id="" />
                    <button className=' border-[1px] border-[#F5EFDB] py-[8px] px-[15px] bg-[#DCCA87]
                     ml-[30px] font-upright font-medium text-[18px] text-[#0C0C0C]'>Subscribe</button>
                </div >
            </div>
        </Container>
    </div>
  )
}

export default Newsletter