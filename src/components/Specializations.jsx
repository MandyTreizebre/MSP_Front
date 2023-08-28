import {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom";

import { config } from "../config";

import {displaySpecializations} from '../api/Professionals'

import "../styles/Specializations.css"

const Specializations = () => {
    const refSpe = useRef(null)
  
    const [spes, setSpes] = useState([])

    useEffect(()=>{
        displaySpecializations()
        .then((res)=>{
            /*Mise à jour de spe avec les données obtenues par displaySpecializations*/
            setSpes(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    return ( 

        <section id="specializations" className="section_spe" ref={refSpe}>
            <h2>Les professionnels de santé de la MSP</h2>
            <div className="container_spe">
                {/* Map sur les éléments du tableau spes et affichage des éléments*/}
                {spes.map((spe)=>{
                    return (
                        <div key={spe.id} className="cards_spe">
                            <Link to={`${spe.name_spe}/${spe.id}`}>
                                <img src={config.pict_url+spe.picture} id="img_spe"/>
                                <p>{spe.name_spe}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </section>
    )
}

export default Specializations