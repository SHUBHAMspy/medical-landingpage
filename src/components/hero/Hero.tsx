import React from 'react'
import Button from '../common/button/Button'

const Hero = () => {
  return (
    <section className='relative mt-24 p-4 w-full h-[85.85vh]  flex flex-col md:flex-row justify-between items-center'>
      <div className='h-full p-2 w-[50%] text-center flex flex-col items-center justify-center gap-4 text-white'>
        <p className='font-extrabold text-5xl '>Secure Your Health with us.</p>
        <p className='text-sm '>
        Your go-to app for all your health needs, designed to keep you informed and empowered about your well-being. Whether you're tracking symptoms, managing medications, or seeking reliable health information.
        </p>
        <Button variant="primary" size='large'>Book a Call</Button>
      </div>
      <div className='flex justify-center items-center p-2 h-full w-[50vw] rounded-lg'>
        <img className='rounded-lg h-full object-cover' src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Findian-american-docpng_uQ6wLF8FE&w=1200&q=75" alt="hero" />
        {/* <div className='h-full w-[50%]'>
        </div> */}

      </div>

      
    </section>
  )
}

export default Hero