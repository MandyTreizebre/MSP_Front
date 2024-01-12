import { useState, useEffect } from "react"
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import { addExternalProfessional } from "../../api/ExternalProfessionals"
import AddExternalProForm from "../../components/Forms/AddExternalProForm"
import Modal from "../../components/Modal"

const AddExternalPros = (props) => {
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [picture, setPicture] = useState(null)
  const [error, setError] = useState(null)

  const [openAddExternalProModal, setOpenAddExternalProModal] = useState(false)

  const handleCloseModal = () => {
    setOpenAddProModal(false)
  }

  const saveExternalPro = (datas, token) => {
    addExternalProfessional(datas, token)
    .then((res)=> {
      if(res.status === 201) {
        setOpenAddExternalProModal(true)
        setTimeout(()=>{
          handleCloseModal()
        }, 5000)
      } else {
        setError("Erreur")
      }
    })
    .catch(err=>{
      setError("Erreur lors de la création du professionnel")
    })
  }

  const handleSubmit = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('link', link)
      if(picture) {
        formData.append('picture', picture)
      }
      saveExternalPro(formData, token)
    }

  return (
    <>
      <section className="form-container">
        <h1>Ajouter un professionnel externe</h1>
        <p className="required-p">Les champs suivis d'un <span className="required-asterisk">*</span> sont obligatoires.</p>
        <AddExternalProForm
          name={name}
          link={link}
          picture={picture}

          onChangeName={setName}
          onChangeLink={setLink}
          onChangePicture={setPicture}
          handleSubmit={handleSubmit}
        />
      {error && <div className="error-message">{error}</div>}
      <Modal open={openAddExternalProModal} onClose={handleCloseModal} message="Professionnel ajouté" />
      </section>
    </>
  )
}

export default AddExternalPros