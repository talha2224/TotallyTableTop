import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()

    return (
        <div className='w-[100%] h-[10vh] md:h-[14vh] bg-[#0d2539] px-[1rem] md:px-[2rem] flex justify-between items-center border-b-4 border-lightYellow'>

            <div className='flex gap-x-[1rem] items-center'>
                <div className='md:w-[3rem] w-[2.4rem] md:h-[3rem] h-[2.4rem] rounded-full bg-lightYellow flex justify-center items-center'>
                    <h1 className='text-2xl md:text-4xl text-lightOrange font-bold'>T</h1>
                </div>
                <h1 className='sm:block hidden md:text-3xl text-white font-semibold'>Totally Table Top</h1>
            </div>

            <div className='flex gap-x-[1rem] items-center w-fit'>
                <p className='text-white text-nowrap'>Need help ?</p>
                <Button onClickFunc={() => nav("/register-form")} title={"Create an account"} className={"md:px-0 px-1 w-fit text-sm md:w-[12rem] h-[2.3rem] rounded-md text-white bg-lightOrange"} />
            </div>
        </div>
    )
}

export default Navbar
