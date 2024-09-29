import React from 'react'

const Navbar = () => {
  return (
    <div
    className='flex justify-between px-8 py- bg-green-300 items-center'>
        <div>
            <img src="../../assets/logo.png" alt="logo" />
        </div>
        <div className='flex w-8/12 bg-re-400 justify-around py- '>
        {
            ["Home","About", "Skills", "Experience", "Projects", "Contacts"].map((item, index)=>(
               
                <a key={index}
                className='w-[100%] bg-re-500 py-3 hover:bg-purple-400 hover:text-white text-center font-semibold ' 
                href={`#${item}`}
                >{item}</a>
            ))
        }
        </div>
        <div>
           <a href='/login'>Login</a>
        </div>
        <div>
            Darkmode
        </div>
    </div>
  )
}

export default Navbar