import { BaseService } from "./BaseService";

export class QuanLyCongViecService extends BaseService{
    
    constructor(){
        super();
    }

    layDanhSachCongViecTheoTen = (tenCongViec) => {
        return this.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`)
    }

    layDanhSachCongViecTheoLoai = (maChiTietLoai) => {
        return this.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`)
    }
}

export const quanLyCongViecService = new QuanLyCongViecService();