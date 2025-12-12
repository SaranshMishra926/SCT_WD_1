import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScroll } from './hooks/useScroll'

function App() {
  const isScrolled = useScroll()

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

