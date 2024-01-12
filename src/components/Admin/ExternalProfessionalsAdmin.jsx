import { Link } from 'react-router-dom' 
import { config } from '../../config'

const ExternalProfessionalsAdmin = ({externalProfessionals}) => {
  return (
    <section>
        {externalProfessionals.map((extPro) => (
            <div key={extPro.id}>
                <h4>{extPro.name}</h4>
                <Link to={`/editer/professionnel-externe/${extPro.id}`}>
                  Modifier le professionnel
                </Link>
                <img src={`${config.api_url}/${extPro.picture}`} />

            </div>
            
        ))}

    </section>
  )
}
export default ExternalProfessionalsAdmin