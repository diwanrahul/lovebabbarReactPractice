import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { IoArrowDownSharp, IoArrowForwardSharp } from "react-icons/io5";
const About = () => {
  const [rotate,  setRotate] = useState(0);
    useEffect(() => {
      window.addEventListener("mousemove", (e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX-window.innerWidth/2;
        let deltaY = mouseY-window.innerHeight/2;

        let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle-180)
      })
      return () => {
        
      };
    }, []);
    // console.log(rotate)
  return (
    <div 
    style={{background:"https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2000.png"}} 
    className='h-screen flex gap-4 p-5  z-[22] relative bg-white'>
        {/* <img className=' relative z-[-1] ' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2000.png" alt="" /> */}

        <div  className=' p-5 relative w-11/12 h-1/2 rounded-t-lg bg-re-500 mb-[8rem]'>
            <motion.h1 
            className='text-4xl ml-7 font-bold'>What defines us</motion.h1>
            <IoArrowDownSharp size="rem" style={{transform:`translate(-10%, -10%) rotate(${rotate}deg)`}} className={`bg-re-400  rotate-[${rotate}deg]`}/>
        </div>
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [5, 10] }}
        transition={{duration:1}}  className="p-8 ml-[9vw] mr-11 flex flex-col gap-[4rem] items-start">
            <h1 className='text-3xl font-bold'>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</h1>
            <p className='text-slate-500 text-lg font-semibold'>We are on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.</p>
            <button className=' transition-all ease-in-out duration-150 hover:bg-white hover:text-black hover:border-black border flex items-center gap-3 border-white bg-black text-white px-12 py-3 rounded-full'>Dive Into Our Culture <IoArrowForwardSharp/> </button>
        </motion.div>
    </div>
  )
}

export default About