import './App.css'

/*Importation des components*/
import Header from './components/Header'
import Footer from './components/Footer'

/*Importation des containers*/
import Home from './containers/Home'
import Msp from './containers/Msp'
import Dentists from './containers/Dentists'
import Doctors from './containers/Doctors'
import Nurses from './containers/Nurses'
import Physiotherapists from './containers/Physiotherapists'
import Laboratory from './containers/Laboratory'
import Pharmacy from './containers/Pharmacy'
import Podiatrist from './containers/Podiatrist'
import Psychologist from './containers/Psychologist'
import Psychomotrician from './containers/Psychomotrician'
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
        <Route exact path="/Médecins/:speciality_id" element={<Doctors/>} />
        <Route exact path="/Infirmiers/:speciality_id" element={<Nurses/>} />
        <Route exact path="/Kinésithérapeutes/Ostéopathes/:speciality_id" element={<Physiotherapists/>} />
        <Route exact path="/Laboratoire/:speciality_id" element={<Laboratory/>} />
        <Route exact path="/Pharmacies/:speciality_id" element={<Pharmacy/>} />
        <Route exact path="/Podologue/:speciality_id" element={<Podiatrist/>} />
        <Route exact path="/Psychologue/:speciality_id" element={<Psychologist/>} />
        <Route exact path="/Psychomotricienne/:speciality_id" element={<Psychomotrician/>} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
