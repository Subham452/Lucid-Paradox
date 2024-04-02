import React from 'react'
import Hero_Page from './Hero_Page'

const Home = () => {
  const arr = [
    {
      img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1711876357~exp=1711879957~hmac=4afabeac02fd1dec92b9ed557ad7754973b3356953d9179966506f7622200aae&w=740"
    },
    {
      img: "https://img.freepik.com/premium-photo/memoji-emoji-handsome-smiling-man-white-background_826801-6999.jpg?w=740"
    },
    {
      img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1711876492~exp=1711880092~hmac=d552dc0b0603b1fa252944926f886560e22e529ea5388adb3f4c4609909fd5d2&w=740"
    },
    {
      img: "https://img.freepik.com/free-photo/3d-render-little-boy-with-eyeglasses-blue-shirt_1142-50994.jpg?t=st=1711876508~exp=1711880108~hmac=497335f2bff0001b6af997fb3cd223e62fceb67580604db0361be7b260eb2cfc&w=740"
    },
    {
      img: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611722.jpg?w=740&t=st=1711876428~exp=1711877028~hmac=48414817e8027ac74baaa02e2b06724ab6275bb587c490154c1c3f5b40d7adc5"
    },
  ]
  return (
    <div>
      <Hero_Page />
      <div className='flex items-center justify-center w-screen h-auto mt-20 overflow-hidden '>
        <div className='flex flex-col items-center justify-between w-full h-auto px-20'>
          <div className='flex flex-col items-center justify-between w-full h-auto lg:flex-row'>
            <div className='flex flex-col gap-3 '>
              <h1 className='hidden space-x-4 text-3xl font-semibold lg:inline'>Go From<br />to website in<br />no time.</h1>
              <h1 className='space-x-4 text-3xl font-semibold lg:hidden'>Go From to website in<br />no time.</h1>
              <p className='hidden font-semibold text-slate-600 lg:inline-block'>Without any effort, save a ton,<br />of time.</p>
              <p className='font-semibold lg:hidden text-slate-600'>Without any effort, save a ton, of time.</p>
              
              <div className='flex lg:mb-0 mb-14 flex-row py-2 items-center justify-between h-[2.5rem] w-auto rounded-md bg-white border-2 border-slate-100 mt-14'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <input placeholder='Your email' className=' h-full w-[8rem] outline-none' type="email" name="" id="" />
                <button className=" h-[2rem] flex justify-center items-center w-[2rem]  bg-blue-500 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              </div>
            </div>

            <div className='flex flex-col items-center justify-between gap-5 lg:flex-row'>
              <div className='flex flex-col items-center justify-between w-56 py-10 rounded-t-lg h-[20rem] bg-blue-600'>
                <span className=' bg-gradient-to-t from-white to-slate-400 via-white rotate-180 rounded-full h-[9rem] w-[9rem]'></span>
                <div className='flex flex-col items-center justify-center gap-3 '>
                  <span className='h-5 rounded-md bg-black/40 w-28'></span>
                  <span className='h-2 rounded-md bg-black/40 w-36'></span>
                  <span className='h-2 rounded-md bg-black/40 w-28'></span>
                </div>
              </div>

              <div className='flex flex-col items-center justify-between w-56 py-10 rounded-t-lg h-[20rem] bg-sky-600/20'>
                <div className='flex flex-col items-center justify-center gap-3 '>
                  <span className='h-5 rounded-md bg-black/40 w-28'></span>
                  <span className='h-2 rounded-md bg-black/40 w-36'></span>
                  <span className='h-2 rounded-md bg-black/40 w-28'></span>
                </div>
                <span className=' bg-gradient-to-t from-white to-green-000 via-sky-100 rotate-45 shadow-md rounded-full h-[4rem] w-[4rem]'></span>
                <span className=' absolute bg-gradient-to-t from-green-300 ml-[10rem] hidden mt-[10rem] to-black/55 rotate-45 shadow-md rounded-full h-[1.5rem] w-[1.5rem]'></span>
                <span className=' bg-gradient-to-t from-sky-300 to-sky-800 rotate-180 hidden shadow-md absolute mt-[8rem] -ml-[5rem] rounded-full h-[1.7rem] w-[1.7rem]'></span>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between w-full mt-20 h-96 bg-slate-300/0'>
            <div className='hidden ' >
              <div className='rounded-full h-44 bg-gradient-to-t from-sky-400/55 to-black blur-lg w-44'>

              </div>
            </div>

            <div className='flex items-center justify-between w-full h-auto rounded-md bg-gradient-to-r from-white via-white to-slate-200'>
              <div>
                <img className=' h-[30rem] lg:inline-block hidden' src="./LP_4 (1).png" alt="" />
                <div className='mt-96 lg:mt-0'>
                  <span className='absolute w-10 h-10 -mt-44 rounded-full bg-gradient-to-r from-sky-800 to-sky-300 lg:inline-block hidden -rotate-[40deg]'></span>
                  <span className='absolute w-10 h-10 -mt-[20rem] ml-80 rounded-full bg-gradient-to-r from-yellow-500 to-orange-900 -rotate-[40deg]'></span>
                  <span className='absolute w-10 h-10 -mt-20 ml-[20rem] rounded-full bg-gradient-to-r from-green-800 to-green-300 -rotate-[40deg]'></span>
                </div>
              </div>

              <div className='flex flex-col items-start justify-end w-auto h-auto gap-2 mr-5'>
                <p className='text-3xl font-semibold '>Integrate your<br />3D designs</p>
                <h3 className='hidden text-sm font-semibold text-sky-700 lg:inline-block'>Without any effort, save a ton of<br />time .</h3>
                <h3 className='text-sm font-semibold text-sky-700 lg:hidden'>Without any effort, save a ton of time .</h3>
                <div className=' h-auto flex -ml-5 mt-8 px-5 flex-col justify-center items-center w-[20rem] bg-black/0'>
                  <div className='flex items-center justify-start w-full h-16 gap-6 border-t-2 border-b-2 border-black/20 bg-green-300/0'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-violet-200'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-framer"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" /></svg>
                    </div>
                    <h1 className='text-lg font-semibold '>Frammer</h1>
                  </div>

                  <div className='flex items-center justify-start w-full h-16 gap-6 border-b-2 border-black/20 bg-green-300/0'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-sky-200'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-eye"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="1" /><path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" /></svg>
                    </div>
                    <h1 className='text-lg font-semibold '>AI</h1>
                  </div>

                  <div className='flex items-center justify-start w-full h-16 gap-6 border-b-2 border-black/20 bg-green-300/0'>
                    <div className='flex items-center justify-center w-10 h-10 bg-green-200 rounded-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-webhook"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" /><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" /><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" /></svg>
                    </div>
                    <h1 className='text-lg font-semibold '>Wenflow</h1>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full h-auto px-20 mt-32 bg-violet-000'>
            <div className='flex flex-col items-center justify-evenly '>
              <h1 className='font-mono text-4xl font-semibold lg:text-5xl'>Ready to use Paradox?</h1>
              <h3 className='pt-2 text-sm font-semibold text-slate-500'>Join Thousant users and teams in the community</h3>
              <div className='flex flex-row items-center justify-center w-auto h-auto gap-6 mt-10'>
                {
                  arr.map((i, j) => (
                    <div>
                      <div key={i}>
                        <img src={i.img} className={` rounded-full  shadow-md w-14 h-14`} alt="" />
                      </div>
                    </div>
                  ))
                }
              </div>
              <div>
                <button className='w-auto h-auto px-3 py-2 mt-6 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg'>Get Started</button>
              </div>

              <div className='flex flex-col items-center justify-center w-full h-auto'>
                <h1 className='mt-24 font-mono text-4xl font-bold'>Pricing Plans</h1>
                <p className='mt-4 font-semibold text-slate-700'>No cost card requested. All plans came with a free <br /></p>
                <p className='mt-0 font-semibold text-slate-700'>30-days trail of our Premium features.</p>

                <div className='flex flex-row justify-center mt-8 '>
                  <div className='flex flex-row justify-center w-auto h-auto gap-2 p-1 shadow-md rounded-xl bg-slate-100 '>
                    <button className='h-10 text-sm font-semibold bg-white rounded-md shadow-md w-28'>Pay Monthly</button>
                    <button className='h-10 text-sm font-semibold rounded-md bg-white/0 w-28 '>Pay annualy</button>
                    <div className='absolute w-2 h-2 -mr-[14.5rem] -mt-1 rounded-full shadow-md bg-sky-800 animate-ping'>

                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-center justify-between w-full h-auto gap-10 p-0 border-2 shadow-md lg:gap-0 lg:flex-row shadow-black/1 border-slate-100/10 mt-14 '>
                <div className=' h-[36rem]  justify-center items-center flex border-slate-200 border-r-2 w-[18rem] bg-black/0'>
                  <div className='h-[36rem] flex flex-col justify-between items-center  transition-all duration-300 w-[18rem] bg-slate-50/55'>
                    <div className='h-[12rem] gap-1 pl-5 flex flex-col justify-center items-start w-full border-b-2 border-slate-200'>
                      <h1 className='text-4xl font-bold '>FREE</h1>
                      <h2 className='text-sm font-semibold text-slate-600'>3 Project & 1 Editor</h2>
                      <div>
                        <h1 className='mt-2 text-2xl font-bold '>$0 <span className=' text-slate-400'>/mon</span></h1>
                      </div>
                      <h2 className='mt-5 text-sm font-semibold '>For personal projects</h2>
                    </div>

                    <div className=' h-[24rem] w-full justify-center items-start flex'>
                      <div className='flex flex-col items-start justify-center w-[18rem] h-auto px-5'>
                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Instant Use</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Banner</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Design Canvas</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Modeling</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Instance Editor</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>3 Projects</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-0 justify-center shadow-md items-center flex bg-green-000 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f01414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban"><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Auto Save</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-0 justify-center shadow-md items-center flex bg-green-000 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f01414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban"><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Remove Water Mark</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-0 justify-center shadow-md items-center flex bg-green-000 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f01414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban"><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Add Urls</h1>
                        </div>
                      </div>
                      <div className='absolute w-24 justify-center items-center flex h-10 mt-[21rem] rounded-br-lg ml-[11rem] text-slate-300 font-bold text-xl shadow-lg bg-black '>PAY</div>

                    </div>
                  </div>
                </div>

                <div className=' h-[38rem] shadow-2xl shadow-yellow-500/50  justify-center items-center flex border-slate-200 border-r-2 w-[18rem] bg-black/0'>
                  <div className='h-[38rem] flex flex-col justify-between items-center shadow-xl transition-all duration-300 w-[18rem] bg-slate-50'>
                    <div className='h-[14rem] gap-1 pl-5 flex flex-col justify-center items-start w-full border-b-2 border-slate-200'>
                      <h1 className='text-4xl font-bold text-yellow-600 '>PREMIUM</h1>
                      <h2 className='text-sm font-semibold text-slate-600'>Unlimites Project & 1 Editor</h2>
                      <div>
                        <h1 className='mt-2 text-2xl font-bold '>$49 <span className=' text-slate-400'>/mon</span></h1>
                      </div>
                      <h2 className='mt-5 text-sm font-semibold '>For large organization & businesses</h2>
                    </div>

                    <div className=' overflow-hidden h-[24rem] w-full justify-center items-start flex'>
                      <div className='flex flex-col items-start justify-center w-[18rem] h-auto px-5'>
                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Instant Use</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Banner</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Design Canvas</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Modeling</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Instance Editor</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>3 Projects</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Auto Save</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Remove Water Mark</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-black rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Add Urls</h1>
                        </div>
                      </div>

                      <div className='absolute w-24 justify-center items-center flex h-10 mt-[21rem] rounded-br-lg ml-[11rem] text-yellow-300 font-bold text-xl shadow-lg bg-black '>PAY</div>

                    </div>
                  </div>
                </div>

                <div className=' h-[36rem]  justify-center items-center flex border-slate-200 border-r-2 w-[18rem] bg-black/0'>
                  <div className='h-[36rem] flex flex-col justify-between items-center  transition-all duration-300 w-[18rem] bg-slate-50/55'>
                    <div className='h-[12rem] gap-1 pl-5 flex flex-col justify-center items-start w-full border-b-2 border-slate-200'>
                      <h1 className='text-4xl font-bold text-sky-600 '>PRO</h1>
                      <h2 className='text-sm font-semibold text-slate-600'>100 Project & 3 Editor</h2>
                      <div>
                        <h1 className='mt-2 text-2xl font-bold '>$14 <span className=' text-slate-400'>/mon</span></h1>
                      </div>
                      <h2 className='mt-5 text-sm font-semibold '>For small team & startups</h2>
                    </div>

                    <div className=' h-[24rem] w-full justify-center items-start flex'>
                      <div className='flex flex-col items-start justify-center w-[18rem] h-auto px-5'>
                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Instant Use</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Banner</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Design Canvas</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Modeling</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Instance Editor</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>100 Projects</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Auto Save</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Remove Water Mark</h1>
                        </div>

                        <div className='flex items-center justify-start w-full h-10 gap-3 bg-black/0 '>
                          <div className=' h-[1.2rem] w-[1.2rem] p-1 justify-center shadow-md items-center flex bg-green-500 rounded-full' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg></div>
                          <h1 className='font-semibold font-semibol'>Add Urls</h1>
                        </div>


                      </div>


                      <div className='absolute w-24 justify-center items-center flex h-10 mt-[21rem] rounded-br-lg ml-[11rem] text-sky-300 font-bold text-xl shadow-lg bg-black '>PAY</div>
                    </div>
                  </div>
                </div>
              </div>


              <div className='flex flex-col items-center w-full mt-36 h-automt-36 justify-evenly '>
                <div className='flex items-center justify-center w-full rounded-md shadow-xl bg-gradient-to-r from-sky-300 to-blue-400 h-96 '>
                  <div className='flex flex-col items-center justify-center w-auto h-auto gap-4'>
                    <h1 className='text-2xl font-bold text-black'>Get Connected with Us</h1>
                    <div className='flex flex-row items-center justify-between gap-2 px-2 rounded-lg bg-black/55'>
                      <span className='  h-[2rem] w-[2rem] bg-transparent justify-center items-center flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></span>
                      <input placeholder='Your Name' className='h-10 text-white bg-transparent outline-none w-44' type="text" />
                    </div>
                    <div className='flex flex-row items-center justify-between gap-2 px-2 rounded-lg bg-black/55'>
                      <span className='  h-[2rem] w-[2rem] bg-transparent justify-center items-center flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></span>
                      <input placeholder='Your Email' className='h-10 text-white bg-transparent outline-none w-44' type="email" />
                    </div>
                    <div className='flex flex-row items-center justify-between gap-2 px-2 mt-3 bg-black rounded-full'>
                      {/* <span className='  h-[2rem] hidden w-[2rem] bg-transparent justify-center items-center flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></span> */}
                      <button className='h-10 rounded-full font-semibold  text-white bg-transparent bg-black outline-none w-[14rem] '>Net Notifies</button>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
