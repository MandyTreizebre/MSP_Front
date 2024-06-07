import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfessionalBySpe } from "../api/Professionals"
import ProfessionalsContainer from "../containers/ProfessionalsContainer"
import "../styles/healthProfessionals.css"
import Img1 from "../assets/images/bureau-psychologue.jpg"
import Img2 from "../assets/images/cabinetkines.jpg"
import Img3 from "../assets/images/cabmedecins.jpg"
import Img4 from "../assets/images/pharmacie-beauvy.jpg"


const HealthProfessionals = () => {

    const [professionals, setProfessionals] = useState([])
    const [error, setError] = useState(null)
    const params = useParams()

    useEffect(() => {
        getProfessionalBySpe(params.speciality_id)
        .then((res) => {
            setProfessionals(res.data.result)
        })
        .catch(err => {
            setError("Echec lors du changement des professionnels", err)
        })
    }, [params.speciality_id])

    return (
        <>
            {/* Section to display the title and a paragraph */}
            <section className="container-pros">

                <section className="container-section-top">
                    <div className="container-imgs-pros">
                        <div className="column-left-img-pros">
                            <img src={Img1} className="img-professional-left"/>
                            <img src={Img2} className="img-professional-left-resize"/>
                        </div>
                        <div className="column-right-img-pros">
                            <img src={Img3} className="img-professional-right-resize"/>
                            <img src={Img4} className="img-professional-right"/>
                        </div>
                    </div>

                    <div className="section-presentation-pros">
                        <h1>Retrouvez vos professionnels de santé</h1>
                        <p> Que ce soit pour une consultation médicale, un suivi régulier, ou tout autre besoin de santé, vous trouverez ici les informations nécessaires pour planifier votre visite.
                            Pour fixer un rendez-vous, veuillez utiliser les coordonnées fournies pour chaque professionnel de santé. Cliquez sur le numéro de téléphone pour une prise de rendez-vous rapide et efficace.
                        </p>
                        <strong>En cas d&apos;urgence médicale nécessitant une assistance immédiate, veuillez composer le 15.</strong>
                    </div>

                </section>
                



                
            </section>

            {/* Container component to handle the rendering of the professionals list */}
            <ProfessionalsContainer professionals={professionals} />
            {/* Conditional rendering of an error message  */}
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default HealthProfessionals