// Import all your converted components
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Products from '../components/Products'
import ContactUs from '../components/ContactUs'
import WhatWeOffer from '../components/WhatWeOffer'
import TestingServices from '../components/TestingServices'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <ContactUs />
      <WhatWeOffer />
      <TestingServices />
    </>
  )
}

export default Home
