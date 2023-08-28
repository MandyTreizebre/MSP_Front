import {Link} from 'react-router-dom'
import { useRef, useState } from 'react'

import '../styles/header.css'
import '../styles/tablets/tabletHeader.css'
import '../styles/mobiles/mobileHeader.css'

import Logo from '../assets/images/logo.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear, faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () =>{
    const refSpe = useRef(null)

    return (
        <header>
            <div className='container_header'>
                <Link to="/"> 
                    <img 
                    src={Logo} 
                    id="logo" 
                    alt= "Logo de la Maison de santé" 
                    />
                </Link>
            </div>

                <nav className="navigation">
                    <Link to="/">Accueil</Link>
                    <Link to="#specializations" 
                        onClick={()=> refSpe.current.scrollIntoView({behavior: "smooth"})}
                    >
                        Rendez-vous
                    </Link>
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