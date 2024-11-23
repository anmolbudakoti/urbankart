import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import CartItem from '../../components/cartItem'

export default function CartList() {
  
    const {cartItems} = useContext(ShoppingCartContext)
    const navigate = useNavigate()
  
    return (
    <div className='max-w-5xl mx-auto py-4 px-4'>
        <h1 className='text-2xl font-bold text-gray-800 text-center'>Cart Page</h1>
        <div className='m-3'>
          <button onClick={()=> navigate("/")} className='border text-lg p-2 rounded-lg flex justify-center items-center gap-2'><img src="https://cdn-icons-png.flaticon.com/128/8050/8050812.png" alt="" className='h-8 w-8 inline' /> Back</button>
        </div>
        <div className='grid md:grid-cols-3 gap-8 mt-12'>
          <div className='md:col-span-2 space-y-4'>
              {
                cartItems?.length ?
                cartItems.map((item)=>(
                  <div key={item.id}><CartItem item={item}/></div>
                )) : <h1 className='text-3xl font-bold text-center'>No items added in the Cart!</h1>
              }
          </div>
          <div className='bg-gray-100 rounded-lg p-4 h-max'>
            <h3 className='text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2'>Order Summary</h3>
            <ul className='text-gray-700 mt-4 space-y-2'>
              <p className='flex flex-wrap gap-4 text-sm font-bold'>Total <span>${cartItems.reduce((acc, curr)=> acc + curr.totalPrice, 0).toFixed(2)}</span></p>
            </ul>
            <div className='mt-5 flex gap-3'>
              <button disabled={cartItems.length === 0} className='disabled:opacity-65 text-xs md:text-sm px-3 md:px-4 py-3 md:py-3 bg-black text-white font-extrabold rounded-md'>Checkout</button>
              <button onClick={()=> navigate("/")} className='text-xs md:text-sm px-3 md:px-4 py-3 md:py-3 bg-black text-white font-extrabold rounded-md'>Continue Shopping</button>
            </div>
          </div>
        </div>
        
    </div>
  )
}
