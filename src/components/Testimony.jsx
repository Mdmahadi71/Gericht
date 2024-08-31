import React from 'react'
import Container from './Container'
import testmonyee from '../assets/Mask.png'


const Testimony = () => {
  return (
    <div className=' bg-[#0C0C0C] py-[100px]'>
      <Container>
        <div className="">
            <div className=" text-center">
                <p className=' font-upright font-bold text-[#FFFFFF] text-[23px]'>Testimony</p>
                <h2 className=' font-upright font-semibold text-[#DCCA87] text-[64px]'>Happy customers</h2>
            </div>
            <div className=" lg:flex justify-between">
                <div className=" lg:w-[48%] lg:my-0 my-[20px]">
                    <div className="flex justify-between gap-x-2">
                        <div className="">
                            <img src={testmonyee} alt="" />
                        </div>
                        <div className="">
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                              Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                              <h3 className=' font-upright font-semibold text-[#DCCA87] text-[32px]'>Wade Warren</h3>
                              <h6 className='font-upright font-semibold text-[#F5EFDB] text-[16px]'>Sommelier</h6>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-[48%] lg:my-0 my-[20px]">
                    <div className="flex justify-between gap-x-2">
                        <div className="">
                            <img src={testmonyee} alt="" />
                        </div>
                        <div className="">
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                              Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                              <h3 className=' font-upright font-semibold text-[#DCCA87] text-[32px]'>Wade Warren</h3>
                              <h6 className='font-upright font-semibold text-[#F5EFDB] text-[16px]'>Sommelier</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" lg:flex justify-between py-[30px]">
                <div className=" lg:w-[48%] lg:my-0 my-[20px]">
                    <div className="flex justify-between gap-x-2">
                        <div className="">
                            <img src={testmonyee} alt="" />
                        </div>
                        <div className=" ">
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                              Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                              <h3 className=' font-upright font-semibold text-[#DCCA87] text-[32px]'>Wade Warren</h3>
                              <h6 className='font-upright font-semibold text-[#F5EFDB] text-[16px]'>Sommelier</h6>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-[48%] lg:my-0 my-[20px]">
                    <div className=" flex justify-between gap-x-2" >
                        <div className="">
                            <img src={testmonyee} alt="" />
                        </div>
                        <div className="">
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. 
                              Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                              <h3 className=' font-upright font-semibold text-[#DCCA87] text-[32px]'>Wade Warren</h3>
                              <h6 className='font-upright font-semibold text-[#F5EFDB] text-[16px]'>Sommelier</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Testimony
