import { useState } from 'react' 
import { Navigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import { Link } from 'react-router-dom'
import { loginAdmin } from '../../api/Admin' 
import { connectAdmin } from '../../slices/adminSlice' 
import "../../styles/login.css"
import ReCAPTCHA from "react-google-recaptcha"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('') 
  const [redirect, setRedirect] = useState(false) 
  const [captachaValue, setCaptachaValue] = useState(null)

  const onCaptchaChange = (value) => {
    setCaptachaValue(value)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Function to handle form submission
  const onSubmitForm = (e) => {
    e.preventDefault() 
    setError(null)

    if (!captachaValue) {
      alert("Veuillez remplir le CAPTCHA")
      return
    }

    if (!validateEmail(email)) {
      setError("Adresse e-mail invalide")
      return
    }

    // Call the loginAdmin function to authenticate the admin user
    loginAdmin({ email, password })
      .then((res) => {
        if (res.status === 200) {
          // If authentication is successful, dispatch admin data and set redirection.
          let newAdmin = res.data.admin
          newAdmin.token = res.data.token
          dispatch(connectAdmin(newAdmin))
          setRedirect(true) 
        } 
      })
      .catch((err) => {
        if (err.message === "Identification échouée : email ou mot de passe incorrect") {
          setError(err.message)
        } else {
          setError("Une erreur est survenue")
        }
      }) 
  } 

  if (redirect) {
    return <Navigate to="/admin" /> 
  }

  return (
    <section className='container-login'>
      <h1>Connexion</h1>
      <form onSubmit={onSubmitForm} className='login-form'>
        <div className='area-input-login'>
        <FontAwesomeIcon icon={faUser} className="icon-login"/>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value) 
            }}
            placeholder='Email'
            required
          />
        </div>

        <div className='area-input-login'>
        <FontAwesomeIcon icon={faLock} className="icon-login"/>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value) 
            }}
            placeholder='Mot de passe'
            required
          />
        </div>

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_CAPTCHA_KEY}
          onChange={onCaptchaChange}
          className='captcha'
        />

        <input type="submit" 
               name="Se connecter" 
               className='login-button' 
               value="Se connecter"
        />
      </form>

      <div className='forgot-password'>
        <Link to="/forgot-password">Mot de passe oublié</Link>
      </div>

      {error && <p className='error-message'>{error}</p>}
    </section>
  ) 
} 

export default Login 