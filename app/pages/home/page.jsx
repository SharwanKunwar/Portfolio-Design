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
          <h1><span className='text-neutral-300'>Follow me on</span> github 🌟</h1>
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

      

    {/* ///////////////////////////////////////////// */}
      <div className=' text-white px-20'>

      <br/><br/><br/><br/>
        <div id="education" className="flex justify-center p-2 border-t border-b border-black/30 text-3xl">Resume</div>
        <p className="pt-4 md:block hidden text-center text-neutral-500">Explore my journey through development projects and academic growth. This section highlights my work experience and education timeline, showcasing skills in both frontend and backend technologies including Java, Spring Boot, Android, and web development.</p>
        <p className="pt-4 md:hidden block text-center text-neutral-500">My journey in dev and education, with skills in Java, Spring Boot, Android & web.</p>
        <br /><br /><br />
        <div className="flex flex-col gap-2">
          <motion.h2 
          initial={{y:10,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="font-bold text-2xl">Work Experience</motion.h2>
          <motion.p
          initial={{y:20,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="text-neutral-500"
          >Quick glance at my frontend and backend skills, real-world projects, and growth as a software developer.</motion.p>
        </div>
        
        {/* work01 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative">

          <div className="absolute  w-5 left-0 top-0 rounded md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5 rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[50%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">Frontend Development</h1>
              <p className="text-indigo-500">July, 2025 - Current</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          >
            <div>
              <h1 className="font-bold text-[18px]">JavaScript / Nextjs</h1>
              <p className="text-[14px] mt-2 w-[90%] text-neutral-500">I began my frontend journey with HTML, CSS and javaScript, building simple static pages. Later, i explored Nextjs, which transformed the way i build modern web interfaces.</p>
              <p className="text-black font-bold mt-3 text-[14px]">I've Worked on several Frontent projects where i focused on:</p>
              <ol className="list-disc ml-4 text-[13px] mt-2 text-neutral-500">
                <li>Built with Next.js for server-side rendering and routing</li>
                <li>Styled using Tailwind CSS for responsive design</li>
                <li>Added smooth animations with Framer Motion</li>
                <li>Used lucide-react and react-icons for consistent iconography</li>
                <li>Implemented scroll-based navigation with active link highlighting</li>
              </ol>

            </div>
          </motion.div>
        </div>

        {/* work02 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[50%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">Exploring Programming</h1>
              <p className="text-indigo-500">Before 2025</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          >
            <div className="md:pl-5">
              <h1 className="font-bold text-[18px]">C / Java and Other programming practices</h1>
              <p className="text-[14px] mt-2 w-[90%] text-neutral-500">I focused mainly on programming fundamentals using <strong>C</strong> and <strong>Java</strong>. I practiced problem-solving, logic building, and core concepts like <strong>DSA</strong>, with diving into frontend or backend frameworks.</p>
              <p className="text-black font-bold mt-3 text-[13px]">I've worked on several projects:</p>
              <ol className="list-disc ml-4 text-[14px] mt-2 text-neutral-500">
                <li>Library management system</li>
                <li>Encryption and Decryption</li>
                <li>Condition based Ai 'lucifer'</li>
                <li>Student management system</li>
                <li>Several Games</li>
                <li>Menu based systems</li>
                <li>Password generator</li>
                <li>Units convertors</li>
              </ol>

            </div>
          </motion.div>
        </div>

        {/* //education */}

        <br /><br /><br /><br /><br /><br />
        <div className="flex flex-col gap-2">
          <motion.h2 
          initial={{y:10,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="font-bold text-2xl">Education</motion.h2>
          <motion.p
          initial={{y:20,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="text-neutral-500"
          >
            An overview of my academic journey, highlighting my qualifications, coursework and skills gained to support my professional growth.</motion.p>
        </div>
        
        {/* edu01 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative ">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[40%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">DLMSS - KAILALI</h1>
              <p className="text-indigo-500">2076 - 2078</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          className="w-full"
          >
            <div className=" w-full">
              <h1 className="font-bold text-[18px] ">High School Diploma, Passed +2</h1>
              <p className="pt-2 text-neutral-500 text-[14px]">Graduated with a strong academic record. Engaged in extracurricular activities and clubs.</p>
            </div>
          </motion.div>
        </div>

        {/* edu02 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative ">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[40%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">RR Campus [TU]</h1>
              <p className="text-indigo-500">2081 - 2084</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          className="w-full"
          >
            <div className=" w-full">
              <h1 className="font-bold text-[18px] ">Bachelor's Student BCA</h1>
              <p className="pt-2 text-neutral-500 text-[14px]">Currently pursuing a Bachelor's degree, i focus on academic growth and skill development through hands-on projects, coding club events, and tech meetups, while also dedicating time to online courses and personal projects.</p>
            </div>
          </motion.div>
        </div>

      </div>



      <div className=' text-white w-full flex justify-end items-end pr-20 gap-10 mt-10'>
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
