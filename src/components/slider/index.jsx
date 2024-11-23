import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context'

export default function Slider() {
    
    const { Slides, currentIndex, goToNext, goToPrevious } = useContext(ShoppingCartContext)

    // useEffect(()=>{
    //    setTimeout(()=>{
    //         goToNext()
    //     },5000)
    // },[currentIndex])
    
    return (
        <div className='flex justify-center items-center'>    
            <div className='relative w-fit rounded-xl overflow-hidden my-3 border shadow-md shadow-gray-600'>
                <button className='absolute top-1/2 cursor-pointer z-10 p-2 -translate-y-1/2 left-3 opacity-60 hover:opacity-100' onClick={goToPrevious}>
                    <img src="https://cdn-icons-png.flaticon.com/128/8050/8050812.png" alt="previous-slide-button" className='w-8 h-8 md:w-12 md:h-12' />
                </button>
                <div className='transition-all'>
                    <img src={`${Slides[currentIndex]}`} alt="slide-image" className='w-full h-60 md:h-80 object-cover rounded-xl' />
                </div>
                <button className='absolute top-1/2 cursor-pointer z-10 p-2 -translate-y-1/2 right-3 opacity-60 hover:opacity-100' onClick={goToNext}>
                    <img src="https://cdn-icons-png.flaticon.com/128/8050/8050813.png" alt="next-slide-button" className='w-8 h-8 md:w-12 md:h-12' />
                </button>
            </div>
        </div>    
    )
}
