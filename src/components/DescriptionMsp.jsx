import "../styles/DescriptionMsp.css"

import equipeMedecin from "../assets/images/equipe-medecins.jpg"
import imgNourriture from "../assets/images/healthy.jpg"
import nature from "../assets/images/nature.jpg"

const DescriptionMsp = () => {
    return (
        <section className="container_description_msp">
            <article className="container_article">
                <h2>Notre ambition</h2>
                <img src={equipeMedecin} className="img_description_msp" />
                <ul>
                    <li>Coordonner les professionnels de santé autour du patient</li>
                </ul>
            </article>

            <article className="container_article">
                <h2>Nos principes</h2>
                <img src={imgNourriture} className="img_description_msp" />
                <ul>
                    <li>La prévention bucco-dentaire</li>
                    <li>L'activité physique adaptée</li>
                    <li>La cuisine thérapeutique</li>
                    <li>Un bâtiment écoresponsable</li>
                </ul>
            </article>

            <article className="container_article">
                <h2>Notre implication</h2>
                <img src={nature} className="img_description_msp" />
                <ul>
                    <li>Accueillir des étudiants</li>
                    <li>La formation continue</li>
                    <li>Travaux de recherche</li>
                </ul>
            </article>
        </section>
    )
}

export default DescriptionMsp