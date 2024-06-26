import { useState } from "react" 
import "../../../styles/adminForms.css" 

const AddNewsForm = (props) => {

    // Initialisation de l'état pour les erreurs de formulaire
    const [errors, setErrors] = useState({
        title: "",
        details: "",
        picture: "",
        external_link: ""
    }) 

    // Fonction de gestion des changements de valeur des champs de formulaire
    const handleInputChange = (setter) => (e) => {
        setter(e.currentTarget.value) 
    } 

    const maxFileSize = 5 * 1024 * 1024  // 5MB

    // Fonction de gestion du changement d'image
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

    // Fonction de validation du formulaire
    const validateForm = () => {
        let errorsForm = { ...errors } 

        if (!props.title || props.title.length > 50) {
            errorsForm.title = "Titre invalide" 
        }

        if (!props.details || props.details.length > 200) {
            errorsForm.details = "Détails invalides" 
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
                {errors.title && <p className="error-message">{errors.title}</p>}

                <label htmlFor="details">Détails</label>
                <textarea
                    name="details"
                    value={props.details}
                    onChange={handleInputChange(props.onChangeDetails)}
                    maxLength={200}
                    required
                />
                {errors.details && <p className="error-message">{errors.details}</p>}

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
                {errors.external_link && <p className="error-message">{errors.external_link}</p>}

                <button className="add-new-button">Valider la création de l&apos actualité</button>
            </form>
        </section>
    ) 
} 

export default AddNewsForm 