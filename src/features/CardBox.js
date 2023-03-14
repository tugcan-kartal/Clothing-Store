import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addCardBox,removeCardBox,deleteCardBox } from './cardBoxSlice';
import {AiOutlinePlus} from "react-icons/ai";
import {IoIosRemove} from "react-icons/io";
import {BsFillTrashFill} from "react-icons/bs";

const CardBox = () => {

  const dispatch=useDispatch();
  const cardBox=useSelector((state)=>state.cardBoxReducer).value;

  const [screen,setScreen]=useState("");
  

  useEffect(()=>{
    if (cardBox.length===0) {
      setScreen("h-screen");
    }else{
      setScreen("");
    }
  },[])

  return (
    <div className='pt-[15vh]  bg-gray-100 pb-[10vh]'>

      <div onClick={()=>dispatch(deleteCardBox())} className={`${screen} text-2xl flex justify-center text-pink-800 cursor-pointer`}><BsFillTrashFill /></div>

      {cardBox && cardBox.map((item,key)=>(
        <div key={key} className="bg-white shadow-2xl w-[50vw] mx-auto mt-10"> 
          <div className='text-center text-2xl font-semibold pt-2'> {item.title} </div>
          <div> <img className='mx-auto w-[20vw] h-[45vh] mt-16 rounded-2xl' src={item.image} alt="not found"/> </div>
          <div className='text-3xl font-bold text-center mt-16'> {item.price} $ </div>
          <div className='flex justify-center gap-x-64'>
            <button className='bg-gray-200 rounded-full p-1 my-2' onClick={()=>dispatch(addCardBox(item))}> <AiOutlinePlus /> </button>
            <button className='bg-gray-200 rounded-full p-1 my-2' onClick={()=>dispatch(removeCardBox(item.id))}> <IoIosRemove /> </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardBox;