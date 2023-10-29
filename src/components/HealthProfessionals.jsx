import { getProfessionalBySpe } from "../api/Professionals"
import ProfessionalsContainer from "../containers/ProfessionalsContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../../sass/styles/professionals.css"

/*Component to get and display health professionals based on a given specialty*/
const HealthProfessionals = ({ title }) => {
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
                <h1>{title}</h1>
                <p>Lorem ipsum...</p> {/* Consider parameterizing this if descriptions vary */}
            </section>
            {/* Container component to handle the rendering of the professionals list */}
            <ProfessionalsContainer professionals={professionals} />
            {/* Conditional rendering of an error message  */}
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default HealthProfessionals