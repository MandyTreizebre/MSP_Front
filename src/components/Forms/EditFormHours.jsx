import "../../styles/forms.css"

const EditFormHours = (props) => {

    const handleInputChange = (setter) => (e) => {
        let value = e.currentTarget.value
        
        if(e.currentTarget.name === "dayId"){
            value = parseInt(value, 10)
        }

        setter(value)
    }

    function handleHoursInput(callback){
    return (e) => {
        const value = e.target.value;

        if(value.length === 2 && !value.includes(":")) {
            e.target.value = value + ":";
        } else if (value.length === 5 && value.charAt(4) !== ":") {
            e.target.value = value + ":";
        }

        if(callback){
            callback(e);
        }
    }  
}

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmitHours();
        }}>
    
            <select
                name="dayId"
                value={props.numSelectedDayId}
                onChange={handleInputChange(props.onChangeDayId)}
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
            />

            <input
                type="text"
                name="hEndMorning"
                value={props.h_end_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndMorning))}
                placeholder="Heure fin - matin"
            />

            <input
                type="text"
                name="hStartAfternoon"
                value={props.h_start_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartAfternoon))}
                placeholder="Heure début - après-midi"
            />

            <input
                type="text"
                name="hEndAfternoon"
                value={props.h_end_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndAfternoon))}
                placeholder="Heure fin - après-midi"
            />
            <button>Valider la modification des horaires</button>
      </form>
    )
}

  export default EditFormHours