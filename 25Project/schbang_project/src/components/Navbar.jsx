import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-re-500 py-2  px-10'>
        <div><img src="" alt="logo" /></div>
        <ul className='flex bg-blu-600 justify-between items-center w-7/12'>
            {
                ["Work", "Solution", "About", "Resources", "Careers", "Contacts Us"].map((item, index)=>(
                    <div key={index} className={`text-center ${index===5 ? 'bg-black text-white p-4 rounded-full ' : 'bg-re-800 p-1 px-3'}`} >
                        <Link to="/" className='flex justify-center items-center gap px-4 gap-2'>{item}{index==5 && <HiOutlineArrowNarrowRight /> }</Link>
                    </div>
                ))
            }

        </ul>
    </nav>
  )
}

export default Navbar