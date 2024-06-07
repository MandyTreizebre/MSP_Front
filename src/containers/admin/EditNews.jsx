import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Cookies from 'js-cookie'
const token = Cookies.get('token')
import { displayNewById, updateNew } from "../../api/News" 
import EditNewsForm from "../../components/Admin/Forms/EditNewsForm"
import Modal from "../../components/Modal"

const EditNews = () => {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [picture, setPicture] = useState(null)
    const [externalLink, setExternalLink] = useState("")
    const [error, setError] = useState(null)
    const [openEditNewModal, setOpenEditNewModal] = useState(false)

  const params = useParams()

  const handleCloseModal = () => {
    setOpenEditNewModal(false) 
  } 

  useEffect(()=> {
    displayNewById(params.id)
      .then((res)=> {
        console.log("res de displayNewByid", res)
        if(res.data.result && res.data.result.length > 0) {
          const data = res.data.result[0]
          setTitle(data.title)
          setDetails(data.details)
          setExternalLink(data.external_link)
        }
      })
      .catch((err)=> {
        setError("Erreur lors de la récupération de l'actualité", err)
      })
  }, [params.id])

  const editNew= (datas, token) => {
    updateNew(datas, params.id, token)
    .then((res)=> {
        if(res.status === 200) {
          setOpenEditNewModal(true)
          setTimeout(() => {
            handleCloseModal()
          }, 5000)
        } else {
          setError("Echec Envoi")
        }
      })
      .catch((err) => {
        if (err.message === "Titre invalide") {
            setError(err.message)
        }
        
        if (err.message === "Description invalide") {
            setError(err.message)
        }

        if (err.message === "Lien invalide") {
            setError(err.message)
        }

        if (err.message === "") {
            setError("Une erreur est survenue")
        }
      })
  }

  //Function to handle form submission
  const handleSubmit = () => {

    const formData = new FormData()
    formData.append('title', title)
    formData.append('details', details)
    formData.append('external_link', externalLink)
    if(picture) {
      formData.append('picture', picture)
    }
    console.log("data to send =>", formData)
    editNew(formData, token)
  } 


  return (
    <section className="form-container">
        <h1>Modifier une actualité</h1>
        <EditNewsForm
          title={title}
          details={details}
          externalLink={externalLink}
          onChangeTitle={setTitle}
          onChangeDetails={setDetails}
          onChangeExternalLink={setExternalLink}
          onChangePicture={setPicture}
          handleSubmit={handleSubmit}
        />
        {error && <div className="error-message">{error}</div>}
        <Modal open={openEditNewModal} onClose={handleCloseModal} message="Actualité modifiée" />
    </section>
  )
}
export default EditNews