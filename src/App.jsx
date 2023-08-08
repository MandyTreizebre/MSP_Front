import './App.css'
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import {Routes, Route} from 'react-router-dom'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={Home} />
      </Routes>
      <Home />
      <Footer />
    </>
  )
}

export default App
