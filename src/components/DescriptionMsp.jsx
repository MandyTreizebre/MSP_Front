/*Importation des images*/
import medicalTeam from "../assets/images/equipe-medecins.jpg"
import healthyFood from "../assets/images/healthy.jpg"
import nature from "../assets/images/nature.jpg"

/*Importation du style*/
import "../styles/descriptionMsp.css"

const DescriptionMsp = () => {
    return (
        <section className="container_description_msp">
            <article className="container_article">
                <h2>Notre ambition</h2>
                <img src={medicalTeam} className="img_description_msp" alt="Photo d'une équipe de médecin qui joignent leurs mains" />
                <ul>
                    <li>Coordonner les professionnels de santé autour du patient</li>
                </ul>
            </article>

            <article className="container_article">
                <h2>Nos principes</h2>
                <img src={healthyFood} className="img_description_msp" alt="Photo de nourriture saine" />
                <ul>
                    <li>La prévention bucco-dentaire</li>
                    <li>L'activité physique adaptée</li>
                    <li>La cuisine thérapeutique</li>
                    <li>Un bâtiment écoresponsable</li>
                </ul>
            </article>

            <article className="container_article">
                <h2>Notre implication</h2>
                <img src={nature} className="img_description_msp" alt="Photo d'arbres" />
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