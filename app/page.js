'use client'
import React, { useEffect, useState } from 'react'
import Header from './_Components/Header'
import Home from "./_Components/Home"
import Footer from "./_Components/Footer"
import { auth } from './_Components/Firebase_Config'
import Header_1 from './_Components/Header_1'
const page = () => {

  const [userName, setUserName] = useState('')
  const [img_url, setImg_url] = useState('')
  useEffect(()=>{

     auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
        setImg_url(user.photoURL)
        // alert(user.displayName)
      }
      else{
        setUserName('')
        setImg_url('')
      }
      // alert(user)
      console.log(user)
     })
  }, [])
  return (
    <div className=' bg-white text-black h-auto w-screen overflow-hidden'>
      {/* <Header name={userName} img={img_url} /> */}
      <Header_1 name={userName} img={img_url} />
      <Home />
      <Footer /> 
    </div>
  )
}

export default page
