import { useState, useEffect } from "react";
import { displayProfessionalsGuards } from "../api/Professionals";

import "../styles/guards.css"

const Guards = () => {
    const [guards, setGuards] = useState([])

    const [doctors, setDoctors] = useState([])
    const [dentists, setDentists] = useState([])
    const [pharmacies, setPharmacies] = useState([])

    const getCurrentHour = () => {
        const currentDate = new Date()
        const hour = currentDate.getHours()
        const minutes = currentDate.getMinutes().toString().padStart(2, '0')
        return `${hour}:${minutes}`
    }

    const getCurrentDay = () => {
        const currentDate = new Date()
        const options = { weekday: 'long' }
        const dayName =  new Intl.DateTimeFormat('fr-FR', options).format(currentDate);

        return dayName.charAt(0).toUpperCase() + dayName.slice(1)
    }

    const getCurrentDate = () => {
        const currentDate = new Date()
        const day = currentDate.getDate() 
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()

        const options = {month: 'long'}
        const monthName =  new Intl.DateTimeFormat('fr-FR', options).format(currentDate)

        return `${day} ${monthName} ${year}`
    }

    const currentHour = getCurrentHour()
    const currentDay = getCurrentDay()
    const actualDate = getCurrentDate()

    console.log("CURRENT DAY =>", currentDay)

    const [currentHours, setCurrentHours] = useState(getCurrentHour())

    useEffect(()=>{
        setTimeout(()=> {
            displayProfessionalsGuards()
        .then((res)=>{
            setGuards(res.result)

                const pharmacies = [];
                const dentists = [];
                const doctors = [];

                guards.forEach(professional => {
                    const startTimeMorningHHMM = professional.h_start_morning.substring(0, 5)
                    const endTimeMorningHHMM = professional.h_end_morning.substring(0, 5)
                    const startTimeAfternoonHHMM = professional.h_start_afternoon.substring(0, 5)
                    const endTimeAfternoonHHMM = professional.h_end_afternoon.substring(0, 5)

                    if (professional.day_name === currentDay) {
                        if (startTimeMorningHHMM <= currentHour && currentHour <= endTimeMorningHHMM) {
                            if (professional.name_spe === 'Pharmacies') {
                                pharmacies.push(professional);
                            } else if (professional.name_spe === 'Dentistes') {
                                dentists.push(professional);
                            } else if (professional.name_spe === 'Médecins') {
                                doctors.push(professional);
                            }
                        }
                        if (startTimeAfternoonHHMM <= currentHour && currentHour <= endTimeAfternoonHHMM) {
                            if (professional.name_spe === 'Pharmacies') {
                                pharmacies.push(professional);
                            } else if (professional.name_spe === 'Dentistes') {
                                dentists.push(professional);
                            } else if (professional.name_spe === 'Médecins') {
                                doctors.push(professional);
                            }
                        }
                    }
                })    

                setPharmacies(pharmacies);
                setDentists(dentists);
                setDoctors(doctors);

                console.log("PHARMACIES =>", pharmacies);
                console.log("DENTISTS =>", dentists);
                console.log("DOCTORS =>", doctors);
                

        })
        .catch(err => console.log(err))
        }, /*1000*/)

        const interval = setInterval(()=> {
            setCurrentHours(getCurrentHour())
        }, /*6000*/)

        return () => clearInterval(interval)
    }, [guards])

    
    return (
        <>
            <h1>Permanence des Soins et Urgences Médicales : Des Soins à Tout Moment</h1>

            <p>La page des urgences et des gardes vous offre un service en temps réel, vous permettant de connaître les pharmacies, dentistes et médecins disponibles selon l'heure et le jour actuels. Grâce à cette fonctionnalité, vous pouvez trouver rapidement des professionnels de santé prêts à vous aider en cas de besoin urgent. Que ce soit en pleine journée ou en plein milieu de la nuit, notre service vous connecte avec les professionnels de confiance, assurant ainsi votre bien-être et votre tranquillité d'esprit en toute circonstance.</p>

            <h2>Nous sommes le  {currentDay} {actualDate}, il est {currentHour}</h2>

            <div className="guards_container">
                {pharmacies.length > 0 && (
                    <section className="container_pros_guards">
                        <h2>Pharmacies :</h2>
                        <div className="pharmacies">
                            {pharmacies.map((pharmacy, index) => (
                                <div key={index} className="bloc" >
                                    <h3>{pharmacy.lastname} {pharmacy.firstname}</h3>
                                    <p>{pharmacy.address}</p>
                                    <p>{pharmacy.zip} {pharmacy.city}</p>
                                    <p>{pharmacy.phone}</p>
                                    <p>{pharmacy.h_start_morning} - {pharmacy.h_end_morning} / {pharmacy.h_start_afternoon} - {pharmacy.h_end_afternoon}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {dentists.length > 0 && (
                    <section className="container_pros_guards">
                        <h2>Dentistes :</h2>
                        <div className="dentists">
                            {dentists.map((dentist, index) => (
                                <div key={index} className="bloc">
                                    <h3>{dentist.lastname} {dentist.firstname}</h3>
                                    <p>{dentist.address}</p>
                                    <p>{dentist.zip} {dentist.city}</p>
                                    <p>{dentist.phone}</p>
                                    <p>{dentist.h_start_morning} - {dentist.h_end_morning} / {dentist.h_start_afternoon} - {dentist.h_end_afternoon}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {doctors.length > 0 && (
                    <section className="container_pros_guards">
                        <h2>Médecins :</h2>
                        <div className="doctors">
                            {doctors.map((doctor, index) => (
                                <div key={index} className="bloc">
                                        <h3>{doctor.lastname} {doctor.firstname}</h3>
                                        <p>{doctor.address}</p>
                                        <p>{doctor.zip} {doctor.city}</p>
                                        <p>{doctor.phone}</p>
                                        <p>{doctor.details}</p>
                                        <p>{doctor.h_start_morning} - {doctor.h_end_morning} / {doctor.h_start_afternoon} - {doctor.h_end_afternoon}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}

export default Guards