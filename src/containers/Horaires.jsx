import { useState, useEffect } from "react"

import { displayOpeningHours } from "../api/OpeningHours"


const Horaires = () => {
    const [pros, setPros] = useState([])

        useEffect(()=>{
            displayOpeningHours()
            .then((res)=>{
                setPros(res.result)
            })
            .catch(err => console.log(err))
        }, [])


    return (
        <section>
            <h1>horaires</h1>
            <div>
                {pros.map((pro)=>{
                    return(
                        <div key={pro.id}>
                            <p>{pro.day}</p>
                        </div>
                    )
                })}
        </div>
        </section>
    )
}

export default Horaires

/*import { getHours } from "../api/OpeningHours"
import { useState, useEffect } from "react"


const Horaires = () => {
    const [pros, setPros] = useState([])

        useEffect(()=>{
            getHours()
            .then((res)=>{
                setPros(res.result)
            })
            .catch(err => console.log(err))
        }, [])


    return (
        <section>
            <h1>horaires</h1>
            <div>
                {pros.map((pro)=>{
                    return(
                        <div key={pro.id}>
                            <p>{pro.nom}</p>
                        </div>
                    )
                })}
        </div>
        </section>
    )
}

export default Horaires*/
