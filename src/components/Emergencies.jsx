import {Link} from "react-router-dom"
import cabinetDoctor from '../assets/images/cabmedecins.jpg'
import buildingPhysiotherapist from '../assets/images/photo_2022-10-31_05-22-24.jpg'
import officePsychotherapist from '../assets/images/bureau-psychologue.jpg'
import pharmacy from '../assets/images/pharmacie-beauvy.jpg'

import '../styles/emergencies.css'

const Emergencies = () => {
    return (
        <div className="container-emergencies">
            <div className="column-left">
                {/*Images on the left */}
                <img src={cabinetDoctor} 
                     className="cabinet-doctor" 
                     alt="Cabinet du docteur Provent" 
                />
                <img src={buildingPhysiotherapist} 
                     className="building-physiotherapist"
                     alt="Bâtiment des kinésithérapeutes et des ostéopathes"
                />
            </div>
            <div className="column-middle">
                {/*Images on the right */}
                <img src={officePsychotherapist} 
                     className="office-psychotherapist"
                     alt="Cabinet de la psychothérapeute" 
                />
                <img src={pharmacy} 
                     className="pharmacy"
                     alt="Facade de la pharmacie Beauvy"
                />
            </div>
            <section className="column-right">
                <h2>Permanence des Soins et Urgences Médicales : Des Soins à Tout Moment</h2>
                <p> 
                    L'objectif de la maison de santé est de vous assurer une assistance rapide et efficace lorsque vous en avez le plus besoin.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam<br />
                    <strong>Cependant toutes les urgences restent gérées par le 15.</strong>
                </p>
                <Link to="/gardes-urgences"
                      target='_blank'
                      rel='noreferrer'
                      aria-label="Visiter la page www.sante-varennes-sur-allier/gardes-urgences.fr (s'ouvre dans un nouvel onglet)" 
                >
                    <button className="general-button">Trouver les professionnels de gardes</button>
                    
                </Link>
            </section>
        </div>
        
    )
}

export default Emergencies