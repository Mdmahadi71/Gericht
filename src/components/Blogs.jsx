import React from 'react'
import Container from './Container'
import blogone from '../assets/Group 46.png'

const Blogs = () => {
  return (
    <div className=' bg-[#0C0C0C] py-[40px]'>
        <Container>
            <div className="">
                <h4 className=' font-open font-medium text-[#FFFFFF] text-[23px] text-center'>Blogs</h4>
                <h3 className=' font-upright font-semibold text-[64px] text-[#DCCA87] text-center'>Gerícht updates</h3>
                <div className=" lg:flex justify-between ">
                    <div className="lg:w-[32%] lg:my-0 my-5">
                        <div className="">
                            <img src={blogone} alt="" />
                            <div className=" flex justify-between">
                                <h3 className=' font-open font-normal text-[16px] text-[#FAFAFA]'>16 Apr 2021</h3>
                                <h3 className=' font-open font-normal text-[16px] text-[#FAFAFA]'>- Annalisa L</h3>
                            </div>
                            <div className="">
                                <p className=' font-upright font-medium text-[#DCCA87] text-[33px]'>Tips for prepping and caring for your grill</p>
                                <p className=' font-open font-light text-[#AAAAAA] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <button className=' font-upright font-semibold text-[20px] text-[#DCCA87]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%] lg:my-0 my-5">
                        <div className="">
                            <img src={blogone} alt="" />
                            <div className=" flex justify-between">
                                <h3 className=' font-open font-normal text-[16px] text-[#FAFAFA]'>16 Apr 2021</h3>
                                <h3 className=' font-open font-normal text-[16px] text-[#FAFAFA]'>- Annalisa L</h3>
                            </div>
                            <div className="">
                                <p className=' font-upright font-medium text-[#DCCA87] text-[33px]'>Tips for prepping and caring for your grill</p>
                                <p className=' font-open font-light text-[#AAAAAA] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <button className=' font-upright font-semibold text-[20px] text-[#DCCA87]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%] lg:my-0 my-5">
                        <div className="">
                            <img src={blogone} alt="" />
                            <div className=" flex justify-between">
                                <h3 className=' font-open font-normal text-[16px] text-[#FAFAFA]'>16 Apr 2021</h3>
                                <h3 className=' font-open font-normal text-[16px] text-[#FAFAFA]'>- Annalisa L</h3>
                            </div>
                            <div className="">
                                <p className=' font-upright font-medium text-[#DCCA87] text-[33px]'>Tips for prepping and caring for your grill</p>
                                <p className=' font-open font-light text-[#AAAAAA] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <button className=' font-upright font-semibold text-[20px] text-[#DCCA87]'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-[#DCCA87] py-[8px] w-[100px] mx-auto rounded-[5px] bg-[#DCCA87] text-center items-center ">
                    <button className=' font-upright font-medium text-[16px] text-black '>View More</button></div>

                
            </div>
        </Container>
    </div>
  )
}

export default Blogs