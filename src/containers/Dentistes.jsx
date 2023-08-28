import { getProBySpe } from "../api/Professionals"
import ProfessionalsContainer from "../components/ProfessionalsContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Dentistes = () => {
    const [dentistes, setDentistes] = useState([])


    const params = useParams()

    useEffect(()=>{
        getProBySpe(params.speciality_id)
        .then((res)=>{
            setDentistes(res.result)
            console.log("CONSOLE RESULT DE DENTISTES =>", res.result)
        })
        .catch(err => console.log(err))
    }, [])

    
    return (
        <>
        <h1>Dentistes</h1>
        <ProfessionalsContainer professionals={dentistes} />
        </>
    )
}

export default Dentistes