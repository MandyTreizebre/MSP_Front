import { createContext, useContext, useState, useEffect } from "react"
import { checkMyToken } from "../api/Admin"

const AdminContext = createContext()

export const useAdmin = () => {
    return useContext(AdminContext)
}

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = adminData => {
        setAdmin(adminData)
        window.localStorage.setItem("token", adminData.token)
    }

    const logout = () => {
        setAdmin(null)
        console.log("suppression du token lors de la déconnexion")
        window.localStorage.removeItem("token")
    }

    useEffect(()=>{
        console.log("Appel du useEffect dans AdminContext")
        const token = window.localStorage.getItem("token")
        console.log("Token du localStorage:", token)
        if(token) {
            console.log("TOKEN AVANT CHECKING:", token)
            checkMyToken()
            .then(res => {
                if(res.status === 200){
                    console.log("REPONSE STATUS:", res.status)
                    login(res.admin)
                    console.log("CONSOLE.LOG de res.admin", res.admin)
                } else {
                    console.log("suppression du token si res.status n'est pas 200")
                    console.log("CONSOLE LOG DE RES.DATA", res.data)
                    window.localStorage.removeItem("token")
                }
                setLoading(false)
            })
            .catch(err => {
                console.error("Erreur lors de la vérification du token", err)
                console.log("DETAILS ERREUR :", err)
                console.log("suppression du token si erreur lors de la verification")
                window.localStorage.removeItem("token")
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AdminContext.Provider value={{ admin, setAdmin, login, logout, loading }}>
            {children}
        </AdminContext.Provider>
    )
}