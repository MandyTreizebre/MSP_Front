import { useState, useEffect } from "react" 
import { displayProfessionalsGuards } from "../api/Professionals" 

import "../styles/guards.css"

import Clock from "../components/Clock"

import Pharmacies from "../components/Pharmacies"
import Dentists from "../components/Dentists"
import Doctors from "../components/Doctors"

const Guards = () => {
    /*State initialization for storing all professionals, doctors, dentists, and pharmacies.*/
    const [guards, setGuards] = useState([])
    const [doctors, setDoctors] = useState([])
    const [dentists, setDentists] = useState([])
    const [pharmacies, setPharmacies] = useState([])

    /*Function to get the current hour and minute.*/
    const getCurrentHour = () => {
        const currentDate = new Date()
        const hour = currentDate.getHours()
        const minutes = currentDate.getMinutes().toString().padStart(2, '0')
        return `${hour}:${minutes}`
    }

    /*Function to get the current day name*/
    const getCurrentDay = () => {
        const currentDate = new Date()
        const options = { weekday: 'long' }
        const dayName =  new Intl.DateTimeFormat('fr-FR', options).format(currentDate) 

        return dayName.charAt(0).toUpperCase() + dayName.slice(1)
    }

    /*Function to get the current date in day month year format*/
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

    /*State for current hour which will update at regular intervals*/
    const [currentHours, setCurrentHours] = useState(getCurrentHour())

    useEffect(()=>{
        /*Timeout to get professional data after 1 second*/
        setTimeout(()=> {
            displayProfessionalsGuards()
        .then((res)=>{
            setGuards(res.result)
            console.log(res.result)

                const pharmacies = []
                const dentists = []
                const doctors = []
                /*Iterate over the professionals and categorize them based on their availability and type.*/
                guards.forEach(professional => {
                    const startTimeMorningHHMM = professional.h_start_morning.substring(0, 5)
                    const endTimeMorningHHMM = professional.h_end_morning.substring(0, 5)
                    const startTimeAfternoonHHMM = professional.h_start_afternoon.substring(0, 5)
                    const endTimeAfternoonHHMM = professional.h_end_afternoon.substring(0, 5)

                    if (professional.day_name === currentDay) {
                        if (startTimeMorningHHMM <= currentHour && currentHour <= endTimeMorningHHMM) {
                            if (professional.name_spe === 'Pharmacies') {
                                pharmacies.push(professional) 
                            } else if (professional.name_spe === 'Dentistes') {
                                dentists.push(professional) 
                            } else if (professional.name_spe === 'Médecins') {
                                doctors.push(professional) 
                            }
                        }
                        if (startTimeAfternoonHHMM <= currentHour && currentHour <= endTimeAfternoonHHMM) {
                            if (professional.name_spe === 'Pharmacies') {
                                pharmacies.push(professional) 
                            } else if (professional.name_spe === 'Dentistes') {
                                dentists.push(professional) 
                            } else if (professional.name_spe === 'Médecins') {
                                doctors.push(professional) 
                            }
                        }
                    }
                })    
                /*Update the state with the categorized professionals*/
                setPharmacies(pharmacies)
                setDentists(dentists) 
                setDoctors(doctors) 
        })
        .catch(err => console.error(err))
        }, 1000)
        /*Set an interval to update the current hour every 60 seconds*/
        const interval = setInterval(()=> {
            setCurrentHours(getCurrentHour())
        },6000)
        /* Cleanup function to clear the interval*/
        return () => clearInterval(interval)
    }, [guards])

    
    return (
        <section className="section-guards">
            <h1>Permanence des Soins et Urgences Médicales : <u>Des Soins à Tout Moment</u></h1>
            <section className="presentation-guards">
                <Clock />
                
                <p className="intro-guards">La page des urgences et des gardes vous offre un <strong>service en temps réel</strong>, vous permettant de connaître les <strong>pharmacies, dentistes et médecins</strong> disponibles selon l'heure et le jour actuels. Grâce à cette fonctionnalité, vous pouvez trouver rapidement des <strong>professionnels de santé prêts à vous aider en cas de besoin urgent</strong>. Que ce soit en pleine journée ou en plein milieu de la nuit, notre service vous connecte avec les professionnels de confiance, assurant ainsi votre bien-être et votre tranquillité d'esprit en toute circonstance.
                </p>
            </section>

            <h2><u>{currentDay} {actualDate}</u></h2>
            

            <div className="guards-container">
                {pharmacies.length > 0 && <Pharmacies pharmacies={pharmacies} />}

                {dentists.length > 0 && <Dentists dentists={dentists} />}

                {doctors.length > 0 && <Doctors doctors={doctors} />}
            </div>
        </section>
    )
}

export default Guards