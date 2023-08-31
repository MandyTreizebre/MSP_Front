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

export function getOpeningHoursByPro(fk_pro_id){
    return axios.get(`${config.api_url}/pro/opening-hours/${fk_pro_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function saveOneOpeningHours(){
    return axios.post(`${config.api_url}/save/opening-hours`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateOneOpeningHours(id){
    return axios.put(`${config.api_url}/update/opening-hours/${id}`)
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

export function essaiPros(speciality_id) {
    return axios.get(`${config.api_url}/essai/${speciality_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}
