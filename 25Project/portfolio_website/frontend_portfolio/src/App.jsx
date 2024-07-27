import React, { useState } from 'react'
import {About,Footer, Header, Skills, Work, Testimonials} from './container/index'
import {Navbar} from './components'
import './App.scss'
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className='app'>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Testimonials isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </div>
  )
}

export default App