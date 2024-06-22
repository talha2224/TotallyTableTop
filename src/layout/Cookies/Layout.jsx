import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Layout = () => {

    return (
        <div className='w-[100vw] min-h-[100vh] max-h-fit bg-darkBlue '>
            <Navbar />

            <div className='md:px-[2rem] px-[1rem] my-5'>

                <h1 className='text-2xl text-white font-semibold my-6'>Cookies</h1>
                <p className='mt-2 text-white'>About this cookie policy</p>
                <p className='mt-2 text-white'>This Cookie Policy explains what cookies are and how they are used. You should read this policy to understand what cookies are, how they are used on this site, the types of cookies used i.e, the information collected using cookies and how that information is used and how to control the cookie preferences.</p>
                <p className='mt-2 text-white'>For further information on how data is used, stored and kept secure, see the Privacy Policy. </p>
                <p className='mt-2 text-white'>You can at any time change or withdraw your consent from the Cookie Declaration on this website, or the ‘Manage your consent’ link below.</p>



                <h1 className='text-lg font-semibold text-white mt-3'>Your consent applies to the following domains: </h1>
                <p className='mt-2 text-white'>www.totallytabletop.com</p>
                <p className='mt-2 text-white'>Your current state: Consent accepted. </p>

                <h1 className='text-lg font-semibold text-white mt-3'>What are cookies?</h1>
                <p className='mt-2 text-white'>Cookies are small text files that are used to store small pieces of information. Some cookies may be stored on your device when the website is loaded on your browser, others require your consent. These cookies help make this website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.</p>
                
                <h1 className='text-lg font-semibold text-white mt-3'>How do we use cookies?</h1>
                <p className='mt-2 text-white'>As with most online services, this website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data. The third-party cookies used on this website are used mainly for understanding how the website performs, how you interact with the website, keeping services secure, and all in all providing you with a better and improved user experience and help speed up your future interactions with the website.</p>
                
                <h1 className='text-lg font-semibold text-white mt-3'>What types of cookies do we use?</h1>
                <p className='mt-2 text-white'>We may use or seek to gain consent to use the following types of cookies on this website:</p>

                <p className='mt-1 text-white'>Essential: Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information. For example, these cookies allow you to log-in to your account and add products to your basket, and checkout securely.</p>
                <p className='mt-1 text-white'>Statistics: These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.</p>
                <p className='mt-1 text-white'>Marketing: Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns. The information stored in these cookies may also be used by third-party ad providers to show you ads on other websites on the browser as well.</p>
                <p className='mt-1 text-white'>Functional: These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms.Preferences: These cookies help us store your settings and browsing preferences like language preferences so that you have a better and more efficient experience on future visits to the website.</p>
                <h1 className='text-lg font-semibold text-white mt-3'>How can I control my cookie preferences?</h1>
                <p className='mt-2 text-white'>Should you decide to change your preferences later through your browsing session, you can click on the “Manage your consent” link near the top of this page. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely. In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more on how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.</p>
            </div>

            <Footer />
        </div>
    )
}


export default Layout
