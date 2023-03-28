import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { quanLyLoaiCongViecService } from '../../services/QuanLyLoaiCongViec'

export default function JobType() {

    let { typeid } = useParams()
    let [loaiCongViec, setLoaiCongViec] = useState({})

    useEffect(() => {
        // console.log(typeid)
        getJobDetailType()
    }, [typeid])

    const getJobDetailType = () => {
        let promise = quanLyLoaiCongViecService.letChiTietLoaiCongViec(typeid)
        promise.then((result) => {
            setLoaiCongViec({ ...result.data.content[0] })
        })
        promise.catch((error) => {
            console.log(error)
        })
    }

    const renderType = () => {
        let groupDetailTypeArray = loaiCongViec.dsNhomChiTietLoai ? loaiCongViec.dsNhomChiTietLoai : []
        return groupDetailTypeArray.map((groupDetailType) => {
            return <div key={groupDetailType.id} className="col-3">
                <div className="jobType__cardContent">
                    <div className="jobType__img">
                        <img src={groupDetailType.hinhAnh} className="img-fluid" alt="" />
                    </div>
                    <div className="jobType__detailType pt-3">
                        <h6>{groupDetailType.tenNhom}</h6>
                        <ul>
                            {renderDetailType(groupDetailType.dsChiTietLoai)}
                        </ul>
                    </div>
                </div>
            </div>
        })
    }

    const renderDetailType = (detailTypeArr) => {
        return detailTypeArr.map((detailType) => { 
            return <li key={detailType.id}>
                <Link to={`/joblistbytype/${detailType.id}`}>{detailType.tenChiTiet}</Link>
            </li>
         })
    }

    console.log(loaiCongViec.tenLoaiCongViec)
    return (
        <div style={{ paddingTop: "150px", paddingBottom: "60px" }}>
            <div className="container">
                <h3 style={{fontWeight: "600"}}>{loaiCongViec.tenLoaiCongViec}</h3>
                <div className="row">
                    {renderType()}
                </div>

            </div>

        </div>
    )
}
