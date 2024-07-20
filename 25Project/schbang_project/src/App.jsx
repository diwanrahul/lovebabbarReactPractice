import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Blogs from './pages/Blogs'
import Privacypolicy from './pages/Privacypolicy'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
    <Navbar />
     <Routes>
      <Route> 
        <Route exact path='/' Component={Home} />
        <Route  path='/about-us' Component={About} />
        <Route  path='/work' Component={Works} />
        <Route  path='/blogs
        ' Component={Blogs} />
        <Route  path='/privacy-policy' Component={Privacypolicy} />
      </Route>
     </Routes>
    </>
  )
}

export default App
