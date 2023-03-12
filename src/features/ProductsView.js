import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroSection from '../components/HeroSection'
import { fetchProducts } from './productSlice'
import {AiOutlinePlus,AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { detailCard } from './cardDetailsSlice';
import { addCardBox } from './cardBoxSlice';

//There is some of css codes in index.css check it.Its about opacity hover

const ProductsView = () => {

  const dispatch=useDispatch();
  let productsData=useSelector((state)=>state.productReducer)   //got from store.js

  useEffect(()=>{
    dispatch(fetchProducts())
  },[]);

  return (
    <div className=''>
        <div>
            <HeroSection />
        </div>
    
        <div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4'>
              {productsData.loading && "fetching data"}
              {productsData.error && "fetching error"}
              {productsData.products.length>0 && 
                productsData.products.map((val,key)=>(
                  <div key={key} className="product relative border-2 border-gray-600">
                    <div className='scale-50'><img src={val.image} /></div>
                    <div className='text-gray-300'>{val.category}</div>
                    <div className=''>{val.title}</div>
                    <div>${val.price}</div>
                    <div className='product-buttons text-2xl absolute top-20 right-20 opacity-0 transition-opacity duration-300'> 
                      <button onClick={()=>dispatch(addCardBox(val))}> <AiOutlinePlus /> </button>
                      <Link to="CardDetail"> 
                        <button onClick={()=>dispatch(detailCard(val))}>
                          <AiFillEye /> 
                        </button>
                      </Link>
                    </div>
                  </div>
              ))
              }
            </div>
        </div>
    </div>
  )
}

export default ProductsView