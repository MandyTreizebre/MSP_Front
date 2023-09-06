import { essaiPros } from "../api/OpeningHours"
import ProfessionalsContainer from "../components/ProfessionalsContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "../styles/dentists.css"


const Physiotherapists = () => {
    const [physiotherapists, setPhysiotherapists] = useState([])

    const params = useParams()

    useEffect(()=>{
        essaiPros(params.speciality_id)
        .then((res)=>{
            setPhysiotherapists(res.result)
            console.log("CONSOLE RESULT DE INFIRMIERS =>", res.result)
        })
        .catch(err => console.log(err))
    }, [])

   

    return (
        <>
            <section className="container_dentists">
                <h1>Infirmiers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </section>
            <ProfessionalsContainer professionals={physiotherapists} />
        </>
    )
}

export default Physiotherapists