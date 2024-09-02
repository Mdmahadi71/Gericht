import React from 'react'
import Container from './Container'
import foodsImgOne from '../assets/foodtow.png'
import foodsTwo from '../assets/foodssone.png'

const Food = () => {
  return (
    <div className=' py-[50px] bg-[#0C0C0C]'>
      <Container>
        <div className=" lg:flex justify-between items-center">
            <div className="lg:w-[48%]">
                <img src={foodsImgOne} className=' w-[500px] h-[500px]' alt="" />
            </div>
            <div className="lg:w-[48%]">
                <div className="">
                    <div className="">
                        <img src={foodsTwo} alt="" />
                    </div>
                    <div className="">
                        <h5 className=' font-upright font-normal text-[23px] text-[#FFFFFF]'>About Us</h5>
                        <h2 className=' font-upright font-semibold text-[50px] text-[#DCCA87]'>Food, Drinks, entertainment in one</h2>
                        <p className=' font-upright font-light text-[16px] text-[#AAAAAA]'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. 
                            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                        <button className=' border-[1px] border-[#DCCA87] py-[8px] px-[15px]
                         font-upright font-medium text-[18px] text-black bg-[#DCCA87]'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Food
