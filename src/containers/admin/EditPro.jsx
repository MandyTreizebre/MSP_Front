import React, { useState, useEffect } from "react" 
import { useParams } from "react-router-dom"
import { displayOneProfessional, displaySpecializations, editOneProfessional } from "../../api/Professionals"
import Cookies from "js-cookie" 
import EditForm from "../../components/Forms/EditForm" 
import Modal from "../../components/Modal" 

const EditPro = (props) => {
  /* State variables to store professional data*/
  const [lastname, setLastname] = useState("") 
  const [firstname, setFirstname] = useState("") 
  const [address, setAddress] = useState("") 
  const [zip, setZip] = useState("") 
  const [city, setCity] = useState("") 
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("") 
  /*/*State for holding specializations and the selected professional*/
  const [specializations, setSpecializations] = useState([]) 
  const [selectedSpecialization, setSelectedSpecialization] = useState("") 
  /* State to handle errors*/
  const [error, setError] = useState(null) 
  /*State to handle the visibility of the success modal*/
  const [openEditModal, setOpenEditModal] = useState(false) 

  /*Get the route parameter (professional ID)*/
  const params = useParams() 

  /*Function to close the edit confirmation modal*/
  const handleCloseModal = () => {
    setOpenEditModal(false) 
  } 

  /*UseEffect to get and populate professional data when the component mounts.*/
  useEffect(() => {
    displayOneProfessional(params.id)
      .then((res) => {
        if (res.result && res.result.length > 0) {
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
      .catch((err) => {
        setError("Erreur lors de la récupération du professionnel") 
      }) 
  }, []) 

  /*UseEffect to get specializations data when the component mounts*/
  useEffect(() => {
    displaySpecializations()
      .then((res) => {
        setSpecializations(res.result) 
      })
      .catch((err) => {
        setError("Erreur lors de la récupération des spécialisations") 
      }) 
  }, []) 

  /*Function to edit professional data and display a success message in a modal*/
  const editPro = (datas, token) => {
    editOneProfessional(datas, params.id, token)
      .then((res) => {
        if (res.status === 200) {
          setOpenEditModal(true) /*Open success modal on successful update*/
          setTimeout(() => {
            handleCloseModal() /*Close the modal after 5 seconds*/
          }, 5000) 
        } else {
          setError("Echec Envoi")  /*Set error on non-200 status*/
        }
      })
      .catch((err) => {
        setError("Erreur lors de la modification du professionnel")  /*Set error on exception*/
      }) 
  } 

  /*Function to handle form submission.*/
  const handleSubmit = () => {
    let datas = {
      lastname: lastname,
      firstname: firstname,
      address: address,
      zip: zip,
      city: city,
      phone: phone,
      details: details,
      speciality_id: selectedSpecialization,
    } 
    editPro(datas) 
  } 

  return (
    <section className="form-container">
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
      {error && <div className="error-message">{error}</div>}
      <Modal open={openEditModal} onClose={handleCloseModal} message="Professionnel modifié" />
    </section>
  ) 
} 

export default EditPro 