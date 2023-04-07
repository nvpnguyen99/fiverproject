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
            'token': localStorage.getItem(ACCESS_TOKEN),
            'tokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }


   post = (url,model) => {
    console.log(localStorage.getItem(ACCESS_TOKEN));
       return axios({
           url:`${DOMAIN}${url}`,
           method:'POST',
           data:model,
           headers: {
            'token': localStorage.getItem(ACCESS_TOKEN),
            'tokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }


   get = (url) => {
       return axios({
           url:`${DOMAIN}${url}`,
           method:'GET',
           headers: {
            'token': localStorage.getItem(ACCESS_TOKEN),
            'tokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }


   delete = (url) => {
       return axios({
           url:`${DOMAIN}${url}`,
           method:'DELETE',
           headers: {
            'token': localStorage.getItem(ACCESS_TOKEN),
            'tokenCybersoft': TOKEN_CYBERSOFT
        } 
       })
   }
}
