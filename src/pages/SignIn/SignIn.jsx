import React from 'react'
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, FieldTimeOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/actions/userAction';

export default function SignIn() {

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .max(30, 'Tối đa 30 ký tự')
                .required('Tài khoản không được để trống'),
            password: Yup.string()
                .required('Mật khẩu không được để trống')
            // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/, "Mật khẩu 6-8 ký tự, phải có ký tự thường, in hoa, đặc biệt")

        }),
        onSubmit: values => {
            console.log(values);
            //TODO dispatch action call api dang nhap
            let action = signInAction(values);
            dispatch(action);
        },
    });


    return (
        <section className='register' style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container_form">
                <div className="form_content">
                    <div className="form-info">
                        <h2 className="form-title mb-5 text-center">SIGN IN</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group d-flex">
                                <p className='mr-2'><MailOutlined /></p>
                                <input onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} type="text" name='email' className="form-control" placeholder='Your Email' />


                            </div>
                            {formik.errors.email ? (
                                <div className='alert alert-danger'>{formik.errors.email}</div>
                            ) : null}
                            <div className="form-group d-flex">
                                <p className='mr-2'><LockOutlined /></p>
                                <input onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} type="password" name='password' className="form-control" placeholder='Your Password' />
                            </div>
                            {formik.errors.password ? (
                                <div className='alert alert-danger'>{formik.errors.password}</div>
                            ) : null}
                            <div className='pl-4'>
                                <button type="submit" className="btn btn-primary btn-form">SUBMIT</button>
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
