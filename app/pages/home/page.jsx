'use client'

import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image';

function page() {

  const ggi = " >";

  return (
    <>
      


  <motion.div 
  animate={{ 
      x: [0, -250, 80, 0, 0], // right → stay → left → back
      y: [0, 0, -100, -100, 0], // stay → up → stay → down
   }} // Moves up (-20px), then back to 0
  transition={{ duration: 20,  repeat: Infinity,  repeatType: 'loop',  ease: 'easeInOut' }}
  className="bg-purple-500 w-[400px] h-[400px] flex items-center justify-center absolute top-6/20 left-6/12 rounded-full"
  >
  a
  </motion.div>

  <div className=' w-full p-5 bg-black/30 backdrop-blur-2xl relative rounded-2xl'>


      <div className=' w-full flex'>
        <div className=' w-6/12 text-3xl py-5 pl-2 text-white font-bold '>
        <motion.h1 
        initial={{y:10,opacity:0,filter:'blur(10px)'}}
        animate={{y:0,opacity:1,filter:'blur(0px)'}}
        transition={{duration:0.3, ease:"easeInOut"}}
        className='mb-1'>Forntend Development</motion.h1>
        <motion.h1
        initial={{y:10,opacity:0,filter:'blur(10px)'}}
        animate={{y:0,opacity:1,filter:'blur(0px)'}}
        transition={{duration:0.3, ease:"easeInOut"}}
        >Unpredictable Coder</motion.h1>
        </div>

        <div className=' w-full flex justify-end items-end pr-5 text-sky-400 pb-5'>
          <h1>Subscribe Now {ggi}</h1>
        </div>

      </div>

      <div className=' p-2 flex gap-2'>

        <div className='w-full flex flex-col gap-2'>
        <div className='w-full  flex gap-2'>
          <motion.div 
          initial={{y:10,opacity:0,filter:'blur(10px)'}}
          animate={{y:0,opacity:1,filter:'blur(0px)'}}
          transition={{duration:0.3, ease:"easeInOut",delay:0.1}}
          className='w-[300px] h-[150px] bg-white/50 backdrop-blur-2xl border border-white/30 rounded flex justify-center items-center flex-col text-white mastShadow'>
          <h1 className='text-5xl'>100+</h1>
          <p className='text-neutral-300'>Completed Projects</p>
          </motion.div>
          <motion.div 
          initial={{y:10,opacity:0,filter:'blur(10px)'}}
          animate={{y:0,opacity:1,filter:'blur(0px)'}}
          transition={{duration:0.3, ease:"easeInOut",delay:0.2}}
          className='w-full h-[150px] bg-white/50 backdrop-blur-2xl border border-white/30 rounded flex justify-center items-center flex-col text-white mastShadow'>
          <h1 className='text-5xl'>Forntend</h1>
          <p className='text-neutral-300'>Development Expert</p>
          </motion.div>
        </div>
        <div className='w-full  flex gap-2'>
          <motion.div 
          initial={{y:10,opacity:0,filter:'blur(10px)'}}
          animate={{y:0,opacity:1,filter:'blur(0px)'}}
          transition={{duration:0.3, ease:"easeInOut",delay:0.3}}
          className='w-full h-[150px] bg-white/50 backdrop-blur-2xl border border-white/30 rounded flex justify-center items-center flex-col text-white mastShadow'>
          <h1 className='text-5xl'>50+</h1>
          <p className='text-neutral-300'>Happy Clients</p>
          </motion.div>
          <motion.div 
          initial={{y:10,opacity:0,filter:'blur(10px)'}}
          animate={{y:0,opacity:1,filter:'blur(0px)'}}
          transition={{duration:0.3, ease:"easeInOut",delay:0.4}}
          className='w-[300px] h-[150px] bg-white/50 backdrop-blur-2xl border border-white/30 rounded flex justify-center items-center flex-col text-white mastShadow'>
          <h1 className=''><span className='text-5xl'>3</span>years</h1>
          <p className='text-neutral-300'>Design Experience</p>
          </motion.div>
        </div>
        </div>
        <div className='w-6/7'>
        <motion.div 
        initial={{y:10,opacity:0,filter:'blur(10px)'}}
          animate={{y:0,opacity:1,filter:'blur(0px)'}}
          transition={{duration:0.3, ease:"easeInOut",delay:0.1}}
        className='bg-white/50 border border-white/30 backdrop-blur-2xl h-[306px] rounded flex justify-center items-center text-white mastShadow'>
          <div className='w-full h-full flex justify-center items-center flex-col p-10'>
            <h1 className='text-3xl mb-2'>Your ultimate solution for Frontend Development</h1>
            <p className='text-neutral-300'>Build stunning, responsive, and fast web interfaces. Your all-in-one solution for modern, efficient, and pixel-perfect frontend development.</p>
            <div className='w-full'>
              <button className=' text-black underline text-start text-[15px] mt-3'>Get Started {ggi}</button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

{/* //////////////// */}


      <div className='text-white flex p-2 gap-2 rounded'>
        <motion.div 
        initial={{y:10,opacity:0,filter:'blur(10px)'}}
          animate={{y:0,opacity:1,filter:'blur(0px)'}}
          transition={{duration:0.3, ease:"easeInOut",delay:0.1}}
        className='w-6/12 bg-gray-400/60 p-5 rounded flex flex-col justify-center items-end'>
        <div className='w-full text-center'>
          <h1 className='text-2xl'>Featured Projects</h1>
          <button className='text-[15px] text-indigo-400'>View All {ggi}</button>
        </div>
        <div className='bg-red-400/10 backdrop-blur-2xl rounded-2xl mt-3 flex p-5'>
          <Image className='rounded mastShadow' src='/Fword.png' width={600} height={600} alt="img" />
        </div>
        </motion.div>

        <motion.div 
        initial={{y:10,opacity:0,filter:'blur(10px)'}}
        animate={{y:0,opacity:1,filter:'blur(0px)'}}
        transition={{duration:0.3, ease:"easeInOut",delay:0.1}} 
        className='w-6/12 bg-gray-400/60 p-5 rounded'>
        <h1 className='text-2xl '>Trusted by</h1>
        <div className=' w-full p-2 mt-5 flex gap-5 flex-wrap'>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
          <div className='bg-gray-50 w-[150px] h-[50px] rounded flex justify-center items-center mastShadow'>a</div>
        </div>
        </motion.div>
      </div>

      <div className=' text-white w-full flex justify-center items-center gap-10 mt-5'>
        <button>Github</button>
        <button>Linkdin</button>
        <button>Facebook</button>
        <button>Instagram</button>
      </div>






    </div>
    </>
  )
}

export default page
