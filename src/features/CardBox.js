import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addCardBox,removeCardBox } from './cardBoxSlice';

const CardBox = () => {

  const dispatch=useDispatch();
  const cardBox=useSelector((state)=>state.cardBoxReducer).value;

  console.log(cardBox);

  return (
    <div>
      {cardBox && cardBox.map((item)=>(
        <div key={item.id}> 
          <div> {item.title} </div>
          <div> <img src={item.image} /> </div>
          <div> {item.price} </div>
          <button onClick={()=>dispatch(addCardBox(item))}>Add Item</button>
          <button onClick={()=>dispatch(removeCardBox(item.id))}>Remove Item</button>
        </div>
      ))}
    </div>
  )
}

export default CardBox;