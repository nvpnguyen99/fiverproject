import { BaseService } from "./BaseService";

export class QuanLyNguoiDung extends BaseService{
    
    constructor(){
        super();
    }

    signIn = (account) => {
        return this.post(`/api/auth/signin`, account);
    }

    signUp = (model) => {
        return this.post("/api/auth/signup", model);
    }

    getProfile = (id) => {
        return this.get(`/api/users/${id}`);
    }

    updateProfile = (id, model) => {
        return this.put(`/api/users/${id}`, model);
    }
}

export const quanLyNguoiDung = new QuanLyNguoiDung();