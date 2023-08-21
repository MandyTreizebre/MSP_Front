import axios from 'axios'
import {config} from '../config'

export function getAllActus(){
    return axios.get(`${config.api_url}/actualites`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}