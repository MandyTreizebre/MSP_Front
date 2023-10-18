import { Link } from "react-router-dom"
import { config } from "../config"
import "../styles/informationsContainer.css"

const InformationsContainer = ({ informations }) => {
  console.log("INFORMATIONS =>", informations)
  return (
    <>
      <section className="presentation-informations">
        <h1>Informations sur la santé</h1>
      </section>
      {informations.map((info) => (
        <section key={info.id} className="section-informations">
          <img
            src={config.pict_url + info.image}
            alt={info.title}
            className="pict-information"
          />
          <div className="info">
            <h2>{info.title}</h2>
            <p>{info.description}</p>
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