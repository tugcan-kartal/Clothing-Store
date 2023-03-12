import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addCardBox } from './cardBoxSlice';


const CardDetails = () => {

    const dispatch=useDispatch();
    const cartDetails=useSelector((state)=>state.cardDetailReducer).value
    console.log(cartDetails)

  return (

    <div className='flex mt-[10vh] h-screen'>

        <div>
            <img alt='not found' src={cartDetails.image}/>
        </div>

        <div>
            <div>
                <div>{cartDetails.title}</div>
                <div>{cartDetails.price}</div>
                <div>{cartDetails.description}</div>
                <button onClick={()=>dispatch(addCardBox(cartDetails))}>Add to cart</button>
            </div>
        </div>

    </div>
  )

}

export default CardDetails