import {Link} from 'react-router-dom'

import '../styles/header.css'

import Logo from '../assets/images/logo.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons'


const Header = () =>{
    return (
        <header>
            <nav className='menu'>
                <div>
                    <img src={Logo} id="logo" alt= "Logo de la Maison de santé" />
                </div>
                <div className='navigation'>
                    <Link to="/">Accueil</Link>
                    <Link to="/rendez-vous">Rendez-vous</Link>
                    <Link to="/notre-msp">Notre MSP</Link>
                    <Link to="/infos-sante">Informations santé</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="urgences-gardes">Urgences et gardes</Link>
                    <Link to="/administrateur" ><FontAwesomeIcon icon={faGear} /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header