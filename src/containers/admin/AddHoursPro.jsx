import {useState, useEffect} from "react"
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import AddHoursForm from "../../components/Admin/Forms/AddHoursForm"
import Modal from "../../components/Modal"
import { displayDays, saveOpeningHours } from "../../api/OpeningHours"
import { displayProfessionals } from "../../api/Professionals"

const AddHoursPro = () => {

    // State definitions for form inputs and validation
    const [professional, setProfessional] = useState([])
    const [selectedPro, setSelectedPro] = useState("")
    const [day, setDay] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    const [h_start_morning, setHStartMorning] = useState("")
    const [h_end_morning, setHEndMorning] = useState("")
    const [h_start_afternoon, setHStartAfternoon] = useState("")
    const [h_end_afternoon, setHEndAfternoon] = useState("")
    const [error, setError] = useState(null)
    const [openAddHoursModal, setOpenAddHoursModal] = useState(false)

    //Function to close modal
    const handleCloseModal = () => {
        setOpenAddHoursModal(false)
    }

    //Effect hook to get days on component mount
    useEffect(() => {
        displayDays()
        .then((res) => {
            setDay(res.data.result)
        })
        .catch(err => {
            setError("Echec du chargement des jours", err)
        }, [])
    
        //Effect hook to get professionals on component mount
        displayProfessionals()
        .then((res) => {
            setProfessional(res.data.result)
        })
        .catch(err => {
            setError("Échec du chargement des professionnels.", err)
        })
        }, [])

    // Function to save hours data
    const saveHours = (datas, token) => {
        saveOpeningHours(datas, token)
        .then((res)=> {
            if(res.status === 201){
                setHStartMorning("") 
                setHEndMorning("") 
                setHStartAfternoon("") 
                setHEndAfternoon("") 
                setSelectedDay(null)

                setOpenAddHoursModal(true)
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            } 
        })
        .catch(err=>{
            if (err.message === "Professionnel invalide") {
                setError(err.message)
            }
            
            if (err.message === "Jour invalide") {
                setError(err.message)
            }

            if (err.message === "Heure de début du matin invalide") {
                setError(err.message)
            }

            if (err.message === "Heure de fin du matin invalide") {
                setError(err.message)
            }

            if (err.message === "Heure de début de l'après-midi invalide") {
                setError(err.message)
            }

            if (err.message === "Heure de fin de l'après-midi invalide") {
                setError(err.message)
            }

            if (err.message === "Des horaires existent déjà pour ce jour et ce professionnel.") {
                setError(err.message)
            }

            if (err.message === "") {
                setError("Une erreur est survenue", err)
            }
        })
    }

    // Function to handle form submission
    const handleSubmitHours = () => {
        setError(null)
        // Preparing data for submission
        let datas = {
            pro_id: selectedPro,
            day_id: selectedDay,
            h_start_morning: h_start_morning,
            h_end_morning: h_end_morning, 
            h_start_afternoon: h_start_afternoon,
            h_end_afternoon: h_end_afternoon
        }
        saveHours(datas, token)
    }

  return (
    <section className="form-container">
        <h1>Ajouter les horaires</h1>
        <p className="required-p">Les champs suivis d&apos;un <span className="required-asterisk">*</span> sont obligatoires.</p>
        {/* Form component with props for data and handlers */}
        <AddHoursForm
            proList={professional}
            dayList={day}
            h_start_morning={h_start_morning}
            h_end_morning={h_end_morning}
            h_start_afternoon={h_start_afternoon}
            h_end_afternoon={h_end_afternoon}
                
            onChangePro={setSelectedPro}
            onChangeDay={setSelectedDay}
            onChangeHStartMorning={setHStartMorning}
            onChangeHEndMorning={setHEndMorning}
            onChangeHStartAfternoon={setHStartAfternoon}
            onChangeHEndAfternoon={setHEndAfternoon}
            handleSubmitHours={handleSubmitHours}
        />
        {error && <div className="error-message">{error}</div>}
        {/* Modal component for success message */}
        <Modal open={openAddHoursModal} onClose={handleCloseModal} message="Horaires ajoutés" />
    </section>
  )
}

export default AddHoursPro