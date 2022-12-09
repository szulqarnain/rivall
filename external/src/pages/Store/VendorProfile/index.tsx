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

class VendorProfile extends Component {
    
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12">
                                    
                                    <Pagetitle title="Store Listing"/>
                                    

                                    <div className="col-lg-12">
                                            <div className="banner-wrapper bg-greylight overflow-hidden rounded-3 shop-slider">
                                                <Slider {...shopsettings}>
                                                    <div className="style1 d-flex align-items-center bg-lightblue">
                                                        <div className="row">
                                                            <div className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4" style={sliderstyle}>
                                                                <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                                                                    <h4 className="font-xssss text-danger ls-3 fw-700 ms-0 mt-4 mb-3">TRENDING</h4>
                                                                    <h2 className="fw-300 display1-size display2-md-size lh-2 text-grey-900">New Arrival Buds <br /> <b className="fw-700">Collection</b></h2>
                                                                    <p className="fw-500 text-grey-500 lh-26 font-xssss pe-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.</p>
                                                                    <a href="/singleproduct" className="fw-700 text-white rounded-xl bg-primary-gradiant font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150">Shop Now</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6"><img src="assets/images/product.png" alt="product" className="img-fluid p-md-5 p-4" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="style1 d-flex align-items-center bg-cyan">
                                                        <div className="row">
                                                            <div className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4" style={sliderstyle}>
                                                                <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                                                                    <h4 className="font-xssss text-white ls-3 fw-700 ms-0 mt-4 mb-3">TRENDING</h4>
                                                                    <h2 className="fw-300 display1-size display2-md-size lh-2 text-white">New Arrival Buds <br /> <b className="fw-700">Collection</b></h2>
                                                                    <p className="fw-500 text-grey-100 lh-26 font-xssss pe-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.</p>
                                                                    <a href="/singleproduct" className="fw-700 text-grey-900 rounded-xl bg__white font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150">Shop Now</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6"><img src="assets/images/product.png" alt="product" className="img-fluid p-md-5 p-4" /></div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>

                                    <div className="row ps-2 pe-1">
                                        {groupList.map((value , index) => (
                                        
                                        <div key={index} className="col-md-6 col-sm-6 pe-2 ps-2">
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-0 mt-2">
                                                <div className="card-body position-relative h100 bg-image-cover bg-image-center" style={{backgroundImage: `url("assets/images/${value.bgImage}")`}}></div>
                                                <div className="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                                                <Link to="/store"> <figure className="avatar position-absolute w75 z-index-1 left-15" style={{marginTop: `-40px` }}><img src={`assets/images/${value.imageUrl}`} alt="avater" className="float-right p-1 bg__white rounded-circle w-100 " /></figure>
                                                </Link>
                                                    <div className="clearfix"></div>
                                                    <Link to="/store"> <h4 className="fw-700 font-xsss mt-3 mb-1">{value.name}</h4></Link>
                                                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3 lh-3">{value.email}</p>
                                                    <span className="position-absolute right-15 top-0 d-flex align-items-center">
                                                        <a href="/defaultgroup" className="d-lg-block d-none"><i className="feather-video btn-round-md font-md bg-primary-gradiant text-white"></i></a>
                                                        <a href="/defaultgroup" className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-primary font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        ))}

                                        <Load />
                                        

                                        
                                    </div>
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

export default VendorProfile;