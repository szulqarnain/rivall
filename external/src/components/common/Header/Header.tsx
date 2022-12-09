import React,{useState} from 'react';
import { Link , NavLink } from 'react-router-dom';

import DarkButton from '../DarkButton/DarkButton'

import Logo from '../../../images/logo.png'

import './Header.css';

function Header() {

    const [isOpen,setIsOpen] = useState(false);
    const [isActive,setIsActive] = useState(false);
    const [isNoti,setIsNoti] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const toggleActive = () => setIsActive(!isActive);
    const toggleisNoti = () => setIsNoti(!isNoti);

    const navClass = `${isOpen ? " nav-active" : ""}`;
    const buttonClass = `${isOpen ? " active" : ""}`;
    const searchClass = `${isActive ? " show" : ""}`;
    const notiClass = `${isNoti ? " show" : ""}`;

  return (
    <div className="nav-header bg_white shadow-xs border-0 h-[60px]">
    <div className="nav-top px-4">
        
        <Link to="/">
            {/* <i className="feather-zap text-success display2-size me-3 ms-0"></i> */}
            <span className="text-tPrimary d-inline-block fredoka-font ls-3 fw-600 font-xxl logo-text mb-0">Rivall</span> 
        </Link>
                    
        <Link to="/defaultmessage" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
        {/* <Link to="/defaultvideo" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></Link> */}
        <span onClick={toggleActive} className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></span>
        <button onClick={toggleOpen} className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
        
        <form action="#" className="float-left header-search ms-3">
        <div className="form-group mb-0 icon-input">
            <i className="feather-search font-sm text-grey-400 top-[10px] text-primary"></i>
            <input type="text" placeholder="Start typing to search.." className="bg-grey border-0 lh-32 pt-1 pb-1 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />
        </div>
        </form>
   
    </div>
    

    {/* <NavLink to="/home" className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}
    {/* <NavLink to="/defaultstorie" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}
    {/* <NavLink to="/defaultvideo" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}
    {/* <NavLink to="/defaultgroup" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}
    {/* <NavLink to="/shop1" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}

        
    <span className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`} id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleisNoti}><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-primary"></i></span>
    <div className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`} aria-labelledby="dropdownMenu3">
        <h4 className="fw-700 font-xss mb-4">Notification</h4>
        <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Hendrix Stamp <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">There are many variations of pass..</h6>
        </div>
        <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Goria Coast <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
        </div>

        <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Surfiya Zakir <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
        </div>
        <div className="card bg-transparent-card w-100 border-0 ps-5">
            <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Victor Exrixon <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
        </div>
    </div>
    {/* <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-current"></i></Link> */}
    {/* <DarkButton /> */}
    <Link to="/defaultsettings" className="p-0 ms-3 menu-icon"><img src="assets/images/user.png" alt="user" className="w40 mt--1" /></Link>

    <nav className={`navigation scroll-bar ${navClass} pt-[50px]`}>
        <div className="container ps-0 pe-0">
            <div className="nav-content">


                <div className="nav-wrap mt-4 bg-white rounded-xxl shadow-xss pt-3 pb-1 mb-2" style={{background:'white'}}>
                            <div className="nav-caption fw-600 font-xssss box__heading text-tPrimary"><span> </span> Features</div>
                            <ul className="mb-3">
                                <li><Link to="/vendor-list" className="nav-content-bttn open-font text-tBasic"><i className="font-md text-primary feather-shopping-cart me-3"></i><span>Store</span>
                                {/* <span className="circle-count bg-warning mt-1">584</span> */}
                                </Link></li>    
       
                                <li><Link to="/music" className="nav-content-bttn open-font text-tBasic"><i className="font-md text-primary feather-music me-3"></i><span>Music</span>
                                {/* <span className="circle-count bg-warning mt-1">584</span> */}
                                </Link></li>
                                <li><Link to="/announcement" className="nav-content-bttn open-font text-tBasic"><i className="font-md text-primary feather-bell me-3"></i>
                                <span>Announcement </span>
                                {/* <span className="circle-count bg-warning mt-1">584</span> */}
                                </Link></li>
                                <li><Link to="/videos" className="nav-content-bttn open-font text-tBasic"><i className="font-md text-primary feather-youtube me-3"></i><span>Videos</span>
                                {/* <span className="circle-count bg-warning mt-1">584</span> */}
                                </Link></li>                     
                            </ul>
                </div>

                <div className="nav-wrap bg-white rounded-xxl shadow-xss pt-3 pb-1 mt-4" style={{background:'white'}}>
                    <div className="nav-caption fw-600 font-xssss box__heading text-tPrimary"> Account</div>
                    <ul className="mb-1">
                        <li className="logo d-none d-xl-block d-lg-block"></li>
                        <li><Link to="/profile" className="nav-content-bttn open-font h-auto pt-2 pb-2 text-tBasic"><i className="font-sm feather-user me-3 text-primary"></i><span>My Profile</span></Link></li>
                        <li><Link to="/defaultanalytics" className="nav-content-bttn open-font h-auto pt-2 pb-2 text-tBasic"><i className="font-sm feather-pie-chart me-3 text-primary"></i><span>Analytics</span></Link></li>
                        <li><Link to="/defaultsettings" className="nav-content-bttn open-font h-auto pt-2 pb-2 text-tBasic"><i className="font-sm feather-shield me-3 text-primary"></i><span>Secuirty & Privacy</span></Link></li>
                        <li><Link to="/defaultsettings" className="nav-content-bttn open-font h-auto pt-2 pb-2 text-tBasic"><i className="font-sm feather-settings me-3 text-primary"></i><span>General Settings</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
    <div className={`app-header-search ${searchClass}`}>
        <form className="search-form">
            <div className="form-group searchbox mb-0 border-0 p-1">
                <input type="text" className="form-control border-0" placeholder="Search..." />
                <i className="input-icon">
                    {/* <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon> */}
                </i>
                <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                    <i className="ti-close font-xs" onClick={toggleActive}></i>
                </span>
            </div>
        </form>
    </div>
    
</div>
  )
}

export default Header
