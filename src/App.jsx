import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductList from './pages/productList'
import ProductDetails from './pages/productDetails'
import CartList from './pages/cartList'
import HomePage from './pages/home'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ListByCategory from './pages/ListByCategory'
import CategoryPage from './pages/category'
import ResultPage from './pages/search-result-page'

function App() {


  return (
    <div className='wrapper'>
      <NavBar/>
      <Routes>
      <Route exact path={"/"} element={<HomePage/>} />
      <Route exact path={"/products"} element={<ProductList/>} />
      <Route exact path={"/product-details/:id"} element={<ProductDetails/>} />
      <Route exact path={"/cart"} element={<CartList/>} />
      <Route exact path={"/category/:id"} element={<ListByCategory/>}/>
      <Route exact path={"/category-list"} element={<CategoryPage/>}/>
      <Route exact path={"/search"} element={<ResultPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
