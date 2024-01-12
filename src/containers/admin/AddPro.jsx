import {useState, useEffect} from "react"
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import { saveOneProfessional, displaySpecializations } from "../../api/Professionals"
import AddProForm from "../../components/Forms/AddProForm"
import Modal from "../../components/Modal"

const AddPro = (props) => {
    /*Importing API handling functions*/
    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [specializations, setSpecializations] = useState([])
    const [selectedSpecialization, setSelectedSpecialization] = useState(null)
    const [details, setDetails] = useState("")
    const [error, setError] = useState(null)

    const [openAddProModal, setOpenAddProModal] = useState(false)
    
    /*Function to handle modal closure*/
    const handleCloseModal = () => {
        setOpenAddProModal(false)
    }
    
    /*useEffect hook toget specializations when component mounts*/
    useEffect(()=> {
        displaySpecializations()
        .then((res)=>{
            setSpecializations(res.result)
        })
        .catch(err => {
            setError("Erreur lors du chargement des spécialisations")
        })
    }, [])
    
    /*Function to save professional data*/
    const savePro = (datas, token) => {
        saveOneProfessional(datas, token)
        .then((res)=>{
            if(res.status === 201){
                setOpenAddProModal(true) /*Open modal on successful save*/
                setTimeout(()=>{
                    handleCloseModal() /*Close modal after 5 seconds*/
                }, 5000)
            }else {
                setError("Erreur") /*Set error on unsuccessful save*/
            }
        })
        .catch(err=>{
            setError("Erreur lors de la création du professionnel") /*Set error on API call failure*/
        })
    }

    /*Function to handle form submission*/
    const handleSubmit = () => {
        /*Preparing data object for API call*/
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
        savePro(datas, token) /*Invoking savePro function*/
    }

  return (
    <>
        <section className="form-container">
            <h1>Ajouter un professionnel de santé</h1>
            <p className="required-p">Les champs suivis d'un <span className="required-asterisk">*</span> sont obligatoires.</p>  
            <AddProForm
                /*Passing down state and handlers as props to AddProForm component*/
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
            {error && <div className="error-message">{error}</div>}
            {/* Modal component for success message */}
            <Modal open={openAddProModal} onClose={handleCloseModal} message="Professionnel ajouté" />
        </section>
    </>
  )
}
export default AddPro