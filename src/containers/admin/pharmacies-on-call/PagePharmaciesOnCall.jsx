import { useEffect, useState } from "react"
import { Link } from 'react-router-dom' 
import { displayAllPharmaciesOnCallAPI } from "../../../api/Pharmacie"

const PagePharmaciesOnCall = () => {

    const [pharmaciesOnCall, setPharmaciesOnCall] = useState([])
    const [error, setError] = useState(null)

    //Récupération pour affichage de toutes les pharmacies de gardes enregistrées 
    const displayAllPharmaciesOnCall = () => {
        setError(null)
        displayAllPharmaciesOnCallAPI()
            .then((res)=> {
                setPharmaciesOnCall(res.data.result)
            })
            .catch((err) => {
                setError("Erreur lors de la récupération des pharmacies de gardes", err)
            })
    }

    useEffect(() => {
        displayAllPharmaciesOnCall()
    })

    return (
        <>
            <h1>Les pharmacies de gardes</h1>

            <Link to="/ajouter-pharmacie-gardes">Ajouter une pharmacie de garde</Link>
            <Link to="/ajouter-dates-gardes">Ajouter les gardes d&apos; une pharmacie</Link>

            <h2>Liste des pharmacies actuellement enregistrées : </h2>

                {pharmaciesOnCall.map((pharmacy) => (
                    <div key={pharmacy.id}>
                        <h4>{pharmacy.name}</h4>
                        <p>{pharmacy.address}</p>
                        <p>{pharmacy.phone}</p>
                    </div>
                ))}

            {error && <div className="error-message">{error}</div>}

        </>

    )
}

export default PagePharmaciesOnCall