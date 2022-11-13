import React from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Service from './Service'
import Footer from './Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact='true' path='/' element={<Home />} />
        <Route exact='true' path='/about' element={<About />} />
        <Route exact='true' path='/contact' element={<Contact />} />
        <Route exact='true' path='/service' element={<Service />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <br />
      <Footer />
    </>
  )
}

export default App