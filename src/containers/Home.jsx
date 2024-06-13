import { useRef, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Welcome from "../components/componentsHome/Welcome"
import Emergencies from "../components/componentsHome/Emergencies"
import News from "../components/componentsHome/News"
import Specializations from "../components/componentsHome/Specializations"
import ExternalPros from "../components/componentsHome/ExternalPros"
import "../styles/home.css"

const Home = () => {

    const refScrollToTop = useRef(null)

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(()=>{
        const handleScroll = () => {
            const scrollY = window.scrollY

            if(scrollY > 200){
                refScrollToTop.current.style.display = "block"
            } else {
                refScrollToTop.current.style.display = "none"
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Welcome />
            <Emergencies />
            <Specializations />
            <ExternalPros />
            <News />

            <button
            ref={refScrollToTop}
            className='button-scroll'
            onClick={scrollToTop}
            aria-label="Remonter en haut de la page"
            >
                <FontAwesomeIcon icon={faArrowUp}/>
            </button>
        </>
    )
}

export default Home