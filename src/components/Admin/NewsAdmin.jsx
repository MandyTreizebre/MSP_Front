import { Link } from 'react-router-dom' 
import { config } from '../../config'
import { deleteNew } from '../../api/News'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare,} from '@fortawesome/free-solid-svg-icons'
import "../../styles/newsAdmin.css"


const NewsAdmin = ({news}) => {

    const handleDelete = (id) => {
        const token = Cookies.get('token')

        deleteNew(id, {}, token)
        .then((res) => {
            console.log("actualité supprimée")
        })
        .catch(err =>
            console.error("Erreur lors de la suppression de l'actualité", err) )
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
                    <FontAwesomeIcon icon={faPenToSquare} className="icon-admin"/>
                        Modifier l&apos;actualité
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>
                        Supprimer l&apos;actualité
                    </button>
                </div>
            </div>
        ))}
    </section>
  )
}
export default NewsAdmin