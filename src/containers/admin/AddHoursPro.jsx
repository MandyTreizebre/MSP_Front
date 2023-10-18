import {useState, useEffect} from "react"
import AddHoursForm from "../../components/Forms/AddHoursForm"
import ModalAddHours from "../../components/Modals/ModalAddHours"

import { displayDays, saveOpeningHours } from "../../api/OpeningHours"
import { displayOnlyProfessionals } from "../../api/Professionals"

const AddHoursPro = () => {

    const [professional, setProfessional] = useState([])
    const [selectedPro, setSelectedPro] = useState("")
    const [day, setDay] = useState([])
    const [selectedDay, setSelectedDay] = useState("")
    const [h_start_morning, setHStartMorning] = useState("")
    const [h_end_morning, setHEndMorning] = useState("")
    const [h_start_afternoon, setHStartAfternoon] = useState("")
    const [h_end_afternoon, setHEndAfternoon] = useState("")

    const [openAddHoursModal, setOpenAddHoursModal] = useState(false)

    const handleCloseModal = () => {
        setOpenAddHoursModal(false)
    }

    useEffect(() => {
        displayDays()
        .then((res) => {
            setDay(res.result)
        })
        .catch(err => console.log(err))
    
        displayOnlyProfessionals()
        .then((res) => {
            setProfessional(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    const saveHours = (datas) => {
        saveOpeningHours(datas)
        .then((res)=> {
            if(res.status === 201){
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
                console.log("Echec envoi: ", res)
            }
        })
        .catch(err=>console.log(err))
    }

    const handleSubmitHours = () => {

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
    <section>
            <h2>Ajouter les horaires</h2>
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
            <ModalAddHours open={openAddHoursModal} onClose={handleCloseModal} />
    </section>
  )
}

export default AddHoursPro