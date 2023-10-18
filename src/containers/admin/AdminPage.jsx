import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  displayAllProfessionals,
  changeStatusProfessionnal
} from '../../api/Professionals'
import { checkMyToken } from '../../api/Admin'
import { useAdmin } from '../../components/AdminContext'
import "../../styles/adminPage.css"

const AdminPage = () => {
    const {admin} = useAdmin()
    const [professionals, setProfessionals] = useState([])

    const displayPros = () => {
        displayAllProfessionals()
            .then((res) => {
                setProfessionals(res.result);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        displayPros()
    }, [])

    const handleChangeStatus = (id) => {
        changeStatusProfessionnal(id)
            .then(data => {
                displayPros()
                setProfessionals(prevProfs => prevProfs.map(pros => {
                    if (pros.id === id) {
                        return { ...pros, isActive: !pros.isActive }
                    }
                    return pros;
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    function formatTime(timeString) {
        if (timeString === "00:00:00") {
            return "Fermé";
        }
        const [hours, minutes] = timeString.split(':');
        return `${hours}h${minutes}`;
    }

    const groupedProfessionals = professionals.reduce((grouped, professional) => {
        const key = `${professional.lastname} ${professional.firstname}`;

        if (!grouped[key]) {
            grouped[key] = {
                id: professional.id,
                coordinates: {}, // Un objet pour stocker les coordonnées une seule fois
                schedules: {},   // Un objet pour stocker les horaires par jour
            }
            grouped[key].isActive = professional.isActive;
        }

        // Group schedules by day
        const dayKey = professional.day_name;
        if (!grouped[key].schedules[dayKey]) {
            grouped[key].schedules[dayKey] = [];
        }

        grouped[key].schedules[dayKey].push(professional);

        // Store the coordinates once
        if (!grouped[key].coordinates.address) {
            grouped[key].coordinates.address = professional.address;
            grouped[key].coordinates.zip = professional.zip;
            grouped[key].coordinates.city = professional.city;
            grouped[key].coordinates.phone = professional.phone;
            grouped[key].coordinates.details = professional.details;
        }

        return grouped;
    }, {});

    console.log(groupedProfessionals);

    return (
        <section className='container-admin'>
            <h1>Portail Administrateur</h1>
            {admin && <h2>Vous êtes connecté en tant que {admin.firstname}</h2>}
            <Link to="/register" 
                  className='general-button ajouter-admin'
            >
                Enregistrer un nouvel administrateur
            </Link>
            <h2>Les professionnels de la MSP</h2>
            <table className="professionals-table">
                <thead>
                    <tr>
                        <th className='title'>Nom</th>
                        <th className='title'>Adresse</th>
                        <th className='title'>Téléphone</th>
                        <th className='title'>Détails</th>
                        <th className='title'>Lundi</th>
                        <th className='title'>Mardi</th>
                        <th className='title'>Mercredi</th>
                        <th className='title'>Jeudi</th>
                        <th className='title'>Vendredi</th>
                        <th className='title'>Samedi</th>
                        <th className='title'>Dimanche</th>
                        <th className='title'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(groupedProfessionals).map((key, index) => (
                        <tr key={index} className='details'>
                            <td><strong>{key}</strong></td>
                            <td>
                                {groupedProfessionals[key].coordinates.address}, {groupedProfessionals[key].coordinates.zip} {groupedProfessionals[key].coordinates.city}
                            </td>
                            <td>{groupedProfessionals[key].coordinates.phone}</td>
                            <td>{groupedProfessionals[key].coordinates.details}</td>

                            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => {
                                const schedule = groupedProfessionals[key].schedules[day];
                                return (
                                    <td key={day}>
                                        {schedule ? schedule.map((s, idx) => (
                                            <div key={idx}>
                                                {formatTime(s.h_start_morning)} - {formatTime(s.h_end_morning)} <br />
                                                {formatTime(s.h_start_afternoon)} - {formatTime(s.h_end_afternoon)}
                                            </div>
                                        )) : 'Fermé'}
                                    </td>
                                )
                            })}
                            <td className='actions'>
                                <Link to={`/editer/professionnel/${groupedProfessionals[key].id}`}
                                      className='admin-button'
                                >
                                    Modifier le pro
                                </Link>
                                <Link to={`/editer/horaires-professionnel/${groupedProfessionals[key].id}`}
                                      className='admin-button'
                                >
                                    Modifier les horaires du pro
                                </Link>
                                <button className='admin-button' onClick={() => { handleChangeStatus(groupedProfessionals[key].id) }}>
                                    {groupedProfessionals[key].isActive ? "Désactiver" : "Activer"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='new-pro'>
                <Link to="/ajouter/professionnel" className='general-button'>Ajouter un professionnel de santé</Link>
                <Link to="/ajouter/horaires-professionnel" className='general-button'>Ajouter les horaires d'un professionnel</Link>
            </div>
            
        </section>
    )
}

export default AdminPage