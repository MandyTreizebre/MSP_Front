import { initializeAdmin } from "./src/slices/adminSlice"
import {checkMyToken} from "./src/api/Admin"

export function checkCookie(dispatch) {
    console.log("entrer dans la fonction checkCookie")
    checkMyToken().then(response => {
        console.log("RESPONSE DE CHECK MY TOKEN DANS CHECK COOKIE:",response)
        if (response.status === 200) {
            dispatch(initializeAdmin(response.admin))
            console.log("CONSOLE LOD DE RESPONSE.ADMIN DANS CHECKCOOKIE:",response.admin)
        } else {
            console.error('Token verification failed:', response)
        }
    }).catch(error => {
        console.error('API call to check token failed:', error)
    })
}

