import React from 'react'
import { Link } from 'react-router-dom'
import VideoSlider from '../../components/VideoSlider'


import './Videos.css'

function VideosN() {
  return (
    <div className="main-wrap">
        <div className="h-[60px] nav-header bg-transparent shadow-none border-0">
            <div className="nav-top w-100">
                
        
                    <Link to="/" className='pl-4' style={{width:"180px"}}>
                        {/* <i className="feather-zap text-success display2-size me-3 ms-0"></i> */}
                        <span className="text-white pl-4 d-inline-block fredoka-font ls-3 fw-600 font-xxl logo-text mb-0">Rivall</span> 
                    </Link>
                    <div className="links">
                        <Link to="/dashboard" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Home</Link>
                        <Link to="/videos" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Cinema</Link>
                        <Link to="/music" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Musics</Link>
                        <Link to="/vendor-list" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Store</Link>
                        <Link to="/announcements" className="header-btn d-none d-lg-block fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 ">Anouncements</Link>
                    </div>

                <Link to="/login" className="header-btn d-none d-lg-block  fw-500 text-white font-xsss ms-auto w100 text-center lh-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </Link>

                {/* <Link to="/register" className="header-btn d-none d-lg-block border-slate-800 fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20">Register</Link> */}
                {/* <Link to="/register" className="header-btn d-none d-lg-block border-slate-800 fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20">Register</Link> */}
            </div>
        </div>
        
        <video autoPlay muted loop id="myVideo">
             <source src="/assets/videos/mov3.mp4" type="video/mp4" />
        </video>

        <div className="hero-sec flex justify-center p-[50px]">

                <div className="row">
                    <div className="col-sm-5">
                    <div className="align-middle inline-block">
                            <img className='h-[200px] w-[350px]' alt={`s`} title={`d`} src="/assets/images/mov.png"/>
                            <p className='text-white pt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla tempora repudiandae culpa, mollitia quam magni fugiat corrupti perspiciatis? Voluptatum quae porr?</p>
                            <div className="buttons pt-[30px] flex">
                                <Link to="/register" className=" flexbtn bg-white text-dark header-btn d-none d-lg-block border-slate-800 fw-500 text-white font-xsss p-2 w100 text-center rounded-lg" style={{border:'1px solid white'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    <span className='pl-1 text-[#141414]'>Play</span>
                                </Link>

                                <Link to="/register" className=" ml-2 bg-dark flexbtn bg-white text-dark header-btn d-none d-lg-block border-slate-800 fw-500 text-white font-xsss p-2 w100 text-center rounded-lg">
                                    <span className='pl-1 text-white'>More Info</span>
                                </Link>
           
                            </div>
                        </div>
                    </div>
                </div>


        </div>

        <div className="effect"></div>
        
        <div className="videos">

            <VideoSlider title={'Latest Movies'}/>

            <VideoSlider title={'Funny Movies'}/>

            <VideoSlider title={'Action Movies'}/>

            <VideoSlider title={'Romantic Movies'}/>

        </div>

    </div>
  )
}

export default VideosN
