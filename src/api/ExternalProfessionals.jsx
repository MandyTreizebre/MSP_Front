import axios from "axios"
import {config} from "../config"

//Retrieve external pros
export function displayExternalProfessionals(){

    return axios.get(`${config.api_url}/api/external-professionals`)

    .then((res)=> {
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=> {
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })
}

// Retrieve one external professional by his ID 
export function displayOneExternalProfessional(id){

    return axios.get(`${config.api_url}/api/external-professional/${id}`)

    .then((res)=> {
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=> {
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })
}

// Add external pro
export function addExternalProfessional(datas, token){

    return axios.post(`${config.api_url}/api/save-external-professional`, datas, {

        headers: {
            "Authorization": `Bearer ${token}` 
        },
        withCredentials: true 
    })
    .then((res)=>{
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=>{
        if (error.response.data.msg === "Nom invalide") {
            throw new Error("Nom invalide")
        }

        if (error.response.data.msg === "Prénom invalide") {
            throw new Error("Prénom invalide")
        }

        if (error.response.data.msg === "Lien invalide") {
            throw new Error("Lien invalide")
        }

        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }
    })
}

// Update external pro
export function updateExternalProfessional(datas, id, token){

    return axios.put(`${config.api_url}/api/update/external-pro/${id}`, datas, {

        headers: {
            "Authorization": `Bearer ${token}`
        },
        withCredentials: true 
    })
    .then((res)=> {
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=> {
        if (error.response.data.msg === "Nom invalide") {
            throw new Error("Nom invalide")
        }

        if (error.response.data.msg === "Prénom invalide") {
            throw new Error("Prénom invalide")
        }

        if (error.response.data.msg === "Lien invalide") {
            throw new Error("Lien invalide")
        }

        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }
    })
}

// Delete external pro
export function deleteExternalPro(datas, id, token){

    return axios.delete(`${config.api_url}/api/delete/external-pro/${id}`, datas, {

        headers: {
            "Authorization": `Bearer ${token}` 
        },
        withCredentials: true 
    })
    .then((res)=> {
        console.log(res)
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=> {
        console.log(error)
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })
}