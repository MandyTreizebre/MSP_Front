import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { displayInformationById, udpdateInformation, displayCategories } from "../../api/HealthInformations"
import EditHealthInformationsForm from "../../components/Admin/Forms/EditHealthInformationsForm"
import Modal from "../../components/Modal"

const EditInformations = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState(null)
    const [existingImage, setExistingImage] = useState(null)

    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState("")

    const [error, setError] = useState("")
    const [openEditInformationModal, setOpenAEditInformationModal] = useState(false) 
    
    const { id } = useParams()

    const handleCloseModal = () => {
        setOpenAEditInformationModal(false) 
    }  

    useEffect(() => {
        displayInformationById(id)
        .then((res) => {
            console.log("information by Id =>", res)
            if(res.data.result && res.data.result.length > 0) {
                const data = res.data.result[0] 
                setTitle(data.title) 
                setDescription(data.description) 
                setLink(data.link) 
                setExistingImage(data.image) 
                setSelectedCategories(data.category)       
            }
        })
        .catch((err) => {
            setError("Erreur lors de la récupération de l'information", err) 
        })
    }, [id])


    // UseEffect to get specializations data when the component mounts
    useEffect(() => {
        displayCategories()
            .then((res) => {
                setCategories(res.data.result) 
            })
            .catch((err) => {
                setError("Erreur lors de la récupération des catégories", err) 
            }) 
    }, []) 

    const editInformation = (datas, token) => {
        udpdateInformation(datas, id, token)
            .then((res) => {
                if(res.status === 200) {
                    setError("")
                    setOpenAEditInformationModal(true) 
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
                
                if (err.message === "Image invalide") {
                    setError(err.message) 
                } 
                
                if (err.message === "Lien invalide") {
                    setError(err.message) 
                } 
                
                if (err.message === "Catégorie invalide") {
                    setError(err.message) 
                } 
                
                if (err.message === "") {
                    setError("Une erreur est survenue")
                  }
            })
    }

    const handleSubmit = () => {
        const formData = new FormData() 
        formData.append('title', title || "") 
        formData.append('description', description || "") 
        formData.append('link', link || "") 
        formData.append('categories', selectedCategories || "") 

        if (image) {
            formData.append('image', image) 
        } else if (existingImage) {
            formData.append('existingImage', existingImage)  // Append the existing image reference
        }

        editInformation(formData) 
    } 

    return (
        <>
            <section className="form-container">
                <h1>Modifier une information</h1>
                <EditHealthInformationsForm
                    title={title}
                    description={description}
                    image={image}
                    existingImage={existingImage}
                    link={link}
                    categoriesList={categories}
                    selectedCategories={selectedCategories}

                    onChangeTitle={setTitle}
                    onChangeDescription={setDescription}
                    onChangePicture={setImage}
                    onChangeLink={setLink}
                    onChangeCategories={setSelectedCategories}
                    handleSubmit={handleSubmit}
                />
                {error && <div className="error-message">{error}</div>}
                <Modal open={openEditInformationModal} onClose={handleCloseModal} message="Information modifiée" />
            </section>
        </>
    ) 
} 

export default EditInformations 