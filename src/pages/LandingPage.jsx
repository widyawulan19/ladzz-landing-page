import React from 'react'
import AppRouter from '../Router/AppRouter'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Collection from '../components/Collection'
import Lookbook from '../components/Lookbook'
import Experience from '../components/Experience'
import Investment from '../components/Investment'
import Consultation from '../components/Consultation'
import Footer from '../components/Footer'

const LandingPage=()=> {
  return (
        <>
            <Navbar />
        <Hero />
        <About />
        <Collection />
        <Lookbook />
        <Experience />
        <Investment />
        <Consultation />
        <Footer />
        </>
  )
}

export default LandingPage