import React from 'react'
import {logo} from "../Assets/LP_2 (1).png"
const Hero_Page = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-screen h-auto py-20 overflow-hidden '>
        <div className='flex flex-row items-center justify-between w-full px-20 h-96 bg-gradient-to-r from-sky-100 to-sky-100/0 '>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='text-5xl font-semibold '>Subham Paradox</h1>
            <p className='text-md '>The Real-time & Powerfull <br /> 3D Design Website</p>
            <div className='flex flex-row items-center justify-center gap-4 mt-5 '>
              <button className=' h-[2.6rem] w-[7rem] rounded-full text-sm font-semibold text-white bg-blue-600'>Get Started</button>
              <button className=' h-[2.6rem] w-[7rem] rounded-full text-sm font-semibold text-black bg-white'>Learn More</button>
            </div>
          </div>

          <div>
            <div className='w-auto h-auto rounded-full -ml-44 bg-slate-200'>
              <img className=' hidden lg:inline h-[30rem]' src="./LP_2 (1).png" alt="" />
              <span className='absolute hidden lg:inline -mt-56 rounded-full ml-[30rem] bg-gradient-to-t from-sky-500 rotate-45 to-black h-14 w-14'></span>
              <span className='absolute hidden lg:inline -rotate-[60deg] rounded-full -mt-96 bg-gradient-to-t from-yellow-500 to-black h-14 w-14'></span>
              <span className='absolute hidden rounded-full lg:inline shadow-ld shadow-black bg-gradient-to-t from-green-500 to-black h-14 w-14'></span>
              {/* <span className='absolute rounded-full bg-gradient-to-t from-green-500 to-black h-14 w-14'></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero_Page
