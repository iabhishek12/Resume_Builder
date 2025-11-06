import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from '../Components/NavbarComponents/Logo'

const ContactUs = () => {
  return (
    <section className='min-h-[85vh] border-t-2 border-black flex flex-col justify-between py-8 bg-gray-50'>
    
      <div className='flex justify-center mb-6'>
        <Logo />
      </div>

  
      <div className='flex justify-evenly items-start px-8 gap-6'>

        
        <div className='w-[38%] bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[420px]'>
          <header>
            <h1 className='font-semibold text-xl leading-relaxed'>
              3000+ Satisfied users who got their Dream Job in top MNC
            </h1>
          </header>

          <main className='mt-4'>
            <div className='flex items-center justify-between bg-gray-100 rounded-md overflow-hidden'>
              <input
                type="text"
                placeholder='Email Address...'
                className='outline-none py-3 px-3 bg-transparent flex-1'
              />
              <NavLink className="bg-blue-600 py-3 px-6 text-white font-semibold hover:bg-blue-700 transition-all duration-200">
                Sign me up
              </NavLink>
            </div>
            <p className='text-sm mt-3 text-gray-700'>
              By signing up you agree to our{' '}
              <span className='font-semibold text-red-600 cursor-pointer'>Privacy Policy</span>.
            </p>
          </main>

          <footer className='flex gap-3 mt-4'>
            {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn].map((Icon, i) => (
              <span
                key={i}
                className='h-[38px] w-[38px] flex justify-center items-center bg-gray-100 rounded-full text-blue-600 hover:text-red-500 hover:bg-gray-200 cursor-pointer transition-all duration-200'
              >
                <Icon />
              </span>
            ))}
          </footer>
        </div>

   
        <div className='w-[25%] bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[420px]'>
          <h2 className='font-bold text-lg text-blue-700 mb-3'>About Our Company</h2>
          <p className='text-sm text-gray-700 leading-relaxed'>
            Proud Chicago B Corp for over a decade.  
            We collaborate with like-minded businesses to make a difference environmentally and socially.  
            Together, we can create a lasting impact.
          </p>
          <NavLink className="text-blue-600 font-semibold text-sm mt-4 hover:underline self-start">
            Learn about our B Corp values ›
          </NavLink>
        </div>

        <div className='w-[30%] bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[420px]'>
          <div>
            <h2 className='font-bold text-lg text-blue-700 mb-3'>Contact Us</h2>
            <p className='text-sm text-gray-700 mb-1'>
              <strong>Address:</strong> 1234 North Street, Chicago, IL 60601
            </p>
            <p className='text-sm text-gray-700 mb-1'>
              <strong>Email:</strong> support@dreamjobs.com
            </p>
            <p className='text-sm text-gray-700'>
              <strong>Phone:</strong> +1 (312) 555-7890
            </p>
          </div>

          <div className='w-full h-[250px] mt-3 rounded-md overflow-hidden'>
            <iframe
              title='Company Location'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.589434612179!2d-87.62979808455662!3d41.87811337922183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca6b2a7b3b5%3A0x2f7fdf3e2b8f!2sChicago%20Downtown!5e0!3m2!1sen!2sus!4v1707839097097!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactUs
