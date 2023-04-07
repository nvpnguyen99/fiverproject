import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FieldTimeOutlined, ReloadOutlined, CheckOutlined } from '@ant-design/icons';
import { Rate, Progress, Space, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getJobDetailAction } from '../../redux/actions/jobListAction';
import { quanLyThueCongViecService } from '../../services/QuanLyThueCongViecService';
import toast from 'react-hot-toast';
import { getHiredJobsListAction } from '../../redux/actions/hireJobAction';

export default function Detail(props) {

  const { Search } = Input;
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);

  let { jobDetail } = useSelector(state => state.jobListReducer)
  let { userLogin } = useSelector(state => state.userReducer)
  let { jobid } = useParams();
  let dispatch = useDispatch();



  useEffect(() => {
    getJobDetail()
  }, [])

  const hireJob = () => {
    let date = new Date();
    let ngayThue = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    let model = {
      id: 0,
      maCongViec: jobid,
      maNguoiThue: userLogin.id,
      ngayThue: ngayThue,
      hoanThanh: false
    }

    let promise = quanLyThueCongViecService.thueCongViec(model)
    promise.then((result) => {
      toast.success('Thuê công việc thành công!');
      let action = getHiredJobsListAction();
      dispatch(action);
    })
    promise.catch((error) => {
      toast.error(error.response.data.content);
    })
  }

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
            <div className="seller d-flex">
              <div className="seller-img mr-2">
                <img src="../../img/avt.jpg" alt="" className='img-fluid rounded-circle mr-2' />
              </div>
              <div className="seller-info">
                <div className='d-flex'>
                  <h5>idarethejeff</h5>
                  <p style={{ color: "#ffbe5b", fontWeight: '700', marginLeft: "5px" }}> <span><i class="fa-solid fa-star"></i></span> 2</p>
                </div>
                <div className='d-flex'>
                  <img style={{ width: '20px', height: '20px', marginRight: '10px' }} src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="" />
                  <p>Switzerland</p>
                </div>
                <p style={{ color: "#404145", fontSize: "16px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui voluptatem nemo! Sit aliquam optio incidunt temporibus, eligendi porro ducimus nulla modi, ut deserunt repudiandae.</p>
                <p style={{ color: "#404145", fontWeight: "500" }}>Helpful? <a style={{ cursor: "pointer" }}><span><i class="fa-regular fa-thumbs-up"></i></span> Yes</a><a style={{ cursor: "pointer" }}> <span><i class="fa-regular fa-thumbs-down"></i></span> No</a></p>
                <div className="border-bottom"></div>
              </div>
            </div>

            <div className="comment">
              <div className="comment-title d-flex justify-content-between mb-2">
                <h4>Leave some comments</h4>
                <h4><Rate tooltips={desc} onChange={setValue} value={value} /> <span>Rating</span></h4>
              </div>
              <form>
                <textarea className="comment-form" required id cols={100} rows={5} defaultValue={""} />
                <p className="comment-submit mt-2">Comment</p>
              </form>

            </div>


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
                  <button type="button" onClick={() => {
                    if (userLogin) {
                      hireJob()
                    } else
                      props.history.push("/signin");

                  }} className="btn-option">Continue (US${jobDetail.congViec.giaTien})</button>
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
