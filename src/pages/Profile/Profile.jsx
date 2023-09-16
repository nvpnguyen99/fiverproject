import React, { useEffect, useState } from 'react'
import { EditOutlined, FacebookOutlined, GoogleOutlined, GithubOutlined, TwitterOutlined, PlusOutlined } from '@ant-design/icons';
import { getHiredJobsListAction } from '../../redux/actions/hireJobAction';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyThueCongViecService } from '../../services/QuanLyThueCongViecService';
import { toast } from 'react-hot-toast';
import { quanLyNguoiDung } from '../../services/QuanLyNguoiDungService';
import { getProfileAction } from '../../redux/actions/userAction';

export default function Profile(props) {

    let dispatch = useDispatch();
    let { jobHiredList } = useSelector(state => state.hireJobsReducer);
    let { userLogin } = useSelector(state => state.userReducer)
    let [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        birthday: "",
        gender: "",
        certification: "",
        skill: ""
    });


    useEffect(() => {
        let action = getHiredJobsListAction();
        dispatch(action);
        console.log("test Profile")
        getProfileUser();
    }, [])

    useEffect(() => {
        if (userLogin) {
            let { name, email, phone, birthday, gender, certification, skill } = userLogin
            if (certification.length == 0) {
                certification[0] = "";
            }
            if (skill.length == 0) {
                skill[0] = "";
            }
            setValues({
                name,
                email,
                phone,
                birthday,
                gender,
                certification: certification[0],
                skill: skill[0]
            })
        }

    }, [userLogin])

    const handleOnChange = (event) => {
        let { value, name } = event.target;

        // console.log(value, name);

        let newValues = { ...values };
        newValues[name] = value;

        setValues(newValues);

    }


    const handleOnSubmit = (event) => {
        event.preventDefault();
        let certificationArr = [values.certification]
        let model = {
            id: 0,
            name: values.name,
            email: userLogin.email,
            phone: values.phone,
            birthday: values.birthday,
            gender: values.gender,
            role: userLogin.role,
            skill: [
                values.skill
            ],
            certification: [...certificationArr]
        }

        let promise = quanLyNguoiDung.updateProfile(userLogin.id, model)
        promise.then((result) => {
            toast.success("Cập nhật thành công!");
            getProfileUser();
        })
        promise.catch((error) => {
            console.log(error);
            toast.error(error.response.data.content);
        })
    }
    const getProfileUser = () => {
        let promise = quanLyNguoiDung.getProfile(userLogin.id)
        promise.then((result) => {
            dispatch(getProfileAction(result.data.content));
        })
        promise.catch((error) => {
            console.log(error)
        })
    }

    const renderJobHiredList = () => {
        return jobHiredList.map((jobHired) => {
            let { id, danhGia, tenCongViec, giaTien, hinhAnh, moTaNgan, saoCongViec } = jobHired.congViec
            return <div style={{ height: "max-content" }} className="profile-right-content mt-4">
                <div className="seller d-flex">
                    <div className="seller-img mr-4 mt-1">
                        <img src={hinhAnh} alt="" width="100px" />
                    </div>
                    <div className="seller-info">
                        <h5>{tenCongViec}</h5>
                        <p>{moTaNgan}</p>
                        <p><span style={{ color: "#ffbe5b" }}><i className="fa-solid fa-star"></i> {saoCongViec} </span>({danhGia})</p>
                        <div className='d-flex float-right'>
                            <button onClick={() => {
                                props.history.push(`/detail/${id}`);
                            }} className='profile-right-btn mr-2'>View detail</button>
                            <button onClick={() => {
                                let promise = quanLyThueCongViecService.xoaThueCongViec(jobHired.id)
                                promise.then((result) => {
                                    toast.success("Xoá công việc thành công!")
                                    let action = getHiredJobsListAction();
                                    dispatch(action);
                                })
                                promise.catch((error) => {
                                    console.log(error)
                                })
                            }} style={{ backgroundColor: '#e14c4c' }} className='profile-right-btn'>Del</button>
                        </div>

                    </div>
                </div>
            </div>
        })
    }
    return (
        <section className="container" style={{ paddingTop: '150px', paddingBottom: '60px' }}>
            <div className="profile d-flex w-100">
                <div className="profile-left">
                    <div className="card-profile">
                        <div className="card-status d-flex justify-content-between">
                            <div className="btn-group">
                                <button type="button" className="border border-none dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    Log out
                                </div>
                            </div>
                            <div className="card_online"><i className="dot mr-2">•</i>Online</div>
                        </div>
                        <div className="card-info">
                            <div className="card-avt mb-2">
                                <p className=" card-text my-0 d-flex text-white font-weight-bold text-center justify-content-center align-items-center">USER</p>
                            </div>
                            <div className="card-label text-center">
                                <h5><b>{userLogin ? userLogin.email : ""}</b></h5>
                            </div>
                            <div className="btn-edit text-center" data-toggle="modal"
                                data-target="#exampleModal">
                                <a><EditOutlined /></a>
                                <div className="border-bottom"></div>
                            </div>

                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Update User</h4>
                                            <button type="button" className="close" data-dismiss="modal">
                                                ×
                                            </button>
                                        </div>
                                        {/* Modal body */}
                                        <div className="card-body">
                                            <form onSubmit={handleOnSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6 pr-1">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="text" onChange={handleOnChange} className="form-control" id="email" name='email' value={values.email} readOnly />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-1">
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            <input type="text" onChange={handleOnChange} className="form-control" id="phone" name='phone' value={values.phone} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 pr-1">
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="text" onChange={handleOnChange} className="form-control" id="name" name='name' value={values.name} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-1">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Birthday</label>
                                                            <input type="text" onChange={handleOnChange} className="form-control" id="birthday" name='birthday' value={values.birthday} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className='gender' onChange={handleOnChange}>
                                                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                                                    <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" value={true} defaultChecked={true} />
                                                                    <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                                                                </div>
                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" value={false} defaultChecked={false} />
                                                                    <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 pr-1">
                                                        <div className="form-group">
                                                            <label>Certification</label>
                                                            <input type="text" onChange={handleOnChange} className="form-control" id="certification" name='certification' value={values.certification} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-1">
                                                        <div className="form-group">
                                                            <label>Skill</label>
                                                            <input type="text" onChange={handleOnChange} className="form-control" id="skill" name='skill' value={values.skill} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-danger">CANCEL</button>
                                                    <button className="btn btn-success">SAVE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="card-desc">
                            <div className="location d-flex justify-content-between">
                                <div className="location_left"><span> From</span></div>
                                <div className="location_right" style={{ fontWeight: '600' }}><span><b>Vietnam</b></span></div>
                            </div>
                            <div className="location d-flex justify-content-between">
                                <div className="location_left"><span> Member since</span></div>
                                <div className="location_right" style={{ fontWeight: '600' }}><span><b>Oct2022</b></span></div>
                            </div>

                        </div>
                    </div>
                    <div className="card-profile mt-5">
                        <div className="card-desc">
                            <div className="location d-flex justify-content-between mb-2">
                                <div className="location_left"><b> Description</b></div>
                                <div className="btn-edit text-center" data-toggle="modal"
                                    data-target="#exampleModal">
                                    <a><EditOutlined /></a></div>
                            </div>
                            <div className="location d-flex justify-content-between">
                                <div className="location_left"><span> Name</span></div>
                                <div className="location_right">{userLogin? userLogin.name : ""}</div>
                            </div>
                            <div className="location d-flex justify-content-between">
                                <div className="location_left"><span> Phone</span></div>
                                <div className="location_right">{userLogin? userLogin.phone : ""}</div>
                            </div>
                            <div className="location d-flex justify-content-between">
                                <div className="location_left"><span> Birth day</span></div>
                                <div className="location_right">{userLogin? userLogin.birthday : ""}</div>
                            </div>
                            <div className="border-bottom"></div>
                        </div>
                        <div className="card-lang">
                            <b>Languages</b>
                            <p className='mt-2'>English -<span style={{ color: '#b2b2b2' }}>Basic</span></p>
                            <p>Vietnamese (Tiếng Việt) -<span style={{ color: '#b2b2b2' }}>Native/Bilingual</span></p>
                            <div className="border-bottom"></div>
                        </div>
                        <div className="card-skill">
                            <div className=" d-flex justify-content-between mb-2">
                                <div><b> Skills</b></div>
                                <div className="btn-edit text-center" data-toggle="modal"
                                    data-target="#exampleModal">
                                    <a><EditOutlined /></a></div>
                            </div>
                            <p>{values.skill}</p>
                            <div className="border-bottom"></div>
                        </div>
                        <div className="card-edu">
                            <div className=" d-flex justify-content-between mb-2">
                                <div><b> Education</b></div>
                                <div className="btn-edit text-center" data-toggle="modal"
                                    data-target="#exampleModal">
                                    <a><EditOutlined /></a></div>
                            </div>
                            <p>CYBERSOFT</p>
                            <div className="border-bottom"></div>
                        </div>
                        <div className="card-cer">
                            <div className=" d-flex justify-content-between mb-2">
                                <div><b> Certification</b></div>
                                <div className="btn-edit text-center" data-toggle="modal"
                                    data-target="#exampleModal">
                                    <a><EditOutlined /></a></div>
                            </div>
                            <p>{values.certification}</p>
                            <div className="border-bottom"></div>
                        </div>
                        <div className="card-linked">
                            <b >Linked Account</b>
                            <p className='mt-2'><FacebookOutlined /><a>Facebook</a></p>
                            <p><GoogleOutlined /><a>Google</a></p>
                            <p><GithubOutlined /><a>Github</a></p>
                            <p><TwitterOutlined /><a>Twitter</a></p>
                            <p><PlusOutlined /><a>Dirbble</a></p>
                            <p><PlusOutlined /><a>Stack Overflow</a></p>
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="profile-right-top d-flex justify-content-between">
                        <div className="profile-right-text mr-5"><span> It seems that you don't have any active Gigs.</span></div>
                        <div className="profile-right-btn text-center"><p>Create a new Gig</p></div>
                    </div>

                    {renderJobHiredList()}



                </div>
            </div>


        </section >
    )
}
