import React from 'react'
import ShopIcon from "../static/shoppingapp.svg";

const HeroSection = () => {
  return (
    <div className='flex md:flex-row flex-col h-screen mt-[5vh] justify-center items-center w-full bg-gray-100'>

        <div className='w-[50vw] text-center sm:mb-[8vh] mb-[4vh]'>
            <p className='md:text-4xl text-xl'>Your products are waiting to be packed </p>
            <p className='md:text-4xl text-xl'>with quality discount and fast delivery.</p>
        </div>

        <div className='md:w-[40vw] w-[50vw] pt-8 w-[60vw]'>
            <img alt='not found' src={ShopIcon}/>
        </div>
        
    </div>
  )
}

export default HeroSection