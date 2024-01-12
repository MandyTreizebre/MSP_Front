import {useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { config } from "../config"
import { displayExternalProfessionals } from "../api/ExternalProfessionals"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import "../styles/externalPros.css"

const ExternalPros = () => {
    /*Initialize state variables for storing external professionals and any error message*/
    const [externalPros, setExternalPros] = useState([])
    const [error, setError] = useState(null)

    /*Define useEffect hook to get external professionals data once the component mounts*/
    useEffect(()=>{
        /*Call the API function to get external professionals data*/
        displayExternalProfessionals()
        .then((res)=>{
            /*Update state with the result data*/
            setExternalPros(res.result)
        })
        .catch(err => {
            console.error(err)
            /*update state with error message*/
            setError("Une erreur s’est produite lors de la récupération des professionnels externes.")
         })
    }, []) /*Empty dependency array means useEffect runs once on component mount*/

    return (
        <div className="section-external_pros">
            <h2>Les autres Professionnels de santé</h2>
            <section className="container-external-pros">
                {/* Conditional rendering: Check if externalPros array has data */}
                {externalPros.length > 0 && (
                    /*Map over externalPros array to create a card for each professional*/
                    externalPros.map((pro, index) => {
                        return (
                            <div key={pro.id || index}>
                                {/* Link to external professional's website */}
                                <Link to={pro.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="card-external-pros"
                                      aria-label="Visiter le site des professionnels (s'ouvre dans un nouvel onglet)"
                                >
                                    {/* Display professional's picture */}
                                    <div>
                                        <img src={`${config.api_url}/${pro.picture}`} className='img-external-pros' alt={pro.name}/>
                                    </div>
                                    {/* Display professional's name */}
                                    {/*<div>
                                        <p><strong>{pro.name}</strong> <FontAwesomeIcon className="icon" icon={faCircleArrowRight} /></p>
                                    </div>*/}
                                </Link>
                            </div>
                        )
                    })
                )}
                {/* Conditional rendering: Display error message if error state is set */}
                {error && <div className="error-message">{error}</div>}
            </section>
        </div>
    )
}

export default ExternalPros