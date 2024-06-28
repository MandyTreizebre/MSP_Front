import { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom' 
import { useSelector } from 'react-redux' 
import { displayAllProfessionals, changeStatusProfessionnal } from '../../api/Professionals' 
import { displayExternalProfessionals } from '../../api/ExternalProfessionals' 
import { displayAllInformations } from '../../api/HealthInformations' 
import { displayAllNews } from '../../api/News' 
import { selectAdmin } from '../../slices/adminSlice' 
import CountUp from "react-countup"
import ProfessionalsAdmin from '../../components/Admin/ProfessionalsAdmin' 
import ExternalProfessionalsAdmin from '../../components/Admin/ExternalProfessionalsAdmin' 
import HealthInformationsAdmin from '../../components/Admin/HealthInformationsAdmin' 
import NewsAdmin from '../../components/Admin/NewsAdmin' 
import ImgGA from "../../assets/images/ga-chart.png" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSortDown, faUserClock, faUserMd, faUsers, faFileMedical, faNewspaper } from '@fortawesome/free-solid-svg-icons' 
import '../../styles/adminPage.css' 

const Admin = () => {
    const admin = useSelector(selectAdmin) 
    const [professionals, setProfessionals] = useState([]) 
    const [externalProfessionals, setExternalProfessionals] = useState([]) 
    const [healthInformations, setHealthInformations] = useState([])  
    const [news, setNews] = useState([]) 
    const [error, setError] = useState(null)

    const [numProfessionals, setNumProfessionals] = useState(0) 
    const [numExternalProfessionals, setNumExternalProfessionals] = useState(0)
    const [numNews, setNumNews] = useState(0) 
    const [numInformations, setNumInformations] = useState(0)

    //Fonction pour faire défiler jusqu'à une section spécifique
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    //Afficher les professionnels de santé
    const displayPros = () => {
        setError(null) 
        displayAllProfessionals()
            .then((res) => {
                setProfessionals(res.data.result)
                setNumProfessionals(res.data.result.length)
            })
            .catch((err) => {
                setError('Une erreur est survenue lors du chargement des professionnels', err) 
            }) 
    } 

    useEffect(() => {
        displayPros() 
    }, []) 


    //Afficher les professionnels externes
    const displayExternalPros = () => {
        setError(null) 
        displayExternalProfessionals()
            .then((res) => {
                setExternalProfessionals(res.data.result)
                setNumExternalProfessionals(res.data.result.length)
            })
            .catch((err) => {
                setError('Une erreur est survenue lors du chargement des professionnels externes', err) 
            }) 
    } 

    useEffect(() => {
        displayExternalPros() 
    }, []) 

    //Afficher les informations 
    const displayHealthInformations = () => {
        setError(null) 
        displayAllInformations()
            .then((res) => {
                setHealthInformations(res.data.result)
                setNumInformations(res.data.result.length)
            })
            .catch((err) => {
                setError('Une erreur est survenue lors du chargement des informations santé', err) 
            }) 
    } 

    useEffect(() => {
        displayHealthInformations() 
    }, []) 

    //Afficher les actualités 
    const displayNews = () => {
        setError(null) 
        displayAllNews()
        .then((res) => {
            setNews(res.data.result)
            setNumNews(res.data.result.length)
        })
        .catch((err) => {
            setError('Une erreur est survenue lors du chargement des actualités', err) 
        }) 
    } 

    useEffect(() => {
        displayNews() 
    }, []) 

    //Fonction pour modifier le statut des professionnels 
    const handleChangeStatus = (id, token) => {
        setError(null) 
        changeStatusProfessionnal(id, token)
            .then(() => {
                displayPros() 
                setProfessionals((prevProfs) =>
                    prevProfs.map((pros) => {
                    if (pros.id === id) {
                        return { ...pros, isActive: !pros.isActive } 
                    }
                    return pros 
                    })
                ) 
            })
            .catch((err) => {
                setError('Une erreur est survenue lors de la modification du status', err) 
            }) 
    } 

    return (
        <>
            <section className="container-admin">
            
                <section className='admin-panel'>
                    {admin.infos && <h1>Vous êtes connecté(e) en tant que {admin.infos.firstname}.</h1>}

                        <Link to="/pharmacies-gardes">Page des pharmacies</Link>

                    <div className='menu-admin-panel'>
                        <div className='card-menu' onClick={() => scrollToSection('professionals')}>
                            Les professionnels de santé
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faSortDown} className="icon-card-menu" />
                            </div>
                        </div>

                        <div className='card-menu' onClick={() => scrollToSection('external-professionals')}>
                            Les autres professionnels
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faSortDown} className="icon-card-menu" />
                            </div>
                        </div>

                        <div className='card-menu' onClick={() => scrollToSection('health-informations')}>
                            Les informations santé
                            <div className='icon-container'>
                            <FontAwesomeIcon icon={faSortDown} className="icon-card-menu" />
                            </div>
                        </div>

                        <div className='card-menu' onClick={() => scrollToSection('news')}>
                            Les actualités santé
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faSortDown} className="icon-card-menu" />
                            </div>
                        </div>
                    </div>

                    <section className='first-section-admin-panel'>
                        <div className='container-statistics'>
                            {/* Mettre en place les valeurs de google analytics ici */}
                            <h2>Statistiques de trafic :</h2>
                            <img src={ImgGA} alt="graphique représentant le trafic de la MSP" />
                        </div>

                        <div className='container-counter'>
                            <h2 className='title-container-counter'>Les chiffres actuels :</h2>
                            <p><span className='number'><CountUp end={numProfessionals} duration={3} /></span> professionnels de santé.</p>
                            <p><span className='number'><CountUp end={numExternalProfessionals} duration={3} /></span> professionnels externes.</p>
                            <p><span className='number'><CountUp end={numInformations} duration={3} /></span> informations santé.</p>
                            <p><span className='number'><CountUp end={numNews} duration={3} /></span> actualités santé.</p>   
                        </div>
                    </section>
          
                    <div id="professionals" className='container-data-admin'>
                        <h2>Les professionnels de la MSP</h2>
                        <div className="action-admin">
                            <Link to="/ajouter/professionnel">
                                <FontAwesomeIcon icon={faUserMd} className="icon-admin" />
                                Ajouter un professionnel de santé
                            </Link>
                            <Link to="/ajouter/horaires-professionnel">
                                <FontAwesomeIcon icon={faUserClock} className="icon-admin" />
                                Ajouter les horaires d&apos; un professionnel de santé
                            </Link>
                        </div>

                        <ProfessionalsAdmin professionals={professionals} onChangeStatus={handleChangeStatus} />

                        {error && <div className="error-message">{error}</div>}
                    </div>

                    <div id="external-professionals" className='container-data-admin'>
                        <h2>Les autres professionnels du territoire</h2>
                        <div className='action-admin'>
                            <Link to="/ajouter/professionnel-externe">
                                <FontAwesomeIcon icon={faUsers} className="icon-admin" />
                                Ajouter un professionnel externe
                            </Link>
                        </div>
                        <ExternalProfessionalsAdmin externalProfessionals={externalProfessionals} setExternalProfessionals={setExternalProfessionals} />

                        {error && <div className="error-message">{error}</div>}
                    </div>

                    <div id="health-informations" className='container-data-admin'>
                        <h2>Les Informations santé</h2>
                        <div className='action-admin'>
                            <Link to="/ajouter/information">
                                <FontAwesomeIcon icon={faFileMedical} className="icon-admin" />
                                Ajouter une information santé
                            </Link>
                        </div>
                        <HealthInformationsAdmin healthInformations={healthInformations} setHealthInformations={setHealthInformations} />

                        {error && <div className="error-message">{error}</div>}
                    </div>

                    <div id="news" className='container-data-admin'>
                        <h2>Les Actualités</h2>
                        <div className='action-admin'>
                            <Link to="/ajouter/actualite">
                                <FontAwesomeIcon icon={faNewspaper} className="icon-admin" />
                                Ajouter une actualité
                            </Link>
                        </div>
                        <NewsAdmin news={news} setNews={setNews} />
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </section>
            </section>
        </>
    ) 
}

export default Admin 
