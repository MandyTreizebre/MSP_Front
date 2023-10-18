import axios from 'axios'
import {config} from '../config'

export function displayOpeningHours(){
    return axios.get(`${config.api_url}/opening-hours`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getOpeningHoursByPro(pro_id){
    return axios.get(`${config.api_url}/pro/opening-hours/${pro_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

/*OK VERIF*/
export function saveOpeningHours(datas){
    const token = window.localStorage.getItem('token')
    return axios.post(`${config.api_url}/save/opening-hours`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

/*OK VERIF*/
export function editOpeningHoursByPro(datas, pro_id){
    const token = window.localStorage.getItem('token')
    return axios.put(`${config.api_url}/edit/opening-hours/${pro_id}`, datas,{headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteOneOpeningHours(id){
    return axios.delete(`${config.api_url}/delete/opening-hours/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

/*export function getProfessionalBySpe(speciality_id) {
    return axios.get(`${config.api_url}/pro/${speciality_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}*/

export function displayDays(){
    return axios.get(`${config.api_url}/jours`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

