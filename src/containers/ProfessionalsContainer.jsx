import { config } from "../config"

import "../styles/professionalsContainer.css"

const ProfessionalsContainer = ({ professionals }) => {
    /*Function to format time. If the time is "00:00:00", it indicates the professional is closed*/
    function formatTime(timeString) {
        if (timeString === "00:00:00") {
            return ""
        }
        const [hours, minutes] = timeString.split(':') 
        return `${hours}h${minutes}` 
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
            grouped[key].coordinates.address = professional.address 
            grouped[key].coordinates.zip = professional.zip 
            grouped[key].coordinates.city = professional.city 
            grouped[key].coordinates.phone = professional.phone 
            grouped[key].coordinates.details = professional.details
            grouped[key].coordinates.speciality_id = professional.speciality_id
            grouped[key].coordinates.picture = professional.picture
        }

        return grouped 
    }, {}) 

    return (
        <section className="section-professionals">
            {Object.keys(groupedProfessionals).map((key, index) => (
                <div key={index} className="container-professionals">
                    <div className="column-pro">
                        <img src={config.pict_url+groupedProfessionals[key].coordinates.picture}/>
                        <h3>{key}</h3>
                        {/* Displaying the professional's coordinates (once) */}
                        <div>
                            <p>{groupedProfessionals[key].coordinates.address}</p>
                            <p>
                                {groupedProfessionals[key].coordinates.zip} {groupedProfessionals[key].coordinates.city}
                            </p>
                            <a href="tel:{{groupedProfessionals[key].coordinates.phone}}"><strong>{groupedProfessionals[key].coordinates.phone}</strong></a>
                            {groupedProfessionals[key].coordinates.details && (
                                <p><em>{groupedProfessionals[key].coordinates.details}</em></p>
                            )}
                        </div>
                    </div>
                    <div className="column-hours">
                        <div>
                            <h3>Horaires :</h3>
                            {/* Displaying the professional's schedules by day */}
                            {Object.keys(groupedProfessionals[key].schedules).map((dayKey, idx) => (
                                <div key={idx} className="line-hours">
                                    <p><strong>{dayKey}</strong> :</p>
                                    {groupedProfessionals[key].schedules[dayKey].map((prof, idx) => (
                                        <p key={idx}>
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

export default ProfessionalsContainer 