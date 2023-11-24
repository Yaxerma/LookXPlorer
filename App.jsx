import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Recommend from './components/Recommend'
import ScrollToTop from './components/ScrollToTop'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

export default function App() {
  return  <>
  <NavBar/>
  <ScrollToTop/>
  <Hero/>
  <Service/>
  <Recommend/>
  <Testimonial/>
  <Footer/>

  </>
}
