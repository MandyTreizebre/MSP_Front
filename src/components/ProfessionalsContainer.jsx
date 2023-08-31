import "../styles/professionalsContainer.css"

const ProfessionalsContainer = ({professionals}) => {

    const groupedProfessionals = professionals.reduce((grouped, professional) => {
        const key = `${professional.lastname} ${professional.firstname}`;
        if (!grouped[key]) {
            grouped[key] = {};
        }

        // Group schedules by day
        const dayKey = professional.day_name;
        if (!grouped[key][dayKey]) {
            grouped[key][dayKey] = professional;
        }

        return grouped;
    }, {});

    console.log("groupedProfessionals", groupedProfessionals);

    return (
        <section>
        {Object.keys(groupedProfessionals).map((key, index) => (
            <div key={index} className="container_professionals">
                <div className="column-left">
                    <h3>{key}</h3>
                    <p>{groupedProfessionals[key]["Lundi"].address}</p>
                    <p>{groupedProfessionals[key]["Lundi"].zip} {groupedProfessionals[key]["Lundi"].city}</p>
                    <p><span className="bold">{groupedProfessionals[key]["Lundi"].phone}</span></p>
                    {groupedProfessionals[key]["Lundi"].details && (
                        <p>{groupedProfessionals[key]["Lundi"].details}</p>
                    )}
                </div> 
                    <div className="column-right">
                        <div className="schedule">
                            <h3>Horaires :</h3>
                            {Object.keys(groupedProfessionals[key]).map((dayKey, idx) => (
                                    <div key={idx} className="line_hours">
                                        <p><span className="bold">{dayKey}</span> :</p>
                                        <p>
                                           {groupedProfessionals[key][dayKey].h_start_morning} - {groupedProfessionals[key][dayKey].h_end_morning} / {groupedProfessionals[key][dayKey].h_start_afternoon} - {groupedProfessionals[key][dayKey].h_end_afternoon}
                                        </p>
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