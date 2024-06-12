import React from 'react'
import Navbar from '../../components/Navbar'
import FaceImage from '../../assets/face.avif'
import { FaMessage } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'

const Layout = () => {
    const data = [1, 2, 3, 4, 5]

    return (
        <div className='flex flex-col w-[100vw] h-[100vh]'>
            <Navbar type={"verified"} />

            <div className='pt-5  px-[1rem]  md:flex-row flex-col bg-darkBlue md:px-[2rem] flex-1 h-[90vh] md:h-[86rem] w-[100vw] gap-x-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-white'>User Search "Marry"</h1>
                    <p className='text-white'>3 results</p>
                </div>

                <div className='flex justify-between items-center gap-[2rem] flex-wrap mt-6'>
                    {
                        data.map((i) => (
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
    )
}

export default Layout
