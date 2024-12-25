import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './Components/Footer/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
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
