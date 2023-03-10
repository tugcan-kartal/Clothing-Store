import React from 'react'
import {GiHanger} from "react-icons/gi";
import {AiFillShopping} from "react-icons/ai";
import { Link } from 'react-router-dom';

const NavbarView = () => {
  return (
    <div className='bg-red-50'>

        <div className='flex justify-between p-4 text-4xl text-red-600'>
            <Link to="/" className='pl-16'> <GiHanger /> </Link>
            <Link to="/Cart" className='pr-16'> <AiFillShopping /> </Link>
        </div>

    </div>
  )
}

export default NavbarView