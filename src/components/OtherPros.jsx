import "../styles/OtherPros.css"
import { config } from "../config";
import {useState, useEffect } from "react";

import { getOtherPros } from "../api/OtherPros";

const OtherPros = () => {
    const [otherPros, setOtherPros] = useState([])

    useEffect(()=>{
        getOtherPros()
        .then((res)=>{
            setOtherPros(res.result)
        })
        .catch(err => console.log(err))
    })

    return (
        <section className="section_other_pros">
                <h2>Les autres Professionnels de santé</h2>
                <div className="container_other_pros">
                    {otherPros.length > 0 ? (
                        otherPros.map((pro) => {
                            return (
                                <div key={pro.id} className="card_other_pros">
                                    <p>{pro.nom}</p>
                                    <div>
                                        <img src={config.pict_url+pro.image} id='img_other_pros' />
                                    </div>
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

export default OtherPros