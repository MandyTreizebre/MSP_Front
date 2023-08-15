import Bienvenue from "../components/Bienvenue"
import Urgences from "../components/Urgences"

import "../styles/home.css"

import { config } from "../config";
import { Link } from "react-router-dom";
import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";

import { getSpecialisations } from "../api/Professionnals";


const Home = forwardRef((props, ref) => {
    const professionnelsDeSante = useRef(null)
    const [specialisations, setSpecialisations] = useState([])

    useImperativeHandle(ref, () => ({
        scrollToProfessionals: () => {
            professionnelsDeSante.scrollIntoView({behavior: 'smooth'})
        }
    }))

    useEffect(()=>{
        getSpecialisations()
        .then((res)=>{
            setSpecialisations(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Bienvenue />
            <Urgences />

            <section className="section_pros" ref={professionnelsDeSante}>
            <h2>Les professionnels de santé de la MSP</h2>
            <div className="container_pros">
                {specialisations.map((spe)=>{
                    return (
                        <div key={spe.id} className="cards_pros">
                            <Link to={`${spe.id}`}>
                                <img src={config.pict_url+spe.image} id="img_pros"/>
                                <p>{spe.libelle}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </section>
            
        </>
        
    )
})

export default Home