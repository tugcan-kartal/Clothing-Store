import React from 'react'
import ShopIcon from "../static/shoppingapp.svg";

const HeroSection = () => {
  return (
    <div className='flex h-screen mt-[5vh] justify-center items-center w-full bg-gray-100'>

        <div className='w-[50vw] text-center sm:mb-[8vh] mb-[4vh]'>
            <p className='xl:text-4xl sm:text-2xl text-sm'>Your products are waiting to be packed </p>
            <p className='xl:text-4xl sm:text-2xl text-sm'>with quality discount and fast delivery.</p>
        </div>

        <div className='w-[40vw]'>
            <img alt='not found' className='' src={ShopIcon}/>
        </div>
        
    </div>
  )
}

export default HeroSection