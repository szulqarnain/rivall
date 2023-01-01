import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Pagetitle from './Pagetitle';


const storyList = [
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67706f000000028dcbced526ef8247c358fd0a',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Hendrix Stamp',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67616d00001e0212b7442d3b3eea9a482bcdcd',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Stephen Grider',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67616d00001e02a85ed299de5c1183c3e94a01',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Mohannad Zitoun',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67616d00001e0289a4c0d212dc71f9ae386217',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67706f00000002b5d03b4eccf9aa6b902d0666',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67706f00000002636626b48ba21c6b0d92aa1d',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67706f0000000203886962382b0ccf093feda6',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Hendrix Stamp',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67616d00001e0212b7442d3b3eea9a482bcdcd',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
    {
        imageUrl: 'user.png',
        name: 'Stephen Grider',
        email: 'support@gmail.com',
        bgImage: 'https://i.scdn.co/image/ab67616d00001e02a85ed299de5c1183c3e94a01',
        description: 'This is how we do it, This is our style. Cover: Sidhu...'
    },
]

function MusicSlider(props){
    
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
                {storyList.map((value , index) => (
                <div key={index}>
                    <div className="card w200 h-[260px] d-block border-0 shadow-xss rounded-lg overflow-hidden cursor-pointer mb-3 mt-0 me-3 bg-[#2a2a2a]">
                        <Link to='/music-list'>
                            <div className="card-body d-block p-2 w-100 bottom-0" >
                                
                                <img className='h-[170px] w-full rounded-lg' alt="test" src={value.bgImage} />

                                <div className="clearfix mt-1"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xsss text-white mt-2 mb-0">{value.name} </h4>
                                <p className="leading-[13px] pt-2 fw-400 position-relative z-index-1 ls-1 text-[12px] text-[#a7a7a7] mt-0 mb-1">{value.description} </p>
                            </div>
                        </Link>
                    </div>
                </div>
                ))}
            </Slider>

            </>
        )
}

export default MusicSlider;