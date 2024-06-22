import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Layout = () => {

    return (
        <div className='w-[100vw] min-h-[100vh] max-h-fit bg-darkBlue '>
            <Navbar />

            <div className='md:px-[2rem] px-[1rem] my-5'>

                <h1 className='text-2xl text-white font-semibold my-6'>Privacy</h1>
                <p className='mt-2 text-white'>Who we are</p>
                <p className='mt-2 text-white'>Our website address is: www.totallytabletop.com</p>
                <p className='mt-2 text-white'>What personal data we collect and why we collect it:</p>



                <h1 className='text-lg font-semibold text-white mt-3'>Forms</h1>
                <p className='mt-2 text-white'>We use contact forms so that users can get in touch with us. By submitting contact forms, we will process the information you submit in order that we can reply to your message and deal with your request.</p>
                <p className='mt-2 text-white'>Forms are also used to collect information about organisations nominated for free first aid training courses. Any information supplied will be held in order to verify the details of the organisation, their eligibility to receive free training, and to verify that the individual making a nomination is suitably authorised to do so. They may also be used to contact the organisation in question and to secure their approval to be a part of any voting campaign.</p>

                <h1 className='text-lg font-semibold text-white mt-3'>Analytics</h1>
                <p className='mt-2 text-white'>Our site uses cookies for specific purposes. You can find out all about how we use cookies in our cookie policy.Embedded content from other websites:</p>
                <p className='mt-2 text-white'>This site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website. We bear no responsibility for the content of third-parties, nor how they use your data.</p>
                
                <h1 className='text-lg font-semibold text-white mt-3'>Cookies</h1>
                <p className='mt-2 text-white'>As with most online services, this website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data. The third-party cookies used on this website are used mainly for understanding how the website performs, how you interact with the website, keeping services secure, and all in all providing you with a better and improved user experience and help speed up your future interactions with the website.</p>
                
                <h1 className='text-lg font-semibold text-white mt-3'>Who we share your data with</h1>
                <p className='mt-2 text-white'>We don’t share personal data with third parties. Form submissions may be checked through an automated spam detection service</p>


                <h1 className='text-lg font-semibold text-white mt-3'>How long we retain your data</h1>
                <p className='mt-2 text-white'>The information you submit is retained only as long as is necessary for the purpose it is gathered (e.g. to respond to your enquiry), or one year, whichever is shorter.</p>
                
                
                <h1 className='text-lg font-semibold text-white mt-3'>What rights you have over your data</h1>
                <p className='mt-2 text-white'>If you filled in a form on this website, or have submitted details you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
            
                <h1 className='text-lg font-semibold text-white mt-3'>Where we send your data</h1>
                <p className='mt-2 text-white'>Your data may be sent to the services outlined above in order to help facilitate your request. By default data will be processed in the UK, although occasionally our cloud computing providers will process data in the USA. Any data transfer to the USA is based on the standard contractual clauses of the European Commission.</p>
            
                <h1 className='text-lg font-semibold text-white mt-3'>Contact information</h1>
                <p className='mt-2 text-white'>You can contact us using this website if you want to query anything regarding this policy, or how it relates to your data.</p>
            
            
            
            
            </div>

            <Footer />
        </div>
    )
}


export default Layout
