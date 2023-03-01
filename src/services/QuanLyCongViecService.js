import { BaseService } from "./BaseService";

export class QuanLyCongViecService extends BaseService{
    
    constructor(){
        super();
    }

    layDanhSachCongViecTheoTen = (tenCongViec) => {
        return this.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`)
    }
}

export const quanLyCongViecService = new QuanLyCongViecService();