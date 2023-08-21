import {Link} from 'react-router-dom'

import imgMedecin from '../assets/images/medecin.jpg'

import '../styles/bienvenue.css'


const Bienvenue = () =>{
    return (
        <section className="container_bienvenue">
            <div className="div_presentation">
                <h1>Bienvenue à la maison de santé de Varennes-Sur-Allier</h1>
                <p>
                    Au-delà de la structure immobilière, une maison de santé est avant tout une envie de 32 professionnels de santé de travailler ensemble. Cela s’est traduit par la création d’une association afin de s’organiser autour d’un projet de santé.
                    Ce projet a été présenté devant plusieurs instances, ARS, CPAM, Ordres des médecins, kinés, infirmiers.. afin d’être labellisé pour obtenir le nom déposé de « Maison de Santé Pluriprofessionnelle » .
                </p>
                <button id="bouton">Découvrir notre MSP</button>
            </div>
            <img className="img_medecin" src={imgMedecin} alt="Image d'un médecin tenant un stéthoscope" />
        </section>
    )
}

export default Bienvenue