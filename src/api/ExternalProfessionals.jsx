import Cookies from "js-cookie"
import axios from "axios"
import {config} from "../config"
/*const token = Cookies.get('token')*/ /*Retrieving a token from cookies*/

/*Function to retrieve external pros using a GET request*/
export function displayExternalProfessionals(){
    return axios.get(`${config.api_url}/external-professionals`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to add an external pro using a POST request*/
export function addExternalProfessional(datas, token){
    return axios.post(`${config.api_url}/save-external-professional`, datas, {
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
        },
        withCredentials: true /*Ensures credentials are included in the request*/
    })
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to update an external pro using a PUT request*/
export function updateExternalProfessional(datas, id, token){
    return axios.put(`${config.api_url}/update/external-pro/${id}`, datas, {
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
        },
        withCredentials: true /*Ensures credentials are included in the request*/
    })
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to delete an external pro */
export function deleteExternalPro(id, token){
    return axios.delete(`${config.api_url}/delete/external-pro/${id}`, datas, {
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
        },
        withCredentials: true /*Ensures credentials are included in the request*/
    })
    .then((res)=>{
        return res.data /*Returning the data from the response*/ 
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}