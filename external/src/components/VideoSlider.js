import React,{Component} from 'react';
import Slider from "react-slick";
import Pagetitle from './Pagetitle';


const storyList = [
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/p170977_p_v7_ae.jpeg',
    },
    {
        imageUrl: 'user.png',
        name: 'Hendrix Stamp',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/frozen1.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Stephen Grider',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/black-panther-2_-marvel-studio-reveals-what-to-expect-from-the-film.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Mohannad Zitoun',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/MV5BMTk0NjM3MDk3NV5BMl5BanBnXkFtZTgwNTEzNTY3MDE@._V1_.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/81gW7li-v1L._RI_.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/p17232125_p_v8_ab.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/81sJJlnmP8L._AC_SY445_.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/season-1.jpeg',
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/E6XN6YjXIAorjq_.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/pearl-2022.format.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/il_570xN.3019128433_2wnf.jpg',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'https://rivall.co.uk/wp-content/uploads/2022/11/image_fc5cb742.jpeg',
    },
    
]

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
        
            <div className={`mt-4 card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3 bg-white`}>
                <h2 className={`fw-700 mb-0 mt-0 font-md  d-flex align-items-center text-grey-900}`}>
                    {title}
                {/* <form action="#" className="pt-0 pb-0 ms-auto">
                    <div className="search-form-2 ms-2">
                        <i className="ti-search font-xss"></i>
                        <input type="text" className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                    </div>
                </form> */}
                {/* <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-filter font-xss text-grey-500"></i></a> */}
                </h2>
            </div>  
                                    
            <Slider {...storysettings}>
                {storyList.map((value , index) => (
                <div key={index}>
                    <div className="card w200 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-0 me-3" style={{backgroundImage: `url("${value.bgImage}")`, backgroundSize:'cover'}}>
                        <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center" >
                            <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w50 z-index-1 ">
                                <svg style={{color:"white"}}xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </figure>
                            
                            <div className="clearfix mt-1"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">{value.name} </h4>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>

            </>
        )
}

export default VideoSlider;