import React from 'react'
import Navbar from '../../components/Navbar'
import { FaCaretDown, FaRegStar } from 'react-icons/fa'
import FaceImage from '../../assets/face.avif'
import Button from '../../components/Button'
import { FaMessage } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { IoIosAlert } from 'react-icons/io'
import Input from '../../components/Input'

const FriendFeed = () => {
    const data = [1, 2, 3, 4, 5, 6, 7]
    const currentLocation = useLocation().pathname
    return (
        <div className='flex flex-col w-[100vw] min-h-[100vh] max-h-fit overflow-y-auto bg-darkBlue'>
            <Navbar type={"verified"} />
            {
                currentLocation.includes("ownFeed") && (
                    <div className='bg-white p-2 flex items-center gap-x-3'>
                        <IoIosAlert className='text-red' />
                        <p>You are viewing your own profile</p>
                    </div>
                )
            }

            <div className='flex justify-between items-center md:px-[2rem] px-[1rem] mt-4'>
                <h1 className='text-xl text-white font-semibold'>Daphne’s feed</h1>
                <div className='flex items-center gap-x-4'>
                    {
                        currentLocation.includes("ownFeed") && (
                            <Button title={"Post update"} className={`w-[8rem] h-[2.3rem] rounded-md text-white border border-lightOrange`} />
                        )
                    }

                    <div className='border border-[#707070] w-[13rem] h-[2.3rem] rounded-md bg-transparent flex justify-center items-center gap-x-4 cursor-pointer'>
                        <p className='text-white'>Showing all updates</p>
                        <FaCaretDown className='text-white' />
                    </div>
                </div>
            </div>

            <div className='flex items-start md:flex-row flex-col mt-[5rem] md:px-[2rem] px-[1rem] gap-x-[2rem]'>
                <div className='bg-[#0d2539] relative min-w-full md:min-w-[13rem] p-2 rounded-md h-[fit] md:mb-0 mb-3'>
                    <img src={FaceImage} alt="" className=' absolute top-[-3rem] left-[40%] md:left-[27%] w-[6rem] h-[6rem] rounded-full' />
                    <p className='text-center text-white font-semibold mt-[2.5rem] text-lg'>Daphne Moon</p>
                    <p className='text-center text-white mt-2'>@msmoon</p>
                    {
                        !currentLocation.includes("ownFeed") && (
                            <Button title={"Add as friend"} className={`w-full h-[2.3rem] text-white rounded-md bg-lightOrange my-2`} />
                        )
                    }
                    <Button title={currentLocation.includes("ownFeed") ? "Edit Profile" : "Message"} className={`w-full h-[2.3rem] border border-white text-white rounded-md my-2`} />
                    <p className='text-center text-white mt-2'>413 friends</p>
                    <p className='text-center text-white my-2'>Member since 2024</p>

                </div>
                <div className='flex-1'>
                    {
                        currentLocation.includes("ownFeed") && (
                            <div className='w-[100%] bg-[#0d2539] py-3 px-4 mt-0 rounded-md mb-2'>
                                <div className='flex items-start gap-x-4'>
                                    <img src={FaceImage} alt="" className='w-[2.5rem] h-[2.5rem] rounded-full' />
                                    <Input type={"text"} name={"name"} placeholder={"Tell your friend whats happening...."} className={"flex-1 bg-[#102F47] text-white h-[10rem] px-3 placeholder:text-start"} />
                                </div>
                                <div className='flex justify-between items-center mt-2'>
                                    <p className='text-white'>Updates are visible to your friends.</p>
                                    <Button title={"Post update"} className={"w-[8rem] h-[2.3rem] rounded-md bg-[#E78530] text-white"} />
                                </div>
                            </div>
                        )
                    }
                    {
                        data.map((i, index) => (
                            <div key={i} className='w-[100%] bg-[#0d2539] py-3 px-4 mt-0 rounded-md mb-2'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-x-4'>
                                        <div className='flex items-center'>
                                            <img src={FaceImage} alt="" className='w-[3rem] h-[3rem] rounded-full' />
                                            <div className='w-[3rem] h-[3rem] rounded-full flex justify-center items-center bg-lightOrange'>UKGE</div>
                                        </div>
                                        <div>
                                            <p className='text-white'><span className='text-lightOrange'>Daphin</span> is attending <span className='text-lightOrange'>UK games Expo</span></p>
                                        </div>
                                    </div>
                                    <p className='text-white'>Just now</p>

                                </div>
                                <p className='text-white mt-3'>Daphine will attend UK games expo on Friday 31st 2024 and Sunday 1st June  2024</p>

                                <div className='flex items-center gap-x-4 mt-4'>
                                    <div className='flex items-center gap-x-2'>
                                        <FaMessage className='text-white' />
                                        <p className='text-white'>0</p>
                                    </div>
                                    <FaRegStar className='text-white' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FriendFeed
