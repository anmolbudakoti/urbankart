import React, { useContext, useEffect } from 'react'
import { ShoppingCartContext } from '../../context'
import { useParams } from 'react-router-dom'
import ProductItem from '../../components/productItem'
import Filter from '../../components/filter'

export default function ListByCategory() {
    const {categoryProducts, setCategoryProducts, loading, setLoading, error, setError} = useContext(ShoppingCartContext)
    const {id} = useParams()

    async function fetchByCategory(){
        try{
            setLoading(true)

            const response = await fetch(`https://dummyjson.com/products/category/${id}`)
            const result = await response.json()
            const data = result.products

            if(data){
                setCategoryProducts(data)
                setLoading(false)
            }

        }
        catch(error){
            setError(error)
            setLoading(false)
        }

    }

    useEffect(()=>{
        fetchByCategory()
    },[id])

    if (loading) {
        return <h1 className='text-3xl font-bold text-center'>Products details being loaded...</h1>
    }

    if (error) {
        return <h1 className='text-3xl font-bold text-center'>An Error Occurred! {error}</h1>
    }

    return (
        <div className='md:mx-4 mb-3'>
        <h1 className='text-4xl font-bold p-4 text-center'>Our Featured Products</h1>
        <div className='m-3'>
            <Filter categoryProducts={categoryProducts} setCategoryProducts={setCategoryProducts}/>
        </div>
        
    </div>
  )
}
