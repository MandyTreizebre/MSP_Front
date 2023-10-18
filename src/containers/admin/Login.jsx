import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { loginAdmin } from '../../api/Admin'
import { useAdmin } from '../../components/AdminContext'

const Login = () => {
  const {login} = useAdmin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [redirect, setRedirect] = useState(false)

  const onSubmitForm =  (e) => {
    e.preventDefault()
    setError(null)

    loginAdmin({email, password})
    .then((res)=>{
        if(res.status === 200){
           const newAdmin = {
            ...res.user, 
            token: res.token
           }
           login(newAdmin)
           console.log("Token stocké (fichier login):", window.localStorage.getItem('token'))
           setRedirect(true)
        } else {
            setError(res.msg)
        }
    })
    .catch(err => {
        console.log(err)
        setError('Une erreur est survenue lors de la connexion.')
    })
  }
 
  if(redirect){
    return <Navigate to="/admin"/>
  }

  return (
    <section className='container-login'>
        <h2>Connexion Administrateur</h2>
        {error && <p className='error-message'>{error}</p>}

        <form 
            onSubmit={onSubmitForm}
        >
            <div>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.currentTarget.value)
                }}
                required
            />
            </div>
            <div>
            <label>Mot de passe:</label>
            <input
                type="password"
                value={password}
                onChange={(e)=>{
                    setPassword(e.currentTarget.value)
                }}
                required
            />
            </div>
            <input type="submit" name="Se connecter" />
        </form>
    </section>
  )
}

export default Login