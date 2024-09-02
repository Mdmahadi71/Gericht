import React from 'react'
import Container from './Container'

const Hours = () => {
    return (
        <div className=' bg-black py-[30px]'>
            <Container>
                <div className=" bg-[url('../src/assets/hourdebg.png')] bg-no-repeat bg-center bg-cover py-[200px]">
                    <h2 className=' font-upright font-bold text-[65px] text-[#DCCA87] text-center'>Happy Hours</h2>
                    <p className=' font-upright font-medium text-[32px] text-white text-center'>Monday - Friday(4:00 Pm - 7:00 pm)</p>
                </div>
            </Container>
        </div>
    )
}

export default Hours
