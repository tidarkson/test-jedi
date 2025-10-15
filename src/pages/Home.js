import React from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Mission from '../sections/Mission'
import CTA from '../sections/CTA'
import Footer from '../sections/Footer'
import Blog from '../sections/Blog'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <Mission />
        <CTA />
        <Blog/>
        <Footer />
    </>
  )
}

export default Home