import { Link } from "react-router-dom" 
import medicalTeam from "../assets/images/equipe-medecins.jpg" 
import healthyFood from "../assets/images/healthy.jpg" 
import nature from "../assets/images/nature.jpg" 
import doctorOffice from "../assets/images/cabmedecin2.jpg" 
import kineOffice from "../assets/images/cabinetkines.jpg" 
import "../styles/msp.css" 
import healthProject from "../assets/files/projet_sante.pdf" 

const Msp = () => {
    return (
        <>
            {/* Presentation section with kinesitherapist office image */}
            <section className="container-presentation-msp">
                <img src={kineOffice} alt="photo du bâtiment des kinésithérapeutes" className='img-kinesitherapist-office' />
                <div className='bloc-right-presentation'>
                    <h1>Notre maison de santé Pluriprofessionnelle</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    {/* Link to download the health project */}
                    <Link 
                        to={healthProject}
                        download="projet-msp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="general-button">
                            Téléchargez notre projet de santé
                        </button>
                    </Link>
                </div>
            </section>
            {/* Section describing the ambition, principles, and involvement of the health house */}
            <section className="container-description-msp">
                <article className="container-article">
                    <h2>Notre ambition</h2>
                    <img src={medicalTeam} className="img-description-msp" alt="Photo d'une équipe de médecin qui joignent leurs mains" />
                    <ul>
                        <li>Coordonner les professionnels de santé autour du patient</li>
                    </ul>
                </article>
                {/* Principles description with healthy food image */}
                <article className="container-article">
                    <h2>Nos principes</h2>
                    <img src={healthyFood} className="img-description-msp" alt="Photo de nourriture saine" />
                    <ul>
                        <li>La prévention bucco-dentaire</li>
                        <li>L'activité physique adaptée</li>
                        <li>La cuisine thérapeutique</li>
                        <li>Un bâtiment écoresponsable</li>
                    </ul>
                </article>
                {/* Involvement description with nature image */}
                <article className="container-article">
                    <h2>Notre implication</h2>
                    <img src={nature} className="img-description-msp" alt="Photo d'arbres" />
                    <ul>setPro 
                        <li>Accueillir des étudiants</li>
                        <li>La formation continue</li>
                        <li>Travaux de recherche</li>
                    </ul>
                </article>
            </section>
            {/* Final section with a quote and an image */}
            <section className="last-container">
                <h2>Lorem ipsum dolor <span>sit amet</span></h2>
                <img src={doctorOffice} alt="cabinet du docteur Regnier" className="img-office" />
                <p>"Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong>reprehenderit in voluptate</strong> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <strong>cupidatat non proident</strong>, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </section>
        </>
    ) 
}

export default Msp 