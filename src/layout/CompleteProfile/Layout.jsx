import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { BsMicFill } from 'react-icons/bs'
import annoucementImage from '../../assets/annoucement.jpg'
import Left from '../../components/Left'
const Layout = () => {
    return (
        <div className='flex flex-col w-[100vw] h-[100vh]'>
            <Navbar type={"verified"} />
            <div className='pt-[2.3rem] flex  justify-between items-start md:flex-row flex-col bg-darkBlue md:px-[2rem] flex-1 h-[fit] md:h-[86rem] w-[100vw] gap-x-6'>

                {/* LEFT  */}
                <Left/>

                {/* RIGHT  */}
                <div className='flex-1 rounded-md px-2 mb-2'>
                    <h1 className='text-white text-2xl font-semibold'>Welcome</h1>

                    <div className='bg-[#0d2539] w-[100%] lg:w-[80%] rounded-md p-2 my-2 flex justify-between items-center'>

                        <div>
                            <p className='text-white'>Step 1 of 4</p>
                            <p className='text-white my-2'>Complete your profile to get started</p>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <p className='text-white cursor-pointer'>Skip</p>
                            <Button title={"Complete Profile"} className={"w-[10rem] h-[2.3rem] rounded-md bg-transparent text-white border border-lightOrange"} />
                        </div>
                    </div>

                    <div className='bg-[#0d2539] w-[100%] lg:w-[80%] rounded-md p-2 my-2 flex justify-between items-center'>

                        <div>
                            <p className='text-white'>Step 2 of 4</p>
                            <p className='text-white my-2'>Find convention to attend</p>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <p className='text-white cursor-pointer'>Skip</p>
                            <Button title={"All conventions"} className={"w-[10rem] h-[2.3rem] rounded-md bg-transparent text-white border border-lightOrange"} />
                        </div>
                    </div>

                    <div className='bg-[#0d2539] w-[100%] lg:w-[80%] rounded-md p-2 my-2 flex justify-between items-center'>

                        <div>
                            <p className='text-white'>Step 3 of 4</p>
                            <p className='text-white my-2'>Find and connect with friends</p>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <p className='text-white cursor-pointer'>Skip</p>
                            <Button title={"Find friends"} className={"w-[10rem] h-[2.3rem] rounded-md bg-transparent text-white border border-lightOrange"} />
                        </div>
                    </div>

                    <div className='bg-[#0d2539] w-[100%] lg:w-[80%] rounded-md p-2 my-2 flex justify-between items-center'>

                        <div>
                            <p className='text-white'>Step 4 of 4</p>
                            <p className='text-white my-2'>Take a look at available games</p>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <p className='text-white cursor-pointer'>Skip</p>
                            <Button title={"Games for sale"} className={"w-[10rem] h-[2.3rem] rounded-md bg-transparent text-white border border-lightOrange"} />
                        </div>
                    </div>
                    <div className='bg-[#0d2539] w-[100%] lg:w-[80%] rounded-md p-2 my-2 flex justify-between items-center'>

                        <div>
                            <p className='text-white'>Setup complete</p>
                            <p className='text-white my-2'>You,ve completed the setup, enjoy your account!</p>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <p className='text-white cursor-pointer'>Skip</p>
                            <Button title={"Hide message"} className={"w-[10rem] h-[2.3rem] rounded-md bg-transparent text-white border border-lightOrange"} />
                        </div>
                    </div>

                </div>


            </div>

            {/* footer  */}
            <div className='bg-[#0d2539] w-[100%] p-[1rem] md:p-[2rem] flex justify-between items-center flex-wrap'>
                <div className='w-[2rem] h-[2rem] rounded-full bg-lightYellow flex justify-center items-center mt-2'>
                    <h1 className='text-2xl text-lightOrange font-bold'>T</h1>
                </div>
                <div className='flex gap-x-3 items-center overflow-x-auto mt-2'>
                    <p className='text-lightGray cursor-pointer text-nowrap'>Contact us </p>
                    <p className='text-lightGray cursor-pointer text-nowrap'>Staying safe</p>
                    <p className='text-lightGray cursor-pointer text-nowrap'>Terms</p>
                    <p className='text-lightGray cursor-pointer text-nowrap'>Cookies</p>
                    <p className='text-lightGray cursor-pointer text-nowrap'>Privacy</p>
                    {/* <p className='text-lightGray cursor-pointer text-nowrap'>Help & Support</p> */}
                </div>
            </div>
        </div>
    )
}

export default Layout
