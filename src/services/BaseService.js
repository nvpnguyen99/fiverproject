import axios from "axios"
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from "../util/settings/config"



export class BaseService {
   //put json về phía backend
   put = (url,model) => {
       return  axios({
           url:`${DOMAIN}${url}`,
           method:'PUT',
           data:model,
           headers: {
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            'TokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }


   post = (url,model) => {
       return axios({
           url:`${DOMAIN}${url}`,
           method:'POST',
           data:model,
           headers: {
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            'TokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }


   get = (url) => {
       return axios({
           url:`${DOMAIN}${url}`,
           method:'GET',
           headers: {
            'TokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }


   delete = (url) => {
       return axios({
           url:`${DOMAIN}${url}`,
           method:'DELETE',
           headers: {
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            'TokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }
}
