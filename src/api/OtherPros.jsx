import axios from 'axios'
import {config} from '../config'

export function getOtherPros(){
    return axios.get(`${config.api_url}/autres-pros`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function addOtherPro(){
    return axios.post(`${config.api_url}/ajout-autre-pro`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateOtherPro(id){
    return axios.put(`${config.api_url}/modif/autre-pro/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteOtherPro(id){
    return axios.delete(`${config.api_url}/suppr/autre-pro/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}