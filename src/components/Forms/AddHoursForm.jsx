import "../../../sass/styles/forms.css"

const AddHoursForm = (props) => {

    /*Function to handle input change*/
    const handleInputChange = (setter) => (e) => {
        /*update state with new value using supplied setter function*/
        setter(e.currentTarget.value)
    }

    /*Handle number input changes*/
    const handleNumberInputChange = (setter) => (e) => {
        const value = e.currentTarget.value 
        const numberValue = parseInt(value, 10) 
        /*Set the parsed number value or the original value if it's not a number*/
        setter(isNaN(numberValue) ? value : numberValue)
    }

    /*Function to handle hours input and format the value*/
    function handleHoursInput(callback){
        return (e) => {
            const value = e.target.value

            /*Adding a colon after the 2nd and 5th character for time formatting*/
            if(value.length === 2 || value.length === 5){
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
            props.handleSubmitHours() /*Calling the handleSubmitHours function passed in props*/
        }}>

            {/* Professional selection dropdown */}
            <label htmlFor="pro">Sélectionner un professionnel <span className="required-asterisk">*</span></label>
            <select
                name="pro"
                value={props.pro_id}
                onChange={handleNumberInputChange(props.onChangePro)}
                required
            >
                {props.proList.map((pro) => (
                    <option key={pro.id} value={pro.id}>{pro.lastname} {pro.firstname}</option>
                ))}
            </select>
    
            {/* Day selection dropdown */}
            <label htmlFor="day"> Jour <span className="required-asterisk">*</span></label>
            <select
                name="day"
                value={props.day_id}
                onChange={handleNumberInputChange(props.onChangeDay)}
                required
            >
                <option value="">Sélectionner un jour</option>
                {props.dayList.map(day=> (
                    <option key={day.id} value={day.id}>{day.day_name}</option>
                ))}
            </select>
    
            <label htmlFor="hStartMorning">Heure de début(matin)<span className="required-asterisk">*</span></label>
            {/* Morning start time input */}
            <input
                type="text"
                name="hStartMorning"
                value={props.h_start_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartMorning))}
                required
            />

            <label htmlFor="hEndMorning">Heure de fin (matin) <span className="required-asterisk">*</span></label>
            {/* Morning end time input */}
            <input
                type="text"
                name="hEndMorning"
                value={props.h_end_morning}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndMorning))}
                required
            />

            <label htmlFor="hStartAfternoon">Heure de début (après-midi) <span className="required-asterisk">*</span></label>
            {/* Afternoon start time input */}
            <input
                type="text"
                name="hStartAfternoon"
                value={props.h_start_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHStartAfternoon))}
                required
            />

            <label htmlFor="hEndAfternoon">Heure de fin (après-midi) <span className="required-asterisk">*</span></label>
            {/* Afternoon end time input */}
            <input
                type="text"
                name="hEndAfternoon"
                value={props.h_end_afternoon}
                pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"
                title="Entrez l'heure sous le format HH:MM:SS"
                onChange={handleHoursInput(handleInputChange(props.onChangeHEndAfternoon))}
                required
            />
            {/* Submit button */}
            <button>Valider l'ajout des horaires</button>
      </form>
    )
}

export default AddHoursForm