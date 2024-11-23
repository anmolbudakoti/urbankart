import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'

export default function ProductItem({item}) {
  
    const navigate = useNavigate()
    const {addToCart, cartItems} = useContext(ShoppingCartContext)

    function NavigateToDetails(id){
        navigate(`/product-details/${id}`)
    }

    
  
    return (
    <div className='flex flex-col items-center justify-center gap-1 p-4 border border-gray-400 rounded-lg h-full shadow-lg shadow-gray-500 transition-all duration-500 lg:hover:scale-105'>
        <div>
            <img src={item.thumbnail} alt={item.title} height={"200px"} width={"200px"}/>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 m-1">
            <h2 className='text-sm md:text-lg lg:text-xl text-center font-bold'>{item.title}</h2>
            <h2 className='text-sm md:text-lg lg:text-xl animate-pulse opacity-90 font-bold rounded-full p-2 bg-red-800 text-white'>${item.price}</h2>
        </div>
        <div>
            <p className='hidden text-sm text-gray-700'>{item.description}</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-2 my-1 md:my-2 lg:my-3'>
            <button onClick={()=> NavigateToDetails(item.id)} className='rounded-lg p-2 md:p-3 text-sm md:text-lg font-bold bg-black text-white hover:bg-slate-600 active:bg-slate-400'>View details</button>
            <button disabled={cartItems.findIndex((allItem)=> allItem.id === item.id) > -1} onClick={()=> addToCart(item)} className='disabled:opacity-65 rounded-lg p-2 md:p-3 text-sm md:text-lg bg-blue-700 text-white font-bold hover:bg-blue-500 active:bg-blue-400'>Add to Cart</button>
        </div>
    </div>
  )
}
