import axios from 'axios'
import {config} from '../config'


// Retrieve professionals and their opening hours 
export function displayAllProfessionals() {

    return axios.get(`${config.api_url}/api/professionals-and-hours`)

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

// Retrieve professionals
export function displayProfessionals() {

    return axios.get(`${config.api_url}/api/professionals`)

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

// Retrieve a professional by his ID 
export function displayOneProfessional(id) {

    return axios.get(`${config.api_url}/api/professional/${id}`)

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

// Add a professional 
export function saveOneProfessional(datas, token) {

    return axios.post(`${config.api_url}/api/save/pro`, datas, {

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
        if(error.response.data.msg === "Nom invalide") {
            throw new Error("Nom invalide")
        }

        if(error.response.data.msg === "Prénom invalide") {
            throw new Error("Prénom invalide")
        }

        if(error.response.data.msg === "Addresse invalide") {
            throw new Error("Addresse invalide")
        }

        if(error.response.data.msg === "Code postal invalide") {
            throw new Error("Code postal invalide")
        }

        if(error.response.data.msg === "Ville invalide") {
            throw new Error("Ville invalide")
        }

        if(error.response.data.msg === "Téléphone invalide") {
            throw new Error("Téléphone invalide")
        }

        if(error.response.data.msg === "Détails invalides") {
            throw new Error("Détails invalides")
        }

        if(error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }
    })
}

// Update a professional 
export function editOneProfessional(datas, id, token) {

    return axios.put(`${config.api_url}/api/edit/pro/${id}`, datas, {

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
        if(error.response.data.msg === "Nom invalide") {
            throw new Error("Nom invalide")
        }

        if(error.response.data.msg === "Prénom invalide") {
            throw new Error("Prénom invalide")
        }

        if(error.response.data.msg === "Addresse invalide") {
            throw new Error("Addresse invalide")
        }

        if(error.response.data.msg === "Code postal invalide") {
            throw new Error("Code postal invalide")
        }

        if(error.response.data.msg === "Ville invalide") {
            throw new Error("Ville invalide")
        }

        if(error.response.data.msg === "Téléphone invalide") {
            throw new Error("Téléphone invalide")
        }

        if(error.response.data.msg === "Détails invalides") {
            throw new Error("Détails invalides")
        }

        if(error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }
    })
}

// Change the status of a professional 
export function changeStatusProfessionnal(id, token) {

    return axios.put(`${config.api_url}/api/status/pro/${id}`, {}, {

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
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })
}

// Retrieve professionals by their specializations 
export function getProfessionalBySpe(speciality_id) {
    return axios.get(`${config.api_url}/api/pro/${speciality_id}`)
    .then((res)=>{
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=>{
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })
}


// Retrieve specializations
export function displaySpecializations() {

    return axios.get(`${config.api_url}/api/specializations`)

    .then((res)=>{
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=>{
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })  
}

/* Function to retrieve professionals on guards*/
export function displayProfessionalsGuards() {

    return axios.get(`${config.api_url}/api/professionals-guards`)

    .then((res)=>{
        if (res.status < 200 || res.status >= 300) {
            throw new Error( "Erreur lors de la connexion")
        }

        return res
    })
    .catch((error)=>{
        if (error.response.status === 500) {
            throw new Error("Erreur interne du serveur")
        }

        return error
    })
}