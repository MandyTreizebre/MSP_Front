import {Link} from 'react-router-dom'
import { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom' 
import { logout } from '../api/Admin'
import {useSelector, useDispatch} from 'react-redux'
import {selectAdmin, logoutAdmin} from '../slices/adminSlice'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear, faBars} from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/images/logo.png'
import '../styles/header.css'

const Header = () =>{
    /*Retrieve the admin login state from the Redux store*/
    const {isLogged} = useSelector(selectAdmin)
    /*Dispatch function to interact with the Redux store*/
    const dispatch = useDispatch()
    /*Reference for scrolling to specializations*/
    const refSpe = useRef(null)
    /*State to manage the opening/closing of the navigation menu on mobile*/
    const [navIsOpen, setNavIsOpen] = useState(false)
    const [redirect, setRedirect] = useState(false) 

    /*Function to handle admin logout*/
    const handleLogout = () => {
        logout()
        .then(response => {
            if (response.status === 200) {
                console.log("MESSAGE RESPONSE DE LOGOUT",response.message) // Affichez le message de réussite
                dispatch(logoutAdmin())
                setRedirect(true) 
            } else {
                console.error("Erreur lors de la déconnexion:", response.message)
            }
        })
        .catch(err => {
            console.error("Erreur lors de la déconnexion:", err)
        })
    }

    /*Function to toggle the navigation menu open/closed on mobile/tablet views*/
    const toggleMenu = () => {
        setNavIsOpen((open)=> !open)
    }

    if (redirect) {
        return <Navigate to="/login" /> 
      }

    return (
        <header>
            {/* Logo section with a link to the homepage */}
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
                Main navigation section
                - "is-open" class is added conditionally based on the navIsOpen state
                - Useful for managing navigation opening on mobile/tablet views 
            */}    
            <nav className={`navigation ${navIsOpen ? "is-open" : ""}`}>
                {/* navigation links */}
                <Link to="/"
                      aria-label="Aller à la page d'accueil"
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
                      aria-label="Visiter la page msp de la Maison de santé de Varennes-Sur-Allier" 
                >
                    Notre MSP
                </Link>
                <Link to="/informations-sante" 
                      aria-label="Visiter la page informations santé de la Maison de santé de Varennes-Sur-Allier" 
                >
                    Informations santé
                </Link>
                <Link to="/contact" 
                      aria-label="Visiter la page contact de la Maison de santé de Varennes-Sur-Allier" 
                >
                    Contact
                </Link>
                <Link to="/gardes-urgences" 
                      aria-label="Visiter la page des gardes et urgences de la Maison de santé de Varennes-Sur-Allier"
                >
                    Urgences et gardes
                </Link>
                {/* Conditionally render admin portal link and logout button if admin is logged in, 
                    or login link with gear icon if admin is not logged in */}
                {isLogged ? (
                    <>
                    <Link to="/admin">Portail Admin</Link>
                    <button onClick={handleLogout} className='logout-button'>Se déconnecter</button> 
                    </>
                ) : (
                    <Link to="/login" 
                          aria-label="Page de connexion">
                          <FontAwesomeIcon icon={faGear} title="Administration" />
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default Header