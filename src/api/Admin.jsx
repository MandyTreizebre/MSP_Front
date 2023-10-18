import axios from 'axios'
import {config} from '../config'

export function addAdmin(datas){
    const token = window.localStorage.getItem('token')
    return axios.post(`${config.api_url}/admin/save`, datas,{headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function loginAdmin(datas){
    return axios.post(`${config.api_url}/login`, datas)
    .then((res)=>{
        console.log("CONSOLE LOG DE RES DATA", res.data)
        return res.data
    })
    .catch((err) => {
        console.log(err)
        return err
    })
}

export function checkMyToken(){
    const token = window.localStorage.getItem('token')
    console.log("Token envoyé à l'api pour vérification:", token);
    return axios.get(`${config.api_url}/admin/checkToken`, {headers: {"x-access-token": token}})
    .then((res)=>{
        console.log("réponse de l'api =>", res.data)
        return res.data
    })
    .catch((err) => {
        console.error("Erreur de l'api:", err)
        return err
    })
}
