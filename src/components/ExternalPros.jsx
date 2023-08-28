import {useState, useEffect } from "react";
import { Link } from "react-router-dom"

/*Importation du fichier config (vers le back)*/
import { config } from "../config";

/*Importation de la fonction displayAllNews pour appeler les actualités*/
import { displayExternalProfessionals } from "../api/ExternalProfessionals";

/*Importation du style*/
import "../styles/externalPros.css"

const ExternalPros = () => {
    /*Déclaration de l'état otherPros avec un tableau vide comme valeur initiale*/
    const [otherPros, setOtherPros] = useState([])

    useEffect(()=>{
        displayExternalProfessionals()
        .then((res)=>{
            /*Mise à jour de otherPros avec les données obtenues par displayExternalProfessionals*/
            setOtherPros(res.result)
        })
        .catch(err => console.log(err))
    })

    return (
        <section className="section_external_pros">
                <h2>Les autres Professionnels de santé</h2>
                <div className="container_external_pros">
                    {/* Map sur les éléments du tableau otherPros et affichage des éléments*/}
                    {otherPros.length > 0 ? (
                        otherPros.map((pro) => {
                            return (
                                <div key={pro.id} className="card_external_pros">
                                    <Link to={pro.link}>
                                        <p>{pro.name}</p>
                                        <div>
                                            <img src={config.pict_url+pro.picture} id='img_external_pros' />
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                ) : (
                    <p>Aucun professionnel n'a été trouvé</p>
                )}
                </div>
            </section>
    )
}

export default ExternalPros