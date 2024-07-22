import React from 'react'
import Header from '../components/sections/Header'
import Video from '../components/sections/Video'
import About from '../components/sections/About'
import ImageSlideShow from '../components/sections/ImageSlideShow'
import Solutions from '../components/sections/Solutions'
import Client from '../components/sections/Client'
import Articles from '../components/sections/Articles'
import Technology from '../components/sections/Technology'
import Footer from '../components/sections/Footer'

const Home = () => {
  return (
    <div>
        <Header  />
        <Video />
        <About />
        <ImageSlideShow />
        <Solutions />
        <Client />
        <Articles />
        <Technology />
        <Footer />
    </div>
  )
}

export default Home