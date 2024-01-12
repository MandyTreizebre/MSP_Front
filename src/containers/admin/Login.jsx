import React, { useState } from 'react' 
import { Navigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 

import { loginAdmin } from '../../api/Admin' 
import { connectAdmin } from '../../slices/adminSlice' 

import "../../styles/login.css"

const Login = () => {
  const dispatch = useDispatch() 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('') 
  const [redirect, setRedirect] = useState(false) 

  /*Function to handle form submission*/
  const onSubmitForm = (e) => {
    e.preventDefault() 
    setError(null) 

    /*Call the loginAdmin function to authenticate the admin user*/
    loginAdmin({ email, password })
      .then((res) => {
        if (res.status === 200) {
            /*If authentication is successful, dispatch admin data and set redirection.*/
          let newAdmin = res.admin
          newAdmin.token = res.token 
          dispatch(connectAdmin(newAdmin)) 
          setRedirect(true) 
        } else if(res.status === 400) {
            /*If authentication fails, set an error message*/
          setError("Adresse e-mail incorrecte") 
        } else if(res.status === 403){
          setError("Identifiant ou mot de passe incorrect")
        } else {
          setError("Une erreur est survenue")
        }
      })
      .catch((err) => {
        /*Handle errors from the authentication process*/
        setError('Une erreur est survenue lors de la connexion.') 
      }) 
  } 

  /*If redirection is needed, navigate to the admin page*/
  if (redirect) {
    return <Navigate to="/admin" /> 
  }

  return (
    <section className='container-login'>
      <h1>Connexion</h1>
      <form onSubmit={onSubmitForm}>
        <div className='area-input-login'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value) 
            }}
            required
          />
        </div>
        <div className='area-input-login'>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value) 
            }}
            required
          />
        </div>
        <input type="submit" 
               name="Se connecter" 
               className='general-button' 
               value="Se connecter"
        />
      </form>
      {error && <p className='error-message'>{error}</p>}
    </section>
  ) 
} 

export default Login 