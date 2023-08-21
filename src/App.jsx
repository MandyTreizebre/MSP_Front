import './App.css'
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'



import {Routes, Route} from 'react-router-dom'
import Msp from './containers/Msp'
import Contact from './containers/Contact'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/notre-msp" element={<Msp/>} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
