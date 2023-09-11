import "../styles/professionalsContainer.css";

const ProfessionalsContainer = ({ professionals }) => {

    function formatTime(timeString) {
        if(timeString === "00:00:00"){
            return "";
        }
        const [hours, minutes] = timeString.split(':')
        return `${hours}h${minutes}`
    }

  const groupedProfessionals = professionals.reduce((grouped, professional) => {
    const key = `${professional.lastname} ${professional.firstname}`;
    if (!grouped[key]) {
      grouped[key] = {
        coordinates: {}, // Un objet pour stocker les coordonnées une seule fois
        schedules: {},   // Un objet pour stocker les horaires par jour
      };
    }

    // Group schedules by day
    const dayKey = professional.day_name;
    if (!grouped[key].schedules[dayKey]) {
      grouped[key].schedules[dayKey] = [];
    }

    grouped[key].schedules[dayKey].push(professional);

    // Store the coordinates once
    if (!grouped[key].coordinates.address) {
      grouped[key].coordinates.address = professional.address;
      grouped[key].coordinates.zip = professional.zip;
      grouped[key].coordinates.city = professional.city;
      grouped[key].coordinates.phone = professional.phone;
      grouped[key].coordinates.details = professional.details;
    }

    return grouped;
  }, {});


  return (

    
    <section>
      {Object.keys(groupedProfessionals).map((key, index) => (
        <div key={index} className="container_professionals">
          <div className="column-left">
            <h3>{key}</h3>
            {/* Afficher les coordonnées du professionnel (une seule fois) */}
            <div>
              <p>{groupedProfessionals[key].coordinates.address}</p>
              <p>
                {groupedProfessionals[key].coordinates.zip}{" "}
                {groupedProfessionals[key].coordinates.city}
              </p>
              <p>
                <span className="bold">
                  {groupedProfessionals[key].coordinates.phone}
                </span>
              </p>
              {groupedProfessionals[key].coordinates.details && (
                <p className="details">{groupedProfessionals[key].coordinates.details}</p>
              )}
            </div>
          </div>
          <div className="column-right">
            <div className="schedule">
              <h3>Horaires :</h3>
              {/* Afficher les horaires du professionnel par jour */}
              {Object.keys(groupedProfessionals[key].schedules).map(
                (dayKey, idx) => (
                  <div key={idx} className="line_hours">
                    <p>
                      <span className="bold">{dayKey}</span> :
                    </p>
                    {groupedProfessionals[key].schedules[dayKey].map(
                      (prof, idx) => (
                        <p key={idx}>
                          {formatTime(prof.h_start_morning)}  {formatTime(prof.h_end_morning)} {" "}
                          {formatTime(prof.h_start_afternoon)}  {formatTime(prof.h_end_afternoon)}
                        </p>
                      )
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProfessionalsContainer;