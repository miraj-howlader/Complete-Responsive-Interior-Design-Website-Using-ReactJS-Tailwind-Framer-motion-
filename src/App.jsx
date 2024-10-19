import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Testimonial from './components/Testimonial'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Navbar />
      <Hero/>
      <Brands/>
      <Services/>
      <Banner/>
      <Banner2/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
