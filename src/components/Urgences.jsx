import { Link } from "react-router-dom";
import '../styles/urgences.css'

const Urgences = () => {
    return (
        <section className="container_urgences">
            <h2>Urgences et continuité des soins</h2>
            <p>Lorsque vous avez besoin de consulter un professionnel de santé en dehors des heures <br/>
            d'ouvertures des cabinets, vous pouvez vous rapprochez d'un professionnel de santé de garde. </p>
            <Link to="/urgences-et-gardes"><button>Trouver les professionnels de gardes</button></Link>
        </section>
        
    )
}

export default Urgences