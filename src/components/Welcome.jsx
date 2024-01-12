import {Link} from 'react-router-dom'

import doctorImage from '../assets/images/medecin.jpg'

import "../styles/welcome.css"

const Welcome = () =>{
    return (
        <div className="container-welcome"> 
            <section className="section-presentation">  {/*Section for the presentation text*/}
                <h1>Bienvenue à la maison de santé de Varennes-Sur-Allier</h1>
                {/*Description text explaining the health home and its organization*/}
                <p>
                    Au-delà de la structure immobilière, une maison de santé est avant tout une envie de <strong>32 professionnels de santé</strong> de travailler ensemble. Cela s’est traduit par la création d’une association afin de s’organiser autour d’un projet de santé.
                    Ce projet a été présenté devant plusieurs instances, ARS, CPAM, Ordres des médecins, kinés, infirmiers.. afin d’être labellisé pour obtenir le nom déposé de <strong>« Maison de Santé Pluriprofessionnelle »</strong>.
                </p>
                {/*Link to the MSP page*/}
                <Link to="/msp" 
                      className="general-button"
                      aria-label="Aller à la page MSP"
                >
                    Découvrir notre MSP
                </Link>
            </section>

            <img id="img-right" 
                 src={doctorImage} 
                 alt="Image d'un médecin tenant un stéthoscope" 
            />
        </div>
    )
}

export default Welcome