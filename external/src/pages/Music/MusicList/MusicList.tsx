import React, { Fragment } from "react";

import Header from '../../../components/common/Header/Header';

import Rightchat from '../../../components/Rightchat';
import Appfooter from '../../../components/Appfooter';
import Popupchat from '../../../components/Popupchat';

import Pagetitle from "../../../components/Pagetitle";
import MusicItem from "../../../components/Music/MusicItem/MusicItem";


function MusicList() {
  return (
    <Fragment> 
        <Header />
        {/* <Leftnav /> */}
        <Rightchat />

        <div className="main-content right-chat-active">
            
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12 col-lg-12">
                            {/* <Storyslider /> */}

                            <Pagetitle title="Music List"/>

                            <MusicItem />
                            <MusicItem />
                            <MusicItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Popupchat />
        <Appfooter /> 
    </Fragment>
  )
}

export default MusicList