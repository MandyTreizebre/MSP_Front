import {useState, useEffect} from "react"
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import AddHoursForm from "../../components/Forms/AddHoursForm"
import Modal from "../../components/Modals/Modal"
import { displayDays, saveOpeningHours } from "../../api/OpeningHours"
import { displayProfessionals } from "../../api/Professionals"

const AddHoursPro = () => {
    /*State for holding professionals and the selected professional*/
    const [professional, setProfessional] = useState([])
    const [selectedPro, setSelectedPro] = useState("")
    /*State for holding days and the selected day*/
    const [day, setDay] = useState([])
    const [selectedDay, setSelectedDay] = useState("")
    /*State for holding the selected working hours*/
    const [h_start_morning, setHStartMorning] = useState("")
    const [h_end_morning, setHEndMorning] = useState("")
    const [h_start_afternoon, setHStartAfternoon] = useState("")
    const [h_end_afternoon, setHEndAfternoon] = useState("")
    /* State to handle errors*/
    const [error, setError] = useState(null)
    /*State to handle the visibility of the success modal*/
    const [openAddHoursModal, setOpenAddHoursModal] = useState(false)

    //*Function to close the modal*/
    const handleCloseModal = () => {
        setOpenAddHoursModal(false)
    }

    /*Effect hook to get data on component mount*/
    useEffect(() => {
        /*Getting days data*/
        displayDays()
        .then((res) => {
            setDay(res.result)
        })
        .catch(err => {
            setError("Echec du chargement des jours")
        })
    
        /*Getting professionals data*/
        displayProfessionals()
        .then((res) => {
            setProfessional(res.result)
        })
        .catch(err => {
            setError("Échec du chargement des professionnels.")
        })
        }, [])

    /*unction to save the working hours*/
    const saveHours = (datas, token) => {
        saveOpeningHours(datas, token)
        .then((res)=> {
            if(res.status === 201){
                /*Success: Open the modal, reset form fields, close modal after 5 seconds*/
                setOpenAddHoursModal(true)
                setSelectedPro("")
                setSelectedDay("")
                setHStartMorning("")
                setHEndMorning("")
                setHStartAfternoon("")
                setHEndAfternoon("")
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            }else{
                setError("Échec de l'envoi")
            }
        })
        .catch(err=>{
            setError("Une erreur s'est produite lors de l'envoi des données")
        })
    }

    /*Function to handle form submission*/
    const handleSubmitHours = () => {
        setError(null)
        /*Preparing data for submission*/
        let datas = {
            pro_id: selectedPro,
            day_id: selectedDay,
            h_start_morning: h_start_morning,
            h_end_morning: h_end_morning, 
            h_start_afternoon: h_start_afternoon,
            h_end_afternoon: h_end_afternoon
        }
        saveHours(datas)
    }


  return (
    <section className="form-container">
            <h1>Ajouter les horaires</h1>
            <p className="required-p">Les champs suivis d'un <span className="required-asterisk">*</span> sont obligatoires.</p>
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