import { config } from "../config"

const Doctors = ({ doctors }) => {

    function formatTime(timeString) {
        return timeString === "00:00" ? "" : timeString
    }

    return (
      <div className="container-pros-guards">
        <h2>Médecins</h2>
          <section>
            <div className="doctors">
              {doctors.map((doctor, index) => (
                <div key={index} className="bloc">
                  <img src={config.pict_url+doctor.picture} className="pict-doctors" />
                  <h3>{doctor.lastname} {doctor.firstname}</h3>
                  <p>{doctor.address}</p>
                  <p>{doctor.zip} {doctor.city}</p>
                  <a href="tel:{{doctor.phone}}"><strong>{doctor.phone}</strong></a>
                  <p>{doctor.details}</p>
                  <p>{formatTime(doctor.h_start_morning.substring(0, 5))}  {formatTime(doctor.h_end_morning.substring(0, 5))} / {formatTime(doctor.h_start_afternoon.substring(0, 5))}  {formatTime(doctor.h_end_afternoon.substring(0, 5))}</p>
                </div>
              ))}
            </div>
          </section>
      </div>
    )
  }
  
  export default Doctors