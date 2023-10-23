import Cookies from 'js-cookie'
import axios from 'axios'
import {config} from '../config'
const token = Cookies.get('token')

/*Function to retrieve professionals and their opening hours using a GET request*/
export function displayAllProfessionals(){
    return axios.get(`${config.api_url}/api/professionals-and-hours`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to retrieve professionals and their opening hours using a GET request*/
export function displayProfessionals(){
    return axios.get(`${config.api_url}/api/professionals`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to retrieve a professional by his ID a GET request*/
export function displayOneProfessional(id){
    return axios.get(`${config.api_url}/api/professional/${id}`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to add opening hours using a POST request*/
export function saveOneProfessional(datas, token){
    return axios.post(`${config.api_url}/api/save/pro`, datas, {
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

/*Function to update a professional using a PUT request*/
export function editOneProfessional(datas, id, token){
    return axios.put(`${config.api_url}/api/edit/pro/${id}`, datas, {
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

/*Function to delete a professional using a PUT request*/
export function deleteOneProfessional(id, token){
    return axios.delete(`${config.api_url}/api/delete/pro/${id}`, datas, {
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

/*Function to change the status of a professional using a PUT request*/
export function changeStatusProfessionnal(id, token){
    return axios.put(`${config.api_url}/api/status/pro/${id}`, {}, {
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

/*Function to retrieve professionals by their specializations using a GET request*/
export function getProfessionalBySpe(speciality_id) {
    return axios.get(`${config.api_url}/api/pro/${speciality_id}`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}


/*Function to retrieve specializations*/
export function displaySpecializations(){
    return axios.get(`${config.api_url}/api/specializations`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })  
}

/* Function to retrieve professionals on guards*/
export function displayProfessionalsGuards(){
    return axios.get(`${config.api_url}/api/professionnels-guards`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}