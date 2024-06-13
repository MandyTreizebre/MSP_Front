import { useState, useEffect } from "react" 
import { useParams } from "react-router-dom" 
import Cookies from 'js-cookie' 
const token = Cookies.get('token') 
import { displayOneExternalProfessional, updateExternalProfessional } from "../../../api/ExternalProfessionals" 
import EditExternalProForm from "../../../components/Admin/Forms/EditExternalProForm" 
import Modal from "../../../components/Modal" 

const EditExternalPro = () => {
    const [name, setName] = useState("") 
    const [link, setLink] = useState("") 
    const [picture, setPicture] = useState(null) 
    const [error, setError] = useState(null) 
    const [openEditExtProModal, setOpenEditExtProModal] = useState(false) 

    const params = useParams() 

    const handleCloseModal = () => {
        setOpenEditExtProModal(false) 
    } 

    useEffect(() => {
        displayOneExternalProfessional(params.id)
            .then((res) => {
                if (res.data.result && res.data.result.length > 0) {
                    const data = res.data.result[0] 
                    setName(data.name) 
                    setLink(data.link) 
                }
            })
            .catch((err) => {
                setError("Erreur lors de la récupération du professionnel", err) 
            }) 
    }, [params.id]) 

    const editExternalPro = (datas, token) => {
        updateExternalProfessional(datas, params.id, token)
            .then((res) => {
                if (res.status === 200) {
                    setError(null) 
                    setOpenEditExtProModal(true) 
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
                if (err.message === "Lien invalide") {
                    setError(err.message) 
                }
                if (err.message === "") {
                    setError("Une erreur est survenue") 
                }
            }) 
    } 

    const handleSubmit = () => {
        const formData = new FormData() 
        formData.append('name', name) 
        formData.append('link', link) 
        if (picture) {
            formData.append('picture', picture) 
        }
        editExternalPro(formData, token) 
    } 

    return (
        <section className="form-container">
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
