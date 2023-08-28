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

export function displayOneProfessional(id){
    return axios.get(`${config.api_url}/professional/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function SaveOneProfessional(datas){
    return axios.post(`${config.api_url}/save/pro`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateOneProfessional(datas, id){
    return axios.put(`${config.api_url}/update/pro/${id}`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
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

export function getProBySpe(speciality_id){
    return axios.get(`${config.api_url}/pro/category/${speciality_id}`)
    .then((res)=>{
        console.log("console dans getProBySpe" ,res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function displaySpecializations(){
    return axios.get(`${config.api_url}/specializations`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}
