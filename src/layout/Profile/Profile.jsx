import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Left from '../../components/Left'
import FaceImage from '../../assets/face.avif'
import Input from '../../components/Input'

const Profile = () => {
  const nav = useNavigate()
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
      <Navbar type={"verified"} />
      <div className='pt-[2.3rem] flex  justify-between items-start md:flex-row flex-col bg-darkBlue md:px-[2rem] flex-1 h-[fit] md:h-[86rem] w-[100vw] gap-x-6'>

        {/* LEFT  */}
        <Left />

        {/* RIGHT  */}
        <div className='flex-1 rounded-md px-2 mb-2 w-full md:mt-0 mt-4'>
          <div className='sm:flex justify-between items-center'>
            <h1 className='text-white text-2xl font-semibold'>Edit your profile</h1>
            <Button onClickFunc={()=>nav("/ownFeed")} title={"View Profile"} className={'w-[8rem] h-[2.3rem] rounded-md text-white border border-lightOrange sm:mt-0 mt-2'} />
          </div>

          <div className='w-[100%] h-[fit] mt-4 bg-[#0d2539] rounded-md p-3'>
            <h1 className='text-white font-semibold'>About you</h1>

            <div className='flex justify-between sm:items-center sm:flex-row flex-col'>

              <div>
                <div className='flex justify-start items-center gap-x-5 mt-3'>
                  <Input name={"firstname"} className={`w-[11rem] h-[2.3rem] rounded-md px-3 bg-darkBlue `} placeholder={"Marry"} />
                  <Input name={"lastname"} className={`w-[11rem] h-[2.3rem] rounded-md px-3 bg-darkBlue `} placeholder={"Harward"} />
                </div>
                <Input name={"email"} className={`w-[23.3rem] h-[2.3rem] rounded-md px-3 bg-darkBlue mt-3 `} placeholder={"Marry@email.com"} />
                <p className='mt-4 border-b border-b-[#F2F0EF] text-[#F2F0EF] pb-2 '>@gamestories2</p>
                <p className='mt-2 text-[#F2F0EF] pb-2 '>Username cannot be change</p>
                <Button title={"Save changes"} className={`w-[8rem] h-[2.3rem] text-white bg-[#F77F00] rounded-md`} />
              </div>

              <div className='sm:mt-0 mt-3'>
                <img src={FaceImage} alt="" className='w-[10rem] h-[10rem] rounded-full' />
                <Button title={"Upload Picture"} className={`w-[8rem] mt-2 h-[2.3rem] text-white border border-[#F77F00] rounded-md`} />

              </div>

            </div>


            <h1 className='text-white font-semibold mt-3'>Your password</h1>
            <Input name={"email"} className={`w-[23.3rem] h-[2.3rem] rounded-md px-3 bg-darkBlue mt-3 block `} placeholder={"Current Password"} />
            <Input name={"email"} className={`w-[23.3rem] h-[2.3rem] rounded-md px-3 bg-darkBlue mt-3 block `} placeholder={"New Password"} />
            <Input name={"email"} className={`w-[23.3rem] h-[2.3rem] rounded-md px-3 bg-darkBlue mt-3 block `} placeholder={"Confirm New Password "} />
            <Button title={"Update password"} className={`w-[10rem] h-[2.3rem] text-white bg-[#F77F00] rounded-md mt-2`} />




          </div>


        </div>


      </div>

    </div>
  )
}

export default Profile
