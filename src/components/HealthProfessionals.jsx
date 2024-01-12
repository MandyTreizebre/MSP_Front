import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getProfessionalBySpe } from "../api/Professionals"

import ProfessionalsContainer from "../containers/ProfessionalsContainer"


/*Component to get and display health professionals based on a given specialty*/
const HealthProfessionals = () => {
    /*State to hold the retrieved professionals and potential error message*/
    const [professionals, setProfessionals] = useState([])
    const [error, setError] = useState(null)
    const params = useParams()

    /*Effect hook to get professionals when the component mounts or the speciality_id changes*/
    useEffect(() => {
        getProfessionalBySpe(params.speciality_id)
        .then((res) => {
            /*Set the professionals state with result data*/
            setProfessionals(res.result)
        })
        .catch(err => {
            /*Handle any error during the fetch by setting the error state*/
            setError("Echec lors du changement des professionnels")
        })
    }, [params.speciality_id])

    return (
        <>
            {/* Section to display the title and a paragraph */}
            <section className="container-pros">
                <p> Que ce soit pour une consultation médicale, un suivi régulier, ou tout autre besoin de santé, vous trouverez ici les informations nécessaires pour planifier votre visite.
                    Pour fixer un rendez-vous, veuillez utiliser les coordonnées fournies pour chaque professionnel de santé. Cliquez sur le numéro de téléphone pour une prise de rendez-vous rapide et efficace.</p> {/* Consider parameterizing this if descriptions vary */}
                    <strong>En cas d'urgence médicale nécessitant une assistance immédiate, veuillez composer le 15.</strong>
            </section>
            {/* Container component to handle the rendering of the professionals list */}
            <ProfessionalsContainer professionals={professionals} />
            {/* Conditional rendering of an error message  */}
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default HealthProfessionals