import { useState } from "react"
import "../../../styles/adminForms.css"

const AddNewsForm = (props) => {

    const [errors, setErrors] = useState({
        title: "",
        details: "",
        picture: "",
        external_link: ""
    })

    const handleInputChange = (setter) => (e) => {
        setter(e.currentTarget.value)
    }

    const maxFileSize = 5 * 1024 * 1024 // 5MB

    const handleImageChange = (e) => {
        const file = e.target.files[0] 
        if (file) {
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png'] 
            if (!validTypes.includes(file.type)) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    picture: "Erreur de format d'image, JPEG, JPG et PNG autorisés"
                })) 
            } else if (file.size > maxFileSize) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    picture: "La taille du fichier dépasse la limite de 5MB"
                })) 
            } else {
                props.onChangePicture(file) 
                setErrors(prevErrors => ({
                    ...prevErrors,
                    picture: ""
                })) 
            }
        }
    }

    const validateForm = () => {
        let errorsForm = {...errors} 

        if (!props.title || props.title.length > 50) {
            errorsForm.title = "Titre invalide" 
        }
        
        if (!props.details || props.details.length > 200) {
            errorsForm.details = "Détails invalide" 
        }

        if (!props.external_link || props.external_link.length > 150) {
            errorsForm.external_link = "Lien invalide" 
        }

        setErrors(errorsForm) 

        return !Object.values(errorsForm).some(error => error !== "") 
    } 

  return (
    <section className="container-form">
        <form
            className="form-admin"
            onSubmit={(e) => {
                e.preventDefault()
                if (validateForm()) {
                    props.handleSubmit()
                }
            }}>

            <label htmlFor="title">Titre</label>
            <input
                type="text"
                name="title"
                value={props.title}
                onChange={handleInputChange(props.onChangeTitle)}
                maxLength={50}
                required
            />
            {errors.name && <p className="error-message">{errors.title}</p>}

            <label htmlFor="details">Détails</label>      
            <textarea
                type="text"
                name="details"
                value={props.details}
                onChange={handleInputChange(props.onChangeDetails)}
                maxLength={200}
                required
            />
            {errors.link && <p className="error-message">{errors.link}</p>}

            <label htmlFor="picture">Image</label>
            <input
                type="file"
                name="picture"
                onChange={handleImageChange}
                encType="multipart/form-data"
                required
            />
            {errors.picture && <p className="error-message">{errors.picture}</p>}

            <label htmlFor="external_link">Lien externe</label>      
            <input
                type="text"
                name="external_link"
                value={props.external_link}
                onChange={handleInputChange(props.onChangeExternalLink)}
                maxLength={150}
                required
            />
            {errors.link && <p className="error-message">{errors.link}</p>}

            <button className="add-new-button">Valider la création de l&apos;actualités</button>
        </form>
    </section>
  )
}
export default AddNewsForm