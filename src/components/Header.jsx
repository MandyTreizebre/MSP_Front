/*Importing modules and styles*/
import {Link} from 'react-router-dom'
import { useRef, useState } from 'react'

import '../styles/header.css'
import '../styles/tablets/tabletHeader.css'
import '../styles/mobiles/mobileHeader.css'

import Logo from '../assets/images/logo.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear, faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () =>{
    // Reference for scrolling to specializations
    const refSpe = useRef(null)
    // Status to control opening and closing of navigation
    const [navIsOpen, setNavIsOpen] = useState(false)

    //Function to toggle navigation on/off 
    const toggleMenu = () => {
        setNavIsOpen((open)=> !open)
    }

    return (
        <header>
            <div className='container_banner'>
                <Link to="/"> 
                    <img 
                    src={Logo} 
                    id="logo" 
                    alt= "Logo de la Maison de santé de Varennes-Sur-Allier" 
                    />
                </Link>
            </div>

            {/* Menu trigger icon for mobiles and tablets  */}
            <div id="mobile_tablet_trigger">
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick={toggleMenu} 
                    className="trigger-icon"  
                />  
            </div>
                
            {/* 
                Main navigation with "navigation" class and "is-open" conditional class when 
                navIsOpen is true to manage navigation opening  
            */}    
            <nav className={`navigation ${navIsOpen ? "is-open" : ""}`}>
                {/* navigation links */}
                <Link to="/">Accueil</Link>
                {/* Link to scroll smoothly to the specializations section */}
                <Link to="#specializations" 
                    onClick={()=> refSpe.current.scrollIntoView({behavior: "smooth"})}
                >
                    Rendez-vous
                </Link>
                <Link to="/notre-msp">Notre MSP</Link>
                <Link to="/infos-sante">Informations santé</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/professionnels-de-garde">Urgences et gardes</Link>
                <Link to="/administrateur" ><FontAwesomeIcon icon={faGear} /></Link>
            </nav>
        </header>
    )
}

export default Header