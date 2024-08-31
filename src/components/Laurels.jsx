import React from 'react'
import Container from './Container'
import VdoImg from '../assets/Video.png'
import laurOne from '../assets/laravel2.png'
import lauraTow from '../assets/laravel.png'
import lvFood from '../assets/laravelFoot.png'
import lvspFood from '../assets/Gposition.png'

const Laurels = () => {
    return (
        <div className=' bg-[#040404]'>
            <Container>
                <div className=" w-full mx-auto">
                    <img src={VdoImg} alt="" />
                </div>
                <div className=" py-[30px] lg:flex justify-between items-center">
                    <div className=" lg:w-[48%]">
                        <div className="">
                            <h3 className=' font-upright font-medium text-[23px] text-[#FFFFFF]'>Awards & recognition</h3>
                            <h4 className=' font-semibold font-upright text-[64px] text-[#DCCA87]'>Our Laurels</h4>
                            <div className=" flex justify-between">
                                <div className="w-[48%]">
                                    <div className=" flex gap-x-[15px] items-center">
                                        <div className="">
                                            <img src={laurOne} alt="" />
                                        </div>
                                        <div className="">
                                            <h3 className=' font-upright font-medium text-[23px] text-[#DCCA87]'>Bib Gourmond</h3>
                                            <p className=' font-light font-open text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[48%]">
                                    <div className=" flex gap-x-[15px] items-center">
                                        <div className="">
                                            <img src={lauraTow} alt="" />
                                        </div>
                                        <div className="">
                                            <h3 className=' font-upright font-medium text-[23px] text-[#DCCA87]'>Bib Gourmond</h3>
                                            <p className=' font-light font-open text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between  my-[20px]">
                                <div className="w-[48%]">
                                    <div className=" flex gap-x-[15px] items-center">
                                        <div className="">
                                            <img src={lauraTow} alt="" />
                                        </div>
                                        <div className="">
                                            <h3 className=' font-upright font-medium text-[23px] text-[#DCCA87]'>Bib Gourmond</h3>
                                            <p className=' font-light font-open text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[48%]">
                                    <div className=" flex gap-x-[15px] items-center">
                                        <div className="">
                                            <img src={laurOne} alt="" />
                                        </div>
                                        <div className="">
                                            <h3 className=' font-upright font-medium text-[23px] text-[#DCCA87]'>Bib Gourmond</h3>
                                            <p className=' font-light font-open text-[16px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[48%]">
                        <div className=" relative ">
                            <img src={lvFood} className=' w-[400px] h-[500px]' alt="" />
                            <div className=" absolute lg:left-[-50px] left-0 bottom-2">
                                <img src={lvspFood} className=' w-[200px] h-[250px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Laurels