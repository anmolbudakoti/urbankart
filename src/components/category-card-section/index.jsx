import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import CardCategory from "../category-card";

export default function CategoryCard() {
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

  const firstFourCategory = category.slice(0,4)

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
    <div className="flex md:mx-5 md:my-2 lg:mx-6 justify-around items-center gap-2 p-1 lg:p-2 bg-slate-100 rounded-lg transition overflow-x-scroll md:overflow-hidden shadow-md shadow-gray-500 border border-gray-500">
      <div
        onClick={() => navigate("/category-list")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-105 cursor-pointer m-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/7183/7183999.png"
          alt="category"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-13 lg:w-13"
        />
        <p className="text-xs md:text-sm lg:text-lg font-semibold">Category</p>
      </div>
      {
        firstFourCategory?.length ?
        firstFourCategory.map((item)=>(
          <div key={item.url} onClick={()=> handleNavigate(item.slug)}>
             <CardCategory image={categoryImages[item.slug]} type={item.name}/>
          </div>
        )) : <h1 className="text-center">No Categories Found...</h1>
      }
    </div>
  );
}
