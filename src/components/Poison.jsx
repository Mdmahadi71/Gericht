import React from 'react'
import Container from './Container'
import posiImgOne from '../assets/posiTwo.png'
import posiTwoImg from '../assets/posiOne.png'

const Poison = () => {
  return (
    <div className=' bg-[#0C0C0C] py-[50px]'>
        <Container>
            <div className=" text-center">
                <h3 className=' font-upright font-normal text-[23px] text-[#FFFFFF]'>Wide Range to choose from</h3>
                <h3 className=' font-upright font-semibold text-[#DCCA87] text-[64px]'>What’s Your Poison?</h3>
            </div>
            <div className=" flex justify-between items-center">
                <div className="w-[32%]">
                    <img src={posiImgOne} alt="" />
                </div>
                <div className="w-[32%]">
                    <img src={posiTwoImg} alt="" />
                </div>
                <div className="w-[32%]">
                    <img src={posiImgOne} alt="" />
                </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Poison
