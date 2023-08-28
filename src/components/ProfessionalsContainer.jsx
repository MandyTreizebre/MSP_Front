import "../styles/professionalsContainer.css"

const ProfessionalsContainer = ({professionals}) => {
    return (
        <>
            <section>
                {professionals.map((professional, index) => (
                    <div key={index} className="container_professionals">
                        <div className="column-left">
                            {professional.lastname && <p>{professional.lastname}</p>}
                            {professional.firstname && <p>{professional.firstname}</p>}
                            {professional.address && <p>{professional.address}</p>}
                            {professional.zip && <p>{professional.zip}</p>}
                            {professional.city && <p>{professional.city}</p>}
                            {professional.phone && <p>{professional.phone}</p>}
                            {professional.details && <p>{professional.details}</p>}
                        </div>
                        <div className="column-right">
                            <div className="box_day">
                                <p>Lundi</p>
                                {professional.monday_h_start_morning !== "00:00:00"  && <p>{professional.monday_h_start_morning}</p>}
                                {professional.monday_h_end_morning !== "00:00:00" && <p>{professional.monday_h_end_morning}</p>}
                                {professional.monday_h_start_afternoon !== "00:00:00" && <p>{professional.monday_h_start_afternoon}</p>}
                                {professional.monday_h_end_afternoon !== "00:00:00" && <p>{professional.monday_h_end_afternoon}</p>}
                            </div>
                            <div className="box_day">
                                <p>Mardi</p>
                                {professional.tuesday_h_start_morning !== "00:00:00" && <p>{professional.tuesday_h_start_morning}</p>}
                                {professional.tuesday_h_end_morning !== "00:00:00" && <p>{professional.tuesday_h_end_morning}</p>}
                                {professional.tuesday_h_start_afternoon !== "00:00:00" && <p>{professional.tuesday_h_start_afternoon}</p>}
                                {professional.tuesday_h_end_afternoon !== "00:00:00" && <p>{professional.tuesday_h_end_afternoon}</p>}
                            </div>
                            <div className="box_day">
                                <p>Mercredi</p>
                                {professional.wednesday_h_start_morning !== "00:00:00" && <p>{professional.wednesday_h_start_morning}</p>}
                                {professional.wednesday_h_end_morning !== "00:00:00" && <p>{professional.wednesday_h_end_morning}</p>}
                                {professional.wednesday_h_start_afternoon !== "00:00:00" && <p>{professional.wednesday_h_start_afternoon}</p>}
                                {professional.wednesday_h_end_afternoon !== "00:00:00" && <p>{professional.wednesday_h_end_afternoon}</p>}
                            </div>
                            <div className="box_day">
                                <p>Jeudi</p>
                                {professional.thursday_h_start_morning !== "00:00:00" && <p>{professional.thursday_h_start_morning}</p>}
                                {professional.thursday_h_end_morning !== "00:00:00" && <p>{professional.thursday_h_end_morning}</p>}
                                {professional.thursday_h_start_afternoon !== "00:00:00" && <p>{professional.thursday_h_start_afternoon}</p>}
                                {professional.thursday_h_end_afternoon !== "00:00:00" && <p>{professional.thursday_h_end_afternoon}</p>}
                            </div>
                            <div className="box_day">
                                <p>Vendredi</p>
                                {professional.friday_h_start_morning !== "00:00:00" && <p>{professional.friday_h_start_morning}</p>}
                                {professional.friday_h_end_morning !== "00:00:00" && <p>{professional.friday_h_end_morning}</p>}
                                {professional.friday_h_start_afternoon !== "00:00:00" && <p>{professional.friday_h_start_afternoon}</p>}
                                {professional.friday_h_end_afternoon !== "00:00:00" && <p>{professional.friday_h_end_afternoon}</p>}
                            </div>
                            <div className="box_day">
                                <p>Samedi</p>
                                {professional.saturday_h_start_morning !== "00:00:00" &&<p>{professional.saturday_h_start_morning}</p>}
                                {professional.saturday_h_end_morning !== "00:00:00" &&<p>{professional.saturday_h_end_morning}</p>}
                                {professional.saturday_h_start_afternoon !== "00:00:00" &&<p>{professional.saturday_h_start_afternoon}</p>}
                                {professional.saturday_h_end_afternoon !== "00:00:00" &&<p>{professional.saturday_h_end_afternoon}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default ProfessionalsContainer