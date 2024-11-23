import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context'
import ProductItem from '../productItem'

export default function Filter({categoryProducts, setCategoryProducts}) {
  
    const [filterType, setFilterType] = useState("")

    useEffect(()=>{
        if(filterType){
            sortProducts()
        }
    },[filterType])

    function sortProducts(){
        const sortedProducts = [...categoryProducts]
        if(filterType==="lowToHigh"){
            sortedProducts.sort((a,b)=> a.price - b.price)
        }
        else if(filterType==="highToLow"){
            sortedProducts.sort((a,b)=> b.price - a.price)
        }

        setCategoryProducts(sortedProducts)
    }


  
    return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <div className='p-2'>
            <h1 className='m-2 font-bold text-xl text-center'>Filter</h1>
            <select className='border border-gray-600 p-2 rounded-lg' value={filterType} onChange={(e)=> setFilterType(e.target.value)} name="productFilter" id="productFilter">
                <option value="">Default</option>
                <option value="highToLow">High to Low</option>
                <option value="lowToHigh">Low to High</option>
            </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5'>
            {
                categoryProducts?.length ? 
                categoryProducts.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-2'><ProductItem item={item}/></div>
                ))
                : <h3 className='text-3xl text-center font-bold'>No Products Found</h3>
            }
        </div>
    </div>
  )
}
