import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { getInformationsByCategory } from "../api/HealthInformations"
import InformationsContainer from "../containers/InformationsContainer"

const InformationsByCategory = () => {

    const {category} = useParams()
    const [categoryData, setCategoryData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getInformationsByCategory(category)
        .then(res => {
            setCategoryData(res.data.result)
          })
          .catch(err => {
            setError("Une erreur s'est produite lors de la récupération des informations.", err)
          })
    }, [category]) 

    if (error) {
        return <div className="error-message">{error}</div>
    }
    
    if (!categoryData){
        return <div>Chargement...</div>
    }

    return (
        <section>
            {/* Pass down the received information data as a prop to the InformationsContainer component */}
            <InformationsContainer informations={categoryData} />
        </section>
    )
}
export default InformationsByCategory