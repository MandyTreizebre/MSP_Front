import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import { displayOneProfessional, editOneProfessional, displaySpecializations } from "../../api/Professionals"
/*import { editOpeningHoursByPro, getOpeningHoursByPro } from "../../api/OpeningHours"*/
import EditForm from "../../components/Forms/EditForm"
/*import EditFormHours from "../../components/Forms/EditFormHours"*/

/*import { displayDays } from "../../api/OpeningHours"*/

import ModalEdit from "../../components/Modals/ModalEdit"
/*import ModalEditHours from "../../components/Modals/ModalEditHours"*/

const EditPro = (props) => {

    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [specializations, setSpecializations] = useState([])
    const [selectedSpecialization, setSelectedSpecialization] = useState("")
    const [details, setDetails] = useState("")


    /*const [day_id, setDay_id] = useState([])
    const [selectedDayId, setSelectedDayId] = useState(0)
    const [h_start_morning, setHStartMorning] = useState("")
    const [h_end_morning, setHEndMorning] = useState("")
    const [h_start_afternoon, setHStartAfternoon] = useState("")
    const [h_end_afternoon, setHEndAfternoon] = useState("")*/

    /*const [openingHours, setOpeningHours] = useState([])*/

    const [openEditModal, setOpenEditModal] = useState(false)
    /*const [openEditModalHours, setOpenEditModalHours] = useState(false)*/
    const [errorMessage, setErrorMessage] = useState("")

    const params = useParams()

    /*const numSelectedDayId = parseInt(selectedDayId, 10)*/

    const handleCloseModal = () => {
        setOpenEditModal(false)
    }

    useEffect(()=>{
        displayOneProfessional(params.id)
        .then((res)=>{
            console.log("CONSOLE LOG DE RES DANS DISPLAY ONE PROFESSIONAL =>", res)
            if(res.result && res.result.length > 0){
                const data = res.result[0]
                setLastname(data.lastname)
                setFirstname(data.firstname)
                setAddress(data.address)
                setZip(data.zip)
                setCity(data.city)
                setPhone(data.phone)
                setDetails(data.details)
                setSelectedSpecialization(data.speciality_id)
            }
        })
        .catch(err => console.log(err))
    }, [])

    /*useEffect(()=>{
        getOpeningHoursByPro(params.id)
        .then((res)=>{
            console.log("CONSOLE LOG DE RES DANS GET HOURS BY PRO =>", res)
            setOpeningHours(res.result)
           console.log("CONSOLE LOG DE OPENING HOURS DANS LE USE EFFECT =>", openingHours)
        })
    }, [params.id])*/

    /*useEffect(()=>{
        console.log("CONSOLE LOG DE OPENING HOURS APRÈS MISE À JOUR =>", openingHours);
    }, [openingHours])*/

    useEffect(()=>{
        displaySpecializations()
        .then((res)=>{
            setSpecializations(res.result)
        })
        .catch(err => console.log(err))
    }, [])

    const editPro = (datas) => {
        editOneProfessional(datas, params.id)
        .then((res)=>{
            if(res.status === 200){
                setOpenEditModal(true)
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            } else {
                console.log("Echec envoi: ", res)
            }
        })
        .catch(err=>console.log(err))
    }

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
        editPro(datas)
    }

    /*useEffect(()=>{
        displayDays()
        .then((res)=>{
            console.log(res)
            setDay_id(res.result)
        })
        .catch(err => console.log(err))

    }, [])*/

    //const editHours = (datas) => {
        //console.log("Appel de editHours...")
        //datas.pro_id = params.id
        //editOpeningHoursByPro(datas)
        //.then((res)=>{
            //console.log("API RESPONSE :", res)
            /*console.log("CONSOLE LOG DE DATAS DANS EDITHOURS ", datas)*/
            /*console.log("CONSOLE LOG DE DATAS DAY ID DANS LE THEN DE EDIT HOURS =>", datas.day_id)*/
            //if(res.status === 200){
                //setOpenEditModalHours(true)
                //setTimeout(()=>{
                    //handleCloseModal()
                //}, 5000)
            //} else {
                //console.log("erreur")
            //}
        //})
        //.catch(err=>console.log(err))
    //}

    /*useEffect(()=>{
        const targetHours = openingHours.find(hours => +hours.day_id === numSelectedDayId);
        console.log("Horaires trouvés pour le jour:", targetHours)
    
        if (targetHours) {
            setHStartMorning(targetHours.h_start_morning);
            console.log("h_start_morning mis à jour:", targetHours.h_start_morning)
            setHEndMorning(targetHours.h_end_morning);
            console.log("h_end_morning mis à jour:", targetHours.h_end_morning)
            setHStartAfternoon(targetHours.h_start_afternoon);
            setHEndAfternoon(targetHours.h_end_afternoon);
        } else {
            // Réinitialiser les champs si aucun horaire n'est trouvé pour ce jour
            setHStartMorning("");
            setHEndMorning("");
            setHStartAfternoon("");
            setHEndAfternoon("");
        }
        console.log("CONSOLE LOG DE SELECTED DAY ID", typeof(selectedDayId))
    }, [selectedDayId, openingHours])

    const handleSubmitHours = () => {
        console.log("Form submitted!")
        console.log({
            hStartMorning: typeof(h_start_morning),
            hEndMorning: typeof(h_end_morning),
            hStartAfternoon: typeof(h_start_afternoon),
            hEndAfternoon: typeof(h_end_afternoon),
        })

          let datas = {
            pro_id: params.id,
            day_id: numSelectedDayId,
            h_start_morning: h_start_morning,
            h_end_morning: h_end_morning,
            h_start_afternoon: h_start_afternoon,
            h_end_afternoon: h_end_afternoon
          }
          console.log("datas", datas)
          editHours(datas);
          setErrorMessage("")
    }*/

  return (
    <>
        <h1>Modifier un professionnel</h1>
            <EditForm
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
        <ModalEdit open={openEditModal} onClose={handleCloseModal} />

        {/*<h2>Horaires</h2>
        <EditFormHours
                dayList={day_id}
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
  <ModalEditHours open={openEditModalHours} onClose={handleCloseModal} />*/}
    </>
    
    
  )
}
export default EditPro