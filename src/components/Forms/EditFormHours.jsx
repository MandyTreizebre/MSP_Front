import "../../../sass/styles/forms.css"

const EditFormHours = (props) => {

    /*Function to handle input change events*/
    const handleInputChange = (setter) => (e) => {
        let value = e.currentTarget.value
        
        /*If the name of the current target is 'dayId', parse the value to integer*/
        if(e.currentTarget.name === "dayId"){
            value = parseInt(value, 10)
        }
        /*Calling the setter function passed in props with the new value*/
        setter(value)
    }

    /*Function to handle hours input and format the value*/
    function handleHoursInput(callback){
    return (e) => {
        const value = e.target.value 

        /*Adding a colon after the 2nd character if it doesn't already contain a colon*/
        if(value.length === 2 && !value.includes(":")) {
            e.target.value = value + ":"
            /*Adding a colon after the 5th character if the 5th character is not a colon*/
        } else if (value.length === 5 && value.charAt(4) !== ":") {
            e.target.value = value + ":"
        }

        /*If a callback is provided, call it with the event*/
        if(callback){
            callback(e)
        }
    }  
}

    return (
        <form onSubmit={(e) => {
            e.preventDefault() /*Preventing the default form submission behavior*/
            props.handleSubmitHours() /*Calling the handleSubmit function passed in props*/
        }}>
    
            {/* Day selection dropdown */}
            <label htmlFor="dayId">Sélectionner un jour</label>
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
    
            <label htmlFor="hStartMorning">Heure de début (matin)</label>
            {/* Morning start time input */}
            <input
                type="text"
                name="hStartMorning"
                value={props.h_start_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartMorning))}
                disabled={!props.isHoursAvailable}
            />

            <label htmlFor="hEndMorning">Heure de fin (matin)</label>
            {/* Morning end time input */}
            <input
                type="text"
                name="hEndMorning"
                value={props.h_end_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndMorning))}
                disabled={!props.isHoursAvailable}
            />

            <label htmlFor="hStartAfternoon">Heure de début (après-midi)</label>
            {/* Afternoon start time input */}
            <input
                type="text"
                name="hStartAfternoon"
                value={props.h_start_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartAfternoon))}
                disabled={!props.isHoursAvailable}
            />

            <label htmlFor="hEndAfternoon">Heure de fin (après-midi)</label>
            {/* Afternoon end time input */}
            <input
                type="text"
                name="hEndAfternoon"
                value={props.h_end_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndAfternoon))}
                disabled={!props.isHoursAvailable}
            />
            {/* Submit button */}
            <button>Valider la modification des horaires</button>
      </form>
    )
}

  export default EditFormHours