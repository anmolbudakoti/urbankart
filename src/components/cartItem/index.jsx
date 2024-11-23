import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

export default function CartItem({item}) {
  
    const {removeFromCart, addToCart} = useContext(ShoppingCartContext)
  
    return (
    <>
    <div className='grid grid-cols-3 items-start gap-5 mb-3 rounded-lg p-3'>
        <div className='col-span-2 flex items-start gap-4'>
            <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-lg'>
                <img src={item.thumbnail} alt={item.title} className='w-full h-full object-contain'/>
            </div>
            <div>
                <h3 className='text-base font-bold text-gray-900'>{item.title}</h3>
                <button onClick={()=> removeFromCart(item, true)} className='text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 mt-3 bg-black text-white font-extrabold rounded-md'>Remove</button>
            </div>
        </div>
        <div className='ml-auto'>
            <h3 className='text-lg font-bold text-gray-900'>${item?.totalPrice}</h3>
            <h4 className='text-sm md:text-lg font-bold text-gray-900'>Quantity: {item?.quantity}</h4>
            <div className='flex gap-3 mt-3 mr-3'>
                <button onClick={()=> removeFromCart(item, false)} disabled={item.quantity === 1} className=' disabled:opacity-65 text-sm px-4 py-1 bg-black text-white font-extrabold rounded-xl'>-</button>
                <button onClick={()=> addToCart(item)} className='text-sm px-3 py-1 bg-black text-white font-extrabold rounded-xl'>+</button>
            </div>
        </div>
    </div>
    <hr className='border-gray-500' />
    </>
  )
}
