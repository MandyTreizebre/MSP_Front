/* COMPONENT UNDER NEWS */ 

/*Importing modules, styles and pictures*/
import {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom";

import "../styles/Specializations.css"

/*Import config file (to back)*/
import { config } from "../config";

/*Importing the displaySpecializations function to call up news items*/
import {displaySpecializations} from '../api/Professionals'


const Specializations = () => {
    /*Creation of a reference to target the section id=specializations element, 
    which enables click-to-appointment scrolling in the Header*/
    const refSpe = useRef(null)
  
    /*Declaration of spes state with an empty array as initial value*/
    const [spes, setSpes] = useState([])

    useEffect(()=>{
        displaySpecializations()
        .then((res)=>{
            /*Spes updates with data from displaySpecializations*/
            setSpes(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    return ( 

        <section id="specializations" className="section_spe" ref={refSpe}>
            <h2>Les professionnels de santé de la MSP</h2>
            <div className="container_spe">
                {/*Map on spes items and display of items*/}
                {spes.map((spe)=>{
                    return (
                        <div key={spe.id} className="cards_spe">
                            <Link to={`${spe.key_url}/${spe.id}`} target="_blank" rel="noreferrer">
                                <img src={config.pict_url+spe.picture} id="img_spe" alt={spe.name_spe}/>
                                <p className="bold">{spe.name_spe}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </section>
    )
}

export default Specializations