import {Routes, Route} from 'react-router-dom'
import { useAdmin } from './components/AdminContext'
import { Navigate } from 'react-router-dom'
import './App.css'

/*Importation des components*/
import Header from './components/Header'
import Footer from './components/Footer'
import HealthProfessionals from './components/HealthProfessionals'
import InformationsByCategory from './components/InformationsByCategory'
import Guards from './components/Guards'

/*Importation des containers*/
import Home from './containers/Home'
import Msp from './containers/Msp'
import CategoriesInformations from './containers/CategoriesInformations'
import Contact from './containers/Contact'
import AddPro from './containers/admin/AddPro'
import AdminPage from './containers/admin/AdminPage'
import EditPro from './containers/admin/EditPro'
import Login from './containers/admin/Login'
import Register from './containers/admin/Register'
import AddHoursPro from './containers/admin/AddHoursPro'
import EditHoursPro from './containers/admin/EditHoursPro'

function ProtectedRoute({ component: Component }) {
    const { admin, loading } = useAdmin()

    if(loading) {
      return <div>Chargement...</div>
    }
    if (admin) {
      return <Component />
    } else {
      return <Navigate to="/" />
    }
}

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/msp" element={<Msp/>} />
          <Route exact path="/contact" element={<Contact/>} />

          <Route exact path="/dentistes/:speciality_id" element={<HealthProfessionals title="Dentistes" />} />
          <Route exact path="/medecins/:speciality_id" element={<HealthProfessionals title="Médecins" />} />
          <Route exact path="/infirmiers/:speciality_id" element={<HealthProfessionals title="Infirmiers" />} />
          <Route exact path="/psychologue/:speciality_id" element={<HealthProfessionals title="Psychologue" />} />
          <Route exact path="/kines-osteos/:speciality_id" element={<HealthProfessionals title="Kinésithérapeutes et Ostéopathes" />} />
          <Route exact path="/psychomotricienne/:speciality_id" element={<HealthProfessionals title="Psychomotricienne" />} />
          <Route exact path="/podologue/:speciality_id" element={<HealthProfessionals title="Podologue" />} />
          <Route exact path="/laboratoire/:speciality_id" element={<HealthProfessionals title="Laboratoire" />} />
          <Route exact path="/pharmacies/:speciality_id" element={<HealthProfessionals title="Pharmacies" />} />
          

          <Route exact path="/gardes-urgences" element={<Guards />} />

          <Route exact path="/informations-sante" element={<CategoriesInformations />} />
          <Route exact path="/informations-categorie/:category" element={<InformationsByCategory />} /> 

          <Route exact path="/login" element={<Login />} />

          {/*Route for Admin*/}
          <Route
              path="/admin" 
              element={<ProtectedRoute component={AdminPage} />}
          />

          <Route 
              path="/register" 
              element={<ProtectedRoute component={Register} />}
          />

          <Route 
              path="/ajouter/professionnel" 
              element={<ProtectedRoute component={AddPro} />}
          />

          <Route 
              path="/ajouter/horaires-professionnel" 
              element={<ProtectedRoute component={AddHoursPro} />}
          />

          <Route
              path="/editer/professionnel/:id" 
              element={<ProtectedRoute component={EditPro} />}
          />

          <Route
              path="/editer/horaires-professionnel/:id" 
              element={<ProtectedRoute component={EditHoursPro} />}
          />
          
      </Routes>
      <Footer />
    </>
  )
}

export default App
