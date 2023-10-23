import Cookies from "js-cookie"
import axios from "axios"
import {config} from "../config"

/*Function to retrieve informations using a GET request*/
export function displayAllInformations(){
    return axios.get(`${config.api_url}/informations`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to retrieve informations by category using a GET request*/
export function getInformationsByCategory(category){
    return axios.get(`${config.api_url}/informations-category/${category}`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to retrieve categories by category using a GET request*/
export function displayCategories(){
    return axios.get(`${config.api_url}/categories`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to add an information using a POST request*/
export function addAndInformation(datas, token){
    return axios.post(`${config.api_url}/api/save-information`, datas, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        withCredentials: true
    })
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to update an information using a PUT request*/
export function udpdateAnInformation(datas, id, token){
    return axios.put(`${config.api_url}/update-information/${id}`, datas, {
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

/*Function to delete an information */
export function deleteAnInformation(id, token){
    return axios.delete(`${congig.api_url}/delete-information/${id}`, datas, {
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
