//Importation de Link pour la navigation
import {Link} from 'react-router-dom'

//Importation du fichier de styles 
import '../styles/header.css'

//Importation du logo 
import Logo from '../assets/images/logo.png'

//Importation de la biblio Font Awesome pour utilisation des icônes 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons'


const Header = () =>{
    return (
        <header>
            <div className='container_header'>
                <Link to="/"> {/* Le clic sur le logo renvoie à la page d'accueil */}
                    <img 
                    src={Logo} 
                    id="logo" 
                    alt= "Logo de la Maison de santé" 
                    />
                </Link>
            </div>
            <nav className='navigation'>
                <Link to="/">Accueil</Link>
                <Link to="#">Rendez-vous</Link>
                <Link to="/notre-msp">Notre MSP</Link>
                <Link to="/infos-sante">Informations santé</Link>
                <Link to="/contact">Contact</Link>
                <Link to="urgences-gardes">Urgences et gardes</Link>
                <Link to="/administrateur" ><FontAwesomeIcon icon={faGear} /></Link>
            </nav>
        </header>
    )
}

export default Header