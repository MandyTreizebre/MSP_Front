import React from 'react' 
import { Link } from 'react-router-dom' 

const ProfessionalsRows = ({ professionalKey, professional, handleChangeStatus, formatTime}) => {
    /*Destructuring properties from the 'professional' object passed as prop*/
    const { id, coordinates, schedules, isActive } = professional 

    return (
        <> {/*Fragment to group the TR element without adding extra nodes to the DOM*/}
            {/* Row for each professional */}
            <tr className='details'>
                {/* Displaying professional name */}
                <td><strong>{professionalKey}</strong></td>
                {/* Displaying professional address */}
                <td>
                    {coordinates.address}, {coordinates.zip} {coordinates.city}
                </td>
                {/* Displaying professional phone number */}
                <td>{coordinates.phone}</td>
                {/* Displaying professional details */}
                <td>{coordinates.details}</td>

                {/* Mapping through each day of the week to display schedules */}
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => {
                    /*Getting the schedule for the current day*/
                    const schedule = schedules[day] 
                    return (
                        /*Displaying schedule for each day*/
                        <td key={day}>
                            {schedule ? schedule.map((s, idx) => (
                                /*Formatting and displaying morning and afternoon schedule*/
                                <div key={idx}>
                                    {formatTime(s.h_start_morning)} - {formatTime(s.h_end_morning)} <br />
                                    {formatTime(s.h_start_afternoon)} - {formatTime(s.h_end_afternoon)}
                                </div>
                            )) : 'Fermé'} {/* Displaying 'Closed' if there's no schedule */}
                        </td>
                    ) 
                })}
                {/* Actions column containing links and button for editing professional info and schedules */}
                <td className='actions'>
                    {/* Link for editing professional info */}
                    <Link to={`/editer/professionnel/${id}`} className='admin-button'>
                        Modifier le pro
                    </Link>
                    {/* Link for editing professional schedules */}
                    <Link to={`/editer/horaires-professionnel/${id}`} className='admin-button'>
                        Modifier les horaires du pro
                    </Link>
                    {/* Button for changing the active status of the professional */}
                    <button className='admin-button' onClick={() => { handleChangeStatus(id)  }}>
                        {isActive ? "Désactiver" : "Activer"}
                    </button>
                </td>
            </tr>
        </>
    ) 
} 

export default ProfessionalsRows 