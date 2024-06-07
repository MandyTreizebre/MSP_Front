import { useState, useEffect } from "react" 
import { useParams } from "react-router-dom" 
import Cookies from 'js-cookie' 
const token = Cookies.get('token') 
import EditFormHours from "../../components/Admin/Forms/EditFormHours" 
import Modal from "../../components/Modal" 
import { displayDays, getOpeningHoursByPro, editOpeningHoursByPro } from "../../api/OpeningHours" 

const EditHoursPro = () => {

    const [days, setDays] = useState([]) 
    const [selectedDayId, setSelectedDayId] = useState("") 
    const [h_start_morning, setHStartMorning] = useState("") 
    const [h_end_morning, setHEndMorning] = useState("") 
    const [h_start_afternoon, setHStartAfternoon] = useState("") 
    const [h_end_afternoon, setHEndAfternoon] = useState("") 
    const [error, setError] = useState(null)
    const [message, setMessage] = useState("")
    const [isHoursAvailable, setIsHoursAvailable] = useState(true)

    const [openEditModalHours, setOpenEditModalHours] = useState(false) 

    const params = useParams() 

    /*Function to close the edit modal*/
    const handleCloseModal = () => {
        setOpenEditModalHours(false) 
    } 

    useEffect(() => {
        if (selectedDayId) {

            getOpeningHoursByPro(params.id, selectedDayId)
                .then((res) => {

                    const selectedHours = res.data.result[0]

                    if (selectedHours) {
                        setHStartMorning(selectedHours.h_start_morning)
                        setHEndMorning(selectedHours.h_end_morning)
                        setHStartAfternoon(selectedHours.h_start_afternoon)
                        setHEndAfternoon(selectedHours.h_end_afternoon)

                        setMessage("")
                        setIsHoursAvailable(true)
                    } else {
                        setHStartMorning("")
                        setHEndMorning("")
                        setHStartAfternoon("")
                        setHEndAfternoon("")

                        setMessage("Pas d'horaires définies pour ce jour")
                        setIsHoursAvailable(false)
                    }
                })
                .catch(err => {
                    setError("Une erreur est survenue lors de la récupération des horaires", err)
                });
        }
    }, [selectedDayId, params.id])

    /*Effect hook to get and set days*/
    useEffect(() => {
        displayDays()
            .then((res) => {
                setDays(res.data.result) 
            })
            .catch(err => {
                setError("Une erreur est survenue lors de la récupération des jours", err) 
            }) 
    }, []) 

    /*Function to edit hours with updated data*/
    const editHours = (datas, token) => {
        const pro_id = parseInt(params.id, 10) 
        datas.day_id = selectedDayId 
        editOpeningHoursByPro(datas, pro_id, token)
            .then((res) => {
                if (res.status === 200) {
                    setHStartMorning("") 
                    setHEndMorning("") 
                    setHStartAfternoon("") 
                    setHEndAfternoon("") 

                    setOpenEditModalHours(true)
                    
                    setTimeout(() => {
                        handleCloseModal()
                    }, 5000) 
                } else {
                    setError("Erreur lors de la modification des horaires")
                }
            })
            .catch(err => {

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

                if (err.message === "") {
                    setError("Une erreur est survenue", err)
                }
            }) 
    } 

    const handleSubmitHours = () => {
        let datas = {
            pro_id: params.id,
            h_start_morning: h_start_morning,
            h_end_morning: h_end_morning,
            h_start_afternoon: h_start_afternoon,
            h_end_afternoon: h_end_afternoon
        } 
        editHours(datas, token) 
    } 

    return (
        <section className="form-container">
        <h1>Modifier les horaires du professionnel</h1>
            <EditFormHours
                dayList={days}
                h_start_morning={h_start_morning}
                h_end_morning={h_end_morning}
                h_start_afternoon={h_start_afternoon}
                h_end_afternoon={h_end_afternoon}

                onChangeDayId={setSelectedDayId}
                onChangeHStartMorning={setHStartMorning}
                onChangeHEndMorning={setHEndMorning}
                onChangeHStartAfternoon={setHStartAfternoon}
                onChangeHEndAfternoon={setHEndAfternoon}
                handleSubmitHours={handleSubmitHours}
                isHoursAvailable={isHoursAvailable}
            />
            {message && <div className="message-info">{message}</div>}
            <Modal open={openEditModalHours} onClose={handleCloseModal} message="Horaires modifiés" />
            {error && <div className="error-message">{error}</div>}
            <p>Si le professionnel n&apos;a pas d&apos;horaires, indiquer 00:00:00</p>
        </section>
    ) 
} 

export default EditHoursPro 