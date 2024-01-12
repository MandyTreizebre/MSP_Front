import { config } from "../config"

const Dentists = ({dentists}) => {

    function formatTime(timeString) {
        return timeString === "00:00" ? "" : timeString
    }

  return (
    <div className="container-pros-guards">
        <h2>Dentistes </h2>
            <section>
                <div className="dentists">
                    {dentists.map((dentist, index) => (
                        <div key={index} className="bloc">
                            <img src={config.pict_url+dentist.picture} className="pict-dentists" />
                            <h3>{dentist.lastname} {dentist.firstname}</h3>
                            <p>{dentist.address}</p>
                            <p>{dentist.zip} {dentist.city}</p>
                            <a href="tel:{{dentist.phone}}"><strong>{dentist.phone}</strong></a>
                            <p>{dentist.details}</p>
                            <p>{formatTime(dentist.h_start_morning.substring(0, 5))}  {formatTime(dentist.h_end_morning.substring(0, 5))} / {formatTime(dentist.h_start_afternoon.substring(0, 5))}  {formatTime(dentist.h_end_afternoon.substring(0, 5))}</p>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default Dentists