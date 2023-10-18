import {useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { config } from "../config";
import { displayExternalProfessionals } from "../api/ExternalProfessionals";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import "../styles/externalPros.css"

const ExternalPros = () => {
    const [externalPros, setExternalPros] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        displayExternalProfessionals()
        .then((res)=>{
            setExternalPros(res.result)
        })
        .catch(err => {
            console.log(err) 
            setError("Une erreur s’est produite lors de la récupération des professionnels externes.")
         })
    }, [])

    return (
        <div className="section-external_pros">
            <h2>Les autres Professionnels de santé</h2>
            <section className="container-external-pros">
                {externalPros.length > 0 && (
                    externalPros.map((pro) => {
                        return (
                            <div key={pro.id}>
                                <Link to={pro.link} 
                                      target="_blank" 
                                      rel="noreferrer" 
                                      className="card-external-pros"
                                      aria-label="Visiter le site des professionnels (s'ouvre dans un nouvel onglet)"
                                >
                                    <div>
                                        <img src={config.pict_url+pro.picture} className='img-external-pros' alt={pro.name}/>
                                    </div>

                                    <div>
                                        <p><strong>{pro.name}</strong> <FontAwesomeIcon className="icon" icon={faCircleArrowRight} /></p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                )}
                {error && <div className="error-message">{error}</div>}
            </section>
        </div>
    )
}

export default ExternalPros