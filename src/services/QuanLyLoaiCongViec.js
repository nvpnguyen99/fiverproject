import { BaseService } from "./BaseService";

export class QuanLyLoaiCongViecService extends BaseService{

    constructor(){
        super();
    }

    layMenuLoaiCongViec = () => {
        return this.get('/api/cong-viec/lay-menu-loai-cong-viec')
    } 

    letChiTietLoaiCongViec = (maLoai) =>{
        return this.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${maLoai}`)
    }
}

export const quanLyLoaiCongViecService = new QuanLyLoaiCongViecService();