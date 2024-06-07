import {useState, useEffect} from "react"
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import { saveOneProfessional, displaySpecializations } from "../../api/Professionals"
import AddProForm from "../../components/Admin/Forms/AddProForm"
import Modal from "../../components/Modal"

const AddPro = () => {
    
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
    
    // Function to close the modal
    const handleCloseModal = () => {
        setOpenAddProModal(false)
    }
    
    // useEffect hook to get specializations when component mounts
    useEffect(()=> {
        displaySpecializations()
        .then((res)=>{
            setSpecializations(res.data.result)
        })
        .catch(err => {
            setError(err, "Erreur lors du chargement des spécialisations")
        })
    }, [])
    
    // Function to save professional data
    const savePro = (datas, token) => {
        saveOneProfessional(datas, token)
        .then((res)=>{
            if (res.status === 201){
                setLastname("")
                setFirstname("")
                setAddress("")
                setZip("")
                setCity("")
                setPhone("")
                setDetails("")
                setError("")
                setOpenAddProModal(true) 
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            }
        })
        .catch(err=>{
            if (err.message === "Nom invalide") {
                setError(err.message)
            }
            
            if (err.message === "Prénom invalide") {
                setError(err.message)
            }

            if (err.message === "Addresse invalide") {
                setError(err.message)
            }

            if (err.message === "Code postal invalide") {
                setError(err.message)
            }

            if (err.message === "Ville invalide") {
                setError(err.message)
            }

            if (err.message === "Téléphone invalide") {
                setError(err.message)
            }

            if (err.message === "Détails invalides") {
                setError(err.message)
            }

            if (err.message === "") {
                setError("Une erreur est survenue")
            }
        })
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
        savePro(datas, token) 
    }

  return (
    <>
        <section className="form-container">
            <h1>Ajouter un professionnel de santé</h1>
            <p className="required-p">Les champs suivis d&apos;un <span className="required-asterisk">*</span> sont obligatoires.</p>
            <AddProForm
                // Passing down state and handlers as props to AddProForm component
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