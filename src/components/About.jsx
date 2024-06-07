import React from 'react'
import Container from './Container'
import aboutImg from '../assets/aboutimg.png'
import aboutposi from '../assets/position.png'
import bookimg from '../assets/book.png'

const About = () => {
    return (
        <div className='bg-[#040404] py-[50px]'>
            <Container className={` relative`}>
                <div className=" flex justify-between items-center">
                    <div className="w-[38%]">
                        <div className=" text-end">
                            <h2 className=' font-upright font-bold text-[#DCCA87] lg:text-[64px] text-[40px]'>About Us</h2>
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quis pharetra adipiscing ultrices vulputate posuere tristique.
                                In sed odio nec aliquet eu proin mauris et.</p>
                            <div className=" border-[2px] border-[#DCCA87] px-[20px] py-3  inline-block bg-[#DCCA87] mt-[20px]">
                                <a href="#" className=' font-upright font-bold text-[16px] text-[#0C0B08]'>Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[19%] relative">
                        <div className=" ml-[89px] z-30	">
                            <img src={aboutImg} className='h-[40%] ' alt="" />
                        </div>
                        <div className=" absolute top-[50%] translate-y-[-50%] left-0 	">
                            <img src={aboutposi} alt="" />
                        </div>
                    </div>
                    <div className="w-[38%]">
                        <div className=" ">
                            <h2 className=' font-upright font-bold text-[#DCCA87] lg:text-[64px] text-[40px]'>Our History</h2>
                            <p className=' font-upright font-medium text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quis pharetra adipiscing ultrices vulputate posuere tristique.
                                In sed odio nec aliquet eu proin mauris et.</p>
                            <div className=" border-[2px] border-[#DCCA87] px-[20px] py-3  inline-block bg-[#DCCA87] mt-[20px]">
                                <a href="#" className=' font-upright font-bold text-[16px] text-[#0C0B08]'>Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" absolute bottom-0 right-0">
                    <img src={bookimg} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default About
