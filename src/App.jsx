import './App.css'

/*Importation des components*/
import Header from './components/Header'
import Footer from './components/Footer'

/*Importation des containers*/
import Home from './containers/Home'
import Msp from './containers/Msp'
import Dentists from './containers/Dentists'
import Contact from './containers/Contact'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/notre-msp" element={<Msp/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/Dentistes/:speciality_id" element={<Dentists/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
