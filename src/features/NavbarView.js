import React,{useState,useEffect} from 'react'
import {GiHanger} from "react-icons/gi";
import {AiFillShopping} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cardBoxSlice from './cardBoxSlice';

const NavbarView = () => {

  const cardBox=useSelector((state)=>state.cardBoxReducer).value;

  const [navbarBgColor,setNavbarBgColor]=useState("bg-red-500");
  const [navbarBgOpacity,setNavbarBgOpacity]=useState("opacity-100");

  useEffect(()=>{

    const handleScroll=()=>{
      if(window.pageYOffset>0){
        setNavbarBgColor("bg-gray-500");
        setNavbarBgOpacity("opacity-30")
      }else{
        setNavbarBgColor("bg-red-500");
        setNavbarBgOpacity("opacity-100");
      }
    };

    window.addEventListener("scroll",handleScroll);

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    };
  },[]);

  return (

    <div className='relative'>

      <div className={`fixed py-[1vh] top-0 left-0 right-0 z-50 mb-16 text-gray-200 ${navbarBgColor} ${navbarBgOpacity} shadow-lg border-b-2 border-b-white`}>

          <div className='flex justify-between items-center'>
              <Link to="/" className='text-4xl ml-[10vw]'> <GiHanger /> </Link>
              <Link to="/Cart" className='flex mr-[10vw] text-3xl'> 
                <AiFillShopping /> 
                <div className='text-sm mt-4 bg-gray-500 rounded-full px-1'>{cardBox.length}</div>
              </Link>
          </div>

      </div>

    </div>
  )
}

export default NavbarView