import React from 'react'
import Container from './Container'
import bannerImg from '../assets/bannerimg.jpg'

const Banner = () => {
  return (
    <div className='bg-[#0C0C0C] py-[50px]'>
        <Container>
            <div className=" mx-auto justify-around">
            <div className="">
                <div className=" flex  items-center justify-around ">
                    <div className="w-[50%] pl-[100px]">
                        <div className="">
                            <h4 className=' font-upright font-medium text-[23px] text-[#FFFFFF]'>Chase the new Flavour</h4>
                            <h2 className=' font-upright font-bold text-[#DCCA87] text-[90px]'>The key to Fine dining</h2>
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Sit tellus lobortis sed senectus vivamus molestie.
                                 Condimentum volutpat morbi facilisis quam scelerisque sapien.
                                  Et, penatibus aliquam amet tellus </p>
                            <div className=" border-[2px] border-[#DCCA87] px-[20px] py-3  inline-block bg-[#DCCA87] mt-[20px]">
                                <a href="#" className=' font-upright font-bold text-[16px] text-[#0C0B08]'>Explore Menu</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className=" pl-[100px] ">
                            <div className="">
                            <img src={bannerImg}  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner
