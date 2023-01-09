import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import './VideoDetail.css'
import { VideoData } from '../../config/videoData'

function VideoDetail() {
    const { id } = useParams()
  
  // const id = '1';
  const [activeVideo , setActiveVideo] = useState({
    id:'',
        imageUrl: '',
        description: '',
        name: '',
        email: '',
        bgImage: ''
  });
    useEffect(()=>{
        window.scrollTo(0, 0)
        let getVideo:any =  VideoData.find(value =>  value.id == id )
        setActiveVideo(getVideo)
      },[id])
  return (
    <div className="main-wrap">
        
        
        {/* <video autoPlay muted loop id="myVideo">
             <source src="/assets/videos/mov3.mp4" type="video/mp4" />
        </video> */}
        <img src={activeVideo.bgImage} alt="" id="myVideo"/>

        <div className="hero-sec flex  p-[50px]">

                <div className="row">
                    <div className="col-sm-5">
                    <div className="align-middle inline-block ">
                            {/* <img className='h-[200px] w-[350px]' alt={`s`} title={activeVideo.name} src="/assets/images/mov.png"/> */}
                            <h1 className='text-white pt-[40px] text-[48px] font-bold' >{activeVideo.name}</h1>
                            <p className='text-white pt-[40px]'>{activeVideo.description}</p>
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

    </div>
  )
}

export default VideoDetail
