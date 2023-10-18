import "../styles/footer.css"

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
                <nav className="container-link">
                    
                    <Link to="/"
                          rel="noreferrer"
                          aria-label="Page d'accueil (s'ouvre dans un nouvel onglet)"
                    >
                        Accueil
                    </Link>
                    <Link to="/msp"
                          rel="noreferrer"
                          aria-label="Page msp (s'ouvre dans un nouvel onglet)"
                    >
                        Notre MSP
                    </Link>
                    <Link to="/informations-sante"
                          rel="noreferrer"
                          aria-label="Pagez informations santé (s'ouvre dans un nouvel onglet)"
                    >
                        Informations santé
                    </Link>
                    <Link to="/contact"
                          rel="noreferrer"
                          aria-label="Page contact (s'ouvre dans un nouvel onglet)"
                    >
                        Contact
                    </Link>
                    <Link to="/gardes-urgences"
                          rel="noreferrer"
                          aria-label="Page des urgences et des gardes (s'ouvre dans un nouvel onglet)"
                    >
                        Urgences et gardes
                    </Link>
                    <Link to="/mentions-legales"
                          rel="noreferrer"
                          aria-label="Page des mentions legales (s'ouvre dans un nouvel onglet)"
                    >
                        Mentions légales
                    </Link>
                </nav>
            <p>© 2023 - Maison de Santé de Varennes-Sur-Allier</p>
        </footer>
    )
}

export default Footer