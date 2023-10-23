import Cookies from "js-cookie"
import axios from "axios"
import {config} from "../config"
const token = Cookies.get("token") /*Retrieving a token from cookies*/

/*Function to add an admin using a POST request*/
export function addAdmin(datas, token){
    return axios.post(`${config.api_url}/api/save-admin`, datas, { /*Making a POST request to the 'save-admin' endpoint*/
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
        },
        withCredentials: true /*Ensures credentials are included in the request*/
    })
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err) => {
        return err /*Returning the error*/
    })
}

/*Function to login an admin using a POST request*/
export function loginAdmin(datas){
    return axios.post(`${config.api_url}/api/login`, datas,{ withCredentials: true }) /*Making a POST request to the 'login' endpoint*/
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err) => {
        return err /*Returning the error*/
    })
}

/*Function to check the token using a GET request*/
export function checkMyToken(){
    return axios.get(`${config.api_url}/api/admin/checkToken`, { /*Making a GET request to the 'checkToken' endpoint*/
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
        },
        withCredentials: true /*Ensures credentials are included in the request*/
    })
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err) => {
        return err /*Returning the error*/
    })
}

export function logout(){
    return axios.get(`${config.api_url}/api/logout`, {
        withCredentials: true
    })
    
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}
