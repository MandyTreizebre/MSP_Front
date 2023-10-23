import Cookies from 'js-cookie'
import axios from 'axios'
import {config} from '../config'
/*const token = Cookies.get('token')*/ /*Retrieving a token from cookies*/

/*Function to retrieve news using a GET request*/
export function displayAllNews(){
    return axios.get(`${config.api_url}/news`)
    .then((res)=>{
        return res.data /*Returning the data from the response*/
    })
    .catch((err)=>{
        return err /*Returning the error*/
    })
}

/*Function to add a new using a POST request*/
export function addNew(datas, token){
    return axios.post(`${config.api_url}/save-new`, datas, {
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

/*Function to update a new using a PUT request*/
export function updateNew(datas, id, token){
    return axios.put(`${config.api_url}/update-new/${id}`, datas, {
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

/*Function to delete a new */
export function deleteNew(id, token){
    return axios.delete(`${congig.api_url}/delete-new/${id}`, datas, {
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