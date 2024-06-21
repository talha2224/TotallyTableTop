import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { BsMicFill } from 'react-icons/bs'
import annoucementImage from '../../assets/annoucement.jpg'
import connectImage from '../../assets/connect.svg'
import announceImage from '../../assets/announce.svg'
import Left from '../../components/Left'
const Layout = () => {

  const nav = useNavigate()
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
      <Navbar type={"verified"} />
      <div className='pt-[2.3rem] flex  justify-between items-start md:flex-row flex-col bg-darkBlue md:px-[2rem] flex-1 h-[fit] md:h-[86rem] w-[100vw] gap-x-6'>

        {/* LEFT  */}
        <Left />
        
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
              <Button onClickFunc={() => nav("/complete")} title={"Complete Profile"} className={"w-[10rem] h-[2.3rem] rounded-md bg-transparent text-white border border-lightOrange"} />
            </div>
          </div>

          <div className='flex items-center gap-x-[1rem] my-[1rem]'>
              <img src={announceImage} alt="" />
            {/* <div className='w-[2rem] h-[2rem] rounded-full bg-red flex justify-center items-center'>
              <BsMicFill className='text-white text-lg ml-[-1px]' />
            </div> */}
            <p className='text-white'>Annoucements</p>

          </div>
          <img src={annoucementImage} alt="" className='w-[100%] lg:w-[80%] h-[15rem] rounded-md cursor-pointer' />

          <div className=' bg-lime-50 w-[100%] lg:w-[80%] rounded-md p-5 my-4 flex justify-between items-center'>

            <div>
              <p className='text-darkBlue'>New feature added</p>
              <p className='text-darkBlue my-1'>Your account now support direct messaging</p>
            </div>
            <img src={connectImage} alt="" />
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
