import React from 'react'
import ShopIcon from "../static/shoppingapp.svg";

const HeroSection = () => {
  return (
    <div className='flex'>
        <div>
            <p>Your products are waiting to be packed </p>
            <p>with quality discount and fast delivery.</p>
        </div>
        <div>
            <img src={ShopIcon}/>
        </div>
    </div>
  )
}

export default HeroSection