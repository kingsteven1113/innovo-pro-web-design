import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './Components/Footer/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "transform: translate("+(e.clientX - 10)+'px, '+(e.clientY - 10)+'px);')
  })


  

  

  return (
    <>
    <BrowserRouter basename='/'>
    <div id='cursor' className='cursor'></div>
      <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
