import React, { Component , Fragment } from "react";
import Header from '../../../components/common/Header/Header';

import Leftnav from '../../../components/Leftnav';
import Rightchat from '../../../components/Rightchat';
import Pagetitle from '../../../components/Pagetitle';
import Appfooter from '../../../components/Appfooter';
import Popupchat from '../../../components/Popupchat';
import Load from '../../../components/Load';
import { Link } from "react-router-dom";


import Slider from "react-slick";
import VideoSlider from "../../../components/VideoSlider";

const sliderstyle = {
    paddingRight:20+'!important',
}
const shopsettings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
};

const groupList = [
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'group1.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Hendrix Stamp',
        email: 'support@gmail.com',
        bgImage: 'group2.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Stephen Grider',
        email: 'support@gmail.com',
        bgImage: 'group.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Mohannad Zitoun',
        email: 'support@gmail.com',
        bgImage: 'group3.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        bgImage: 'group1.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'group2.png',
    },    
    
]

class VideoList extends Component {
    
    render() {
        return (
            <Fragment> 
                <Header />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12">
                                    
                                    <Pagetitle title="Videos"/>
                                    

                                    <div className="col-lg-12">
                                            <div className="banner-wrapper bg-greylight overflow-hidden rounded-3 shop-slider">
                                                <Slider {...shopsettings}>
                                                    <div className="style1 d-flex align-items-center bg-lightblue">
                                                        <div className="row">
                                                            <div className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4" style={sliderstyle}>
                                                                <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                                                                    <h4 className="font-xssss text-danger ls-3 fw-700 ms-0 mt-4 mb-3">TRENDING</h4>
                                                                    <h2 className="fw-300 display1-size display2-md-size lh-2 text-grey-900">New Up comming Movie <br /> <b className="fw-700">Collection</b></h2>
                                                                    <a href="/singleproduct" className="fw-700 text-white rounded-xl bg-primary-gradiant font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150">Explore</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6"><img  src="https://icons.iconarchive.com/icons/papirus-team/papirus-places/512/folder-red-video-icon.png" alt="product" className="img-fluid p-md-5 p-4" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="style1 d-flex align-items-center bg-cyan">
                                                        <div className="row">
                                                            <div className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4" style={sliderstyle}>
                                                                <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                                                                    <h4 className="font-xssss text-white ls-3 fw-700 ms-0 mt-4 mb-3">TRENDING</h4>
                                                                    <h2 className="fw-300 display1-size display2-md-size lh-2 text-grey-900">New Up comming Movie <br /> <b className="fw-700">Collection</b></h2>
                                                                    <a href="/singleproduct" className="fw-700 text-grey-900 rounded-xl bg__white font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150">Explore</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6"><img style={{}}src="https://seeklogo.com/images/T/tencent-video-icon-logo-780F21E542-seeklogo.com.png" alt="product" className="img-fluid p-md-5 p-4" /></div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                    </div>

                                    <VideoSlider title={'Latest Movies'}/>

                                    <VideoSlider title={'Funny Movies'}/>

                                    <VideoSlider title={'Action Movies'}/>

                                    <VideoSlider title={'Romantic Movies'}/>

                                </div>               
                            </div>
                        </div>
                        
                    </div>
                </div>

                <Popupchat />
                <Appfooter /> 
            </Fragment>
        );
    }
}

export default VideoList;