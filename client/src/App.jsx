import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Layout/Header'
import Landing from './Components/Layout/Landing'
import Footer from './Components/Layout/Footer';
import ContactUs from './Components/Layout/ContactUs';
import AboutUs from './Components/Layout/AboutUs';
const App = () => {
  return (
    <>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/contact-us' element={<ContactUs />}/>
      <Route path='/about-us' element={<AboutUs />}/>
    </Routes>
    <Footer />
  </Router>
    </>
  )
}

export default App
