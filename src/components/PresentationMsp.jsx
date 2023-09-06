import { Link } from 'react-router-dom'
import pict1 from "../assets/images/cabinetkines.jpg"

/*Importation du Pdf à télé<charger*/
import projetSante from '../assets/files/projet_sante.pdf'

import "../styles/PresentationMsp.css"

const PresentationMsp = () => {
    return (
       
        <section className="container_presentation_msp">
            <img src={pict1} alt="photo du cabinet du docteur Provent" className='pict1' />

            <div className='bloc_right'>
                <h1>Notre maison de santé Pluriprofessionnelle</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <Link 
                to={projetSante}
                download="projet-msp"
                target="_blank"
                rel="noreferrer"
                >
                    <button className="general_button">
                        Téléchargez notre projet de santé
                    </button>
                </Link> 
            </div>
        </section>
       
    )
}

export default PresentationMsp