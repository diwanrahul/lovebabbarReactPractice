import React from 'react'
import {About,Footer, Header, Skills, Work, Testimonials} from './container/index'
import {Navbar} from './components'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App