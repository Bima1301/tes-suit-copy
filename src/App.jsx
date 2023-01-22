import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navigation from './components/Navbar'
import './style/style.scss'
import Hero from './components/Hero'
import Value from './components/Values'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
    <Navigation />   
    <Hero/>
    <Value/>
    <Contact style={{ marginBottom:"50px",marginTop:"50px" }} />
    <Footer/>
    </div>
  )
}

export default App
