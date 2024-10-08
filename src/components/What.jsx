import React from 'react'
import Container from './Container'
import whatsImg from '../assets/whatss.png'


const What = () => {
  return (
    <div className=' bg-[#040404] py-[100px]'>
      <Container>
        <div className=" flex justify-between items-center">
            <div className=" w-[48%] relative after:absolute after:content-['']
             after:top-0 after:right-0 after:w-[50%] after:h-[15px] after:bg-white after:bottom-0 ">
                <img src={whatsImg } className='' alt="" />
            </div>
            <div className="w-[48%]">
                <h6 className=' font-upright font-medium text-[23px] text-[#FFFFFF]'>Chef’s Word</h6>
                <h3 className=' font-upright font-semibold lg:text-[64px] text-[32px] text-[#DCCA87]'>What we believe in</h3>
                <p className=' font-upright font-light  text-[16px] text-[#AAAAAA]'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, 
                  aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                  <h4 className=' font-upright font-medium text-[32px] text-[#DCCA87]'>Kevin Luo</h4>
                  <h5 className=' font-upright font-light text-[16px] text-[#AAAAAA]'>Chef & Founder</h5>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default What
