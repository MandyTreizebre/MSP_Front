import { Link } from 'react-router-dom' 
import { useState } from "react" 
import Cookies from 'js-cookie' 
import { deleteNew } from '../../api/News' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons' 
import Modal from "../Modal" 
import "../../styles/newsAdmin.css" 

const NewsAdmin = ({ news, setNews }) => {
    // États pour la gestion du modal et des erreurs
    const [openDeleteNewModal, setOpenDeleteNewModal] = useState(false) 
    const [error, setError] = useState(null) 

    // Fonction pour fermer le modal
    const handleCloseModal = () => {
        setOpenDeleteNewModal(false) 
    } 

    // Fonction pour supprimer une actualité
    const onClickDeleteNew = (id) => {
        const token = Cookies.get('token') 
        deleteNew(id, token)
            .then((res) => {
                if (res.status === 200) {
                    setOpenDeleteNewModal(true) 
                    setTimeout(() => {
                        handleCloseModal() 
                    }, 5000) 
                    // Mise à jour de la liste des actualités après suppression
                    setNews(prev => prev.filter(pro => pro.id !== id)) 
                }
            })
            .catch((error) => {
                console.log(error) 
                setError("Problème lors de la suppression de l'actualité", error) 
            }) 
    } 

    return (
        <section className='section-news'>
            {news.map((item) => (
                <div key={item.id} className='bloc-news'>
                    <h4>{item.title}</h4>
                    <p>{item.details}</p>
                    <p><strong>Lien:</strong> {item.external_link}</p>
                    <div className='actions-news'>
                        <Link to={`/modifier/actualite/${item.id}`}>
                            <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
                            Modifier l&apos actualité
                        </Link>
                        <button onClick={() => onClickDeleteNew(item.id)}>
                            Supprimer l&apos actualité
                        </button>
                    </div>
                </div>
            ))}
            <Modal open={openDeleteNewModal} onClose={handleCloseModal} message="Actualité supprimée" />
            {error && <div className="error-message">{error}</div>}
        </section>
    ) 
} 

export default NewsAdmin 
