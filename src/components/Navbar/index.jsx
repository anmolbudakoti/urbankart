import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../modal'
import LoginForm from '../login-form'
import SignUpForm from '../sign-up-form'

export default function NavBar() {
    
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    function closeSideMenu() {
        setIsOpen(false)
    }

    const handleOpenModal = (type) => {
        setModalType(type); 
        setIsModalOpen(true);
        setIsOpen(false)
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType("");
      };

    function handleSearch(e){
        e.preventDefault()
        if(query.trim()){
            navigate(`/search?query=${query}`)
            setQuery("")
            setIsOpen(false)
        }
    }


    return (
        <div className='bg-[#a42153] text-white flex justify-between items-center p-1 transition shadow-md shadow-slate-300'>
            <div className='flex justify-center items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/128/1040/1040254.png" alt="brand-image" className='h-8 w-8' />
                <h1 className='text-2xl lg:text-3xl font-bold'><Link to={"/"}>UrbanKart</Link></h1>
            </div>
            <ul className={`${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} md:translate-x-0 md:opacity-100 h-screen md:h-auto bg-[#a42153] md:bg-transparent flex flex-col md:flex-row justify-center items-center fixed md:sticky top-0 right-0 z-50 list-none xl:text-xl font-bold gap-3 lg:gap-4 xl:gap-4`}>
                <div className='flex justify-center items-center gap-2 lg:gap-4 m-6 md:m-3 xl:mr-20'>
                    <input value={query} onChange={(e)=> setQuery(e.target.value)} type="text" className='bg-gray-100 text-black w-52 md:w-60 lg:w-80 lg:text-lg p-2 font-semibold rounded-xl md:rounded-3xl lg:rounded-2xl' name="search" id="search" placeholder='Search for Products, Brands and more...' />
                    <button onClick={handleSearch} className='hover:opacity-80 active:opacity-100'>
                        <img src="https://cdn-icons-png.flaticon.com/128/16019/16019946.png" alt="search" className='h-10 w-10 lg:h-12 lg:w-12' />
                    </button>
                </div>
                <button className='absolute md:hidden top-3 right-4 flex'>
                    <img src="https://cdn-icons-png.flaticon.com/128/18239/18239170.png" onClick={closeSideMenu} alt="close-button" className='h-8 w-8 xl:h-8 xl:w-8' />
                </button>
                <li className='relative transition lg:mx-3 my-3'>
                    <button className='inline-block hover:scale-110' onClick={()=> closeSideMenu &&  handleOpenModal("login")}>Login</button>
                </li>
                <li className='relative transition lg:mx-3 my-3'><Link className='inline-block relative hover:scale-110' to={"/cart"} onClick={closeSideMenu}>Cart</Link></li>
                <li className='relative transition lg:mx-3 my-3 bg-gray-800 hover:bg-gray-700 active:bg-gray-600 p-2 xl:p-3 rounded-lg'><Link className='inline-block relative' onClick={()=> closeSideMenu &&  handleOpenModal("signup")}>Become a Seller</Link></li>
            </ul>
            <div className='flex md:hidden justify-center items-center'>
                <button onClick={toggleMenu}>
                    {
                        isOpen ?
                            <img src="https://cdn-icons-png.flaticon.com/128/2763/2763138.png" alt="side-menu-button" className='h-8 w-8 xl:h-8 xl:w-8' />
                            : <img src="https://cdn-icons-png.flaticon.com/128/8166/8166537.png" alt="side-menu-button" className='h-8 w-8 xl:h-8 xl:w-8' />

                    }
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {modalType === "login" && <LoginForm />}
                {modalType === "signup" && <SignUpForm />}
            </Modal>
        </div>
    )
}
