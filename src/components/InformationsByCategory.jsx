import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"

import { getInformationsByCategory } from "../api/HealthInformations"

import InformationsContainer from "../containers/InformationsContainer"

const InformationsByCategory = () => {
    /*Utilize the useParams hook to retrieve the 'category' parameter from the URL*/
    const {category} = useParams()
    /*Define state variables to hold the data for the category and any error that might occur*/
    const [categoryData, setCategoryData] = useState(null)
    const [error, setError] = useState(null)

    /*Define a useEffect hook that triggers the API call when the component mounts or when 'category' changes*/
    useEffect(()=>{
        /*Make an API call to get information based on the category*/
        getInformationsByCategory(category)
        .then(data => {
            /*Update the categoryData state with the received data*/
            setCategoryData(data)
          })
          .catch(err => {
            /*set the error state to display the error message to the user*/
            setError("Une erreur s'est produite lors de la récupération des informations.")
          })
    }, [category]) /*Dependency array to ensure the useEffect hook reruns when 'category' changes*/

    /*Conditional rendering to display an error message if there's an error*/
    if(error) {
        return <div className="error-message">{error}</div>
    }

    /*Conditional rendering to display a loading message while data is charging*/
    if(!categoryData){
        return <div>Chargement...</div>
    }

    return (
        <section>
            {/* Pass down the received information data as a prop to the InformationsContainer component */}
            <InformationsContainer informations={categoryData.result} />
        </section>
    )
}
export default InformationsByCategory