import { Link } from 'react-router-dom'

/*Importation du Pdf à télé<charger*/
import projetSante from '../assets/files/projet_sante.pdf'

import "../styles/PresentationMsp.css"

const PresentationMsp = () => {
    return (
       
        <section className="container_presentation_msp">
            <h1>Notre maison de santé Pluriprofessionnelle</h1>

            <p>Au-delà de la structure immobilière, une Maison de Santé Pluriprofessionnelle (MSP) est avant tout une envie de 32 professionnels de santé de travailler ensemble. Cela s’est traduit par la création d’une association afin de s’organiser autour d’un projet de santé.Ce projet de santé présente un diagnostic du térritoire, un état des lieux de l’offre de soins comparativement à la région et/ou au niveau national, la mise en place d’actions des professionnels de santé pour travailler ensemble et de façon coordonné.Celui-ci a été validé et donc labellisé par les instances (ARS, CPAM, Ordres des médecins, kinés, infirmiers…). De ce fait, Varennes sur Allier dispose d’une « Maison de Santé Pluriprofessionnelle » .</p>

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
        </section>
       
    )
}

export default PresentationMsp