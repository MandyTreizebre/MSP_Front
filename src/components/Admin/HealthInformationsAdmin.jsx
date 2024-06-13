import { Link } from 'react-router-dom' 
import { useState } from 'react' 
import Cookies from 'js-cookie' 
import { deleteInformation } from '../../api/HealthInformations' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons' 
import Modal from "../Modal" 
import "../../styles/healthInformationsAdmin.css" 

const HealthInformationsAdmin = ({ healthInformations, setHealthInformations }) => {
    // États pour la gestion du modal et des erreurs
    const [openDeleteInformationModal, setOpenDeleteInformationModal] = useState(false) 
    const [error, setError] = useState(null) 

    // Fonction pour fermer le modal
    const handleCloseModal = () => {
        setOpenDeleteInformationModal(false) 
    } 

    // Fonction pour supprimer une information de santé
    const onClickDeleteInformation = (id) => {
        const token = Cookies.get('token') 
        deleteInformation(id, token)
            .then((res) => {
                if (res.status === 200) {
                    setOpenDeleteInformationModal(true) 
                    setTimeout(() => {
                        handleCloseModal() 
                    }, 5000) 
                    // Mise à jour de la liste des informations après suppression
                    setHealthInformations(prev => prev.filter(info => info.id !== id)) 
                }
            })
            .catch((error) => {
                console.log(error) 
                setError("Problème lors de la suppression de l'information", error) 
            }) 
    } 

    return (
        <section className='section-infos'>
            {healthInformations.map((info) => (
                <div key={info.id} className='bloc-informations'>
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                    <p><strong>Lien:</strong> {info.link}</p>
                    <div className='actions-informations'>
                        <Link to={`/modifier/information/${info.id}`}>
                            <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
                            Modifier l&apos information
                        </Link>
                        <button onClick={() => onClickDeleteInformation(info.id)}>
                            Supprimer l&apos information
                        </button>
                    </div>
                </div>
            ))}
            <Modal open={openDeleteInformationModal} onClose={handleCloseModal} message="Information supprimée" />
            {error && <div className="error-message">{error}</div>}
        </section>
    ) 
} 

export default HealthInformationsAdmin 
