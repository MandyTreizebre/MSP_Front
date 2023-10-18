import axios from 'axios'
import {config} from '../config'

export function displayAllProfessionals(){
    return axios.get(`${config.api_url}/professionals`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function displayOnlyProfessionals(){
    return axios.get(`${config.api_url}/only-professionals`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}


export function displayOneProfessional(id){
    return axios.get(`${config.api_url}/professional/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

/*OK VERIF*/
export function saveOneProfessional(datas){
    const token = window.localStorage.getItem('token')
    return axios.post(`${config.api_url}/save/pro`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.error("Erreur lors de l'enregistrement du professionnel:", err)
    })
}

/*OK VERIF*/
export function editOneProfessional(datas, id){
    const token = window.localStorage.getItem('token')
    return axios.put(`${config.api_url}/edit/pro/${id}`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.error("Erreur lors de la modification du professionnel:", err)
    })
}

export function deleteOneProfessional(id){
    return axios.delete(`${config.api_url}/delete/pro/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function changeStatusProfessionnal(id){
    const token = window.localStorage.getItem('token')
    return axios.put(`${config.api_url}/status/pro/${id}`, {}, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getProfessionalBySpe(speciality_id) {
    return axios.get(`${config.api_url}/pro/${speciality_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

/*export function getProBySpe(speciality_id){
    return axios.get(`${config.api_url}/pro/category/${speciality_id}`)
    .then((res)=>{
        console.log("console dans getProBySpe" ,res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}*/

export function displaySpecializations(){
    return axios.get(`${config.api_url}/specializations`)
    .then((res)=>{
        console.log("CONSOLE LOG DANS API" , res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })  
}

export function displayProfessionalsGuards(){
    return axios.get(`${config.api_url}/professionnels-de-garde`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}