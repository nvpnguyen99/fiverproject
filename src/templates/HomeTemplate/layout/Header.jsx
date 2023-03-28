import React, { useEffect, useState } from 'react'
import { GlobalOutlined } from '@ant-design/icons'
import { Button, Dropdown, Input } from 'antd';
import { quanLyLoaiCongViecService } from '../../../services/QuanLyLoaiCongViec';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from '../../../App';
import { useDispatch } from 'react-redux';
const { Search } = Input;


export default function Header(props) {

  let [menuLoaiCongViec, setMenuLoaiCongViec] = useState([])
  let [isScrollY, setIsScrollY] = useState(false)
  let [activeType, setActiveType] = useState(0)
  let [transparentClassHeader, setTransparentClassHeader] = useState("")
  let { isHomePage } = useSelector(state => state.homeReducer)
  let dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    let getMenuloaiCongViec = quanLyLoaiCongViecService.layMenuLoaiCongViec();
    getMenuloaiCongViec.then((result) => {
      setMenuLoaiCongViec(result.data.content)
    })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (isHomePage && !isScrollY) {
      setTransparentClassHeader("transparentHeader")
    } else {
      setTransparentClassHeader("")
    }

  }, [isScrollY, isHomePage])

  const listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      setIsScrollY(true)
    } else {
      setIsScrollY(false)
    }
  }

  const renderMenuLoaiCongViec = () => {
    return menuLoaiCongViec.map((loaiCongViec) => {
      let cssActiveClass = ""
      if (loaiCongViec.id == activeType) {
        cssActiveClass = "active"
      }
      let items = renderNhomLoai(loaiCongViec.dsNhomChiTietLoai)
      return <li className={cssActiveClass} key={loaiCongViec.id}>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <button onClick={() => {
            history.push(`/jobtype/${loaiCongViec.id}`)
            // console.log(loaiCongViec.id)
            setActiveType(loaiCongViec.id)
          }}>{loaiCongViec.tenLoaiCongViec}</button>
        </Dropdown>
      </li>
    })
  }

  const renderNhomLoai = (dsNhomChiTietLoai) => {
    let key = 0;
    return dsNhomChiTietLoai.map((nhomChiTietLoai) => {
      key += 1;
      return {
        key: `${key}`,
        label: (
          <div>
            <h6>{nhomChiTietLoai.tenNhom}</h6>
            <ul>
              {renderChiTietLoaiCongViec(nhomChiTietLoai.dsChiTietLoai)}
            </ul>
          </div>
        ),
      }
    })
  }

  const renderChiTietLoaiCongViec = (dsChiTietLoai) => {
    return dsChiTietLoai.map((chiTietLoai) => {
      return <li key={chiTietLoai.id} className='chiTietLoai'>
        <Link to={`/joblistbytype/${chiTietLoai.id}`}>{chiTietLoai.tenChiTiet}</Link>
      </li>
    })
  }

  const onSearch = (value) => {
    history.push(`/joblist/${value}`)
  }



  return (
    <header className={transparentClassHeader}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <NavLink className="navbar-brand" to="/">
            {/* <img src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo.png" alt="" width="80px" /> */}
          </NavLink>
          <div className="header__searchBox">
            <form className="form-inline my-2 my-lg-0">
              <Search
                placeholder='Try "building mobile app"'
                enterButton="Search"
                size="large"
                onSearch={onSearch}

              />
            </form>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Fiver Business <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center" href="#"><GlobalOutlined className='mr-1' /> <span>English</span> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">US$ USD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Become a Seller</a>
              </li>
            </ul>
            <div className="signIn">
              <ul className='d-flex align-items-center mb-0'>
                <li>
                  <Link className="nav-link" to="/login">Sign in</Link>
                </li>
                <li>
                  <Link className="nav-reg" to="/register">Join</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
      <div className="menuLoaiCongViec">
        <div className="container">
          <ul className='d-flex justify-content-between mb-2 menuLoaiCongViec__list'>
            {renderMenuLoaiCongViec()}
          </ul>
        </div>
      </div>

    </header>
  )
}
