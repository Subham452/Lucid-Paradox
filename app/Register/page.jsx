'use client'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, provider } from '../_Components/Firebase_Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation'



const page = () => {

  const [active, setActive] = useState(false)
  const [bg, setBg] = useState("black")

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');



  const router = useRouter();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      router.push("/")

    }

    catch (err) {
      alert(err.message)
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use")
        router.push("/")
      }
      else if(err.code ==="auth/admin-restricted-operation"){
        router.push("Register")
      }
      else {
        router.push("/Register")
      }
    }
  }

  // const signin = ()=>{
  //   try{
  //     const user = signInWithEmailAndPassword(email1, password1)
  //   }
  //   catch(err){
  //     console.log(err.message)
  //     alert(err.code)
  //     if(err.code==="auth/invalid-email"){
  //       alert("Invalid Email")
  //       router.push("/")
  //     }
  //   }
  // }

  const signin = async()=>{
    try{
      const user = await signInWithEmailAndPassword(auth, email1, password1)
      router.push("/")
    }
    catch(err){
      console.error(err.message)
      // alert(err.code)
      if(err.code==="auth/email-already-in-use"){
        alert("allredy have an account")
        router.push("/")
      }
    }
  }

  const google = async()=>{
    try{
      const user = await signInWithPopup(auth, provider)
      router.push("/")
    }
    catch(err){
      console.error(err.message)
      alert(err.code)
    }
  }

  return (
    <div>
      <div className={` bg-white text-black  flex items-center justify-center w-screen h-screen bg-black/0`}>
        <div className='flex gap-10 bg-white/0  h-[40rem] rounded-lg flex-col justify-center items-center w-auto'>
          <div className='flex flex-row items-center justify-center w-auto h-auto gap-4 ' >
            <svg id="logo-86" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC"></path><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z" fill="#007DFC"></path></svg>
            <h1 className='text-2xl font-bold '>Subham Paradox</h1>
          </div>

          <div className='flex flex-row items-center justify-between w-auto h-auto bg-green-100'>
            <button className={`h-14 w-[8.90rem] justify-center font-semibold text-sm items-center border-t-[0.17rem] flex ${active ? " border-slate-400" : "border-transparent "} bg-white `} onClick={() => { setActive(true); }}>Sign in</button>
            <button className={` h-14 w-[8.90rem] justify-center font-semibold text-sm items-center flex border-t-[0.17rem] bg-white ${active ? " border-transparent" : " border-t-[0.17rem] border-slate-400"} `} onClick={() => { setActive(false); }}>Create an Account</button>
          </div>

          <div className='w-[40rem] px-10 flex flex-row justify-center items-center h-auto '>

            <div className={` ${active ? "" : "hidden"} h-96 w-[18rem] bg-black/0`}>
              <div className='flex flex-col items-center justify-start w-full h-full gap-3'>
                {/* <div className=' h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white border-[0.17rem] border-slate-400'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <FcGoogle />
                    <p className='text-sm font-bold '>Continue with Google</p>
                  </div>
                </div> */}

                {/* <div className=' h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white border-[0.17rem] border-slate-400'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <FaGithub />
                    <p className='text-sm font-bold '>Continue with Google</p>
                  </div>
                </div> */}

                {/* <div className=' h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <p className='text-sm font-bold text-slate-400 '>Or sign in with email</p>
                  </div>
                </div> */}

                <div className=' h-[3rem] rounded-lg flex justify-start  items-center w-full bg-slate-100'>
                  <div className='flex flex-row w-auto h-[2rem]  gap-3 '>
                    <svg className='my-auto ml-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    {/* <p className='text-sm font-bold '>Continue with Google</p> */}
                    <input className='w-full outline-none border-none h-[2rem] text-black bg-transparent' placeholder='Email' type="email" onChange={(e) => { setEmail(e.target.value) }} />
                  </div>
                </div>

                <div className=' h-[3rem] rounded-lg flex justify-start  items-center w-full bg-slate-100'>
                  <div className='flex flex-row w-auto h-[2rem]  gap-3 '>
                    <svg className='my-auto ml-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    {/* <p className='text-sm font-bold '>Continue with Google</p> */}
                    <input className='w-full h-[2rem] outline-none text-black bg-transparent' placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }} />
                  </div>
                </div>

                <button className=' h-[2.5rem] mt-6 w-full bg-blue-500 rounded-full font-bold text-white' onClick={register}>Sign in</button>
                <h1 className='mt-5 text-sm font-semibold text-slate-500'>Or Other</h1>
                <div className=' mt-3 h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white border-[0.17rem] border-slate-400'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <FcGoogle />
                    <p className='text-sm font-bold ' onClick={google}>Continue with Google</p>
                  </div>
                </div>
                {/* <button onClick={() => { router.push("/") }}>Royter</button> */}
              </div>
            </div>

            <div className={` ${active ? "hidden" : ""} h-96 w-[18rem] bg-black/0`}>
              <div className='flex flex-col items-center justify-start w-full h-full gap-3'>
                <div className=' h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white border-[0.17rem] border-slate-400'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <FcGoogle />
                    <p className='text-sm font-bold ' onClick={google}>Continue with Google</p>
                  </div>
                </div>

                <div className=' h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white border-[0.17rem] border-slate-400'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <FaGithub />
                    <p className='text-sm font-bold text-red-600 '>Currently Not available</p>
                  </div>
                </div>

                <div className=' h-[3rem] rounded-full flex justify-center items-center w-full hover:bg-slate-50 bg-white'>
                  <div className='flex flex-row w-auto h-auto gap-3'>
                    <p className='text-sm font-bold text-slate-400 '>Or Register with email</p>
                  </div>
                </div>

                <div className=' h-[3rem] rounded-lg flex justify-start  items-center w-full bg-slate-100'>
                  <div className='flex flex-row w-auto h-[2rem]  gap-3 '>
                    <svg className='my-auto ml-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <input className='w-full outline-none border-none h-[2rem] text-black bg-transparent' placeholder='Email' type="email" onChange={(e)=>{ setEmail1(e.target.value)}} />
                  </div>
                </div>

                <div className=' h-[3rem] rounded-lg flex justify-start  items-center w-full bg-slate-100'>
                  <div className='flex flex-row w-auto h-[2rem]  gap-3 '>
                    <svg className='my-auto ml-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <input className='w-full h-[2rem] outline-none text-black bg-transparent' placeholder='Password' type="password" onChange={(e)=>{ setPassword1(e.target.value)}} />
                  </div>
                </div>

                <button className=' h-[2.5rem] mt-6 w-full bg-blue-500 rounded-full font-bold text-white' onClick={signin}>Create an Accout</button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page
