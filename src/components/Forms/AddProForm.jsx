import "../../styles/forms.css"

const AddProForm = (props) => {

    const handleInputChange = (setter) => (e) => {
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
                maxLength={100}
                required
            />

            <input 
                type="text"
                name="firstname"
                value={props.firstname}
                onChange={handleInputChange(props.onChangeFirstname)}
                placeholder="Prénom"
                maxLength={50}
                required
            />

            <input 
                type="text"
                name="address"
                value={props.address}
                onChange={handleInputChange(props.onChangeAddress)}
                placeholder="Addresse"
                maxLength={50}
                required
            />

            <input 
                type="text"
                name="zip"
                value={props.zip}
                onChange={handleInputChange(props.onChangeZip)}
                placeholder="Code postal"
                maxLength={5}
                required
            />

            <input 
                type="text"
                name="city"
                value={props.city}
                onChange={handleInputChange(props.onChangeCity)}
                placeholder="Ville"
                maxLength={50}
                required
            />

            <input 
                type="text"
                name="phone"
                value={props.phone}
                onChange={handleInputChange(props.onChangePhone)}
                placeholder="Téléphone"
                maxLength={14}
                required
            />

            <input 
                type="text"
                name="details"
                value={props.details}
                onChange={handleInputChange(props.onChangeDetails)}
                placeholder="Détails"
                maxLength={100}
                required
            />

            <select 
                name="specialization"
                value={props.specializations}
                onChange={handleInputChange(props.onChangeSpecializations)}
                required
            >
                <option value="">Sélectionnez une spécialisation</option>
                {props.specializationsList.map(spe=> (
                    <option key={spe.id} value={spe.id}>{spe.name_spe}</option>
                ))}
            </select>

            <button>Valider la création du professionnel</button>
        </form>
    )
}

export default AddProForm