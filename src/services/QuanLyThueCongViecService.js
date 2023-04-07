import { BaseService } from "./BaseService";

export class QuanLyThueCongViecService extends BaseService{
    
    constructor(){
        super();
    }

    thueCongViec = (model) => {
        return this.post(`/api/thue-cong-viec`,model);
    }

    layDanhSachDaThue = () => {
        return this.get(`/api/thue-cong-viec/lay-danh-sach-da-thue`);
    }

    xoaThueCongViec = (maCongViecThue) => {
        return this.delete(`/api/thue-cong-viec/${maCongViecThue}`);
    }
}

export const quanLyThueCongViecService = new QuanLyThueCongViecService();