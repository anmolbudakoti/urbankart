import React, { useCallback, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import CardCategory from '../../components/category-card';

export default function CategoryPage() {
    const { category, setCategory, loading, setLoading, error, setError, categoryImages } =
    useContext(ShoppingCartContext);
  const navigate = useNavigate();

  function handleNavigate(name) {
    navigate(`/category/${name}`);
  }

    const fetchCategoryList = useCallback(async()=> {
        try {
          setLoading(true);
    
          const response = await fetch(
            "https://dummyjson.com/products/categories"
          );
          const result = await response.json();
    
          if (result) {
            setCategory(result);
            setLoading(false);
          }
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      },[setCategory, setLoading, setError])
    
    
      useEffect(() => {
        fetchCategoryList();
      }, []);
    
      if (loading) {
        return (
          <h1 className="text-3xl font-bold text-center">Products details being loaded...</h1>
        );
      }
    
      if (error) {
        return <h1 className="text-3xl font-bold text-center">An Error Occurred! {error}</h1>;
      }
  
    return (
    <>
    <h1 className="text-3xl font-bold text-center m-3">All Categories</h1>
    <div className='m-3'>
      <button onClick={()=> navigate("/")} className='border text-lg p-2 rounded-lg flex justify-center items-center gap-2'><img src="https://cdn-icons-png.flaticon.com/128/8050/8050812.png" alt="" className='h-8 w-8 inline' /> Back</button>
    </div>
    <div className='grid grid-cols-2 md:grid md:grid-cols-3 md:mx-5 md:my-2 lg:mx-6 place-items-center place-content-center gap-2 p-1 lg:p-2 bg-slate-100 rounded-lg transition overflow-x-scroll md:overflow-hidden shadow-md shadow-gray-500 m-3'>
        {
            category?.length ?
            category.map((item)=>(
                <div key={item.url} onClick={()=> handleNavigate(item.slug)}>
                    <CardCategory type={item.name} image={categoryImages[item.slug]}/>
                </div>
            )) : <h1 className='text-center'>No Categories Found...</h1>
        }
    </div>
    </>
  )
}
