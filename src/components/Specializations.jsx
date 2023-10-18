import {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import {displaySpecializations} from '../api/Professionals'
import { config } from "../config"

import "../styles/specializations.css"

const Specializations = () => {
    const refSpe = useRef(null) // Reference for click-to-appointment scrolling
    const [specializations, setSpecializations] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        displaySpecializations()
        .then((res)=>{
            setSpecializations(res.result)
        })
        .catch(err => {
           console.log(err) 
           setError("Une erreur s’est produite lors de la récupération des spécialisations.")
        })
    }, [])

    return ( 

        <div id="specializations" className="container-spe" ref={refSpe}>
            <h2>Les professionnels de santé de la MSP</h2>
            <section className="section-spe">
                {specializations.map((spe)=>{
                    return (
                        <div key={spe.id} className="cards-spe">
                            <Link to={`${spe.key_url}/${spe.id}`} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  aria-label="Visiter la page des professionnels (s'ouvre dans un nouvel onglet)"
                            >
                                <img src={config.pict_url+spe.picture} className="img-spe" alt={spe.name_spe}/>
                                <p><strong>{spe.name_spe}</strong></p>
                            </Link>
                        </div>
                    )
                })}
                {error && <div className="error-message">{error}</div>}
            </section>
        </div>
    )
}

export default Specializations