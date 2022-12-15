import React, { Component , Fragment } from "react";

import Header from '../../../components/common/Header/Header';
import Leftnav from '../../../components/Leftnav';
import Rightchat from '../../../components/Rightchat';
import Appfooter from '../../../components/Appfooter';
import Popupchat from '../../../components/Popupchat';


const eventList = [
    {
        imageUrl: 'hotel.png',
        title: 'Right here Right Now -  Comedy ',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    }
]

class AnnoDetail extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

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

                                {eventList.map((value , index) => (
                                <div key={index} className="col-lg-12 col-md-12 pe-2 ps-2">
                                    <div className="card p-3 bg__white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden ">
                                        <div className="card-image w-100 h-[300px]">
                                            <img src={`assets/images/${value.imageUrl}`} alt="event" className="w-100 rounded-3" />
                                        </div>
                                        <div className="card-body d-flex ps-0 pe-0 pb-0">
                                            <div className="bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg"><h4 className="fw-700 font-lg ls-3 text-grey-900 mb-0"><span className="ls-3 d-block font-xsss text-grey-500 fw-500">{value.month}</span>{value.date}</h4></div>
                                            <h2 className="fw-700 lh-3 font-xss">{value.title}
                                                <span className="d-flex font-xssss fw-500 mt-2 lh-3 text-grey-500"> <i className="ti-location-pin me-1"></i>{value.location} </span>
                                            </h2>
                                        </div>
                                        <div className="card-body p-0">
                                            <ul className="memberlist mt-4 mb-2 ms-0 d-inline-block">
                                                <li><a href="/defaultevent"><img src="assets/images/user.png" alt="user" className="w30 d-inline-block" /></a></li>
                                                <li><a href="/defaultevent"><img src="assets/images/user.png" alt="user" className="w30 d-inline-block" /></a></li>
                                                <li><a href="/defaultevent"><img src="assets/images/user.png" alt="user" className="w30 d-inline-block" /></a></li>
                                                <li><a href="/defaultevent"><img src="assets/images/user.png" alt="user" className="w30 d-inline-block" /></a></li>
                                                <li className="last-member"><a href="/defaultevent" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatibus nam! Possimus sequi libero nostrum? Ex, reiciendis. Facilis, aspernatur laboriosam repellat est fugiat aliquid atque vitae iure perspiciatis, quia quasi!
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatibus nam! Possimus sequi libero nostrum? Ex, reiciendis. Facilis, aspernatur laboriosam repellat est fugiat aliquid atque vitae iure perspiciatis, quia quasi!
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatibus nam! Possimus sequi libero nostrum? Ex, reiciendis. Facilis, aspernatur laboriosam repellat est fugiat aliquid atque vitae iure perspiciatis, quia quasi!
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                                ))}


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

export default AnnoDetail;