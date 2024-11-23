import React, { useContext } from 'react'
import CategoryCard from '../../components/category-card-section'
import Slider from '../../components/slider'
import Card from '../../components/card'
import { ShoppingCartContext } from '../../context'
import ProductList from '../productList'

export default function HomePage() {
  
  const {products} = useContext(ShoppingCartContext)

  return (
    <div className='p-4'>
      <CategoryCard/>
      <Slider/>
      <div className='flex justify-center items-center gap-2 md:mx-5 md:my-2 md:gap-3 lg:mx-8 lg:gap-5'>
        <Card products={products} id={1} />
        <Card products={products} id={2} />
        <Card products={products} id={3} />      
      </div>
      <ProductList/>
    </div>
  )
}
