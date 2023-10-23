import {useState} from "react"
import "../../styles/forms.css"

const EditForm = (props) => {
    /*States for validation error messages*/
    const [errors, setErrors] = useState({
        lastname: "",
        firstname: "",
        address: "",
        zip: "",
        city: "",
        phone: "",
        details: ""
    })

    /*Function to handle input change*/
    const handleInputChange = (setter) => (e) => {
        /*update state with new value using supplied setter function*/
        setter(e.currentTarget.value)
    }

    const validateForm = () => {
        let errorsForm = {}
        /*Validate each field and add error message if needed*/
        if (!props.lastname || props.lastname.length > 100) errorsForm.lastname = "Nom invalide"
        if (!props.firstname || props.firstname.length > 50) errorsForm.firstname = "Prénom invalide"
        if (!props.address || props.address.length > 50) errorsForm.address = "Adresse invalide"
        if (!props.zip || props.zip.length > 5) errorsForm.zip = "Code postal invalide"
        if (!props.city || props.city.length > 50) errorsForm.city = "Ville invalide"
        if (!props.phone || props.phone.length > 10) errorsForm.phone = "Téléphone invalide"
        if (!props.details || props.details.length > 100) errorsForm.details = "Détails invalides"
        /*Update errors state with identified issues*/
        setErrors(errorsForm)
        /*Return true if no errors, else return false*/
        return Object.keys(errorsForm).length === 0
    }

  return (
        <form onSubmit={(e)=> {
            e.preventDefault() /*Preventing the default form submission behavior*/
            if(validateForm()){
                props.handleSubmit() /*Submit form if validation passes*/
           }
        }}>

            <label htmlFor="lastname">Nom</label>
            <input 
                type="text"
                name="lastname"
                value={props.lastname}
                onChange={handleInputChange(props.onChangeLastname)}
                maxLength={100}
            />
            {errors.lastname && <p className="error-message">{errors.lastname}</p>}

            <label htmlFor="firstname">Prénom</label>
            <input 
                type="text"
                name="firstname"
                value={props.firstname}
                onChange={handleInputChange(props.onChangeFirstname)}
                maxLength={50}
            />
            {errors.firstname && <p className="error-message">{errors.firstname}</p>}

            <label htmlFor="address">Addresse</label>
            <input 
                type="text"
                name="address"
                value={props.address}
                onChange={handleInputChange(props.onChangeAddress)}
                maxLength={50}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}

            <label htmlFor="zip">Code postal</label>
            <input 
                type="text"
                name="zip"
                value={props.zip}
                onChange={handleInputChange(props.onChangeZip)}
                maxLength={5}
            />
            {errors.zip && <p className="error-message">{errors.zip}</p>}

            <label htmlFor="city">Ville</label>
            <input 
                type="text"
                name="city"
                value={props.city}
                onChange={handleInputChange(props.onChangeCity)}
                maxLength={50}
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
            <label htmlFor="phone">Téléphone</label>
            <input 
                type="text"
                name="phone"
                value={props.phone}
                onChange={handleInputChange(props.onChangePhone)}
                maxLength={10}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}

            <label htmlFor="details">Détails</label>
            <input 
                type="text"
                name="details"
                value={props.details}
                onChange={handleInputChange(props.onChangeDetails)}
                maxLength={100}
            />
            {errors.details && <p className="error-message">{errors.details}</p>}

            <label htmlFor="specialization">Spécialisation</label>
            {/* Specialization selection dropdown */}
            <select 
                name="specialization"
                value={props.selectedSpecialization}
                onChange={handleInputChange(props.onChangeSpecializations)}
            >
                {props.specializationsList.map(spe=> (
                    <option key={spe.id} value={spe.id}>{spe.name_spe}</option>
                ))}
            </select>
            {/* Submit button */}
            <button>Valider la modification du professionnel</button>
        </form>
    )
}

export default EditForm