import { Link, useLocation } from 'react-router-dom'
import { useRef, useState } from 'react'
import { logout } from '../api/Admin'
import { useSelector, useDispatch } from 'react-redux'
import { selectAdmin, logoutAdmin } from '../slices/adminSlice'
import { toggleDarkMode, selectIsDarkMode } from "../slices/darkModeSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/images/logo.png'
import "../styles/header.css"

const Header = () => {
    const { isLogged } = useSelector(selectAdmin)
    const isDarkMode = useSelector(selectIsDarkMode)
    const dispatch = useDispatch()
    const location = useLocation()
    const refSpe = useRef(null)
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleLogout = () => {
        logout()
            .then(response => {
                if (response.status === 200) {
                    dispatch(logoutAdmin())
                }
            })
            .catch(err => {
                console.error("Erreur lors de la déconnexion:", err)
            })
    }

    const toggleMenu = () => {
        setNavIsOpen(open => !open)
    }

    const renderNavLink = (to, label, extraProps = {}) => (
        <Link
            to={to}
            aria-label={label}
            className={location.pathname === to ? "active" : ""}
            {...extraProps}
        >
            {label}
        </Link>
    )

    return (
        <header>
            <div className="dark-mode-toggle-container">
                <div
                    className={`dark-mode-switch ${isDarkMode ? 'dark' : ''}`}
                    onClick={() => dispatch(toggleDarkMode())}
                    title={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
                >
                    {isDarkMode ? (
                        <FontAwesomeIcon icon={faSun} className="icon-light" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className="icon-dark" />
                    )}
                </div>
            </div>

            <section className='container-header'>
                <div>
                    <Link to="/" aria-label="Visiter la page d'accueil de la Maison de santé de Varennes-Sur-Allier">
                        <img src={Logo} id="logo" alt="Logo de la Maison de santé de Varennes-Sur-Allier" />
                    </Link>
                </div>

                <button id="mobile-tablet-trigger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="trigger-icon" />
                </button>

                <nav className={`navigation ${navIsOpen ? "is-open" : ""}`}>
                    {renderNavLink("/", "Accueil")}
                    <Link
                        to="#specializations"
                        onClick={() => refSpe.current.scrollIntoView()}
                        aria-label="Parcourir les spécialisations"
                        className={location.pathname === "/#specializations" ? "active" : ""}
                    >
                        Rendez-vous
                    </Link>
                    {renderNavLink("/msp", "Notre MSP")}
                    {renderNavLink("/informations-sante", "Informations santé")}
                    {renderNavLink("/contact", "Contact")}
                    {renderNavLink("/gardes-urgences", "Urgences et gardes")}

                    {isLogged ? (
                        <>
                            {renderNavLink("/admin", "Portail Admin")}
                            <button onClick={handleLogout} className='logout-button'>Se déconnecter</button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            aria-label="Page de connexion"
                            className={location.pathname === "/login" ? "active" : ""}
                        >
                            <FontAwesomeIcon icon={faGear} title="Administration" />
                        </Link>
                    )}
                </nav>
            </section>
        </header>
    )
}

export default Header