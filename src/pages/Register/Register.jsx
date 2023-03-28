import React from 'react'
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, FieldTimeOutlined, ArrowRightOutlined} from '@ant-design/icons';
export default function Register() {
    return (
        <section className='register' style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container_form">
                <div className="form_content">
                    <div className="form-info">
                        <h2 className="form-title mb-5 text-center">REGISTER</h2>
                        <form>
                            <div className="form-group d-flex">
                                <p className='mr-2'><UserOutlined /></p>
                                <input type="text" name='username' className="form-control position-relative" placeholder='Your Name' />
                            </div>
                            <div className="form-group d-flex">
                                <p className='mr-2'><MailOutlined /></p>
                                <input type="text" name='password' className="form-control" placeholder='Your Email' />
                            </div>
                            <div className="form-group d-flex">
                                <p className='mr-2'><LockOutlined /></p>
                                <input type="password" name='username' className="form-control" placeholder='Your Password' />
                            </div>
                            <div className="form-group d-flex">
                                <p className='mr-2'><LockOutlined /></p>
                                <input type="password" name='username' className="form-control" placeholder='Repeat your Password' />
                            </div>
                            <div className="form-group d-flex">
                                <p className='mr-2'><PhoneOutlined /></p>
                                <input type="text" name='password' className="form-control" placeholder='Your Phone' />
                            </div>
                            <div className="form-group d-flex">
                                <p className='mr-2'><FieldTimeOutlined /></p>
                                <input type="date" name='password' className="form-control" />
                            </div>
                            <div className='gender'>
                                <div className="custom-control custom-radio custom-control-inline ml-3">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                                </div>
                            </div>
                            <div className="form-group form-check mt-5">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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
