/* FIRST COMPONENT UNDER THE HEADER */ 

/*Importing modules, styles and pictures*/
import {Link} from 'react-router-dom'

import imgDoctor from '../assets/images/medecin.jpg'

import '../styles/welcome.css'
import '../styles/tablets/tabletWelcome.css'
import '../styles/mobiles/mobileWelcome.css'


const Welcome = () =>{
    return (
        <section className="container_welcome"> {/* Global Section */}
            <div className="div_presentation"> {/* Div containing the items on the left  */}
                <h1>Bienvenue à la maison de santé de Varennes-Sur-Allier</h1>
                <p>
                    Au-delà de la structure immobilière, une maison de santé est avant tout une envie de <span className='bold'>32 professionnels de santé</span> de travailler ensemble. Cela s’est traduit par la création d’une association afin de s’organiser autour d’un projet de santé.
                    Ce projet a été présenté devant plusieurs instances, ARS, CPAM, Ordres des médecins, kinés, infirmiers.. afin d’être labellisé pour obtenir le nom déposé de <span className='bold'>« Maison de Santé Pluriprofessionnelle »</span>.
                </p>
                <Link to="/notre-msp" target="_blank" rel="noreferrer">
                    <button className="general_button">Découvrir notre MSP</button>
                </Link>
            </div>
            {/* Right image */}
            <img className="img_presentation" 
                 src={imgDoctor} 
                 alt="Image d'un médecin tenant un stéthoscope" 
            />
        </section>
    )
}

export default Welcome