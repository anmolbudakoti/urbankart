import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-[#a42153] p-4 flex flex-col items-center gap-3'>
      <h1 className='text-white font-bold mt-2 md:text-lg'>Subscribe for Newsletter & latest updates!</h1>
      <div className='flex gap-1 justify-center items-center m-1 w-full'>
        <input className='p-1 rounded-xl md:p-2 md:w-80' type="text" name="newsletter" id="newsletter" placeholder='Your e-mail...' />
        <button className='p-1'>
          <img src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="subscribe" className='w-8 h-8 md:w-9 md:h-9' />
        </button>
      </div>
      <div className='flex justify-around w-full gap-4'>
        <div className='text-white transition'>
            <h3 className='bold md:text-lg'>Partnership</h3>
            <ul className='list-none text-xs md:text-sm text-gray-300 flex flex-col gap-2 mt-1 md:hover:scale-105 transition'>
              <li className='md:hover:text-white'><Link>Websites</Link></li>
              <li className='md:hover:text-white'><Link>Social Media</Link></li>
              <li className='md:hover:text-white'><Link>Branding</Link></li>
            </ul>
        </div>
        <div className='text-white transition'>
            <h3 className='bold md:text-lg'>About</h3>
            <ul className='list-none text-xs md:text-sm text-gray-300 flex flex-col gap-2 mt-1 md:hover:scale-105 transition'>
              <li className='md:hover:text-white'><Link>Our Projects</Link></li>
              <li className='md:hover:text-white'><Link>Career</Link></li>
            </ul>
        </div>
        <div className='text-white transition'>
            <h3 className='bold md:text-lg'>Support</h3>
            <ul className='list-none text-xs md:text-sm text-gray-300 flex flex-col gap-2 mt-1 md:hover:scale-105 transition'>
              <li className='md:hover:text-white'><Link>Support Request</Link></li>
              <li className='md:hover:text-white'><Link>Contact</Link></li>
            </ul>
        </div>
      </div>
      <div className='flex w-full justify-between items-center text-white border-t pt-3'>
        <p className='text-xs text-gray-300'>All Rights Reserved, 2024</p>
        <ul className='flex list-none gap-3 transition'>
          <li className='md:hover:scale-105'><Link><img className='w-5 h-5 md:w-7 md:h-7' src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="twitter" /></Link></li>
          <li className='md:hover:scale-105'><Link><img className='w-5 h-5 md:w-7 md:h-7' src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkedin" /></Link></li>
          <li className='md:hover:scale-105'><Link><img className='w-5 h-5 md:w-7 md:h-7' src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png" alt="instagram" /></Link></li>
        </ul>
      </div>
    </div>
  )
}
