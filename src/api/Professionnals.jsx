import axios from 'axios'
import {config} from '../config'

export function displayAllProfessionnals(){
    return axios.get(`${config.api_url}/professionnels`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function displayOneProfessionnal(id){
    return axios.get(`${config.api_url}/professionnel/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function addOneProfessionnal(datas){
    return axios.post(`${config.api_url}/ajout/pro`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateOneProfessionnal(datas, id){
    return axios.put(`${config.api_url}/modif/pro/${id}`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteOneProfessionnal(id){
    return axios.delete(`${config.api_url}/suppr/pro/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getProBySpe(specialitee_id){
    return axios.get(`${config.api_url}/pro/categorie/${specialitee_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getSpecialisations(){
    return axios.get(`${config.api_url}/specialisations`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}
