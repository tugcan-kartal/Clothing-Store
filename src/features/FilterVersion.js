//This page is not included in this project just back-up

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroSection from '../components/HeroSection';
import { fetchProducts } from './productSlice';
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { detailCard } from './cardDetailsSlice';
import { addCardBox } from './cardBoxSlice';

//There is some of css codes in index.css check it.Its about opacity hover

const ProductsView = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productReducer); ////Got from store we assigned named productReducer
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredProducts = productsData.products.filter(
    (product) =>
      product.title.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <div className="flex justify-center my-4">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            placeholder="Filter by title or category"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90vw] mx-auto my-[10vh]'>
          {productsData.loading && "fetching data"}
          {productsData.error && "fetching error"}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((val, key) => (
              <div key={key} className="relative flex flex-col my-4">
                <Link to="CardDetail">
                  <div onClick={() => dispatch(detailCard(val))} className='md:ml-0 ml-16 md:border-2 w-[20vw] md:h-[45vh] overflow-hidden'><img className='scale-75 hover:scale-100 transition ease-in-out delay-150 ' alt='not found' src={val.image} /></div>
                </Link>
                <div className='text-gray-400 text-lg my-2'>{val.category}</div>
                <div className='text-md font-semibol'>{val.title}</div>
                <div className='text-lg font-bold my-2'>${val.price}</div>
                <div className='text-2xl flex flex-col absolute top-0 left-0 text-pink-700 gap-y-4 hover:scale-110'>
                  <button onClick={() => dispatch(addCardBox(val))}> <AiOutlinePlus /> </button>
                  <Link to="CardDetail">
                    <button onClick={() => dispatch(detailCard(val))}>
                      <AiFillEye />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-red-500 my-4">No products found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsView
