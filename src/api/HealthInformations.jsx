import axios from 'axios'
import {config} from '../config'

export function displayAllInformations(){
    return axios.get(`${config.api_url}/informations`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getInformationsByCategory(category){
    console.log("CONSOLE LOG AVANT LE AXIOS GET DANS API =>", category)
    return axios.get(`${config.api_url}/informations-category/${category}`)
    .then((res)=>{
        console.log("CONSOLE LOG DANS API =>", category)
        console.log(res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function displayCategories(){
    return axios.get(`${config.api_url}/categories`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function editInformations(datas, id){
    return axios.put(`${config.api_url}/edit/information/${id}`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}
