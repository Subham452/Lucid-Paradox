'use client'


import Link from 'next/link'
import React, { useState } from 'react'

const Header_1 = ({ name, img }) => {

    const [active, setActive] = useState(false)

    const name1 = name
    // const name2=name1.charAt(0)
    return (
        <div className=' sticky top-0 z-[100] '>
            <div className=' h-20 w-screen overflow-hidden justify-center items-center flex bg-white'>
                <div className=' h-full w-full mx-20 border-b-2 border-black/20 flex justify-between items-center' >
                    <svg id="logo-86" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC"></path><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z" fill="#007DFC"></path></svg>

                    <div className=' h-auto w-auto rounded-none bg-slate-200/0 justify-center items-center flex'>
                        <div className=' rounded-full h-auto w-auto px-3 py-2 bg-slate-000' >
                            <button className='w-auto h-auto px-3 py-2 text-sm font-semibold rounded-full bg-slate-100'><Link href={"/Register"}>{name ? `Welcome - ${name}` : "Sign in Please"}</Link></button>
                        </div>
                        <div className='flex items-center justify-center w-auto h-auto p-3 bg-black/0 ' onClick={() => {  setActive(!active) }}>

                            <div className='flex flex-col items-center justify-between gap-2' >
                                <span className={` transition-all duration-300 ${active ? "rotate-45 -mb-10" : "rotate-0"} h-[0.06rem] w-7 bg-black`} ></span>
                                <span className={` transition-all duration-300 ${active ? "-rotate-45" : "rotate-0"} h-[0.06rem] w-7 bg-black `} ></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`absolute ${active ? "" : " opacity-100 -right-[30rem] -mt-[30rem] "} transition-all duration-[1500ms] right-0 bg-white shadow-lg rounded-bl-2xl top-20 h-96 w-auto lg:w-96 `}>
                    <div className='flex flex-col items-center justify-center w-full h-full' onClick={() => { setActive(false) }}>
                        <div className='mx-10 lg:mx-0'>
                            <div className='flex flex-row items-center justify-start gap-4 '>
                                <div className='w-10 h-10 overflow-hidden border-2 rounded-full border-sky-400 bg-sky-300 '>
                                    <img src={img} alt="" />
                                    {/* <h1>{name2}</h1> */}
                                </div>
                                <h1 className='text-xl text-blue-400 '>{name}</h1>
                            </div>
                            <h1 className='text-lg font-bold lg:text-xl'>Welcome To  Subham Paradox</h1>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 px-6 mt-6 '>
                            <button className=' h-[3rem] text-sm justify-center rounded-full w-60 bg-red-400 items-center px-2 font-bold text-white border-pink-600 border-2'><Link href={"https://www.instagram.com/subhamofficialcode/"}>Connect With Instagram</Link></button>
                            <button className=' h-[3rem] text-sm w-60 justify-center rounded-full items-center px-2 font-bold text-white bg-sky-400 border-sky-600 border-2'><Link href="https://www.linkedin.com/in/subham-patnaik-85490a252/?originalSubdomain=in">Connect With Linkedin</Link></button>
                        </div>
                        <span className='absolute w-auto h-auto text-xl text-red-600 top-3 right-5'>CLOSE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header_1
