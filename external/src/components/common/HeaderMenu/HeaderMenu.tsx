import React from 'react'
import { Link } from 'react-router-dom'

function HeaderMenu() {
  return (
    <div className="h-[60px] nav-header bg-[black] shadow-none border-0">
    <div className="nav-top w-100">

            <Link to="/" className='pl-4' style={{width:"180px"}}>
                <i className="pl-4  feather-zap text-[white] display1-size me-3 ms-0"></i>
                <span className="text-white d-inline-block fredoka-font ls-3 fw-600 font-xxl logo-text mb-0">Rivall</span> 
            </Link>
            
        <div className="links">
            <Link to="/login" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Home</Link>
            <Link to="/videos" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Cinema</Link>
            <Link to="/music" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Musics</Link>
            <Link to="/vendor-list" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Store</Link>
            <Link to="/announcements" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Anouncements</Link>
        </div>


        <Link to="/login" className="header-btn d-none d-lg-block  fw-500 text-white font-xsss ms-auto w100 text-center lh-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </Link>

    </div>
</div>
  )
}

export default HeaderMenu