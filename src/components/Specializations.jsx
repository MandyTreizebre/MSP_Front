import "../styles/Specializations.css"

import { getSpecialisations } from "../api/Professionnals";

import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

import { config } from "../config";

const Specializations = () => {
    const [specialisations, setSpecialisations] = useState([])

    useEffect(()=>{
        getSpecialisations()
        .then((res)=>{
            setSpecialisations(res.result)
        })
        .catch(err => console.log(err))
    }, [])
    return ( 

        <section className="section_spe">
            <h2>Les professionnels de santé de la MSP</h2>
            <div className="container_spe">
                {specialisations.map((spe)=>{
                    return (
                        <div key={spe.id} className="cards_spe">
                            <Link to={`${spe.id}`}>
                                <img src={config.pict_url+spe.image} id="img_spe"/>
                                <p>{spe.libelle}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </section>
    )
}

export default Specializations