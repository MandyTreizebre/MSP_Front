/* COMPONENT UNDER SPECIALIZATIONS */ 

/*Importing modules, styles and pictures*/
import {useState, useEffect } from "react";
import { Link } from "react-router-dom"

import "../styles/externalPros.css"

/*Import config file (to back)*/
import { config } from "../config";

/*Importing the displayExternalProfessionals function to call up news items*/
import { displayExternalProfessionals } from "../api/ExternalProfessionals";


const ExternalPros = () => {
    /*Declaration of otherPros state with an empty array as initial value*/
    const [otherPros, setOtherPros] = useState([])

    useEffect(()=>{
        displayExternalProfessionals()
        .then((res)=>{
            /*setOtherPros updates with data from displayExternalProfessionals*/
            setOtherPros(res.result)
        })
        .catch(err => console.log(err))
    })

    return (
        <section className="section_external_pros">
                <h2>Les autres Professionnels de santé</h2>
                <div className="container_external_pros">
                    {/*Map on otherPros items and display of items*/}
                    {otherPros.length > 0 && (
                        otherPros.map((pro) => {
                            return (
                                <div key={pro.id} className="card_external_pros">
                                    <Link to={pro.link} target="_blank" rel="noreferrer">
                                        <p className="bold">{pro.name}</p>
                                        <div>
                                            <img src={config.pict_url+pro.picture} id='img_external_pros' alt={pro.name}/>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    )}
                </div>
            </section>
    )
}

export default ExternalPros