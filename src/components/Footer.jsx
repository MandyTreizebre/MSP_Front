import "../styles/footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <nav className="container-link">
                <Link to="/" aria-label="Page d'accueil">Accueil</Link>
                <Link to="/msp" aria-label="Page msp">Notre MSP</Link>
                <Link to="/informations-sante"aria-label="Pagez informations santé">Informations santé</Link>
                <Link to="/contact"aria-label="Page contact">Contact</Link>
                <Link to="/gardes-urgences"aria-label="Page des urgences et des gardes">Urgences et gardes</Link>
                <Link to="/mentions-legales"aria-label="Page des mentions legales">Mentions légales</Link>
                <Link to="/politique-confidentialite"aria-label="Politique de confidentialité">Politique de confidentialité</Link>
            </nav>
            <div className="container-copyright">
                <p>© 2024 - Maison de Santé de Varennes-Sur-Allier</p>
            </div>
        </footer>
    )
}

export default Footer