import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom' 
import { useSelector } from "react-redux" 
import { displayAllProfessionals, changeStatusProfessionnal } from '../../api/Professionals' 
import { selectAdmin } from '../../slices/adminSlice'
import ProfessionalTable from '../../components/Admin/ProfessionalTable' 
import "../../styles/adminPage.css" 

const Admin = () => {
    /*Get the admin data from the Redux store*/
    const admin = useSelector(selectAdmin) 
    const [professionals, setProfessionals] = useState([]) 
    const [error, setError] = useState(null) 

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

    /* Helper function to format the time*/
    function formatTime(timeString) {
        if (timeString === "00:00:00") {
            return "Fermé" 
        }
        const [hours, minutes] = timeString.split(':') 
        return `${hours}h${minutes}` 
    }

    /*Group professionals by name and accumulate their data*/
    const groupedProfessionals = professionals.reduce((grouped, professional) => {
        const key = `${professional.lastname} ${professional.firstname}` 

        if (!grouped[key]) {
            grouped[key] = {
                id: professional.id,
                coordinates: {}, /*An object to store coordinates once*/
                schedules: {},   /*An object to store schedules by day*/
            } 
            grouped[key].isActive = professional.isActive 
        }

        // Group schedules by day
        const dayKey = professional.day_name 
        if (!grouped[key].schedules[dayKey]) {
            grouped[key].schedules[dayKey] = [] 
        }

        grouped[key].schedules[dayKey].push(professional) 

        // Store the coordinates once
        if (!grouped[key].coordinates.address) {
            grouped[key].coordinates.address = professional.address 
            grouped[key].coordinates.zip = professional.zip 
            grouped[key].coordinates.city = professional.city 
            grouped[key].coordinates.phone = professional.phone 
            grouped[key].coordinates.details = professional.details 
        }

        return grouped 
    }, {}) 

    return (
        <section className='container-admin'>
            <h1>Portail Administrateur</h1>
            {admin.infos && <h2>Vous êtes connecté en tant que {admin.infos.firstname}</h2>}
            <Link to="/register" className='general-button ajouter-admin'>
                Enregistrer un nouvel administrateur
            </Link>
            <h2>Les professionnels de la MSP</h2>

            <ProfessionalTable
                groupedProfessionals={groupedProfessionals}
                handleChangeStatus={handleChangeStatus}
                formatTime={formatTime}
            />

            <div className='new-pro'>
                <Link to="/ajouter/professionnel" className='general-button'>Ajouter un professionnel de santé</Link>
                <Link to="/ajouter/horaires-professionnel" className='general-button'>Ajouter les horaires d'un professionnel</Link>
            </div>
            {error && <div className="error-message">{error}</div>}
        </section>
    )
}

export default Admin