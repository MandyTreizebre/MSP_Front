import { initializeAdmin } from "./src/slices/adminSlice"
import {checkMyToken} from "./src/api/Admin"

export function checkCookie(dispatch, done) {
    checkMyToken().then(response => {
        if (response.status === 200) {
            dispatch(initializeAdmin(response.data.admin))
        } else {
            console.error('Token verification failed:')
        }
        done()
    }).catch(error => {
        console.error('API call to check token failed:', error)
        done()
    })
}

