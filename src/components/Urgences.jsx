import { Link } from "react-router-dom";
import cabinet from '../assets/images/cabmedecins1.jpg'
import batiment from '../assets/images/photo_2022-10-31_05-22-24.jpg'
import cabinetPsy from '../assets/images/bureau psychologue.jpg'
import pharmacie from '../assets/images/pharmacie beauvy.jpg'

import '../styles/urgences.css'

const Urgences = () => {
    return (
        <section className="container_urgences">
            <div className="column1">
                <img src={cabinet} className="img1" />
                <img src={batiment} className="img2"/>
            </div>
            <div className="column2">
                <img src={cabinetPsy} className="img3" />
                <img src={pharmacie} className="img4"/>
            </div>
            <div className="column3">
                <h2>Urgences et continuité des soins</h2>
            <p>L'objectif de la maison de santé est de vous assurer une prise en charge rapide quand vous en avez besoin.<br />
                Cependant toutes les urgences restent gérées par le 15.
            </p>
            <Link to="/urgences-et-gardes"><button id="bouton">Trouver les professionnels de gardes</button></Link>
            </div>
            
        </section>
        
    )
}

export default Urgences