import React from 'react'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

const ForgetLayout = () => {
    const nav = useNavigate()
    return (
        <div className='w-screen h-screen flex flex-col'>
            <Navbar />

            <div className='bg-darkBlue md:px-[2rem] flex-1 h-[90vh] md:h-[86rem] w-[100vw] flex justify-center items-center flex-col'>
                <div className='w-[80%] md:w-[50%] lg:w-[35%]  p-4 bg-[#0d2539] rounded-md'>
                    <h1 className='text-white text-lg font-semibold text-center'>Forgotten your password?</h1>
                    <p className='text-white mt-3'>Enter the email address you used to register and we'll</p>
                    <p className='text-white mt-1'>send you instruction to reset your password.</p>
                    <Input placeholder={"Email Address"} name={"email"} type={"email"} className={"w-[100%] mt-3 h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                    <Button onClickFunc={()=>nav("/reset")} title={"Reset your password"} className={"mt-3 bg-lightOrange text-white rounded-md h-[2.3rem] w-full"} />
                    <p className='text-white text-center mt-3'>Don't remember which email you used?</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ForgetLayout
