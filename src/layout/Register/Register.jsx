import React from 'react'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { TiTick } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

const Register = () => {
    const data = ["Plan and manage convention attendance", "Buy and sell board games", "Connect and share with friends"]
    const nav = useNavigate()
    return (
        <div className='flex flex-col w-[100vw] h-[100vh]'>
            <Navbar />

            <div className='flex  justify-center items-center md:flex-row flex-col bg-darkBlue md:px-[2rem] flex-1 h-[90vh] md:h-[86rem] w-[100vw] gap-x-6'>

                <div className='bg-[#0d2539] w-[98%] md:w-[70%] lg:w-[50%] rounded-md p-4'>
                    <h1 className='text-white text-lg font-semibold mb-2'>Create an account</h1>
                    <p className='text-white'>It only takes a minute</p>

                    <div className='flex justify-between items-center gap-x-4 mt-3 sm:flex-row flex-col'>
                        <Input placeholder={"First Name"} name={"firstname"} type={"text"} className={"sm:flex-1 flex-none w-full sm:mb-0 mb-3 h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                        <Input placeholder={"Last Name"} name={"lastname"} type={"text"} className={"sm:flex-1 flex-none w-full sm:mb-0  h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                    </div>
                    <Input placeholder={"Email Address"} name={"email"} type={"email"} className={"w-[100%] mt-3 h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                    <Input placeholder={"@ Choose a username"} name={"username"} type={"text"} className={"w-[100%] mt-3 h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                    <p className='text-white mt-3'>Select a username. Cannot already be in use, cannot be changed </p>
                    <Input placeholder={"Create Password"} name={"c_password"} type={"password"} className={"w-[100%] mt-3 h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                    <Input placeholder={"Confirm Password"} name={"create_password"} type={"password"} className={"w-[100%] mt-3 h-[2.3rem] px-3 rounded-md bg-darkBlue text-white"} />
                    <Button onClickFunc={()=>nav("/acknowledge")} title={"Submit"} className={"w-[10rem] h-[2.3rem] rounded-md text-white bg-lightOrange mt-3"} />
                </div>

                <div className='bg-[#0d2539] w-[98%] md:w-[30%] rounded-md p-4 mt-3 md:mt-0'>
                    {
                        data.map((i, index) => (
                            <div className='flex gap-x-5 items-center mt-2 '>
                                <div className='w-[1.3rem] h-[1.3rem] bg-lightOrange flex justify-center items-center rounded-full'>
                                    <TiTick className='text-white' />
                                </div>
                                <div>
                                    <p className='text-white'>{i}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>

            <Footer/>

        </div>
    )
}

export default Register
