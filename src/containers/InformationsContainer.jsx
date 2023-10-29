import { Link } from "react-router-dom"
import { config } from "../config"
import "../styles/informationsContainer.css"

/*This component renders a list of health information.
Each information item consists of an image, title, description, and a link to a related site.*/

const InformationsContainer = ({ informations }) => {
  const showVideo = informations.some(info => info.category === 7)

  return (
    <>
      {/* Header section for health informations */}
      <section className="presentation-informations">
        <h1>Informations sur la santé</h1>
      </section>

      {showVideo && (
        <div className="youtube-video-container">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/feyaEbdJgIU?si=maUZUYPmBb1okMoU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            ></iframe>
        </div>
      )}

      {/* Map through the `informations` array and render each item */}
      {informations.map((info) => (
        <section key={info.id} className="section-informations">
          {/* Image associated with the health information */}
          <img
            src={config.pict_url + info.image}
            alt={info.title}
            className="pict-information"
          />
          <div className="info">
            {/* Title of the health information */}
            <h2>{info.title}</h2>
            {/* Description of the health information */}
            <p>{info.description}</p>
            {/* Link to the official site related to the health information */}
            <Link to={info.link} 
                  className="general-button"
                  aria-label="Visiter le site officiel (s'ouvre dans un nouvel onglet)"
            >
              Consulter le site
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}

export default InformationsContainer