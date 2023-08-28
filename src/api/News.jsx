import axios from 'axios'
import {config} from '../config'

export function displayAllNews(){
    return axios.get(`${config.api_url}/news`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}