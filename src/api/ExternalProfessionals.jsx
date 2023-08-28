import axios from 'axios'
import {config} from '../config'

export function displayExternalProfessionals(){
    return axios.get(`${config.api_url}/external-professionals`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function addExternalProfessional(){
    return axios.post(`${config.api_url}/save-external-professional`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateExternalProfessional(id){
    return axios.put(`${config.api_url}/update/external-pro/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteExternalPro(id){
    return axios.delete(`${config.api_url}/delete/external-pro/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}