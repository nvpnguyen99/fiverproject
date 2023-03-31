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
}

export const quanLyNguoiDung = new QuanLyNguoiDung();