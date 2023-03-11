import React from 'react'
import { useSelector } from 'react-redux'


const CardDetails = () => {

    const cartDetails=useSelector((state)=>state.cardDetailReducer).value
    console.log(cartDetails)

  return (
    <div className='flex'>
        <div>
            <img src={cartDetails.image}/>
        </div>

        <div>
            <div>
                <div>{cartDetails.title}</div>
                <div>{cartDetails.price}</div>
                <div>{cartDetails.description}</div>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default CardDetails