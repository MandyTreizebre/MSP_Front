import {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import {displaySpecializations} from '../api/Professionals'
import { config } from "../config"
import "../styles/specializations.css"

const Specializations = () => {
    const refSpe = useRef(null) // Reference for click-to-appointment scrolling
    const [specializations, setSpecializations] = useState([])
    const [error, setError] = useState(null)

    /*useEffect hook to get the list of specializations on component mount*/
    useEffect(()=>{
        displaySpecializations()
        .then((res)=>{
            setSpecializations(res.result) /*Setting the state with resul data*/
        })
        .catch(err => {
            /*Setting error state in case of an error*/
           setError("Une erreur s’est produite lors de la récupération des spécialisations.")
        })
    }, []) /*Empty dependency array means this useEffect runs once, similar to componentDidMount*/

    return ( 

        /*Container div for the specializations section, with ref for scrolling*/
        <div id="specializations" className="container-spe" ref={refSpe}>
            <h2>Les professionnels de santé de la MSP</h2>
            <section className="section-spe">
                {specializations.map((spe, index)=>{ /*Mapping through the list of specializations to render individual specialization cards*/
                    return (
                        <div key={index} className="cards-spe"> {/*Each card has a unique key for React optimization*/}
                            <Link to={`${spe.key_url}/${spe.id}`} 
                                  aria-label={`Visiter la page des ${spe.name_spe}`}
                            >
                                <img src={config.pict_url+spe.picture} className="img-spe" alt={spe.name_spe}/>
                                <p><strong>{spe.name_spe}</strong></p>
                            </Link>
                        </div>
                    )
                })}
                {/* Display an error message if there was a problem fetching the news data */}
                {error && <div className="error-message">{error}</div>}
            </section>
        </div>
    )
}

export default Specializations