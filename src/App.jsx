import './App.css'
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import { useRef } from 'react'

import {Routes, Route} from 'react-router-dom'


function App() {

  const homeRef = useRef(null)

  const scrollToProfessionals = () => {
    homeRef.current.scrollToProfessionals()
  }

  return (
    <>
      <Header scrollToProfessionals={scrollToProfessionals} />
      <Routes>
        <Route exact path="/" element={<Home ref={homeRef} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
