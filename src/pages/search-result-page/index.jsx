import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context';
import { useLocation } from 'react-router-dom';
import ProductItem from '../../components/productItem';

export default function ResultPage() {
  
  const {products} =useContext(ShoppingCartContext)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [query, products]);
  
    return (
    <div className="p-4">
      <h2 className="text-xl font-bold">
        Search Results for: <span className="text-blue-500">{query}</span>
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-4'>
            {
                filteredProducts?.length ? 
                filteredProducts.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-2'><ProductItem item={item}/></div>
                ))
                : <h3 className='text-3xl font-bold text-center'>No Products Found</h3>
            }
        </div>
    </div>
  );
}
