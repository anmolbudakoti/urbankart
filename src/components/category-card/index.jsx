import React from 'react'

export default function CardCategory({image, type}) {
  return (
    <div className='flex flex-col justify-center items-center w-24 md:w-28 lg:w-56 gap-1 hover:scale-105 cursor-pointer m-2 border border-gray-300 p-3 rounded-lg shadow-md'>
          <img src={image} alt={type} className='h-10 w-10 md:h-12 md:w-12 lg:h-13 lg:w-13' />
          <p className='text-xs md:text-sm lg:text-lg font-semibold text-center'>{type}</p>
        </div>
  )
}
