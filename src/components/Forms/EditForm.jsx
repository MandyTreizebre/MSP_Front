import "../../styles/forms.css"

const EditForm = (props) => {

    const handleInputChange = (setter) => (e) => {
        console.log("Setter :", setter, "Value", e.currentTarget.value)
        setter(e.currentTarget.value)
    }

  return (
        <form onSubmit={(e)=> {
            e.preventDefault()
            props.handleSubmit()
        }}>

            <input 
                type="text"
                name="lastname"
                value={props.lastname}
                onChange={handleInputChange(props.onChangeLastname)}
                placeholder="Nom"
            />

            <input 
                type="text"
                name="firstname"
                value={props.firstname}
                onChange={handleInputChange(props.onChangeFirstname)}
                placeholder="Prénom"
            />

            <input 
                type="text"
                name="address"
                value={props.address}
                onChange={handleInputChange(props.onChangeAddress)}
                placeholder="Addresse"
            />

            <input 
                type="text"
                name="zip"
                value={props.zip}
                onChange={handleInputChange(props.onChangeZip)}
                placeholder="Code postal"
            />

            <input 
                type="text"
                name="city"
                value={props.city}
                onChange={handleInputChange(props.onChangeCity)}
                placeholder="Ville"
            />

            <input 
                type="text"
                name="phone"
                value={props.phone}
                onChange={handleInputChange(props.onChangePhone)}
                placeholder="Téléphone"
            />

            <input 
                type="text"
                name="details"
                value={props.details}
                onChange={handleInputChange(props.onChangeDetails)}
                placeholder="Détails"
            />

            <select 
                name="specialization"
                value={props.selectedSpecialization}
                onChange={handleInputChange(props.onChangeSpecializations)}
            >
                <option value="">Sélectionnez une spécialisation</option>
                {props.specializationsList.map(spe=> (
                    <option key={spe.id} value={spe.id}>{spe.name_spe}</option>
                ))}
            </select>

            <button>Valider la modification du professionnel</button>
        </form>
    )
}

export default EditForm