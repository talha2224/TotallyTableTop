import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Layout = () => {
  const data = [
    "Throughout our site ensure you check the profile of anyone who contacts you unsolicited before accepting a friends request.",
    "Use the search function to specifically find your friends through theie email or handle",
    "Review your privacy features and set according to your preference",
    "When making a purchase of game only use PayPal goods and services which means you have some protection when transferring funds to any seller. You will not be able to make a claim for goods that are paid for through friends and family with PayPal.",
    "When making a purchase of game only use PayPal goods and services which means you have some protection when transferring funds to any seller. You will not be able to make a claim for goods that are paid for through friends and family with PayPal.",
    "Collect or deliver the game in a public place and make someone aware of where you will be.",
    "Report any abusive or rude behaviour HERE (link to contact us page) and a person will review your report.",
  ]
  return (
    <div className='w-[100vw] min-h-[100vh] max-h-fit bg-darkBlue '>
      <Navbar />

      <div className='md:px-[2rem] px-[1rem] my-5'>

        <h1 className='text-2xl text-white font-semibold my-6'>Staying Safe</h1>

        {
          data.map((i, index) => (
            <div key={index} className='flex items-center gap-x-3 mt-4'>
              <div className='min-w-[10px] min-h-[10px] rounded-full bg-white'></div>
              <p className='text-white'>{i}</p>
            </div>
          ))
        }
        {/* <div className='w-[40%] p-4 bg-[#0d2539] rounded-md mt-2 mb-2'>

        </div> */}

      </div>

      <div className='fixed bottom-0 left-0 w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}


export default Layout
