import React from 'react'
import Home1 from './components/Home1'
import './App.css'
import Navbar from './components/Navbar'
import Home2 from './components/Home2'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './components/About'

import Footer from './components/Footer'


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}
const Home = () => {
  return (
    <>
      <Home1 />
      <Home2 />
    </>
  );
}

