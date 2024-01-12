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
             console.log(res.result)
        })
        .catch(err => {
            /*If an error occurs, set an error message in the state*/
            setError("Une erreur s’est produite lors de la récupération des catégories.")
         })
    }, [])

    return (
        <section className="container-categories">
            <h1>Informations santé</h1>
            <p>Bienvenue dans notre espace dédié à la santé, où nous vous offrons une mine précieuse d'informations pour vous guider vers un mode de vie sain et équilibré. Explorez nos catégories variées, allant de la nutrition et de l'activité physique au bien-être mental et aux conseils pratiques. Notre objectif est de fournir des ressources informatives et inspirantes qui favorisent la compréhension de votre bien-être global. Plongez dans des sujets tels que la gestion du stress, des recettes nutritives, des routines d'entraînement adaptées, et bien plus encore. Nous croyons que l'accès à des informations éclairées peut être le premier pas vers des choix de vie plus sains. Que vous cherchiez des conseils pour un mode de vie actif, des informations sur des conditions spécifiques, ou simplement des astuces pour rester en forme, vous trouverez ici un compagnon fiable pour votre parcours vers une meilleure santé.</p>
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