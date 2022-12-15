import React, { Fragment } from "react";

import Header from '../../../components/common/Header/Header';

import Rightchat from '../../../components/Rightchat';
import Appfooter from '../../../components/Appfooter';
import Popupchat from '../../../components/Popupchat';

import Pagetitle from "../../../components/Pagetitle";
import MusicItem from "../../../components/Music/MusicItem/MusicItem";
import MusicDetail from "../../../components/Music/MusicDetail/MusicDetail";


function MusicPlay() {
  return (
    <Fragment> 
        <Header />
        {/* <Leftnav /> */}
        <Rightchat />

        <div className="main-content right-chat-active">
            
            <div className="middle-sidebar-bottom pt-0">
                <div className="middle-sidebar-left">
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12 col-lg-12 w-full p-0" style={{height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',background:'url(https://s3.envato.com/files/327394381/Neon%20lights%2003.jpg)'}}>
                           <div className="p-2 w-full pr-4" style={{position:'fixed',overflow:'auto',height:'100vh',background:'#00000069'}}>
                            {/* <Storyslider /> */}
                            <div className="mt-[80px]">
                            <Pagetitle title="Music" bg='transparent'/>
                            </div>
                            
                            <MusicDetail/>
                            
                            </div>
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

export default MusicPlay