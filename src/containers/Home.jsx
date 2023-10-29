import {useDispatch, useSelector} from "react-redux"
import {toggleDarkMode, selectIsDarkMode} from "../slices/darkModeSlice"
import Welcome from "../components/Welcome"
import Emergencies from "../components/Emergencies"
import News from "../components/News"
import Specializations from "../components/Specializations"
import ExternalPros from "../components/ExternalPros"
import "../../sass/styles/home.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const dispatch = useDispatch()
    const isDarkMode = useSelector(selectIsDarkMode)

    return (
        <>
            <Welcome />
            <Emergencies />
            <News />
            <Specializations />
            <ExternalPros />

            <div className="buttons-accesibility">
                <button 
                    className="dark-mode-toggle"
                    onClick={() => dispatch(toggleDarkMode())}
                    title={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
                >
                    {isDarkMode ? <FontAwesomeIcon icon={faEye} className="mode-clair" />: <FontAwesomeIcon icon={faEye} className="mode-sombre" />}
                </button>
            </div>
        </>
    )
}

export default Home