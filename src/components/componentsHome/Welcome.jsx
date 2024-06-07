import { Link } from 'react-router-dom'
import welcomeImage from '../../assets/images/image-welcome.webp'
import "../../styles/welcome.css"

const Welcome = () => {
    return (
        <div className="container-welcome">
            <div className='container-img'>
                <img
                    id="img-welcome"
                    src={welcomeImage}
                    alt="Image d'un médecin tenant un stéthoscope"
                />
            </div>

            <section className="section-presentation">
                <h1>Bienvenue à la maison de santé de Varennes-Sur-Allier</h1>
                <p>
                    Au-delà de la structure immobilière, une maison de santé est avant tout une envie de 32 professionnels de santé de travailler ensemble. Cela s&apos;est traduit par la création d&apos;une association afin de s&apos;organiser autour d&apos;un projet de santé.
                    Ce projet a été présenté devant plusieurs instances, ARS, CPAM, Ordres des médecins, kinés, infirmiers.. afin d&apos;être labellisé pour obtenir le nom déposé de « Maison de Santé Pluriprofessionnelle ».
                </p>
                <Link
                    to="/msp"
                    className="welcome-button"
                    aria-label="Aller à la page MSP"
                >
                    Découvrir notre MSP
                </Link>
            </section>
        </div>
    );
}

export default Welcome