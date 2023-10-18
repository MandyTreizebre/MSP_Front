import { useState } from "react"
import { Navigate } from "react-router-dom"
import { addAdmin } from "../../api/Admin"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(null)

    const onSubmitForm = (e) => {
        e.preventDefault(e)
        setError(null)
        let datas = {
            email: email, 
            password: password,
            firstname: firstname
        }

        addAdmin(datas)
        .then((res)=>{
            if(res.status === 200){
                setRedirect(true)
            } else {
                setError(res.msg)
            }
        })
        .catch(err => console.log(err))
    }

    if(redirect){
        return <Navigate to="/login"/>
    }

  return (
    <section>
        <h2>Enregistrer un nouvel administrateur</h2>
        {error && <p className='error-message'>{error}</p>}
        <form
            onSubmit={onSubmitForm}
        > 
            <input type="text"
                   placeholder="Votre email"
                   onChange={(e)=>{
                    setEmail(e.currentTarget.value)
                   }}
                   required
            />

            <input type="password"
                   placeholder="Votre mot de passe"
                   onChange={(e)=>{
                    setPassword(e.currentTarget.value)
                   }}
                   required
            />

            <input type="text"
                   placeholder="Votre prénom"
                   onChange={(e)=>{
                    setFirstname(e.currentTarget.value)
                   }}
                   required
            />

            <input type="submit" name="Enregistrer"/>
        </form>
    </section>
  )
}
export default Register