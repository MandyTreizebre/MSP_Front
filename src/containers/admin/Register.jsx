import { useState } from "react"
import { Navigate } from 'react-router-dom'
import { registerAdmin } from "../../api/Admin"
import Cookies from 'js-cookie' 
const token = Cookies.get('token')
import Modal from "../../components/Modal"
import "../../styles/adminForms.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    //Exigences du mot de passe
    const [hasLength, setHasLength] = useState(false)
    const [hasUpperCase, setHasUpperCase] = useState(false)
    const [hasLowerCase, setHasLowerCase] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSpecialChar, setHasSpecialChar] = useState(false)

    const [openModalRegister, setOpenModalRegister] = useState(false)

    const [redirect, setRedirect] = useState(false)

    const handleCloseModal = () => {
        setOpenModalRegister(false)
    }

    //Validation des exigences du mot de passe
    const validatePassword = (password) => {
        let errors = []
        if (password.length < 8) errors.push('Le mot de passe doit avoir au moins 12 caractères,')
        if (!/[A-Z]/.test(password)) errors.push('une majuscule,')
        if (!/[a-z]/.test(password)) errors.push('une minuscule,')
        if (!/\d/.test(password)) errors.push('un chiffre,')
        if (!/[!@#$%^&*]/.test(password)) errors.push('un caractère spécial.')
    
        return errors
    }

    const handlePasswordChange = (e) => {
        const value = e.currentTarget.value
        setPassword(value)
        
        //Mise à jour des états selon les exigences du mot de passe
        setHasLength(value.length >= 12)
        setHasUpperCase(/[A-Z]/.test(value))
        setHasLowerCase(/[a-z]/.test(value))
        setHasNumber(/\d/.test(value))
        setHasSpecialChar(/[!@#$%^&*]/.test(value))
    }

    const onSubmitForm = (e) => {
        e.preventDefault(e)
        let passwordErrors = validatePassword(password)

        if(passwordErrors.length > 0){
            setError(passwordErrors.join(' '))
            return
        }

        let datas = {
            email: email, 
            password: password,
            firstname: firstname
        }

        registerAdmin(datas, token)
            .then((res)=>{
                if(res.status === 201){
                    setEmail("")
                    setPassword("")
                    setFirstname("")
                    setError(null)

                    setHasLength(false)
                    setHasUpperCase(false)
                    setHasLowerCase(false)
                    setHasNumber(false)
                    setHasSpecialChar(false)

                    setOpenModalRegister(true)

                    setTimeout(()=>{
                        handleCloseModal()
                        setRedirect(true)
                    }, 2000)
                }
            })
            .catch(err => {
                if (err.message === "Entrez un email") {
                    setError(err.message)
                }
                if (err.message === "Adresse email invalide") {
                    setError(err.message)
                }
                if (err.message === "Entrez un prénom") {
                    setError(err.message)
                }
                if (err.message === "Prénom invalide") {
                    setError(err.message)
                }
                if (err.message === "Email déjà utilisé.") {
                    setError(err.message)
                }
                if (err.message === "") {
                    setError("Une erreur est survenue")
                }
            })
    }

    if (redirect) {
        return <Navigate to="/admin" /> 
    }

    return (
        <section className="form-register">

            <h1>Enregistrer un nouvel administrateur</h1>
            <section className="container-form">
                
                <form
                    onSubmit={onSubmitForm}
                    className="form-admin"
                > 

                    <input 
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.currentTarget.value)
                        }}
                        required
                        autoComplete="off"
                    />
                    {/* Champ mot de passe avec fonctionnalité de montrer/cacher */}
                    <div className="div-password">
                        <input type={showPassword ? "text" : "password"}
                        placeholder="Mot de passe"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        autoComplete="new-password"
                    />  
                        <button
                            onClick={(e)=> {
                                e.preventDefault(e)
                                setShowPassword(!showPassword)
                            }}
                            className="view-password"
                        >
                            {showPassword ? <FontAwesomeIcon className="eye-icon" icon={faEye}/> : <FontAwesomeIcon className="eye-icon" icon={faEyeSlash}/>}
                        </button>
                    </div>

                    <input 
                        type="text"
                        placeholder="Prénom"
                        value={firstname}
                        onChange={(e)=>{
                        setFirstname(e.currentTarget.value)
                        }}
                        required
                    />

                    {/* Afficher les exigences du mot de passe */}
                    <div className="content-password">
                        <span style={{ color: hasLength ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min 12 caractères</span>
                        <span style={{ color: hasUpperCase ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Une majuscule</span>
                        <span style={{ color: hasLowerCase ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Une minuscule</span>
                        <span style={{ color: hasNumber ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Un chiffre</span>
                        <span style={{ color: hasSpecialChar ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/>Un caractère spécial ( @$!%*?& )</span>
                    </div>
                    <input type="submit" name="Enregistrer" className="register-button" value="Enregistrer"/>
                </form>

                <Modal open={openModalRegister} onClose={handleCloseModal} message="Administrateur ajouté" />
            </section>
            {error && <p className='error-message'>{error}</p>}
        </section>
    )
}

export default Register