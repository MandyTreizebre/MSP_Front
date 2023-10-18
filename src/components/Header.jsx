import {Link} from 'react-router-dom'
import { useRef, useState } from 'react'
import { useAdmin } from './AdminContext'

import Logo from '../assets/images/logo.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear, faBars} from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'

const Header = () =>{
    // Reference for scrolling to specializations
    const refSpe = useRef(null)
    const [navIsOpen, setNavIsOpen] = useState(false)
    const {admin, logout } = useAdmin()

    //Function to toggle navigation on/off 
    const toggleMenu = () => {
        setNavIsOpen((open)=> !open)
    }

    return (
        <header>
            <div className='container-banner'>
                <Link to="/"
                      aria-label="Visiter la page d'accueil de la Maison de santé de Varennes-Sur-Allier" 
                > 
                    <img 
                    src={Logo} 
                    id="logo" 
                    alt= "Logo de la Maison de santé de Varennes-Sur-Allier"
                    
                    />
                </Link>
            </div>

            {/* Menu trigger icon for mobiles and tablets  */}
            <button id="mobile-tablet-trigger">
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick={toggleMenu} 
                    className="trigger-icon"  
                />  
            </button>
                
            {/* 
                Main navigation with "navigation" class and "is-open" conditional class when 
                navIsOpen is true to manage navigation opening  
            */}    
            <nav className={`navigation ${navIsOpen ? "is-open" : ""}`}>
                {/* navigation links */}
                <Link to="/"
                      aria-label="Aller à la page d'accueil"
                      rel="noreferrer"
                >
                    Accueil
                </Link>
                {/* Link to scroll smoothly to the specializations section */}
                <Link to="#specializations" 
                    onClick={()=> refSpe.current.scrollIntoView({behavior: "smooth"})}
                    aria-label="Aller à la section des spécialisations"
                >
                    Rendez-vous
                </Link>
                <Link to="/msp" 
                      rel="noreferrer"
                      aria-label="Visiter la page msp de la Maison de santé de Varennes-Sur-Allier" 
                >
                    Notre MSP
                </Link>
                <Link to="/informations-sante" 
                      rel="noreferrer"
                      aria-label="Visiter la page informations santé de la Maison de santé de Varennes-Sur-Allier" 
                >
                    Informations santé
                </Link>
                <Link to="/contact" 
                      rel="noreferrer"
                      aria-label="Visiter la page contact de la Maison de santé de Varennes-Sur-Allier" 
                >
                    Contact
                </Link>
                <Link to="/gardes-urgences" 
                      rel="noreferrer"
                      aria-label="Visiter la page des gardes et urgences de la Maison de santé de Varennes-Sur-Allier"
                >
                    Urgences et gardes
                </Link>
                {admin ? (
                    <>
                    <Link to="/admin">Portail Admin</Link>
                    <button onClick={logout} className='logout-button'>Se déconnecter</button> 
                    </>
                       

                ) : (
                    <Link to="/login" 
                          rel="noreferrer"
                          aria-label="Visiter la page de connexion de la Maison de santé de Varennes-Sur-Allier">
                          <FontAwesomeIcon icon={faGear} title="Administration" />
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default Header