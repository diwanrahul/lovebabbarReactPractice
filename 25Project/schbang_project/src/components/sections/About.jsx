import React from 'react'
import { IoArrowDownSharp } from "react-icons/io5";
const About = () => {
  return (
    <div style={{background:"https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2000.png"}} 
    className='h-screen flex gap-4 p-5  z-[22] relative bg-white'>
        {/* <img className=' relative ' src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2000.png" alt="" /> */}

        <div className='w-[70vw] p-5 flex flex-col bg-re-500 mb-[8rem]'>
            <h1 className='text-4xl ml-7 font-bold'>What defines us</h1>
            <IoArrowDownSharp size="rem" />
        </div>
        <div className="p-5 ml-[5.5rem]  flex flex-col gap-[4rem] items-start">
            <h1 className='text-3xl font-bold'>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</h1>
            <p className='text-slate-500 text-lg font-semibold'>We are on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.</p>
            <button className='border border-black px-12 py-2 rounded-full'>Dive Into Our Culture</button>
        </div>
    </div>
  )
}

export default About