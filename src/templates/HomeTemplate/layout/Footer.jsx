import { FacebookOutlined, GlobalOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <footer>
    <div className="container">
      <div className="footer__topContent">
        <div className="row">
          <div className="col-4 col-lg">
            <h6 style={{fontWeight: "bold"}}>Categories</h6>
            <ul className='mt-4'>
              <li>
                <Link to="#">Graphics & Design</Link>
              </li>
              <li>
                <Link to="#">Digital Marketing</Link>
              </li>
              <li>
                <Link to="#">Writing & Translation</Link>
              </li>
              <li>
                <Link to="#">Video & Animation</Link>
              </li>
              <li>
                <Link to="#">Music & Audio</Link>
              </li>
              <li>
                <Link to="#">Programming & Tech</Link>
              </li>
              <li>
                <Link to="#">Data</Link>
              </li>
              <li>
                <Link to="#">Business</Link>
              </li>
              <li>
                <Link to="#">Lifestyle</Link>
              </li>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg">
            <h6 style={{fontWeight: "bold"}}>About</h6>
            <ul className='mt-4'>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Press & News</Link>
              </li>
              <li>
                <Link to="#">Partnerships</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              <li>
                <Link to="#">Intellectual Property Claims</Link>
              </li>
              <li>
                <Link to="#">Investor Relations</Link>
              </li>
            
            </ul>
          </div>
          <div className="col-4 col-lg">
            <h6 style={{fontWeight: "bold"}}>Support</h6>
            <ul className='mt-4'>
              <li>
                <Link to="#">Help & Support</Link>
              </li>
              <li>
                <Link to="#">Trust & Safety</Link>
              </li>
              <li>
                <Link to="#">Selling on Fiverr</Link>
              </li>
              <li>
                <Link to="#">Buying on Fiverr</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg">
            <h6 style={{fontWeight: "bold"}}>Community</h6>
            <ul className='mt-4'>
              <li>
                <Link to="#">Events</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Forum</Link>
              </li>
              <li>
                <Link to="#">Community Standards</Link>
              </li>
              <li>
                <Link to="#">Podcast</Link>
              </li>
              <li>
                <Link to="#">Affiliates</Link>
              </li>
              <li>
                <Link to="#">Invite a Friend</Link>
              </li>
              <li>
                <Link to="#">Become a Seller</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg">
            <h6 style={{fontWeight: "bold"}}>More From Fiverr</h6>
            <ul className='mt-4'>
              <li>
                <Link to="#">Fiverr Business</Link>
              </li>
              <li>
                <Link to="#">Fiverr Pro</Link>
              </li>
              <li>
                <Link to="#">Fiverr Studios</Link>
              </li>
              <li>
                <Link to="#">Fiverr Logo Maker</Link>
              </li>
              <li>
                <Link to="#">Fiverr Guides</Link>
              </li>
              <li>
                <Link to="#">Get Inspired</Link>
              </li>
              <li>
                <Link to="#">Fiverr Select</Link>
              </li>
              <li>
                <Link to="#">ClearVoice <span className='d-block'>Content Marketing</span></Link>
              </li>
              <li>
              <Link to="#">Fiverr Workspace <span className='d-block'>Invoice Software</span></Link>
              </li>
              <li>
              <Link to="#">Learn <span className='d-block'>Online Courses</span></Link>
              </li>
              <li>
                <Link to="#">Working Not Working</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottomContent d-flex justify-content-between">
        <div className="footer__brand d-flex align-align-align-items-center justify-content-start">
          <img src="https://www.seekpng.com/png/full/154-1547372_fiverr-logo-transparent-fiverr-logo-transparent-fiverr-logo.png" width="90px" height="28px" alt="" />
          <p className='my-auto pl-3'> &copy; Fiverr International Ltd. 2022 </p>
        </div>
        <div className="footer__info d-flex">
          <div className="footer__contact mr-4">
            <Link to="#"><span><TwitterOutlined/></span></Link>
            <Link to="#"><span><FacebookOutlined/></span></Link>
            <Link to="#"><LinkedinOutlined/></Link>
            <Link to="#"><InstagramOutlined/></Link>
          </div>
          <div style={{width:"250px"}} className="footer__buttonInfo pt-1 d-flex justify-content-between">
            <button className='d-flex align-items-center footer__selection'><GlobalOutlined/><span>English</span></button>
            <button className='footer__selection'>US$ USD</button>
            <button className='footer__person'><UserOutlined/></button>
          </div>
        </div>
      </div>
    </div>
   </footer>
  )
}
