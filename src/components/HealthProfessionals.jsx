import { getProfessionalBySpe } from "../api/Professionals"
import ProfessionalsContainer from "../containers/ProfessionalsContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/professionals.css"

const HealthProfessionals = ({ title }) => {
    const [professionals, setProfessionals] = useState([]);
    const params = useParams();

    useEffect(() => {
        getProfessionalBySpe(params.speciality_id)
        .then((res) => {
            setProfessionals(res.result)
        })
        .catch(err => console.log(err))
    }, [params.speciality_id])

    return (
        <>
            <section className="container_pros">
                <h1>{title}</h1>
                <p>Lorem ipsum...</p> {/* Consider parameterizing this if descriptions vary */}
            </section>
            <ProfessionalsContainer professionals={professionals} />
        </>
    )
}

export default HealthProfessionals