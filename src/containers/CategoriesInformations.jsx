import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { displayCategories } from "../api/HealthInformations"
import { config } from "../config"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import "../styles/categoriesInformations.css"

const CategoriesInformations = () => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    /*On component mount, fetch the categories from the API*/
    useEffect(()=>{
        displayCategories()
        .then((res)=>{
            /*Upon successful get, set the categories state*/
             setCategories(res.result)
        })
        .catch(err => {
            /*If an error occurs, set an error message in the state*/
            setError("Une erreur s’est produite lors de la récupération des catégories.")
         })
    }, [])

    return (
        <section className="container-categories">
            <h1>Informations santé</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className="container-category-informations">
                {/* Iterating through categories to render each category card */}
                {categories.map((item)=>(
                    <Link key={item.id}
                          to={`/informations-categorie/${item.id}`}
                          aria-label="Visiter la page des informations santé"
                    >
                        <div className="cards-informations">
                            <h3>{item.name}</h3>
                            {/* Using a configuration URL to fetch the image associated with each category */}
                            <img src={config.pict_url+item.picture} className="category-picture" alt={item.name}/>
                            {/* Icon to indicate a clickable item */}
                            <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
                        </div>
                    </Link>
                ))}
                {/* Display an error message if there's any error during the fetch operation */}
                {error && <div className="error-message">{error}</div>}
            </div>
        </section>
    )
}

export default CategoriesInformations