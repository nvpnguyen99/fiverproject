import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FieldTimeOutlined, ReloadOutlined, CheckOutlined } from '@ant-design/icons';
import { Rate, Progress, Space,Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getJobDetailAction } from '../../redux/actions/jobListAction';
export default function Detail() {

  const { Search } = Input;
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);

  let { jobDetail } = useSelector(state => state.jobListReducer)
  let { jobid } = useParams();
  let dispatch = useDispatch();



  useEffect(() => {
    getJobDetail()
  }, [])


  const getJobDetail = () => {
    let action = getJobDetailAction(jobid);
    dispatch(action)
  }

  const renderJobDetail = () => {
    return jobDetail?.map((jobDetail) => {
      return <div key={jobDetail.id}>
        <div className="row">
          <div className="col-8 overflow-hidden">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>

            <h3>{jobDetail.congViec.tenCongViec}</h3>
            <div className="detail-info d-flex flex-wrap" style={{ alignItems: 'flex-end' }}>
              <figure>
                <img src="../../img/avt.jpg" alt="" className='seller-avatar img-fluid rounded-circle mr-2' />
              </figure>
              <p >Admin<span className='ml-2 mr-2' style={{ color: "#b5b6ba" }}>Level 2 seller</span></p>
              <p><Rate tooltips={desc} onChange={setValue} value={value} /></p>
              <p style={{ color: "#ffbe5b" }}>4 <span style={{ fontWeight: "500", color: "#b5b6ba" }}> (12)  | 2 Order in Queue</span></p>
            </div>
            <div className="job-img mt-3">
              <img className="img-fluid w-100" src={jobDetail.congViec.hinhAnh} alt="..." />
            </div>
            <h4 className='mt-5 title-seller'>About This Gig</h4>
            <p className='mt-3 description-seller'>{jobDetail.congViec.moTa}</p>
            <h4 className='mt-5 title-seller'>About The Seller</h4>
            <div className="seller d-flex">
              <div className="seller-img">
                <img src="../../img/avt.jpg" alt="" className='img-fluid rounded-circle mr-2' />
              </div>
              <div className="seller-info">
                <h5>Admin</h5>
                <p>{jobDetail.tenChiTietLoai}</p>
                <p><Rate tooltips={desc} onChange={setValue} value={value} /><span style={{ color: "#ffbe5b", marginLeft: '15px', fontWeight: '700' }}>{jobDetail.congViec.saoCongViec} <span style={{ color: "#b5b6ba" }}>({jobDetail.congViec.danhGia})</span> </span></p>
                <button className='seller-btn'>Contact Me</button>
              </div>
            </div>
            <div className="faq">
              <h4 className='mt-5 title-seller'>FAQ</h4>
              <div>
                <p className='collapse-title' data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  There are many passages but the majority?
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body collapse-desc " style={{ border: 'none', padding: '1px' }}>
                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <p className='collapse-title' data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                  There are many passages but the majority?
                </p>
                <div className="collapse" id="collapseExample2">
                  <div className="card card-body collapse-desc" style={{ border: 'none', padding: '1px' }}>
                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <p className='collapse-title' data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                  There are many passages but the majority?
                </p>
                <div className="collapse" id="collapseExample3">
                  <div className="card card-body collapse-desc" style={{ border: 'none', padding: '1px' }}>
                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <p className='collapse-title' data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                  There are many passages but the majority?
                </p>
                <div className="collapse" id="collapseExample4">
                  <div className="card card-body collapse-desc" style={{ border: 'none', padding: '1px' }}>
                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className='review-count d-flex justify-content-between'>
                <div className='count d-flex mt-2' style={{ alignItems: 'baseline' }}>
                  <h5 className="mr-2"><b>{jobDetail.congViec.danhGia} Reviews</b></h5>
                  <span>
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                  </span>
                  <p style={{ color: "#ffbe5b", marginLeft: '10px', fontWeight: '700' }}>{jobDetail.congViec.saoCongViec}</p>
                </div>
                <div className='star d-flex align-items-center'>
                  <div className='mr-2'>Sort By</div>
                  <div>
                    <select>
                      <option value="recent">Most Recent</option>
                      <option value="relevant">Most Relevant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="rating-bar w-50">
                <Progress percent={99} showInfo={false} />
                <Progress percent={0} showInfo={false} />
                <Progress percent={0} showInfo={false} />
                <Progress percent={5} showInfo={false} />
                <Progress percent={0} showInfo={false} />
              </div>
            </div>
            <Space direction="vertical">
            <Search placeholder="Search reviews" style={{ width: 200 }} />
            </Space>
            <div className="border-bottom"></div>
          </div>
          <div className="col-4">
            <div className="container p-4 checkout">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="basic-tab" data-toggle="pill" data-target="#basic" type="button" role="tab" aria-controls="basic" aria-selected="true">Basic</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="standard-tab" data-toggle="pill" data-target="#standard" type="button" role="tab" aria-controls="standard" aria-selected="false">Standard</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="premium-tab" data-toggle="pill" data-target="#premium" type="button" role="tab" aria-controls="premium" aria-selected="false">Premium</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="basic" role="tabpanel" aria-labelledby="basic-tab">
                  <div className="option-title d-flex justify-content-between">
                    <h4 className="mt-4">Basic</h4>
                    <h4 className="mt-4">US${jobDetail.congViec.giaTien}</h4>
                  </div>
                  <div className="option-content">
                    <p>{jobDetail.congViec.moTaNgan}</p>
                    <div className='d-flex justify-content-between'>
                      <p><FieldTimeOutlined style={{ verticalAlign: '2px' }} /> <span>14 Day Delivery</span> </p>
                      <p><ReloadOutlined style={{ verticalAlign: '2px' }} /> <span>Unlimited Revisions</span></p>
                    </div>
                    <p><CheckOutlined className='text-success mr-2' style={{ verticalAlign: '2px' }} /><span>Good fearture</span></p>
                    <p><CheckOutlined className='text-success mr-2' style={{ verticalAlign: '2px' }} /><span>Good fearture</span></p>
                    <p><CheckOutlined className='text-success mr-2' style={{ verticalAlign: '2px' }} /><span>Good fearture</span></p>
                  </div>
                  <button type="button" className="btn-option">Continue (US${jobDetail.congViec.giaTien})</button>
                  <p className="compare-option">Compare Packages</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    })
  }


  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="detail container">
        {renderJobDetail()}
      </div>
    </div>
  )
}
