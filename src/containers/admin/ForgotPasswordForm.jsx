import { useState } from "react"
import { forgotPassword } from "../../api/Admin"

const ForgotPasswordForm = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        forgotPassword(email)
        .then(res => {
            setMessage("Un email de réinitialisation a été envoyé si l'adresse existe dans notre système.")
            return res
        })
        .catch(error => {            
            if (error.message === "Adresse email invalide") {
                setError(error.message)
            }

            if (error.message === "Vérifiez l'adresse mail") {
                setError(error.message)
            }
        
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Demande de réinitialisation de mot de passe</h2>

                {message && <p>{message}</p>}

                <div className="form-reset">
                    <label htmlFor="email">Email :</label>
                    <input 
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            
                <button type="submit"> Envoyer le lien de réinitialisation </button>
            </form>

            {error && <p className='error-message'>{error}</p>}
        </section>
    )
}

export default ForgotPasswordForm