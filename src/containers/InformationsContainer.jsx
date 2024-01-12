import { Link } from "react-router-dom"

import { config } from "../config"

import "../styles/informationsContainer.css"

/*This component renders a list of health information.
Each information item consists of an image, title, description, and a link to a related site.*/

const InformationsContainer = ({ informations }) => {

  return (
    <>
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
                  target="_blank"
                  rel="noopener noreferrer" 
                  aria-label="Visiter le site officiel (s'ouvre dans un nouvel onglet)"
            >
              Lire la suite
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}

export default InformationsContainer