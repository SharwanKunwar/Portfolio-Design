'use client'
import React, { useState,useEffect } from 'react'
import {motion} from 'motion/react'
import Image from 'next/image';


function LongProjects() {

    const [visibleOverlayIndex, setVisibleOverlayIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // ✅ Detect mobile device based on screen width
        useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
        }, []);
    
      
      const toggleOverlay = (index) => {
        setVisibleOverlayIndex((prev) => (prev === index ? null : index));
      };

       // Scroll to top on mount
        useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);

    const projects = [
  
    {
      title: 'Personal Portfolio',
      description:'A responsive and modern personal portfolio built with Next.js and Tailwind CSS, showcasing my projects, skills, and passion for full-stack development.',
      ImgUrl: '/Work/work001.png',
      projectLink: 'https://sharwan-jung-kunwar.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Sharwan-Jung-Kunwar',
    },
    {
      title: 'My Portfolio 07',
      description: 'My Portfolio 07 is a personal website showcasing my projects, skills, and passion. With a clean design and smooth navigation, it highlights my work, tech stack, and contact information.',
      ImgUrl: '/Work/work01.png',
      projectLink: 'https://sharwankunwar.github.io/My-Portfolio-07/',
      sourceLink: 'https://github.com/SharwanKunwar/My-Portfolio-07',
    },
    {
      title: 'Programming Notes',
      description: 'Programming Notes is a responsive web app that helps developers organize and access key concepts. Explore notes, syntax, and examples—all in one place. Built for simplicity and learning.',
      ImgUrl: '/Work/work02.png',
      projectLink: 'https://programming-notes-eight.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Programming-Notes',
    },
    {
      title: 'Home Page',
      description: 'A responsive UI project built using Material UI and React. It showcases a modern design with clean layout and components, reflecting Google’s Material Design principles. #MaterialUI',
      ImgUrl: '/Work/HomePage.png',
      projectLink: 'https://sharwankunwar.github.io/Web-UI/',
      sourceLink: 'https://github.com/SharwanKunwar/Web-UI',
    },
     {
      title: 'Todo App',
      description: 'Todo App is a sleek and responsive task manager that lets users add, edit, and delete tasks with ease. It features clean UI, smooth interactions, and modern web technologies for a seamless experience.',
      ImgUrl: '/Work/todo.png',
      projectLink: 'https://progress-tracker-drab.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Progress-Tracker',
    },
     {
      title: 'Smart video player',
      description: 'Smart Video Player is an intelligent video app that uses face tracking to play when the user is looking and pause when they look away. Built with react, tailwindCSS, and JavaScript for a smooth experience.',
      ImgUrl: '/Work/SmartVideoPlayer.png',
      projectLink: 'https://smart-video-player.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/SmartVideoPlayer',
    },
     {
      title: 'Portfolio Design',
      description: 'A modern portfolio site showcasing frontend skills, design, and live deployment on Vercel. only for big screen',
      ImgUrl: '/Work/portfolio.png',
      projectLink: 'https://portfolio-design-dusky.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Portfolio-Design',
    },
    {
      title: 'CasinoPlanet',
      description: 'CasinoPlanet is a web-based casino game with simple, fun gameplay. Built using HTML, CSS, and JavaScript, it offers a playful way to explore basic front-end development concepts.',
      ImgUrl: '/Work/work05.png',
      projectLink: 'https://sharwankunwar.github.io/Casino-online/',
      sourceLink: 'https://github.com/SharwanKunwar/Casino-online',
    },
    {
      title: 'Demo Digitalize Ideas',
      description: 'Demo Digitalize Ideas is a concept project showcasing a modern, responsive landing page layout. It reflects creative design and layout skills using HTML, CSS, and responsive techniques.',
      ImgUrl: '/Work/work06.png',
      projectLink: 'https://sharwan-jung-kunwar.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Frontend-development/tree/main/FRONTEND-PRACTICE%20PAGES/web04',
    },
    {
      title: 'The cars',
      description: 'Demo car showroom landing page',
      ImgUrl: '/Work/cars.png',
      projectLink: 'https://sharwan-jung-kunwar.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Frontend-development/tree/main/FRONTEND-PRACTICE%20PAGES/web04',
    },
    {
      title: 'Traval CheckPoint',
      description: 'Demo Trival site. build using motion, tailwindcss',
      ImgUrl: '/Work/travel.png',
      projectLink: 'https://travel-check-point.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Travel-checkPoint',
    },
    {
      title: 'Loaders animation',
      description:'A sleek and simple loaders animation built using Framer Motion, perfect for enhancing user experience with smooth, modern visuals.',
      ImgUrl: '/Work/Loaders.png',
      projectLink: 'https://loaders-motion.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Loaders-Motion',
    },
    {
      title: 'Heart 3D | R3F',
      description:'Explore an interactive 3D heart model built with React Three Fiber, Next.js, and Tailwind CSS. A creative demo showcasing WebGL, responsiveness, and modern UI in one project.',
      ImgUrl: '/Work/heart.png',
      projectLink: 'https://heart-3d-r3-f.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/heart-3d-R3F',
    },
    {
      title: '3D Scene | R3F',
      description:'Interactive 3D scene with GLB model, HDR lighting, smooth animations, and orbit controls, built using React Three Fiber, Next.js, and Tailwind CSS.',
      ImgUrl: '/Work/space.png',
      projectLink: 'https://3d-scene-mu.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/3D-Scene-R3F',
    },
    {
      title: '3D Book Slider | R3F | Three js | etc',
      description:'Interactive 3D book with page flipping, animated scrolling text, and realistic lighting, built using Next.js, React Three Fiber, and Tailwind CSS.',
      ImgUrl: '/Work/3dBook.png',
      projectLink: 'https://3-d-book-slider.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/3D-Book-Slider',
    },
  ];



  return (
    <div className="grid grid-cols-1 gap-10 py-7 md:grid-cols-2 ">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
            whileInView={{y: 0,opacity: 1,scale: 1,filter: 'blur(0px)'}}
            transition={{duration: 0.3,delay: index * 0.1,ease: 'easeInOut',}}
            viewport={{once:'true'}}
            className="bg-gray-50 dark:bg-neutral-600 rounded-sm p-2 group flex flex-col justify-center items-center relative overflow-hidden mastShadow dark:mastWhiteShadow "
          >
            {/* Overlay */}
            <motion.div
              onTap={isMobile ? () => toggleOverlay(index) : undefined}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{
                opacity: isMobile
                  ? visibleOverlayIndex === index
                    ? 1
                    : 0
                    : 0,
                filter: isMobile
                  ? visibleOverlayIndex === index
                    ? 'blur(0px)'
                    : 'blur(10px)'
                    : 'blur(10px)',
                scale: isMobile
                  ? visibleOverlayIndex === index
                    ? 1.01
                    : 1
                    : 1,
              }}
              whileHover={
                !isMobile
                  ? {
                      opacity: 1,
                      filter: 'blur(0px)',
                      scale: 1.01,
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className="absolute bg-gray-400/30 backdrop-blur-2xl w-full h-full flex p-5 z-30 flex-col gap-2 text-center justify-center rounded-md"
            >
              <h1 className="text-2xl font-bold text-white">{project.title}</h1>
              <p className="text-[13px] text-gray-50">{project.description}</p>
              <section className="mt-4 flex justify-center items-center gap-5">
                <a target="_blank" href={project.sourceLink}><button className="border border-white/30 w-[150px] h-[35px] rounded-sm text-sm text-gray-50 hover:bg-blue-400">Source Code</button></a>
                <a target="_blank" href={project.projectLink}><button className="border border-white/30 w-[150px] h-[35px] rounded-sm text-sm text-gray-50 hover:bg-blue-400">Live Preview</button></a>
              </section>
            </motion.div>

            {/* Image */}
            <Image
              src={project.ImgUrl}
              width={500}
              height={500}
              alt={project.title}
              className="object-cover rounded-sm group-hover:blur-[3px]"
            />

            {/* Title */}
            <h1 className=" left-0 top-54 text-[13px] font-bold text-neutral-400 mt-2 w-full">{project.title}</h1>
          </motion.div>
        ))}
      </div>
  )
}

export default LongProjects
