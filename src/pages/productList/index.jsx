import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import ProductItem from '../../components/productItem'

export default function ProductList() {
    
    const {products, loading, error} = useContext(ShoppingCartContext)

    if(loading){
        return <h1 className='text-3xl font-bold text-center'>Products are being loaded...</h1>
    }

    if(error){
        return <h1 className='text-3xl font-bold text-center'>An Error Occurred! {error}</h1>
    }

    return (
    <div className='md:mx-4 mb-3'>
        <h1 className='text-4xl font-bold p-4 text-center'>Our Featured Products</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5'>
            {
                products && products.length > 0 ? 
                products.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-2'><ProductItem item={item}/></div>
                ))
                : <h3 className='text-3xl font-bold text-center'>No Products Found</h3>
            }
        </div>
    </div>
  )
}
