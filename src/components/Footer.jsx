import "../styles/footer.css"

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
                <div className="container_link">
                    <Link to="/">Accueil</Link>
                    <Link to="/rendez-vous">Rendez-vous</Link>
                    <Link to="/notre-msp">Notre MSP</Link>
                    <Link to="/infos-sante">Informations santé</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="urgences-gardes">Urgences et gardes</Link>  
                </div>
            <p>© 2023 - Maison de Santé de Varennes-Sur-Allier</p>
        </footer>
    )
}

export default Footer