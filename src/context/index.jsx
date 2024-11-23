import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export const ShoppingCartContext = createContext(null)

function ShoppingCartState({children}){
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [productDetails, setProductDetails] = useState([])
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    const Slides = [
        "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-45.jpg",
        "https://img.freepik.com/free-psd/summer-sales-banner-template-with-colorful-triangular-shapes_23-2148151183.jpg",
        "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg",
        "https://img.freepik.com/free-psd/modern-sales-banner-template_23-2148995448.jpg"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [categoryProducts, setCategoryProducts] = useState([])
    const [category, setCategory] = useState([])
    const categoryImages = {
        beauty: "https://cdn-icons-png.flaticon.com/256/8872/8872354.png",
        fragrances: "https://cdn-icons-png.flaticon.com/128/14674/14674723.png",
        furniture: "https://cdn-icons-png.flaticon.com/256/4392/4392541.png",
        groceries: "https://cdn-icons-png.flaticon.com/256/10105/10105240.png",
        "home-decoration": "https://cdn-icons-png.flaticon.com/256/9496/9496786.png",
        "kitchen-accessories": "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
        laptops: "https://cdn-icons-png.flaticon.com/256/11483/11483681.png",
        "mens-shirts": "https://cdn-icons-png.flaticon.com/128/695/695593.png",
        "mens-shoes": "https://cdn-icons-png.flaticon.com/256/7603/7603499.png",
        "mens-watches": "https://cdn-icons-png.flaticon.com/256/7215/7215700.png",
        "mobile-accessories": "https://cdn-icons-png.flaticon.com/128/13692/13692024.png",
        motorcycle: "https://cdn-icons-png.flaticon.com/256/7152/7152364.png",
        "skin-care": "https://cdn-icons-png.flaticon.com/256/8685/8685988.png",
        smartphones: "https://cdn-icons-png.flaticon.com/256/8988/8988896.png",
        "sports-accessories": "https://cdn-icons-png.flaticon.com/256/7462/7462419.png",
        sunglasses: "https://cdn-icons-png.flaticon.com/256/7734/7734862.png",
        tablets: "https://cdn-icons-png.flaticon.com/256/7591/7591012.png",
        tops: "https://cdn-icons-png.flaticon.com/256/7430/7430568.png",
        vehicle: "https://cdn-icons-png.flaticon.com/256/6032/6032449.png",
        "womens-bags": "https://cdn-icons-png.flaticon.com/256/10142/10142719.png",
        "womens-dresses": "https://cdn-icons-png.flaticon.com/256/7425/7425945.png",
        "womens-jewellery": "https://cdn-icons-png.flaticon.com/256/10126/10126847.png",
        "womens-shoes": "https://cdn-icons-png.flaticon.com/256/7425/7425933.png",
        "womens-watches": "https://cdn-icons-png.flaticon.com/256/7215/7215703.png",
      }

    function goToPrevious() {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
        })
    }

    function goToNext() {
        setCurrentIndex((prevIndex) => {
            return prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
        })
    }

    async function fetchProducts(){
        try{
            setLoading(true)

            const response = await fetch("https://dummyjson.com/products?limit=100")
            const result = await response.json()
            const data = result.products

            if(data){
                setProducts(data)
                setLoading(false)
            }

        }
        catch(error){
            setError(error)
            setLoading(false)
        }

    }


    function addToCart(productDetails){
        let allCartItems = [...cartItems]
        const findItemIndex = allCartItems.findIndex((item)=> item.id === productDetails.id)
        if(findItemIndex === -1){
            allCartItems.push({
                ...productDetails,
                quantity: 1,
                totalPrice: productDetails?.price
            })
        }
        else{
            allCartItems[findItemIndex] = {
                ...allCartItems[findItemIndex],
                quantity: allCartItems[findItemIndex].quantity+1,
                totalPrice: (allCartItems[findItemIndex].quantity+1)*allCartItems[findItemIndex].price
            }
        }
        setCartItems(allCartItems)
        // localStorage.setItem("cartItems", JSON.stringify(allCartItems))
        navigate("/cart")
    }

    
    function removeFromCart(productDetails, completeRemove){
        let copyCartItems = [...cartItems]
        const findIndex = copyCartItems.findIndex((item) => item.id === productDetails.id)
        if(completeRemove){
            copyCartItems.splice(findIndex,1)
        }
        else{
            copyCartItems[findIndex] = {
                ...copyCartItems[findIndex],
                quantity: copyCartItems[findIndex].quantity-1,
                totalPrice: (copyCartItems[findIndex].quantity-1)*copyCartItems[findIndex].price
            }
        }

        // localStorage.setItem("cartItems", JSON.stringify(copyCartItems))
        setCartItems(copyCartItems)
    }

    useEffect(()=>{
        fetchProducts()
        // setCartItems(JSON.parse(localStorage.getItem("cartItems") || []))
    },[])


    return <ShoppingCartContext.Provider value={{products, setProducts, loading, error, setError, setLoading, productDetails, 
    setProductDetails, addToCart, cartItems, removeFromCart, Slides, currentIndex, goToNext, goToPrevious, 
    categoryProducts, setCategoryProducts, category, setCategory, categoryImages}}>
        {children}
    </ShoppingCartContext.Provider>
}

export default ShoppingCartState;