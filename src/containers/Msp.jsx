import { Link } from "react-router-dom" 

import medicalTeam from "../assets/images/equipe-medecins.jpg" 
import healthyFood from "../assets/images/healthy.jpg" 
import nature from "../assets/images/nature.jpg" 
import doctorOffice from "../assets/images/cabmedecin2.jpg"

import healthProject from "../assets/files/projet_sante.pdf"

import "../styles/msp.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStarOfLife} from '@fortawesome/free-solid-svg-icons'

const Msp = () => {
    return (
        <>
            {/* Presentation section (list + download file) */}
            <section>
                <div className='bloc-presentation'>
                    <h1>Notre maison de santé pluriprofessionnelle</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faStarOfLife} className="icon"/>
                            Nous réunissons 32 professionnels de santé, y compris médecins, infirmiers, kinésithérapeutes, psychologues, et bien d'autres.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStarOfLife} className="icon"/>
                            Chaque professionnel apporte une expertise unique, favorisant une approche complète de la santé qui intègre le physique, le mental et le social.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStarOfLife} className="icon"/>
                            Notre équipe s'engage à fournir des soins personnalisés, mettant l'accent sur la prévention, le diagnostic précoce et le traitement efficace.
                        </li>
                    </ul>
                    {/* Link to download the health project */}
                    
                </div>
                <div className="download">
                    <Link 
                        to={healthProject}
                        download="projet-msp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button aria-label="Téléchargez notre projet de santé">
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
                    <ul>
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
                <p>Notre mission est de créer un environnement où la collaboration interdisciplinaire prospère, garantissant que chaque patient bénéficie de l'expertise variée de notre équipe. Que vous ayez besoin de consultations médicales, de suivi spécialisé, de soins infirmiers, de conseils nutritionnels, ou d'autres services de santé, notre établissement vous offre un éventail complet de soins.
                   Chacun de nos professionnels apporte une expertise unique, contribuant à <strong>une approche complète de la santé.</strong> Ensemble, nous nous engageons à fournir des soins <strong>centrés sur le patient</strong>, mettant l'accent sur la prévention, le diagnostic précoce et le traitement efficace.
                </p>
            </section>
        </>
    ) 
}

export default Msp 