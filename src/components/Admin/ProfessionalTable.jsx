import React from "react" 
import ProfessionalsRows from "./ProfessionalsRows" 

const ProfessionalTable = ({ groupedProfessionals, handleChangeStatus, formatTime }) => {
    // Return null if there are no professionals to display
    if (!groupedProfessionals) return null 

    /*Render a table with headers and map through groupedProfessionals to generate rows*/
    return (
        <table className="professionals-table">
            <thead>
                {/* Define table headers */}
                <tr>
                    <th className='title'>Nom</th>
                    <th className='title'>Adresse</th>
                    <th className='title'>Téléphone</th>
                    <th className='title'>Détails</th>
                    <th className='title'>Lundi</th>
                    <th className='title'>Mardi</th>
                    <th className='title'>Mercredi</th>
                    <th className='title'>Jeudi</th>
                    <th className='title'>Vendredi</th>
                    <th className='title'>Samedi</th>
                    <th className='title'>Dimanche</th>
                    <th className='title'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through the keys of groupedProfessionals, passing necessary props to ProfessionalsRows component */}
                {Object.keys(groupedProfessionals).map((key, index) => (
                    <ProfessionalsRows
                        key={key} /*Unique key for each row*/
                        professionalKey={key} /*Pass professional key as prop*/
                        professional={groupedProfessionals[key]} /*Pass professional object as prop*/
                        handleChangeStatus={handleChangeStatus} /*Pass function to handle status change*/
                        formatTime={formatTime} /*Pass function to format time*/
                    />
                ))}
            </tbody>
        </table>
    ) 
} 

export default ProfessionalTable 