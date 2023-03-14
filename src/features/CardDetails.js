import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addCardBox } from './cardBoxSlice';
import {AiOutlinePlus} from "react-icons/ai";


const CardDetails = () => {

    const dispatch=useDispatch();
    const cartDetails=useSelector((state)=>state.cardDetailReducer).value    //Got from store we assigned named cardDetailReducer
                                                                             //and .value because of api needs to get Data
  return (

    <div className='flex flex-col mt-[10vh]'>

        <div>
            <img className='md:w-[20vw] md:h-[45vh] m-auto md:scale-100 scale-50' alt='not found' src={cartDetails.image}/>
        </div>

        <div>
            <div className='text-center'>
                <div className='text-3xl font-semibold mt-16'>{cartDetails.title}</div>
                <div className='text-2xl w-[70vw] mx-auto mt-8'>{cartDetails.description}</div>
                <div className='text-4xl font-bold my-2'>{cartDetails.price} $</div>
                <button className='bg-pink-800 text-white rounded-full p-1 my-2' onClick={()=>dispatch(addCardBox(cartDetails))}><AiOutlinePlus /></button>
            </div>
        </div>

    </div>
  )

}

export default CardDetails