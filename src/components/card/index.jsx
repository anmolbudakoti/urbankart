import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({products, id}) {
  
  const product = products.find((item)=> item.id === id)
  const navigate = useNavigate()

  function NavigateToDetails(id){
    navigate(`/product-details/${id}`)
  }

  if (!product) {
    return <div className='text-center'>Loading...</div>;
  }
  
  return (
    <div onClick={()=> NavigateToDetails(product.id)} className='cursor-pointer flex flex-col w-full justify-center items-center gap-1 border border-gray-400 shadow-md p-1 h-48 md:h-52 rounded-lg'>
        <div>
             <img src={product.thumbnail} alt="product-image" className='h-10 w-10 md:h-20 md:w-20' />
        </div>
        <div className= "text-center flex flex-col gap-5 justify-center">
            <h3 className='text-xs md:text-sm lg:text-lg'>{product.title}</h3>
            <h2 className='font-bold md:text-lg lg:text-xl'>@ Just ${product.price}</h2>
        </div>
    </div>
  )
}
