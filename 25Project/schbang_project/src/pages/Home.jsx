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
// import { ParallaxProvider } from 'react-scroll-parallax';
import SimpleParallax from "simple-parallax-js";

const Home = () => {
  return (
    <div>
       
  <SimpleParallax
  delay={0}
  orientation={"down"}
  scale={1.3}
  overflow
  maxTransition={60}>
   
        <Header  />
  </SimpleParallax>
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