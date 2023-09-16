import { quanLyThueCongViecService } from "../../services/QuanLyThueCongViecService"

export const getHiredJobsListAction = () =>{
    return (dispatch2) => {
        console.log("test");
        let promise = quanLyThueCongViecService.layDanhSachDaThue()
        promise.then((result) => { 
            let action = {
                type: "GET_HIRED_LIST",
                hiredJobsList: result.data.content
            }
            dispatch2(action);
         })
         promise.catch((error) => { 
            console.log(error);
          })
    }
}