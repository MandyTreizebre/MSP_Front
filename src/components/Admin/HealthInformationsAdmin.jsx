import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { config } from '../../config'
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import { deleteInformation } from '../../api/HealthInformations'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import "../../styles/healthInformationsAdmin.css"

const HealthInformationsAdmin = ({healthInformations}) => {

    useEffect(() => {
        const token = Cookies.get('token');
        console.log("Token au montage du composant:", token);
    }, []);


    const handleDelete = (id) => {
        
        console.log("Token au moment de la suppression:", token);

        deleteInformation(id, {}, token)
        .then((res) => {
            console.log("information supprimée")
        })
        .catch(err =>
            console.error("Erreur lors de la suppression de l'information", err) )
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
                        <FontAwesomeIcon icon={faPenToSquare} className="icon-admin"/>
                        Modifier l&apos;information
                    </Link>
                    <button onClick={() => handleDelete(info.id)}>
                        Supprimer l&apos;information
                    </button>
                </div>
                
            </div>
        ))}
    </section>
  )
}
export default HealthInformationsAdmin