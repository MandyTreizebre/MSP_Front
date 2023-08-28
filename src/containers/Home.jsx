/*
import Urgences from "../components/Urgences"
import Actualites from "../components/Actualites";
import Specializations from "../components/Specializations";
import OtherPros from "../components/OtherPros";*/

/*Importation des components à afficher dans la Home*/ 
import Welcome from "../components/Welcome"
import Emergencies from "../components/Emergencies"
import News from "../components/News"
import Specializations from "../components/Specializations"
import ExternalPros from "../components/ExternalPros"

/*Importation du style*/
import "../styles/home.css"





const Home = () => {
    
    return (
        <>
        <Welcome />
        <Emergencies />
        <News />
        <Specializations />
        <ExternalPros />
        </>
        
    )
}

export default Home