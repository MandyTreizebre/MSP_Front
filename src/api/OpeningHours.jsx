import axios from 'axios'
import {config} from '../config'

export function getAllHours(){
    return axios.get(`${config.api_url}/horaires`)
    .then((res)=>{
        res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getHoursByPro(fk_pro_id){
    return axios.get(`${config.api_url}/pro/horaires/${fk_pro_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function addHours(){
    return axios.post(`${config.api_url}/ajout/horaires`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateHours(id){
    return axios.put(`${config.api_url}/modif/horaires/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteHours(id){
    return axios.delete(`${config.api_url}/suppr/horaires/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}