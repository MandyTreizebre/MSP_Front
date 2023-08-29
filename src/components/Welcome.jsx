/* FIRST COMPONENT UNDER THE HEADER */ 

/* Imports */
import {Link} from 'react-router-dom'
import imgDoctor from '../assets/images/medecin.jpg'
import '../styles/welcome.css'
import '../styles/tablets/tabletWelcome.css'
import '../styles/mobiles/mobileWelcome.css'


const Welcome = () =>{
    return (
        <section className="container_welcome">
            <div className="div_presentation">
                <h1>Bienvenue à la maison de santé de Varennes-Sur-Allier</h1>
                <p>
                    Au-delà de la structure immobilière, une maison de santé est avant tout une envie de 32 professionnels de santé de travailler ensemble. Cela s’est traduit par la création d’une association afin de s’organiser autour d’un projet de santé.
                    Ce projet a été présenté devant plusieurs instances, ARS, CPAM, Ordres des médecins, kinés, infirmiers.. afin d’être labellisé pour obtenir le nom déposé de « Maison de Santé Pluriprofessionnelle » .
                </p>
                <Link to="/notre-msp"><button className="general_button">Découvrir notre MSP</button></Link>
            </div>
            <img className="img_presentation" src={imgDoctor} alt="Image d'un médecin tenant un stéthoscope" />
        </section>
    )
}

export default Welcome