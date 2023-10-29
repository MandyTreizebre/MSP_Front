import { Link } from 'react-router-dom' 
import "../../../sass/styles/professionalsAdmin.css"

const ProfessionalsAdmin = ({ professionals, onChangeStatus }) => {
    /*Function to format time. If the time is "00:00:00", it indicates the professional is closed*/
    function formatTime(timeString) {
        if (timeString === "00:00:00") {
            return "Fermé" 
        }
        const [hours, minutes] = timeString.split(':') 
        return `${hours}h${minutes}` 
    }

    function formatPhoneNumber(phone){
        return phone.replace(/(\d{2})(?=\d)/g, '$1-')
    }

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
        <section>
            {Object.keys(groupedProfessionals).map((key, index) => (
                <div key={key} className="container-professionals">
                    <div className="column-pro">
                        <h3>{key}</h3>
                        {/* Displaying the professional's coordinates (once) */}
                        <div>
                            <p>{groupedProfessionals[key].coordinates.address}</p>
                            <p>
                                {groupedProfessionals[key].coordinates.zip} {groupedProfessionals[key].coordinates.city}
                            </p>
                            <p><strong>{formatPhoneNumber(groupedProfessionals[key].coordinates.phone)}</strong></p>
                            {groupedProfessionals[key].coordinates.details && (
                                <p className="details">{groupedProfessionals[key].coordinates.details}</p>
                            )}
                        </div>
                    </div>
                    <div className='actions-pros'>
                    <Link to={`/editer/professionnel/${groupedProfessionals[key].coordinates.id}`} className='admin-button'>
                        Modifier le pro
                    </Link>
                    <Link to={`/editer/horaires-professionnel/${groupedProfessionals[key].coordinates.id}`} className='admin-button'>
                        Modifier les horaires du pro
                    </Link>
                    <button className='admin-button' onClick={() => {onChangeStatus(groupedProfessionals[key].coordinates.id)  }}>
                        {groupedProfessionals[key].coordinates.isActive ? "Désactiver" : "Activer"}
                    </button>
                    </div>
                    <div className="column-hours">
                        <div className="schedule">
                            <h3>Horaires :</h3>
                            {/* Displaying the professional's schedules by day */}
                            {Object.keys(groupedProfessionals[key].schedules).map((dayKey, idx) => (
                                <div key={dayKey} className="line-hours">
                                    <p><strong>{dayKey}</strong> :</p>
                                    {groupedProfessionals[key].schedules[dayKey].map((prof, idx) => (
                                        <p key={`${prof.h_start_morning}-${prof.h_end_morning}-${prof.h_start_afternoon}-${prof.h_end_afternoon}`}>
                                            {formatTime(prof.h_start_morning)} {formatTime(prof.h_end_morning)} {formatTime(prof.h_start_afternoon)} {formatTime(prof.h_end_afternoon)}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProfessionalsAdmin