import React, { useState } from 'react'
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, FieldTimeOutlined, ArrowRightOutlined} from '@ant-design/icons';
import { toast, Toaster } from 'react-hot-toast';
import { quanLyNguoiDung } from '../../services/QuanLyNguoiDungService';

export default function Register(props) {

    let [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        repeatPass: "",
        phone: "",
        birthday: "",
        gender: ""
      })

    let [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        repeatPass: "",
        phone: "",
        birthday: "",
        gender: ""
      })  

    
      const handleOnChange = (event) => {
        let { value, name } = event.target;

        console.log(value, name);

        let newValues = { ...values };
        newValues[name] = value;

        let messageError = "";
        //lấy dữ liệu thuộc tính tự tạo của thẻ (không thể dùng bóc tách như các thuộc tính có sẵn)
        let typeform = event.target.getAttribute("typeform");
        //Kiểm tra rỗng
        if (value.trim() === "") {
          messageError = `${name} không được để trống`;
        }
        //Kiểm tra email
        let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (typeform == "email") {
          if (!regexp.test(value)) {
            messageError = `Email không đúng định dạng`;
          }
        }
        
        let newErrors = { ...errors };
        newErrors[name] = messageError;
    
       setValues(newValues);
       setErrors(newErrors);
      }
    
      console.log(values);
      const handleOnSubmit = (event) => {
        //ngăn hành động load lại trang khi submit
        event.preventDefault();
    
        let isValid = true;

        if(values.repeatPass !== values.password){
         errors = {
            ...errors,
            repeatPass: "Password phải trùng nhau"
        }
        setErrors(errors);
        }

        //kiểm tra errors còn chứa nội dung nào lỗi không
        for (const property in errors) {
          if (errors[property] !== "") {
            isValid = false;
          } 
        }
    
        //kiểm tra dữ liệu rỗng khi user không đổi giá trị (không chạy onChange)
        for (const property in errors) {
          if (values[property] === "") {
            //người dùng không điền
            isValid = false;
            errors[property] = `${property} không được bỏ trống`
            setErrors({...errors});
            console.log("not valid");
       
          }
        }
    
        if (isValid) {
            let modelRegister = {
                id: 0,
                name: values.name,
                email: values.email,
                password: values.password,
                phone: values.phone,
                birthday: values.birthday,
                gender: values.gender,
                role: "USER",
                skill: [],
                certification: []
              }
        let promise = quanLyNguoiDung.signUp(modelRegister)
        promise.then((result) => { 
           toast.success("Đăng ký thành công!");
           props.history.push("/signin");
         })
         promise.catch((error) => { 
            toast.error(error.response.data.content);
          })
        } else {
            toast.error('Form không hợp lệ!');
        }
      }
      console.log(errors)
    return (
        <section className='register' style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container_form">
                <div className="form_content">
                    <div className="form-info">
                        <h2 className="form-title mb-5 text-center">REGISTER</h2>
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group d-flex">
                                <p className='mr-2'><UserOutlined /></p>
                                <input type="text" onChange={handleOnChange} name='name' className="form-control position-relative" placeholder='Your Name' />
                            </div>
                            <p className='text-danger'>{errors.name}</p>
                            <div className="form-group d-flex">
                                <p className='mr-2'><MailOutlined /></p>
                                <input type="text" onChange={handleOnChange} name='email' typeform='email' className="form-control" placeholder='Your Email' />
                            </div>
                            <p className='text-danger'>{errors.email}</p>
                            <div className="form-group d-flex">
                                <p className='mr-2'><LockOutlined /></p>
                                <input type="password" onChange={handleOnChange} name='password' className="form-control" placeholder='Your Password' />
                            </div>
                            <p className='text-danger'>{errors.password}</p>
                            <div className="form-group d-flex">
                                <p className='mr-2'><LockOutlined /></p>
                                <input type="password" onChange={handleOnChange} name='repeatPass' className="form-control" placeholder='Repeat your Password' />
                            </div>
                            <p className='text-danger'>{errors.repeatPass}</p>
                            <div className="form-group d-flex">
                                <p className='mr-2'><PhoneOutlined /></p>
                                <input type="text" onChange={handleOnChange} name='phone' className="form-control" placeholder='Your Phone' />
                            </div>
                            <p className='text-danger'>{errors.phone}</p>
                            <div className="form-group d-flex">
                                <p className='mr-2'><FieldTimeOutlined /></p>
                                <input type="date" onChange={handleOnChange} name='birthday' className="form-control" />
                            </div>
                            <p className='text-danger'>{errors.birthday}</p>
                            <div className='gender' onChange={handleOnChange}>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" value={true} />
                                    <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" value={false}/>
                                    <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                                </div>
                            </div>
                            <p className='text-danger'>{errors.gender}</p>
                            <div className="form-group form-check mt-5">
                                <input type="checkbox" required className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree all statements in Terms of service</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-form">SUBMIT</button>
                            <div className="mt-2">
                                <p style={{ fontSize: '14px' }}>Already have an account? <a className='register-text' style={{ color: '#1dbf73' }} href="#"> Sign in <ArrowRightOutlined /></a></p>
                            </div>
                        </form>
                    </div>
                    <div className="form_image">
                        <figure>
                            <img src="./img/register.jpg" alt="" className='img-fluid' />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
