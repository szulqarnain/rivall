import React from 'react'
import Thumbnail from '../../../images/logo.png'

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { Link } from 'react-router-dom';

function MusicItem() {
    
  const muiTheme = createMuiTheme({});
  
  return (
    <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
        <div className="row">
            <div className="col-sm-3">
                <img src={`https://graphicriver.img.customer.envatousercontent.com/files/304517763/memories-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=dd799db4f20bd20f5b59a54702905de1`}/>
            </div>
            <div className="col-sm-9">
                <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900 d-flex align-items-center">
                    <Link to="/music-play">
                        No. 1 Hip Hop podcast meets wipcast
                    </Link>
                </h2>
                <p className="fw-400 mb-0 mt-0 font-xxs text-grey-700 d-flex align-items-center">
                    Albem: Test <span className='ml-4'>Artist: Podcast name</span>
                </p>
                <br/>
                <br/>
                <ThemeProvider theme={muiTheme}>
                <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
                </ThemeProvider>

                <br/>
                <br/>

                <p className="fw-400 mb-0 mt-0 font-xs text-grey-700 d-flex align-items-center">
                    <Link to='./' className='m-2'>
                        <i className="font-sm ti-heart text-grey-500 pe-0"></i>
                    </Link>
                    <Link to='./' className='m-2'>
                    <i className="font-sm ti-comment text-grey-500 pe-0"></i>
                    </Link>
                    <Link to='./' className='m-2'>
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    </Link>
                </p>
            </div>
            <div className="col-sm-3">
                
            </div>
        </div>
    </div>     
  )
}

export default MusicItem