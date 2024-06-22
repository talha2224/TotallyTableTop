import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#0d2539] w-[100%] p-[1rem] flex justify-between items-center flex-wrap'>
            <div className='w-[2rem] h-[2rem] rounded-full bg-lightYellow flex justify-center items-center mt-2'>
                <h1 className='text-2xl text-lightOrange font-bold'>T</h1>
            </div>
            <div className='flex gap-x-3 items-center overflow-x-auto mt-2'>
                <Link to={"/contact"} className='text-lightGray cursor-pointer text-nowrap'>Contact us </Link>
                <Link to={"/safe"} className='text-lightGray cursor-pointer text-nowrap'>Staying safe</Link>
                <Link to={"/terms"} className='text-lightGray cursor-pointer text-nowrap'>Terms</Link>
                <Link to={"/cookies"} className='text-lightGray cursor-pointer text-nowrap'>Cookies</Link>
                <Link to={"/privacy"} className='text-lightGray cursor-pointer text-nowrap'>Privacy</Link>
                {/* <p className='text-lightGray cursor-pointer text-nowrap'>Help & Support</p> */}
            </div>
        </div>
    )
}

export default Footer
