import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import { useContext } from 'react'

export default function ProductDetails() {
    const { id } = useParams()
    const { loading, setLoading, error, setError, productDetails, setProductDetails, addToCart, cartItems } = useContext(ShoppingCartContext)
    const navigate = useNavigate()
    async function fetchProductDetails() {
        try {
            setLoading(true)

            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const result = await response.json()
            if (result) {
                setProductDetails(result)
                setLoading(false)
            }
        }
        catch (error) {
            setError(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])

    if (loading) {
        return <h1 className='text-3xl font-bold text-center'>Products details being loaded...</h1>
    }

    if (error) {
        return <h1 className='text-3xl font-bold text-center'>An Error Occurred! {error}</h1>
    }

    return (
        <div>
           <div className='m-3'>
                <button onClick={()=> navigate("/")} className='border text-lg p-2 rounded-lg flex justify-center items-center gap-2'><img src="https://cdn-icons-png.flaticon.com/128/8050/8050812.png" alt="" className='h-8 w-8 inline' /> Back</button>
            </div>
            <div className='p-3 flex justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-center items-center shadow-md shadow-gray-600 rounded-lg p-3 gap-12'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center px-4 py-10 rounded-xl shadow-lg shadow-gray-500'>
                            <img src={productDetails.thumbnail} alt={productDetails.title} className='w-4/5 rounded object-cover' />
                        </div>  
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-2xl font-extrabold text-center'>{productDetails?.title}</h2>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            <p className='text-xl font-bold'>${productDetails?.price}</p>
                        </div>
                        <div className='m-3 flex flex-col gap-3'>
                            <button disabled={cartItems.findIndex((item)=> item.id === productDetails.id) > -1} onClick={()=> addToCart(productDetails)} className='disabled:opacity-65 px-8 py-3 md:px-6 md:py-3 lg:px-14 border border-black text-xs md:text-sm font-semibold rounded'>{cartItems.findIndex((item)=> item.id === productDetails.id) > -1 ? "Added in the Cart" : "Add to Cart"}</button>
                            <button onClick={()=> navigate("/cart")} className='px-8 py-3 md:px-6 md:py-3 lg:px-14 bg border bg-green-800 hover:bg-green-600 active:bg-green-500 text-white text-xs md:text-sm font-semibold rounded-md'>Go to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
