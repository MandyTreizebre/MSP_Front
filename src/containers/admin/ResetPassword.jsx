import { useState, useEffect } from "react"

import { useLocation } from "react-router-dom"

import { resetPassword } from "../../api/Admin"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

import Modal from "../../components/Modal"

const ResetPassword = () => {
    // State definitions for form inputs and validation
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState('')

    const location = useLocation()

    // State definitions for password requirements
    const [hasLength, setHasLength] = useState(false)
    const [hasUpperCase, setHasUpperCase] = useState(false)
    const [hasLowerCase, setHasLowerCase] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSpecialChar, setHasSpecialChar] = useState(false)

    // State definition for modal
    const [openModalResetPassword, setOpenModalResetPassword] = useState(false)

    // Function to close the modal
    const handleCloseModal = () => {
        setOpenModalRegister(false)
    }


    // Function to validate password based on certain requirements*/
    const validatePassword = (password) => {
        let errors = []
        if (password.length < 8) errors.push('Le mot de passe doit avoir au moins 12 caractères,')
        if (!/[A-Z]/.test(password)) errors.push('une majuscule,')
        if (!/[a-z]/.test(password)) errors.push('une minuscule,')
        if (!/\d/.test(password)) errors.push('un chiffre,')
        if (!/[!@#$%^&*]/.test(password)) errors.push('un caractère spécial (@$!%*?&).')
    
        return errors
    }

    // Handler for password change that sets state for each validation rule
    const handlePasswordChange = (e) => {
        const value = e.currentTarget.value
        setNewPassword(value)
        
        setHasLength(value.length >= 12)
        setHasUpperCase(/[A-Z]/.test(value))
        setHasLowerCase(/[a-z]/.test(value))
        setHasNumber(/\d/.test(value))
        setHasSpecialChar(/[!@#$%^&*]/.test(value))
    }

    useEffect(()=> {
        const queryParams = new URLSearchParams(location.search)
        const tokenParam = queryParams.get('token')

        if (tokenParam) {
            setToken(tokenParam)
        }
    }, [location])

    const handleSubmit = (e) => {
        e.preventDefault()

        // reset error state
        setError('')

        let passwordErrors = validatePassword(newPassword)

        //Check for password errors
        if(passwordErrors.length > 0){
            setError(passwordErrors.join(' '))
            return
        }

        //Check if passwords are identics
        if (newPassword !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas")
            return
        }

        let data = {
            email: email, 
            newPassword: newPassword, 
            token: token
        }

        resetPassword({token, newPassword, email})
        .then((res)=>{
            if(res.status === 200){
                setOpenModalResetPassword(true)
                setTimeout(()=>{
                    handleCloseModal()
                }, 5000)
            }
        })
        .catch(err => {
            if(err.message === "Adresse email invalide"){
                setError(err.message)
            }
            if(err.message === "Erreur dans l'adresse mail" ){
                setError(err.message)
            }
            if(err.message === "Token invalide ou expiré" ){
                setError(err.message)
            }
            if(err.message === "Token invalide" ){
                setError(err.message)
            }
        })
    }

  return (
    <section>
    <form onSubmit={handleSubmit}>
        <h2>Réinitialiser le mot de passe</h2>

        <div className="form-group">
            <label htmlFor="token">Token de réinitialisation :</label>
            <input
                type="text"
                id="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="newPassword">Nouveau Mot de Passe :</label>
            <input 
                type="password" 
                id="newPassword" 
                value={newPassword}
                onChange={handlePasswordChange}
                required
            />
        </div>

        {/* Display password requirements */}
        <div className="content-password">
            <span style={{ color: hasLength ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min 8 caractères</span>
            <span style={{ color: hasUpperCase ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min une majuscule</span>
            <span style={{ color: hasLowerCase ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min une minuscule</span>
            <span style={{ color: hasNumber ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/> Min un chiffre</span>
            <span style={{ color: hasSpecialChar ? 'green' : 'red' }}> <FontAwesomeIcon icon={faCircleCheck}/>Min un caractère spécial</span>
        </div>

        <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le Nouveau Mot de Passe :</label>
            <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
        </div>

        <button type="submit">Confirmer la réinitialisation du mot de passe</button>
    </form>
    {error && <p className='error-message'>{error}</p>}
    <Modal open={openModalResetPassword} onClose={handleCloseModal} message="Mot de passe réinitialisé" />

    </section>

  )
}
export default ResetPassword