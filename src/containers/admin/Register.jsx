import { useState } from "react"
import { addAdmin } from "../../api/Admin"
import Cookies from 'js-cookie' 
const token = Cookies.get('token')
import Modal from "../../components/Modals/Modal"
import "../../styles/forms.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    /*State definitions for form inputs and validation*/
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    /*State definitions for password requirements*/
    const [hasLength, setHasLength] = useState(false)
    const [hasUpperCase, setHasUpperCase] = useState(false)
    const [hasLowerCase, setHasLowerCase] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSpecialChar, setHasSpecialChar] = useState(false)
    /*State definition for modal*/
    const [openModalRegister, setOpenModalRegister] = useState(false)

    /*Function to close the modal*/
    const handleCloseModal = () => {
        setOpenModalRegister(false)
    }

    /*Function to validate email format*/
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (!regex.test(email)) return "L'adresse email n'est pas valide."
        return null
    }

    /*Function to validate password based on certain requirements*/
    const validatePassword = (password) => {
        let errors = []
        if (password.length < 8) errors.push('Le mot de passe doit avoir au moins 8 caractères,')
        if (!/[A-Z]/.test(password)) errors.push('une majuscule,')
        if (!/[a-z]/.test(password)) errors.push('une minuscule,')
        if (!/\d/.test(password)) errors.push('un chiffre,')
        if (!/[!@#$%^&*]/.test(password)) errors.push('un caractère spécial.')
    
        return errors
    }

    /*Handler for password change that sets state for each validation rule*/
    const handlePasswordChange = (e) => {
        const value = e.currentTarget.value
        setPassword(value)
        
        setHasLength(value.length >= 8)
        setHasUpperCase(/[A-Z]/.test(value))
        setHasLowerCase(/[a-z]/.test(value))
        setHasNumber(/\d/.test(value))
        setHasSpecialChar(/[!@#$%^&*]/.test(value))
    }

    /*Handle form submission*/
    const onSubmitForm = (e) => {
        e.preventDefault(e)
        let emailError = validateEmail(email)
        let passwordErrors = validatePassword(password)

        /*Check for email and password errors*/
        if(emailError){
            setError(emailError)
            return
        }

        if(passwordErrors.length > 0){
            setError(passwordErrors.join(' '))
            return
        }

        /*Data to be sent to the API*/
        let datas = {
            email: email, 
            password: password,
            firstname: firstname
        }

        /*Call API to add admin*/
        addAdmin(datas, token)
        .then((res)=>{
            if(res.status === 201){
                /* If successful, show modal and close it after 5 seconds*/
                setOpenModalRegister(true)
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            } else {
                /*Set error if there's an issue with the response*/
                setError(res.msg)
            }
        })
        .catch(err => {
            setError("Erreur de la l'ajout de l'administrateur")
        })
    }

  return (
    <section>
        <h1>Enregistrer un nouvel administrateur</h1>
        <form
            onSubmit={onSubmitForm}
        > 
            {/* Email input */}
            <input type="text"
                   placeholder="Votre email"
                   onChange={(e)=>{
                    setEmail(e.currentTarget.value)
                   }}
                   required
            />
            {/* Password input with show/hide functionality */}
            <div className="div-password">
                <input type={showPassword ? "text" : "password"}
                   placeholder="Votre mot de passe"
                   onChange={handlePasswordChange}
                   required
            />  
            <button
                onClick={(e)=> {
                        e.preventDefault(e)
                        setShowPassword(!showPassword)
                    }}
                className="general-button"
            >
                {showPassword ? <FontAwesomeIcon className="eye-icon" icon={faEyeSlash}/> : <FontAwesomeIcon className="eye-icon" icon={faEye}/>}
            </button>
            </div>
            {/* Display password requirements */}
            <div>
                <span style={{ color: hasLength ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min 8 caractères</span>
                <span style={{ color: hasUpperCase ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min une majuscule</span>
                <span style={{ color: hasLowerCase ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min une minuscule</span>
                <span style={{ color: hasNumber ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min un chiffre</span>
                <span style={{ color: hasSpecialChar ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/>Min un caractère spécial</span>
            </div>
            {/* First name input */}
            <input type="text"
                   placeholder="Votre prénom"
                   onChange={(e)=>{
                    setFirstname(e.currentTarget.value)
                   }}
                   required
            />
            {/* Submit button */}
            <input type="submit" name="Enregistrer" className="general-button"/>
        </form>
        {/* Display any errors */}
        {error && <p className='error-message'>{error}</p>}
        {/* Success modal */}
        <Modal open={openModalRegister} onClose={handleCloseModal} message="Administrateur ajouté" />
    </section>
  )
}
export default Register