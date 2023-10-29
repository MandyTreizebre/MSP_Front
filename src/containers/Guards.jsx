import { useState, useEffect } from "react" 
import { displayProfessionalsGuards } from "../api/Professionals" 
import imgDoctorGuards from "../assets/images/docteur-red-heart.jpg"
import "../../sass/styles/guards.css"

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
            <div className="container-intro-guards">
                <div className="infos-guards">
                    <h1>Permanence des Soins et Urgences Médicales : <u>Des Soins à Tout Moment</u></h1>
                    <p className="intro-guards">La page des urgences et des gardes vous offre un <strong>service en temps réel</strong>, vous permettant de connaître les <strong>pharmacies, dentistes et médecins</strong> disponibles selon l'heure et le jour actuels. Grâce à cette fonctionnalité, vous pouvez trouver rapidement des <strong>professionnels de santé prêts à vous aider en cas de besoin urgent</strong>. Que ce soit en pleine journée ou en plein milieu de la nuit, notre service vous connecte avec les professionnels de confiance, assurant ainsi votre bien-être et votre tranquillité d'esprit en toute circonstance.</p>
                </div>
                <img src={imgDoctorGuards} className="img-guards"/>
            </div>

            <h2><u>Nous sommes le  {currentDay} {actualDate}, il est {currentHours}</u></h2>

            <div className="guards-container">
                {pharmacies.length > 0 && (
                    <section className="container-pros-guards">
                        <h2><u>Pharmacies :</u></h2>
                        <div className="pharmacies">
                            {pharmacies.map((pharmacy, index) => (
                                <div key={index} className="bloc" >
                                    <h3>{pharmacy.lastname} {pharmacy.firstname}</h3>
                                    <p>{pharmacy.address}</p>
                                    <p>{pharmacy.zip} {pharmacy.city}</p>
                                    <p>{pharmacy.phone}</p>
                                    <p>{pharmacy.h_start_morning.substring(0, 5)} - {pharmacy.h_end_morning.substring(0, 5)} / {pharmacy.h_start_afternoon.substring(0, 5)} - {pharmacy.h_end_afternoon.substring(0, 5)}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {dentists.length > 0 && (
                    <section className="container-pros-guards">
                        <h2><u>Dentistes :</u></h2>
                        <div className="dentists">
                            {dentists.map((dentist, index) => (
                                <div key={index} className="bloc">
                                    <h3>{dentist.lastname} {dentist.firstname}</h3>
                                    <p>{dentist.address}</p>
                                    <p>{dentist.zip} {dentist.city}</p>
                                    <p>{dentist.phone}</p>
                                    <p>{dentist.h_start_morning.substring(0, 5)} - {dentist.h_end_morning.substring(0, 5)} / {dentist.h_start_afternoon.substring(0, 5)} - {dentist.h_end_afternoon.substring(0, 5)}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {doctors.length > 0 && (
                    <section className="container-pros-guards">
                        <h2><u>Médecins :</u></h2>
                        <div className="doctors">
                            {doctors.map((doctor, index) => (
                                <div key={index} className="bloc">
                                        <h3>{doctor.lastname} {doctor.firstname}</h3>
                                        <p>{doctor.address}</p>
                                        <p>{doctor.zip} {doctor.city}</p>
                                        <p>{doctor.phone}</p>
                                        <p>{doctor.details}</p>
                                        <p>{doctor.h_start_morning.substring(0, 5)} - {doctor.h_end_morning.substring(0, 5)} / {doctor.h_start_afternoon.substring(0, 5)} - {doctor.h_end_afternoon.substring(0, 5)}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}

export default Guards