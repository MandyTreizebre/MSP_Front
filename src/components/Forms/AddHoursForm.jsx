import "../../styles/forms.css"

const AddHoursForm = (props) => {

    const handleInputChange = (setter) => (e) => {
        setter(e.currentTarget.value)
    }

    function handleHoursInput(callback){
        return (e) => {
            const value = e.target.value

            if(value.length === 2 || value.length === 5){
                e.target.value = value + ":"
            }

            if(callback){
                callback(e)
            }
        }  
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmitHours();
        }}>

            <select
                name="pro"
                value={props.pro_id}
                onChange={handleInputChange(props.onChangePro)}
                required
            >
                <option value="">Sélectionnez un professionnel</option>
                {props.proList.map((pro) => (
                    <option key={pro.id} value={pro.id}>{pro.lastname} {pro.firstname}</option>
                ))}
            </select>
    
            <select
                name="day"
                value={props.day_id}
                onChange={handleInputChange(props.onChangeDay)}
                required
            >
                <option value="">Sélectionner un jour</option>
                {props.dayList.map(day=> (
                    <option key={day.id} value={day.id}>{day.day_name}</option>
                ))}
            </select>
    
            <input
                type="text"
                name="hStartMorning"
                value={props.h_start_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartMorning))}
                placeholder="Heure début - matin"
                required
            />

            <input
                type="text"
                name="hEndMorning"
                value={props.h_end_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndMorning))}
                placeholder="Heure fin - matin"
                required
            />

            <input
                type="text"
                name="hStartAfternoon"
                value={props.h_start_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartAfternoon))}
                placeholder="Heure début - après-midi"
                required
            />

            <input
                type="text"
                name="hEndAfternoon"
                value={props.h_end_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndAfternoon))}
                placeholder="Heure fin - après-midi"
                required
            />
            <button>Valider l'ajout des horaires</button>
      </form>
    )
}

  export default AddHoursForm