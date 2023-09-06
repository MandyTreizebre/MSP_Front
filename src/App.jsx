import './App.css'

/*Importation des components*/
import Header from './components/Header'
import Footer from './components/Footer'
import Dentists from './components/Dentists'
import Doctors from './components/Doctors'
import Nurses from './components/Nurses'
import Physiotherapists from './components/Physiotherapists'
import Laboratory from './components/Laboratory'
import Pharmacy from './components/Pharmacy'
import Podiatrist from './components/Podiatrist'
import Psychologist from './components/Psychologist'
import Psychomotrician from './components/Psychomotrician'


/*Importation des containers*/
import Home from './containers/Home'
import Msp from './containers/Msp'
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
