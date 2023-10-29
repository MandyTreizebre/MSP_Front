import { Routes, Route } from "react-router-dom" 
import { useDispatch } from "react-redux" 
import { useEffect, useState } from "react" 
import { checkCookie } from "../auth" 
import CheckAuth from "../CheckAuth" 
import "../sass/styles/App.css"


import Header from "./components/Header" 
import Footer from "./components/Footer" 
import HealthProfessionals from "./components/HealthProfessionals" 
import InformationsByCategory from "./components/InformationsByCategory" 
import Guards from "./containers/Guards" 
import NotFound from "./components/NotFound" 
import DarkMode from "./components/DarkMode" 


import Home from "./containers/Home" 
import Msp from "./containers/Msp" 
import CategoriesInformations from "./containers/CategoriesInformations" 
import Contact from "./containers/Contact" 
import AddPro from "./containers/admin/AddPro" 
import Admin from "./containers/admin/Admin" 
import EditPro from "./containers/admin/EditPro" 
import Login from "./containers/admin/Login" 
import Register from "./containers/admin/Register" 
import AddHoursPro from "./containers/admin/AddHoursPro" 
import EditHoursPro from "./containers/admin/EditHoursPro" 

function App() {
    const [isLoading, setIsLoading] = useState(true) 
    const dispatch = useDispatch() 

    useEffect(() => {
        checkCookie(dispatch, () => setIsLoading(false)) 
    }, [dispatch]) 

    return (
        <>
            <DarkMode />
            <Header />
            {isLoading ? (
                <div>Chargement....</div>
            ) : (
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/msp" element={<Msp />} />
                    <Route exact path="/contact" element={<Contact />} />
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
                    <Route exact path="*" element={<NotFound />} />
                    {/* Routes for Admin */}
                    <Route path="/admin" element={<CheckAuth component={Admin} />} />
                    <Route path="/register" element={<CheckAuth component={Register} />} />
                    <Route path="/ajouter/professionnel" element={<CheckAuth component={AddPro} />} />
                    <Route path="/ajouter/horaires-professionnel" element={<CheckAuth component={AddHoursPro} />} />
                    <Route path="/editer/professionnel/:id" element={<CheckAuth component={EditPro} />} />
                    <Route path="/editer/horaires-professionnel/:id" element={<CheckAuth component={EditHoursPro} />} />
                </Routes>
            )}
            <Footer />
        </>
    ) 
}

export default App 