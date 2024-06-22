import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Button from '../../components/Button'
const Layout = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] max-h-fit bg-darkBlue '>
      <Navbar/>

      <div className='w-screen flex justify-center items-center'>
        <div className='w-[40%] p-4 bg-[#0d2539] rounded-md mt-2 mb-2'>
            <h1 className='text-xl text-white'>Contact Tottaly TableTop</h1>
            <p className='text-white mt-1'>All fields are required</p>
            <form action="" className='mt-2'>
                <p className='text-white'>Name</p>
                <Input type={"text"} name={"name"} className={"w-[100%] h-[2.3rem] bg-darkBlue px-2 rounded-md text-white mt-1 outline-none border-none"}/>
                <p className='mt-2 text-white'>Email</p>
                <Input type={"text"} name={"name"} className={"w-[100%] h-[2.3rem] bg-darkBlue px-2 rounded-md text-white mt-1 outline-none border-none"}/>
                <p className='mt-2 text-white'>Message</p>
                <textarea name="message" id="" className='w-[100%] h-[10rem] bg-darkBlue p-2 rounded-md text-white mt-1 outline-none border-none resize-none'></textarea>
                <Button title={"Send message"} className={"w-[100%] h-[2.3rem] rounded-md bg-darkBlue text-white"}/>
                <p className='mt-2 text-sm text-white'>By submitting this form, you agreed that you have read, understood and accept our <span className=' text-lightOrange'>terms and policy</span> </p>
            </form>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Layout
