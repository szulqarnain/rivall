import React, { Component , Fragment } from "react";

import Header from '../../components/common/Header/Header';
import Leftnav from '../../components/Leftnav';
import Rightchat from '../../components/Rightchat';
import Appfooter from '../../components/Appfooter';
import Popupchat from '../../components/Popupchat';

import Friends from '../../components/Friends';
import Contacts from '../../components/Contacts';
import Group from '../../components/Group';
import Events from '../../components/Events';
import Createpost from '../../components/Createpost';
import Memberslider from '../../components/Memberslider';
import Friendsilder from '../../components/Friendsilder';
import Storyslider from '../../components/Storyslider';
import Postview from '../../components/Postview';
import Load from '../../components/Load';
import Profilephoto from '../../components/Profilephoto';
import Pagetitle from "../../components/Pagetitle";

const eventList = [
    {
        imageUrl: 'hotel.png',
        title: 'Right here Right Now -  Comedy ',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Open Mic-Stand up Comedy and Poetry',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Mohd Suhels Guide to the Galaxy',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Charlotte De Witte India Tour',
        location: 'Goa, Mumbai',
        date: '31',
        month: 'APR',
    },
    {
        imageUrl: 'hotel.png',
        title: 'A Stand-up Comedy Show by Rahul',
        location: 'Goa, Mumbai',
        date: '04',
        month: 'MAR',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Sunburn Holi Weekend 2021  ',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
]

class Announcements extends Component {
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
                <div className="middle-sidebar-left">
                    <div className="row">
                        <div className="col-sm-12">
                             <div className="mt-[0px]">
                                <Pagetitle title="Anouncements" bg='white'/>
                            </div>
                        </div>
                        <div className="col-xl-8 col-xxl-9 col-lg-8">

                            {/* <Storyslider /> */}
                            <Postview id="32" postvideo="" postimage="post.png" avater="user.png" user="Surfiya Zakir" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <Postview id="31" postvideo="" postimage="post.png" avater="user.png" user="David Goria" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <Postview id="33" postvideo="" postimage="post.png" avater="user.png" user="Anthony Daugloi" time="2 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            {/* <Memberslider /> */}
                            <Postview id="35" postvideo="" postimage="post.png" avater="user.png" user="Victor Exrixon" time="3 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <Friendsilder />
                            <Postview id="36" postvideo="" postimage="post.png" avater="user.png" user="Victor Exrixon" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <Load />
                        </div>
                        <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                            {/* <Friends />
                            <Contacts />
                            <Group /> */}
                            <Profilephoto />
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

export default Announcements;