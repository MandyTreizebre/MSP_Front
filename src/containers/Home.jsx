import Bienvenue from "../components/Bienvenue"
import Urgences from "../components/Urgences"
import Actualites from "../components/Actualites";
import Specializations from "../components/Specializations";
import OtherPros from "../components/OtherPros";

import "../styles/home.css"


const Home = () => {
    
    return (
        <>
            <Bienvenue />
            <Urgences />
            <h2> Les actualités de la Maison de Santé </h2>
            <Actualites />
            <Specializations/>
            <OtherPros />
        </>
        
    )
}

export default Home