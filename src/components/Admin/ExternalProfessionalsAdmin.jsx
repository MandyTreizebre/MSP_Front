import { Link } from 'react-router-dom' 
import { config } from '../../config'
import Cookies from 'js-cookie'
import { deleteExternalPro } from '../../api/ExternalProfessionals'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import "../../styles/externalProfessionalsAdmin.css"

const ExternalProfessionalsAdmin = ({externalProfessionals}) => {

  return (

    <section className='section-external-pro'>
        {externalProfessionals.map((extPro) => (
            <div key={extPro.id} className='bloc-external-pro'>
                <h4>{extPro.name}</h4>
                <div className='actions-admin'>
                  <Link to={`/editer/professionnel-externe/${extPro.id}`}>
                        <FontAwesomeIcon icon={faPenToSquare} className="icon-admin"/>
                        Modifier le professionnel
                  </Link>
                  {/*<button onClick={() => handleDetelete(extPro.id)}>
                      Supprimer le professionnel
                  </button>*/}
                </div> 
            </div>
        ))}
    </section>
  )
}
export default ExternalProfessionalsAdmin