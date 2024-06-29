import React from 'react'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div className='flex justify-center text-3xl'>Home<Outlet/> </div>
  )
}

export default Home