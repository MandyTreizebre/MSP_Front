import {Link} from 'react-router-dom'

import imgMedecin from '../assets/images/medecin.jpg'

import '../styles/bienvenue.css'


const Bienvenue = () =>{
    return (
        <section className="container">
            <img className="img_medecin" src={imgMedecin} alt="Image d'un médecin tenant un stéthoscope" />
            <div className="div_color">
                <h1>Bienvenue à la maison de santé de Varennes-Sur-Allier</h1>
            </div>
        </section>
    )
}

export default Bienvenue