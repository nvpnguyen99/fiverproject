import { quanLyCongViecService } from "../../services/QuanLyCongViecService"

export const getJobListByNameAction = (jobName) =>{
    return (dispatch2) => {
        let promise = quanLyCongViecService.layDanhSachCongViecTheoTen(jobName);
        promise.then((result) => { 
            let action = {
                type: "GET_JOB_LIST_BY_NAME",
                jobList: result.data.content
            }
            dispatch2(action)
         })
         promise.catch((error) => { 
            console.log(error)
          })
    }
}

export const getJobListByTypeAction = (typeId) => {
    return (dispatch2) => {
        let promise = quanLyCongViecService.layDanhSachCongViecTheoLoai(typeId)
        promise.then((result) => { 
            let action = {
                type: "GET_JOB_LIST_BY_TYPE",
                jobList: result.data.content
            }
            dispatch2(action)
         })
         promise.catch((error) => { 
            console.log(error)
          })
    }
}