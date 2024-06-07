import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faUser} from '@fortawesome/free-solid-svg-icons'
import "../../styles/professionalsAdmin.css"

const ProfessionalsAdmin = ({ professionals, onChangeStatus }) => {

    /*Grouping professionals by last name and first name.
    The aim is to create a unique object for each professional with their coordinates and schedules.*/
    const groupedProfessionals = professionals.reduce((grouped, professional) => {
        const key = `${professional.lastname} ${professional.firstname}`
        /*Initializing structures for a new professional*/
        if (!grouped[key]) {
            grouped[key] = {
                coordinates: {}, /*Object to store coordinates once*/
                schedules: {},   /*Object to store schedules by day*/
            } 
        }

        /*Grouping schedules by day*/
        const dayKey = professional.day_name 
        if (!grouped[key].schedules[dayKey]) {
            grouped[key].schedules[dayKey] = [] 
        }

        grouped[key].schedules[dayKey].push(professional) 

        /*Storing the coordinates once*/
        if (!grouped[key].coordinates.address) {
            grouped[key].coordinates.id = professional.id
            grouped[key].coordinates.address = professional.address 
            grouped[key].coordinates.zip = professional.zip 
            grouped[key].coordinates.city = professional.city 
            grouped[key].coordinates.phone = professional.phone 
            grouped[key].coordinates.details = professional.details
            grouped[key].coordinates.isActive = professional.isActive
        }
        return grouped 
    }, {}) 

    return (
        <section className='section-professionals-admin'>
            {Object.keys(groupedProfessionals).map((key) => (
                <div key={key} className="container-professionals-admin">
                    <div className="box-professional">
                        <h4> <FontAwesomeIcon icon={faUser} className="icon-admin"/>{key}</h4>
                        <div className='actions-professionals'>
                            <Link to={`/editer/professionnel/${groupedProfessionals[key].coordinates.id}`}>
                                <FontAwesomeIcon icon={faPenToSquare} className="icon-admin"/>
                                Modifier le professionnel
                            </Link>
                            <Link to={`/editer/horaires-professionnel/${groupedProfessionals[key].coordinates.id}`}>
                                <FontAwesomeIcon icon={faPenToSquare} className="icon-admin"/>
                                Modifier les horaires du professionnel
                            </Link>
                            <button onClick={() => {onChangeStatus(groupedProfessionals[key].coordinates.id)  }}>
                                {groupedProfessionals[key].coordinates.isActive ? "Désactiver" : "Activer"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProfessionalsAdmin