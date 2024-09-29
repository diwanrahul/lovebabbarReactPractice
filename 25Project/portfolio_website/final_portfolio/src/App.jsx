import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Project from './sections/projects/Project'
import Footer from './sections/footer/Footer'
import Experience from './sections/experiences/Experience'
import PaginatedHtml from './sections/PaginatedHtml'
import Blogs from './sections/Blogs/Blogs'
import Login from './components/login/Login'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <PaginatedHtml /> */}
      <Login />
      <Header />
      <About />
      <Blogs />
      <Skills />
      <Experience />
      <Project />
      <Footer />

      
    </div>
  )
}

export default App