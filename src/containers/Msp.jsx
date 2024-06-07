import { Link } from "react-router-dom" 
import medicalTeam from "../assets/images/equipe-medecins.jpg" 
import healthyFood from "../assets/images/healthy.jpg" 
import nature from "../assets/images/nature.jpg" 
import doctorOffice from "../assets/images/cabmedecin2.jpg"
import healthProject from "../assets/files/projet_sante.pdf"
import "../styles/msp.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faStethoscope, faHeartbeat} from '@fortawesome/free-solid-svg-icons'

const Msp = () => {
    return (
        <>
            <section>
                <div className='bloc-presentation'>
                    <h1 data-aos="fade-right" data-aos-duration="1500">Notre maison de santé pluriprofessionnelle</h1>
                    <ul>
                        <li data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                            <FontAwesomeIcon icon={faUsers} className="icon-msp"/>
                            Nous réunissons 32 professionnels de santé, y compris médecins, infirmiers, kinésithérapeutes, psychologues, et bien d&apos;autres.
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                            <FontAwesomeIcon icon={faStethoscope} className="icon-msp"/>
                            Chaque professionnel apporte une expertise unique, favorisant une approche complète de la santé qui intègre le physique, le mental et le social.
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1500" data-aos-delay="700">
                            <FontAwesomeIcon icon={faHeartbeat} className="icon-msp"/>
                            Notre équipe s&apos;engage à fournir des soins personnalisés, mettant l&apos;accent sur la prévention, le diagnostic précoce et le traitement efficace.
                        </li>
                    </ul>
                    
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

            <section className="container-description-msp">
                <article className="container-article" data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1500">
                    <h2>Notre ambition</h2>
                    <img src={medicalTeam} className="img-description-msp" alt="Photo d'une équipe de médecin qui joignent leurs mains" />
                    <ul>
                        <li>Coordonner les professionnels de santé autour du patient</li>
                    </ul>
                </article>

                <article className="container-article" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1500">
                    <h2>Nos principes</h2>
                    <img src={healthyFood} className="img-description-msp" alt="Photo de nourriture saine" />
                    <ul>
                        <li>La prévention bucco-dentaire</li>
                        <li>L&apos;activité physique adaptée</li>
                        <li>La cuisine thérapeutique</li>
                        <li>Un bâtiment écoresponsable</li>
                    </ul>
                </article>

                <article className="container-article" data-aos="zoom-in" data-aos-delay="1800" data-aos-duration="1500">
                    <h2>Notre implication</h2>
                    <img src={nature} className="img-description-msp" alt="Photo d'arbres" />
                    <ul>
                        <li>Accueillir des étudiants</li>
                        <li>La formation continue</li>
                        <li>Travaux de recherche</li>
                    </ul>
                </article>
            </section>

            <section className="last-container">
                <h2>Lorem ipsum dolor sit amet</h2>
                <img src={doctorOffice} alt="cabinet du docteur Regnier" className="img-office" />
                <p>Notre mission est de créer un environnement où la collaboration interdisciplinaire prospère, garantissant que chaque patient bénéficie de l&apos;expertise variée de notre équipe. Que vous ayez besoin de consultations médicales, de suivi spécialisé, de soins infirmiers, de conseils nutritionnels, ou d&apos;autres services de santé, notre établissement vous offre un éventail complet de soins.
                   Chacun de nos professionnels apporte une expertise unique, contribuant à une approche complète de la santé. Ensemble, nous nous engageons à fournir des soins centrés sur le patient, mettant l&apos;accent sur la prévention, le diagnostic précoce et le traitement efficace.
                </p>
            </section>
        </>
    ) 
}

export default Msp 