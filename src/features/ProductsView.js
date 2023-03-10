import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroSection from '../components/HeroSection'
import { fetchProducts } from './productSlice'


const ProductsView = () => {

  const dispatch=useDispatch();
  let productsData=useSelector((state)=>state.productReducer)   //got from store.js
  console.log(productsData)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[]);

  return (
    <div>
        <div>
            <HeroSection />
        </div>
    
        <div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4'>
              {productsData.loading && "fetching data"}
              {productsData.error && "fetching error"}
              {productsData.products.length>0 && 
                productsData.products.map((val,key)=>(
                  <div key={key}>
                    <div><img src={val.image} /></div>
                    <div className='text-gray-300'>{val.category}</div>
                    <div className=''>{val.title}</div>
                    <div>${val.price}</div>
                  </div>
              ))
              }
            </div>
        </div>
    </div>
  )
}

export default ProductsView