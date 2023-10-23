import { useState, useEffect } from "react" 
import { useParams } from "react-router-dom" 
import Cookies from 'js-cookie' 
const token = Cookies.get('token') 
import EditFormHours from "../../components/Forms/EditFormHours" 
import Modal from "../../components/Modals/Modal" 
import { displayDays, getOpeningHoursByPro, editOpeningHoursByPro } from "../../api/OpeningHours" 

const EditHoursPro = () => {
    const [days, setDays] = useState([]) 
    const [selectedDayId, setSelectedDayId] = useState("") 
    const [openingHours, setOpeningHours] = useState([]) 
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

    /*Effect hook to update time fields when selected day changes*/
    useEffect(() => {
        console.log("Valeur de selectedDayId:", selectedDayId)
        const selectedHours = openingHours.find(oh => oh.day_id === selectedDayId) 
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
    }, [selectedDayId, openingHours]) 

    /*Effect hook to get opening hours for the professional*/
    useEffect(() => {
        getOpeningHoursByPro(params.id)
            .then((res) => {
                setOpeningHours(res.result)
                console.log("RES.RESULT de get opening hours by pro:", res.result)
            })
            .catch(err => {
                setError("Une erreur est survenue lors de la récupération des horaires") 
            }) 
    }, [params.id]) 

    /*Effect hook to get and set days*/
    useEffect(() => {
        displayDays()
            .then((res) => {
                setDays(res.result) 
            })
            .catch(err => {
                setError("Une erreur est survenue lors de la récupération des jours") 
            }) 
    }, []) 

    /*Function to edit hours with updated data*/
    const editHours = (datas, token) => {
        const pro_id = parseInt(params.id, 10) 
        datas.day_id = selectedDayId 
        editOpeningHoursByPro(datas, pro_id, token)
            .then((res) => {
                if (res.status === 200) {
                    setOpenEditModalHours(true) /*Open success modal on successful update*/
                    setHStartMorning("") 
                    setHEndMorning("") 
                    setHStartAfternoon("") 
                    setHEndAfternoon("") 
                    setTimeout(() => {
                        handleCloseModal() /*Close the modal after 5 seconds*/
                    }, 5000) 
                } else {
                    setError("Erreur lors de la modification des horaires") /*Set error on non-200 status*/
                }
            })
            .catch(err => {
                setError("Erreur lors de la modification des horaires") /*Set error on exception*/
            }) 
    } 

    /*Function to handle form submission for editing hours*/
    const handleSubmitHours = () => {
        let datas = {
            pro_id: params.id,
            h_start_morning: h_start_morning,
            h_end_morning: h_end_morning,
            h_start_afternoon: h_start_afternoon,
            h_end_afternoon: h_end_afternoon
        } 
        editHours(datas) 
    } 

    /*Rendering components and managing user interactions*/
    return (
        <>
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
        </>
    ) 
} 

export default EditHoursPro 