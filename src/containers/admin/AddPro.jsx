/*Importing modules*/
import {useState, useEffect} from "react"
import {Navigate} from "react-router-dom"

/*Importing components*/
import AddProForm from "../../components/Forms/AddProForm"
/*import AddHoursForm from "../../components/AddHoursForm"*/
import ModalAddPro from "../../components/Modals/ModalAddPro"
/*import ModalAddHours from "../../components/Modals/ModalAddHours"*/

/*Importing API functions*/
import { saveOneProfessional, displaySpecializations } from "../../api/Professionals"
import { displayDays } from "../../api/OpeningHours"

const AddPro = (props) => {

    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [specializations, setSpecializations] = useState([])
    const [selectedSpecialization, setSelectedSpecialization] = useState("")
    const [details, setDetails] = useState("")


    /*const [pro_id, setPro_id] = useState([])*/
    /*const [selectedProId, setSelectedProId] = useState("")*/
    const [day_id, setDay_id] = useState([])
    /*const [selectedDayId, setSelectedDayId] = useState("")*/
    /*const [h_start_morning, setHStartMorning] = useState("")*/
    /*const [h_end_morning, setHEndMorning] = useState("")*/
    /*const [h_start_afternoon, setHStartAfternoon] = useState("")*/
    /*const [h_end_afternoon, setHEndAfternoon] = useState("")*/

    /*const [hoursForm, setHoursForm] = useState(0)*/

    /*const addHoursForm = () => {
        setHoursForm(prev => prev + 1)
    }*/

    const [openAddProModal, setOpenAddProModal] = useState(false)
    /*const [openAddHoursModal, setOpenAddHoursModal] = useState(false)*/

    const handleCloseModal = () => {
        setOpenAddProModal(false)
    }

    /*const displayAddedProfessional = () => {
        console.log("j'entre dans la fonction displayAddedProfessional")
        displayAllProfessionals()
        .then((res)=>{
            console.log("RES dans le then", res)
            setPro_id(res.result)
            console.log("setPro_id", res.result)
        })
        .catch(err => console.log(err))
    }*/
    
    /*useEffect(()=> {
        displayAddedProfessional()
    }, [])*/

    /*console.log('pro_id après displayAddedProfessionel', pro_id)*/

    useEffect(()=>{
        displayDays()
        .then((res)=>{
            setDay_id(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    /*useEffect(()=>{
        displayAllProfessionals()
        .then((res)=>{
            setPro_id(res.result)
        })
        .catch(err => console.log(err))
    }, [])*/
    
    useEffect(()=> {
        displaySpecializations()
        .then((res)=>{
            setSpecializations(res.result)
        })
        .catch(err => console.log(err))
    }, [])
    
    const savePro = (datas) => {
        console.log("j'entre la fonction savePro")
        saveOneProfessional(datas)
        .then((res)=>{
            if(res.status === 201){
                setOpenAddProModal(true)
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            }else {
                console.log("echec", res)
            }
        })
        .catch(err=>console.log(err))
    }

    /*const saveHours = (datas) => {
        saveOpeningHours(datas)
        .then((res)=> {
            if(res.status === 200){
                setOpenAddHoursModal(true)
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
            pro_id: selectedProId,
            day_id: selectedDayId,
            h_start_morning: h_start_morning,
            h_end_morning: h_end_morning, 
            h_start_afternoon: h_start_afternoon,
            h_end_afternoon: h_end_afternoon
        }
        saveHours(datas)
    }*/

    const handleSubmit = () => {

        let datas = {
            lastname: lastname,
            firstname: firstname,
            address: address,
            zip: zip,
            city: city,
            phone: phone, 
            details: details,
            speciality_id: selectedSpecialization
        }
        savePro(datas)
    }

  return (
    <>
        <section>
            <h1>Ajouter un professionnel de santé</h1>    
            <AddProForm
                    lastname={lastname}
                    firstname={firstname}
                    address={address}
                    zip={zip}
                    city={city}
                    phone={phone}
                    details={details}
                    specializationsList={specializations}

                    onChangeLastname={setLastname}
                    onChangeFirstname={setFirstname}
                    onChangeAddress={setAddress}
                    onChangeZip={setZip}
                    onChangeCity={setCity}
                    onChangePhone={setPhone}
                    onChangeDetails={setDetails}
                    onChangeSpecializations={setSelectedSpecialization}
                    handleSubmit={handleSubmit}
                />
        
            <ModalAddPro open={openAddProModal} onClose={handleCloseModal} />
        </section>

        {/*<section>
            <h2>Horaires</h2>
            <AddHoursForm
                proList={pro_id}
                dayList={day_id}
                h_start_morning={h_start_morning}
                h_end_morning={h_end_morning}
                h_start_afternoon={h_start_afternoon}
                h_end_afternoon={h_end_afternoon}
                
                onChangeProId={setSelectedProId}
                onChangeDayId={setSelectedDayId}
                onChangeHStartMorning={setHStartMorning}
                onChangeHEndMorning={setHEndMorning}
                onChangeHStartAfternoon={setHStartAfternoon}
                onChangeHEndAfternoon={setHEndAfternoon}
                handleSubmitHours={handleSubmitHours}
            />

            

            {Array.from({length: hoursForm}).map((_, index)=> (
                <AddHoursForm
                    proList={pro_id}
                    dayList={day_id}
                    h_start_morning={h_start_morning}
                    h_end_morning={h_end_morning}
                    h_start_afternoon={h_start_afternoon}
                    h_end_afternoon={h_end_afternoon}
                    
                    onChangeProId={setSelectedProId}
                    onChangeDayId={setSelectedDayId}
                    onChangeHStartMorning={setHStartMorning}
                    onChangeHEndMorning={setHEndMorning}
                    onChangeHStartAfternoon={setHStartAfternoon}
                    onChangeHEndAfternoon={setHEndAfternoon}
                    handleSubmitHours={handleSubmitHours}
                />
            ))}

                <ModalAddHours open={openAddHoursModal} onClose={handleCloseModal} />

                <button onClick={addHoursForm} 
                    className="general_button"
            >
                Ajouter d'autres horaires
            </button>
            </section>*/}
    </>
  )
}
export default AddPro