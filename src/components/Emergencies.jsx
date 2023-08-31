/*Importing modules and styles*/
import { Link } from "react-router-dom";

import cabinetDoctor from '../assets/images/cabmedecins1.jpg'
import buildingPhysiotherapist from '../assets/images/photo_2022-10-31_05-22-24.jpg'
import officePsychotherapist from '../assets/images/bureau-psychologue.jpg'
import pharmacy from '../assets/images/pharmacie-beauvy.jpg'

import '../styles/emergencies.css'
import '../styles/mobiles/mobileEmergencies.css'
import '../styles/tablets/tabletEmergencies.css'

const Emergencies = () => {
    return (
        <section className="container_emergencies">
            <div className="column1">
                <img src={cabinetDoctor} className="img1" alt="Cabinet du docteur Provent" />
                <img src={buildingPhysiotherapist} className="img2" alt="Bâtiment des kinésithérapeutes et des ostéopathes"/>
            </div>
            <div className="column2">
                <img src={officePsychotherapist} className="img3" alt="Cabinet de la psychothérapeute" />
                <img src={pharmacy} className="img4" alt="Facade de la pharmacie Beauvy" />
            </div>
            <div className="column3">
                <h2>Permanence des Soins et Urgences Médicales : Des Soins à Tout Moment</h2>
                <p> 
                    L'objectif de la maison de santé est de vous assurer une assistance rapide et efficace lorsque vous en avez le plus besoin.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam<br />
                    Cependant toutes les urgences restent gérées par le 15.
                </p>
            <Link to="/urgences-et-gardes"><button className="general_button">Trouver les professionnels de gardes</button></Link>
            </div>
            
        </section>
        
    )
}

export default Emergencies