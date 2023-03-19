import React, { useState } from 'react'

export default function JobItem(props) {

    let [cardIconStyle, setCardIconStyle] = useState({})
    let {avatar, congViec, id, tenNguoiTao} = props.jobItem;

    return (
        <div className="card jobItem" style={{ width: '18rem' }}>
            <div onClick={()=> {
                props.history.push(`/detail/${id}`)
            }} className="jobItem__imgAndInfo">
            <img src={congViec.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="jobItem__topInfo mb-4 d-flex">
                    <div className="topInfo__leftContent d-flex my-auto mr-2">
                        <img style={{borderRadius: "50%"}} src={avatar} width="26px" alt="" />
                    </div>
                    <div className="topInfo__rightContent">
                        <h6 className='my-0'>{tenNguoiTao}</h6>
                        <p className='my-0'>{`Level ${congViec.saoCongViec} Seller`}</p>
                    </div>
                </div>
                <div className="jobItem__mainInfo">
                    <p className='mainInfo__jobName'>{congViec.tenCongViec}</p>
                    <p><span style={{color: "#ffbe5b"}}><i className="fa-solid fa-star"></i>{congViec.saoCongViec}</span><span style={{fontWeight: "500", color: "#b5b6ba"}}> ({congViec.danhGia})</span></p>
                </div>
            </div>
            </div>
            <div className="card__bottomContent d-flex justify-content-between">
                <div style={{cursor: "pointer"}} onClick={() => {
                    if(!cardIconStyle.color){
                        setCardIconStyle({color: "red"})
                    } else{
                        setCardIconStyle({})
                    }
                 
                }} className="bottomContent__icon">
                <i style={cardIconStyle} className="fa-solid fa-heart"></i>
                </div>
                <div className="bottomContent__price d-flex align-items-baseline">
                    <p>STARTING AT </p>
                    <h4>US${congViec.giaTien}</h4>
                </div>
            </div>
        </div>

    )
}
