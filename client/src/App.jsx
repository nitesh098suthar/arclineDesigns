import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Layout/Header'
import Landing from './Components/Layout/Landing'
import Footer from './Components/Layout/Footer'
import ContactUs from './Components/Layout/ContactUs'
import AboutUs from './Components/Layout/AboutUs.jsx'
import Policy from './Components/Layout/Policy.jsx'
import Help from './Components/Layout/Help.jsx'
import CategoryPage from './Components/Layout/CategoryPage.jsx'
import Details from './Components/Layout/Details.jsx'
import LocationCategory from './Components/Layout/LocationCategory.jsx'

const App = () => {
  return (
    <>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/contact-us' element={<ContactUs />}/>
      <Route path='/about-us' element={<AboutUs />}/>
      <Route path="/policy" element={<Policy />} />
      <Route path="/help" element={<Help />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/design/:id" element={<Details />} />
      <Route path="/location/:loc" element={<LocationCategory />} />
    </Routes>
    <Footer />
  </Router>
    </>
  )
}

export default App
