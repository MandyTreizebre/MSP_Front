import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import EditFormHours from "../../components/Forms/EditFormHours"
import ModalEditHours from "../../components/Modals/ModalEditHours"

import { displayDays, getOpeningHoursByPro, editOpeningHoursByPro } from "../../api/OpeningHours"

const EditHoursPro = () => {
    const [days, setDays] = useState([])
    const [selectedDayId, setSelectedDayId] = useState(0)
    const [openingHours, setOpeningHours] = useState([])
    const [h_start_morning, setHStartMorning] = useState("")
    const [h_end_morning, setHEndMorning] = useState("")
    const [h_start_afternoon, setHStartAfternoon] = useState("")
    const [h_end_afternoon, setHEndAfternoon] = useState("")

    const [openEditModalHours, setOpenEditModalHours] = useState(false)

    const params = useParams()

    const handleCloseModal = () => {
        setOpenEditModalHours(false)
    }

    useEffect(() => {
        const selectedHours = openingHours.find(oh => oh.day_id === selectedDayId);
        if (selectedHours) {
            setHStartMorning(selectedHours.h_start_morning)
            setHEndMorning(selectedHours.h_end_morning)
            setHStartAfternoon(selectedHours.h_start_afternoon)
            setHEndAfternoon(selectedHours.h_end_afternoon)
        }
    }, [selectedDayId, openingHours])

    useEffect(()=>{
        getOpeningHoursByPro(params.id)
        .then((res)=>{
            setOpeningHours(res.result)
        })
    }, [params.id])

    useEffect(()=>{
        displayDays()
        .then((res)=>{
            console.log(res)
            setDays(res.result)
        })
        .catch(err => console.log(err))

    }, [])


    const editHours = (datas) => {
        const pro_id = parseInt(params.id, 10)
        datas.day_id = selectedDayId
        editOpeningHoursByPro(datas, pro_id)
        .then((res)=>{
            if(res.status === 200){
                setOpenEditModalHours(true)
                setHStartMorning("")
                setHEndMorning("")
                setHStartAfternoon("")
                setHEndAfternoon("")
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            } else {
                console.log("erreur")
            }
        })
        .catch(err => console.error(err))
    }

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
            />
  <ModalEditHours open={openEditModalHours} onClose={handleCloseModal} />
    </>
    
  )
}
export default EditHoursPro