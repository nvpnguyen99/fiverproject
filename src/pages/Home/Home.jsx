import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player'
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getInHomePageAction, getOutHomePageAction } from '../../redux/actions/homeAction';
const { Search } = Input;


export default function Home(props) {

  let [formValue, setFormValue] = useState("")
  let [playingVideo, setPlayingVideo] = useState(false)
  let [videoUrl, setVideoUrl] = useState("")

  let dispatch = useDispatch();
 

  useEffect(()=>{
    console.log(getInHomePageAction());
    dispatch(getInHomePageAction());

    return () => { 
      dispatch(getOutHomePageAction());
     }
  },[])

  const handleChange = (event) => {
    setFormValue(event.target.value);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 4,
         slidesToScroll: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 3,
         slidesToScroll: 3
        }
       }
    ]
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const onSearch = (value) => {
    console.log("search")
    props.history.push(`/joblist/${value}`)
  }

  return (
    <div className='homePage'>
      <section className='homePage__carousel'>
        <Carousel effect="fade" autoplay autoplaySpeed={2000} dots={false} className='homePage__carouselSlider'>
          <div>
            <img src="./img/1.png" alt="" />
          </div>
          <div>
            <img src="./img/2.png" alt="" />
          </div>
          <div>
            <img src="./img/3.png" alt="" />
          </div>
          <div>
            <img src="./img/4.png" alt="" />
          </div>
          <div>
            <img src="./img/5.png" alt="" />
          </div>
        </Carousel>
      </section>
      <section className="homePage__carouselContent">
        <h1>Find the perfect freelance services for your business</h1>

        <div className="carouselContent__searchBox mt-4">
          <Search
            placeholder='Try "building mobile app"'
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            value={formValue}
            onChange={handleChange}
          />
        </div>



        <div className="carouselContent__suggest mt-4">
          <span>Popular:</span>
          <button onClick={()=>{
            setFormValue("Website")
          }} className='btn'>Website</button>
          <button onClick={()=>{
            setFormValue("Marketing")
          }} className='btn'>Marketing</button>
          <button onClick={()=>{
            setFormValue("Design")
          }} className='btn'>Design</button>
          <button onClick={()=>{
            setFormValue("Video editing")
          }} className='btn'>Video editing</button>
        </div>
      </section>
      <section className="homePage__brand">
        <span className='mr-4'>Trusted by:</span>
        <img src="./img/fb.png" alt="" />
        <img src="./img/google.png" alt="" />
        <img src="./img/netflix.png" alt="" />
        <img src="./img/paypal.png" alt="" />
        <img src="./img/pg.png" alt="" />
      </section>
      <section className="homePage__serviceSlider">
       <div className="container">
       <h2>Popular professional services</h2>
        <Slider {...settings}>
      <div>
     <img src="./img/crs1.png" className='img-fluid' alt="" />
      </div>
      <div>
      <img src="./img/crs2.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs3.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs4.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs5.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs6.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs7.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs8.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs9.png" className="img-fluid" alt="" />
      </div>
      <div>
      <img src="./img/crs10.png" className="img-fluid" alt="" />
      </div>
    </Slider>
       </div>
      </section>
      <section className="homePage__selling">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="selling__leftContent">
              <h2 className='mb-4'>A whole world of freelance talent at your fingertips</h2>
                <ul>
                  <li>
                    <h6>
                      <span className='selling__iconList'>  <CheckCircleOutlined /></span>
                      The best for every budget
                    </h6>
                    <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                  </li>
                  <li>
                    <h6>
                      <span className='selling__iconList'>  <CheckCircleOutlined /></span>
                      The best for every budget
                    </h6>
                    <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                  </li>
                  <li>
                    <h6>
                      <span className='selling__iconList'>  <CheckCircleOutlined /></span>
                      Quality work done quickly
                    </h6>
                    <p>Find the right freelancer to begin working on your project within minutes.</p>
                  </li>
                                    <li>
                    <h6>
                      <span className='selling__iconList'>  <CheckCircleOutlined /></span>
                      Protected payments, every time
                    </h6>
                    <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                  </li>
                  <li>
                    <h6>
                      <span className='selling__iconList'>  <CheckCircleOutlined /></span>
                      24/7 support
                    </h6>
                    <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="selling__rightContent">
                <button onClick={()=>{
                    setVideoUrl("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7")
                    setPlayingVideo(true)
                }} className='modal-btn'  data-toggle="modal" data-target="#homePageVideoModal">
                  <img src="./img/selling.png" className='img-fluid' alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__testimonial">
       <div className="container">
    
        <Slider {...testimonialSettings}>
      <div>
        <div className="row">
          <div className="col-12 col-lg-6 testimonial__leftContent">
               <button  onClick={()=>{
                    setVideoUrl("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw")
                    setPlayingVideo(true)
                }} className='modal-btn' data-toggle="modal" data-target="#homePageVideoModal" >
                  <img src="./img/testimonial1.png" className='img-fluid' alt="" />
                </button>
          </div>
          <div className="col-12 col-lg-6 testimonial__rightContent pt-5">
            <div className="testimonial__authors d-flex align-items-center mb-2">
              <h4>Kay Kim, Co-Founder </h4>
              <img src="./img/rooted-logo-x2.321d79d.png" className='ml-3 pb-1' width="90px" alt="" />
            </div>
            <div className="testimonial__textContent">
              <i>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</i>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="row">
          <div className="col-12 col-lg-6 testimonial__leftContent">
          <button  onClick={()=>{
                    setVideoUrl("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl")
                    setPlayingVideo(true)
                }} className='modal-btn' data-toggle="modal" data-target="#homePageVideoModal" >
                  <img src="./img/testimonial2.png" className='img-fluid' alt="" />
                </button>
          </div>
          <div className="col-12 col-lg-6 testimonial__rightContent pt-5">
            <div className="testimonial__authors d-flex align-items-center mb-2">
              <h4>Caitlin Tormey, Chief Commercial Officer </h4>
              <img src="./img/naadam-logo-x2.0a3b198.png" className='ml-3 pb-1' width="90px" alt="" />
            </div>
            <div className="testimonial__textContent">
              <i>"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."</i>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="row">
          <div className="col-12 col-lg-6 testimonial__leftContent">
          <button  onClick={()=>{
                    setVideoUrl("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi")
                    setPlayingVideo(true)
                }} className='modal-btn' data-toggle="modal" data-target="#homePageVideoModal" >
                  <img src="./img/testimonial3.png" className='img-fluid' alt="" />
                </button>
          </div>
          <div className="col-12 col-lg-6 testimonial__rightContent pt-5">
            <div className="testimonial__authors d-flex align-items-center mb-2">
              <h4>Brighid Gannon (DNP, PMHNP-BC), Co-Founder</h4>
              <img src="./img/lavender-logo-x2.89c5e2e.png" className='ml-3 pb-1' width="90px" alt="" />
            </div>
            <div className="testimonial__textContent">
              <i>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</i>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="row">
          <div className="col-12 col-lg-6 testimonial__leftContent">
          <button  onClick={()=>{
                    setVideoUrl("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun")
                    setPlayingVideo(true)
                }} className='modal-btn' data-toggle="modal" data-target="#homePageVideoModal" >
                  <img src="./img/testimonial4.png" className='img-fluid' alt="" />
                </button>
          </div>
          <div className="col-12 col-lg-6 testimonial__rightContent pt-5">
            <div className="testimonial__authors d-flex align-items-center mb-2">
              <h4>Tim and Dan Joo, Co-Founders</h4>
              <img src="./img/haerfest-logo-x2.03fa5c5.png" className='ml-3 pb-1' width="90px" alt="" />
            </div>
            <div className="testimonial__textContent">
              <i>"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."</i>
            </div>
          </div>
        </div>
      </div>
    </Slider>
       </div>
      </section>
      <section className='homePage__marketplace'>
        <div className="container">
        <h2>Explore the marketplace</h2>
        <div className="row justify-content-center">
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/business.bbdf319.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/data.718910f.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/graphics-design.d32a2f8.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/lifestyle.745b575.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/music-audio.320af20.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/online-marketing.74e221b.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/programming.9362366.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/video-animation.f0d9d71.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
          <div className="col-4 col-lg-2 text-center marketplace__jobType">
            <img src="./img/writing-translation.32ebe2e.svg" width="45px" height="66px" alt="" />
            <h6>Graphics & Design</h6>
          </div>
        </div>
        </div>
 

      </section>

      <div className="modal fade" onClick={() => {
            setPlayingVideo(false);
        }} id="homePageVideoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div onClick={(e) => {
                e.stopPropagation();
              }} className="modal-body p-0">
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="auto"
                  playing={playingVideo}
                  controls={true}
                />
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}
