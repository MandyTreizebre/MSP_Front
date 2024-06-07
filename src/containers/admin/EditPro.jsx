import { useState, useEffect } from "react" 
import { useParams } from "react-router-dom"
import { displayOneProfessional, displaySpecializations, editOneProfessional } from "../../api/Professionals"
import EditProForm from "../../components/Admin/Forms/EditProForm" 
import Modal from "../../components/Modal" 

const EditPro = () => {
  // State variables to store professional data
  const [lastname, setLastname] = useState("") 
  const [firstname, setFirstname] = useState("") 
  const [address, setAddress] = useState("") 
  const [zip, setZip] = useState("") 
  const [city, setCity] = useState("") 
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("") 

  const [specializations, setSpecializations] = useState([]) 
  const [selectedSpecialization, setSelectedSpecialization] = useState("") 

  const [error, setError] = useState(null) 
  const [openEditModal, setOpenEditModal] = useState(false) 

  //Get the route parameter (professional ID)
  const params = useParams() 

  //Function to close the edit confirmation modal
  const handleCloseModal = () => {
    setOpenEditModal(false) 
  } 

  // UseEffect to get and populate professional data when the component mounts.
  useEffect(() => {
    displayOneProfessional(params.id)
      .then((res) => {
        console.log("res dans le displayOneProfessional", res)
        if (res.data.result && res.data.result.length > 0) {
          const data = res.data.result[0] 
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
      .catch((err) => {
        setError("Erreur lors de la récupération du professionnel", err) 
      }) 
  }, [params.id]) 

  // UseEffect to get specializations data when the component mounts
  useEffect(() => {
    displaySpecializations()
      .then((res) => {
        setSpecializations(res.data.result) 
      })
      .catch((err) => {
        setError("Erreur lors de la récupération des spécialisations", err) 
      }) 
  }, []) 

  // Function to edit professional data and display a success message in a modal
  const editPro = (datas, token) => {
    editOneProfessional(datas, params.id, token)
      .then((res) => {
        if (res.status === 200) {
          setSelectedSpecialization([])
          setError(null)

          setOpenEditModal(true) 
          setTimeout(() => {
            handleCloseModal() 
          }, 5000) 
        }
      })
      .catch((err) => {
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

  //Function to handle form submission
  const handleSubmit = () => {
    // Preparing data object for API call
    let datas = {
      lastname: String(lastname).trim(),
      firstname: String(firstname).trim(),
      address: String(address).trim(),
      zip: String(zip).trim(),
      city: String(city).trim(),
      phone: String(phone).trim(),
      details: String(details).trim(),
      speciality_id: Number(selectedSpecialization),
    }
    
    console.log("type de lastname =>", typeof(lastname))
    console.log("type de firstname =>", typeof(firstname))
    console.log("type de address =>", typeof(address))
    console.log("type de zip =>", typeof(zip))
    console.log("type de city =>", typeof(city))
    console.log("type de phone =>", typeof(phone))
    console.log("type de details =>", typeof(details))
    console.log("type de selectedSpecialization =>", typeof(selectedSpecialization))

    editPro(datas) 
  } 

  return (
    <section className="form-container">
      <h1>Modifier le professionnel</h1>
      <EditProForm
        lastname={lastname}
        firstname={firstname}
        address={address}
        zip={zip}
        city={city}
        phone={phone}
        details={details}
        specializationsList={specializations}
        selectedSpecialization={selectedSpecialization}

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
      <Modal open={openEditModal} onClose={handleCloseModal} message="Professionnel modifié" />
    </section>
  ) 
} 

export default EditPro 