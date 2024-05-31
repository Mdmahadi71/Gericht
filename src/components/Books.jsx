import React from 'react'
import Container from './Container'
import { MdOutlineArrowDropDown } from "react-icons/md";


const Books = () => {
    return (
        <div className='py-[100px] bg-[#0C0C0C] '>
            <Container className={``}>
                <div className="">
                    <div className=" border-[2px] border-[#DCCA87] px-[30px] py-[30px]">

                        <div className=" items-center justify-center text-center">
                            <div className="py-[20px]">
                                <h2 className=' font-upright font-normal text-[23px] text-[#FFFFFF]'>Reservations</h2>
                                <h2 className=' font-upright font-semibold text-[#DCCA87] text-[46px] '>Book A Table</h2>
                            </div>
                            <div className=" flex justify-between">
                                <div className="w-[32%]">
                                    <div className=" border-[2px] border-[#DCCA87] py-3">
                                        <div className=" flex justify-between items-center">
                                            <h2 className=' font-open font-medium text-[#FFFFFF] text-[16px]'>1 person</h2>
                                            <MdOutlineArrowDropDown className=' text-[#FFFFFF]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%]">
                                    <div className=" border-[2px] border-[#DCCA87] py-3">
                                        <div className=" flex justify-between items-center">
                                            <h2 className=' font-open font-medium text-[#FFFFFF] text-[16px]'>1 person</h2>
                                            <MdOutlineArrowDropDown className='text-[#FFFFFF]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[32%]">
                                    <div className=" border-[2px] border-[#DCCA87] py-3">
                                        <div className=" flex justify-between items-center">
                                            <h2 className=' font-open font-medium text-[#FFFFFF] text-[16px]'>1 person</h2>
                                            <MdOutlineArrowDropDown className='text-[#FFFFFF]' />
                                        </div>
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

export default Books
