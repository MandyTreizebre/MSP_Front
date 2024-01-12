import { Routes, Route } from "react-router-dom" 
import { useDispatch } from "react-redux" 
import { useEffect, useState } from "react" 
import { checkCookie } from "../auth" 
import CheckAuth from "../CheckAuth" 
import "../src/styles/app.css"


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
import EditExternalPro from "./containers/admin/EditExternalPro"
import AddExternalPros from "./containers/admin/AddExternalPros"
import Login from "./containers/admin/Login" 
import Register from "./containers/admin/Register" 
import AddHoursPro from "./containers/admin/AddHoursPro" 
import EditHoursPro from "./containers/admin/EditHoursPro" 
import LegalInformations from "./containers/LegalInformations"
import PrivacyPolicy from "./containers/PrivacyPolicy"

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
                    <Route exact path="/specialisation/:speciality_id" element={<HealthProfessionals />} />
                    <Route exact path="/gardes-urgences" element={<Guards />} />
                    <Route exact path="/informations-sante" element={<CategoriesInformations />} />
                    <Route exact path="/informations-categorie/:category" element={<InformationsByCategory />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/mentions-legales" element={<LegalInformations />} />
                    <Route exact path="/politique-confidentialite" element={<PrivacyPolicy />} />
                    <Route exact path="*" element={<NotFound />} />
                    {/* Routes for Admin */}
                    <Route path="/admin" element={<CheckAuth component={Admin} />} />
                    <Route path="/register" element={<CheckAuth component={Register} />} />
                    <Route path="/ajouter/professionnel" element={<CheckAuth component={AddPro} />} />
                    <Route path="/ajouter/horaires-professionnel" element={<CheckAuth component={AddHoursPro} />} />
                    <Route path="/editer/professionnel/:id" element={<CheckAuth component={EditPro} />} />
                    <Route path="/editer/horaires-professionnel/:id" element={<CheckAuth component={EditHoursPro} />} />
                    <Route path="/editer/professionnel-externe/:id" element={<CheckAuth component={EditExternalPro} />} />
                    <Route path="/ajouter/professionnel-externe" element={<CheckAuth component={AddExternalPros} />} />
                </Routes>
            )}
            <Footer />
        </>
    ) 
}

export default App 