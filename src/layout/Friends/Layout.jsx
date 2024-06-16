import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Left from '../../components/Left'
import { ImCross } from 'react-icons/im'
import { BsFillCaretDownFill } from 'react-icons/bs'
import FaceImage from '../../assets/face.avif'
import { FaRegStar, FaUser } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

const Layout = () => {
    const nav = useNavigate()
    const data = [1, 2, 3, 4, 5, 6, 7,8]
    return (
        <div className='flex flex-col w-[100vw] overflow-y-auto'>
            <Navbar type={"verified"} />
            <div className='pt-[2.3rem] flex  justify-between items-start md:flex-row flex-col bg-darkBlue md:px-[2rem] flex-1 h-[fit] md:h-[86rem] w-[100vw] gap-x-6'>

                {/* LEFT  */}
                <Left />

                {/* RIGHT  */}
                <div className='flex-1 rounded-md px-2 mb-2 w-full md:mt-0 mt-4'>
                    <div className='sm:flex justify-between items-center'>
                        <h1 className='text-white text-2xl font-semibold'>Friends (47)</h1>
                        <div className='flex items-center gap-x-4 sm:mt-0 mt-2'>
                            <Button title={"Online"} className={'w-[8rem] h-[2.3rem] rounded-md text-white border border-lightOrange'} />
                            <Button title={"Offline"} className={'w-[8rem] h-[2.3rem] rounded-md text-white border border-lightOrange'} />
                            <Button title={"Post update"} className={'w-[8rem] h-[2.3rem] rounded-md text-white border border-lightOrange'} />

                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-[2rem] flex-wrap mt-6'>
                        {
                            data.map((i, index) => (

                                <div key={i} className='bg-[#0d2539] w-[15rem] h-[15rem] rounded-md p-3 flex justify-center items-center flex-col'>
                                    <div className='flex justify-center items-center'>
                                        <img src={FaceImage} alt="" className='w-[6rem] h-[6rem] rounded-full' />
                                    </div>
                                    <p className='text-white mt-3 font-bold '>Marry Cane</p>
                                    <p className='text-white mt-1 font-thin '>@marry-cane</p>
                                    <div className='flex justify-center items-center gap-x-4 mt-4'>
                                        <FaUser className='text-white' />
                                        <FaMessage className='text-white' />
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Layout
