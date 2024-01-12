import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { displayOneExternalProfessional, updateExternalProfessional } from "../../api/ExternalProfessionals"
import EditExternalProForm from "../../components/Forms/EditExternalProForm"
import Modal from "../../components/Modal"

const EditExternalPro = (props) => {
  const [name, setName] = useState("")
  const [picture, setPicture] = useState(null)
  const [link, setLink] = useState("")
  const [error, setError] = useState(null)
  const [openEditExtProModal, setOpenEditExtProModal] = useState(false)

  const params = useParams()

  const handleCloseModal = () => {
    setOpenEditExtProModal(false) 
  } 

  useEffect(()=> {
    displayOneExternalProfessional(params.id)
      .then((res)=> {
        if(res.result && res.result.length > 0) {
          const data = res.result[0]
          setName(data.name)
          setLink(data.link)
        }
      })
      .catch((err)=> {
        setError("Erreur lors de la récupération du professionnel")
      })
  }, [])

  const editExternalPro = (datas, token) => {
    updateExternalProfessional(datas, params.id, token)
      .then((res)=> {
        if(res.status === 200) {
          setOpenEditExtProModal(true)
          setTimeout(() => {
            handleCloseModal()
          }, 5000)
        } else {
          setError("Echec Envoi")
        }
      })
      .catch((err) => {
        setError("Erreur lors de la modification du professionnel")
      })
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('link', link)
    if (picture) {
        formData.append('picture', picture)
    }

    editExternalPro(formData)
  }
  
  return (
    <section>
        <h1>Modifier un professionnel</h1>
        <EditExternalProForm
          name={name}
          link={link}
          onChangeName={setName}
          onChangeLink={setLink}
          onChangePicture={setPicture}
          handleSubmit={handleSubmit}
        />
        {error && <div className="error-message">{error}</div>}
        <Modal open={openEditExtProModal} onClose={handleCloseModal} message="Professionnel modifié" />
    </section>
  )
}
export default EditExternalPro