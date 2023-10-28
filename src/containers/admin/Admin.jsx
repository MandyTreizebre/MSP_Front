import React, { useState, useEffect, useRef } from 'react' 
import { Link } from 'react-router-dom' 
import { useSelector} from "react-redux" 
import { displayAllProfessionals, changeStatusProfessionnal } from '../../api/Professionals' 
import { selectAdmin } from '../../slices/adminSlice'
import ProfessionalsAdmin from '../../components/Admin/ProfessionalsAdmin'
import "../../styles/adminPage.css" 

const Admin = () => {
    /*Get the admin data from the Redux store*/
    const admin = useSelector(selectAdmin) 
    const [professionals, setProfessionals] = useState([]) 
    const [error, setError] = useState(null)

    const refPros = useRef(null)
    const refExternalPros = useRef(null)

    /*Function to get and display professionals.*/
    const displayPros = () => {
        setError(null)   // Reset the error
        displayAllProfessionals()
            .then((res) => {
                setProfessionals(res.result)
            })
            .catch(err => {
                setError("Une erreur est survenue lors du chargement des professionnels") 
            }) 
    } 

    /*Get professionals on component mount*/
    useEffect(() => {
        displayPros() 
    }, []) 

    /*Function to handle the status change of a professional*/
    const handleChangeStatus = (id, token) => {
        setError(null)   /*Reset the error before updating*/
        changeStatusProfessionnal(id, token)
            .then(data => {
                displayPros() 
                setProfessionals(prevProfs => prevProfs.map(pros => {
                    if (pros.id === id) {
                        return { ...pros, isActive: !pros.isActive } 
                    }
                    return pros 
                })) 
            })
            .catch(err => {
                setError("Une erreur est survenue lors de la modification du status") 
            }) 
    }
    
    return (
        <>
            <section className='container-admin'>
                <h1>Portail Administrateur</h1>
                {admin.infos && <h2>Vous êtes connecté en tant que {admin.infos.firstname}</h2>}
                <Link to="/register" className='general-button'>
                    Enregistrer un nouvel administrateur
                </Link>

                <section className='categories-admin'>
                <Link to="#professionals" 
                    onClick={()=> refPros.current.scrollIntoView({behavior: "smooth"})}
                >
                        <div className='category-admin'>Les professionnels</div>
                </Link>

                        <div className='category-admin'>Les pros extérieurs</div>

                    
                    
                    <div className='category-admin'>Les actualités</div>
                    <div className='category-admin'>Les informations santé</div>
                </section>

                <h2 id="professionals" ref={refPros}>Les professionnels de la MSP</h2>
                <div className='new-pro'>
                    <Link to="/ajouter/professionnel" className='general-button'>Ajouter un professionnel de santé</Link>
                    <Link to="/ajouter/horaires-professionnel" className='general-button'>Ajouter les horaires d'un professionnel</Link>
                </div>
                <ProfessionalsAdmin professionals={professionals} onChangeStatus={handleChangeStatus}/>
                {error && <div className="error-message">{error}</div>}
            </section>
        </>
        
    )
}

export default Admin