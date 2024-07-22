import React from 'react'

const Header = () => {
  const customCursorStyle = {
    cursor: 'url(https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-glyph-travel-tanah-basah-glyph-tanah-basah-56.png), auto'
};
  return (
    <div style={customCursorStyle}
    // className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-fixed flex items-center  '
    className='w-screen h-screen flex items-center  '
    >
        <div
         className='mx-[5.5rem] mb-[15rem] bg-re-700 flex flex-col gap-7 h-[50vh] mt-[10rem] fixed'
        >

        <h1 
        className='text-[4vw] font-bold leading-none '
        >Your Creative, Media & Technology Transformation Partner</h1>
        <h3 
        className='text-xl '
        >We are a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide, 8 years and counting!</h3>
        </div>
    </div>
  )
}

export default Header