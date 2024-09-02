import React from 'react'
import Container from './Container'
import findImg from '../assets/findusImg.png'

const FindUs = () => {
  return (
    <div className=' bg-[#040404] py-[40px]'>
      <Container>
        <div className=" flex justify-between items-center">
            <div className="w-[48%]">
                <div className="">
                    <p className=' font-upright font-light text-[23px] text-white'>Contact</p>
                    <h2 className=' font-upright font-semibold text-[#DCCA87] lg:text-[64px] text-[32px]'>Find US</h2>
                    <h5 className=' font-upright font-light text-[16px] text-[#AAAAAA]'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</h5>
                    <h6 className=' font-upright font-medium text-[#DCCA87] text-[23px] '>Opening Hours</h6>
                    <p className=' font-upright font-light text-[16px] text-[#AAAAAA]'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className=' font-upright font-light text-[16px] text-[#AAAAAA]'>Mon - Fri: 10:00 am - 02:00 am</p>

                    <button className=' font-upright font-medium text-[18px] text-black border-[1px] border-[#DCCA87] py-[9px] px-[15px] bg-[#DCCA87] my-[20px]'>Visit Us</button>
                </div>
            </div>
            <div className="w-[48%]">
                <img src={findImg} alt="" />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default FindUs
