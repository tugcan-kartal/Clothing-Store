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
    <div>


        <div>
            <HeroSection />
        </div>
    
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90vw] mx-auto my-[10vh]'>
              {productsData.loading && "fetching data"}
              {productsData.error && "fetching error"}
              {productsData.products.length>0 && 
                productsData.products.map((val,key)=>(

                  <div key={key} className="relative flex flex-col my-4">

                    <div className='md:ml-0 ml-16 md:border-2 w-[20vw] md:h-[45vh] overflow-hidden'><img className='scale-75 hover:scale-100 transition ease-in-out delay-150 ' alt='not found' src={val.image} /></div>
                    <div className='text-gray-400 text-lg my-2'>{val.category}</div>
                    <div className='text-md font-semibol'>{val.title}</div>
                    <div className='text-lg font-bold my-2'>${val.price}</div>

                    <div className='text-2xl flex flex-col absolute top-0 left-0 text-pink-700 gap-y-4 hover:scale-110'> 
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