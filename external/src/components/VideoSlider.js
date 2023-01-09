import React,{Component} from 'react';
import Slider from "react-slick";
import Pagetitle from './Pagetitle';
import { VideoData } from '../config/videoData';
import { Link } from 'react-router-dom';


function VideoSlider(props){
    
    const {title} = props;

    const storysettings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    };
    

        return (
            <>
        
            <div className={`mt-4 d-block d-flex border-0 mb-2`}>
                <h4 className={`fw-500  mt-0 font-xs d-flex align-items-center text-white mb-2}`} style={{color:'white'}}>
                    {title}
                </h4>
            </div>  
                                    
            <Slider {...storysettings}>
                {VideoData.map((value , index) => (
                <div key={index}>
                    <Link to={`/video-detail/${value.id}`}>
                    <div className='w200'>
                        <div className="card h-[125px] d-block border-0 shadow-xss bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-0 me-2" style={{backgroundImage: `url("${value.bgImage}")`, backgroundSize:'cover'}}>
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center" >
                                <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w50 z-index-1 ">
                                    {/* <svg style={{color:"white"}}xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> */}
                                </figure>
                                
                                <div className="clearfix mt-1"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">{value.name} </h4>
                            </div>
                        </div>
                    </div>

                    </Link>
                </div>
                ))}
            </Slider>

            </>
        )
}

export default VideoSlider;