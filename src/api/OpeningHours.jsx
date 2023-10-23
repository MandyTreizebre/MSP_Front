import Cookies from 'js-cookie'
import axios from 'axios'
import {config} from '../config'
/*const token = Cookies.get('token')*/ /*Retrieving a token from cookies*/

/*Function to retrieve opening hours using a GET request*/
export function displayOpeningHours(){
    return axios.get(`${config.api_url}/opening-hours`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to retrieve opening hours by professional*/
export function getOpeningHoursByPro(pro_id){
    return axios.get(`${config.api_url}/pro/opening-hours/${pro_id}`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to add opening hours using a POST request*/
export function saveOpeningHours(datas, token){
    return axios.post(`${config.api_url}/save/opening-hours`, datas, {
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
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

/*Function to update opening hours using a PUT request*/
export function editOpeningHoursByPro(datas, pro_id, token){
    return axios.put(`${config.api_url}/edit/opening-hours/${pro_id}`, datas, {
        headers: {
            "Authorization": `Bearer ${token}` /*Setting Authorization header with the token*/
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

/*Function to retrieve days using a GET request*/
export function displayDays(){
    return axios.get(`${config.api_url}/days`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

