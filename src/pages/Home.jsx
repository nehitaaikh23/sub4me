import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home