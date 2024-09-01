import React from 'react'
import Container from './Container'
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' py-[50px] bg-[#040404]'>
            <Container>
                <div className=" lg:flex justify-between">
                    <div className="lg:w-[32%]">
                        <div className=" text-center">
                            <h2 className=' font-upright font-medium text-[#F5EFDB] lg:text-[32px] text-[64px]'>Contact Us</h2>
                            <h3 className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>9 W 53rd St, New York, NY 10019, USA</h3>
                            <p className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>+1 212-344-1230</p>
                            <p className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>+1 212-344-1230</p>
                        </div>
                    </div>

                    <div className="lg:w-[64%] flex justify-between">
                        <div className="lg:w-[48%]">
                            <div className=" text-center">
                                <h2 className=' font-upright font-bold text-[#DCCA87] lg:text-[64px] text-[32px]  text-center'>Gerícht</h2>
                                <h4 className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>"The best way to find yourself is to lose yourself in the service of others.”</h4>
                                <div className=" flex justify-center gap-x-2 text-cyan-50">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagramSquare />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[48%]">
                            <div className=" text-center">
                                <h2 className=' font-upright font-medium text-[#F5EFDB] text-[32px]'>Working Hours</h2>
                                <p className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>Monday-Friday:</p>
                                <p className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>08:00 am -12:00 am</p>
                                <p className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>Saturday-Sunday:</p>
                                <p className=' font-upright font-normal text-[16px] text-[#AAAAAA]'>07:00am -11:00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer