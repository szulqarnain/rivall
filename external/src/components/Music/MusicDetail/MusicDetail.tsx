import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { Link } from 'react-router-dom';
import Pagetitle from '../../Pagetitle';

function MusicDetail() {

  const muiTheme = createMuiTheme({});

  const useStyles = makeStyles((theme) => {
    return {
      root: {
        background: '#00000069',
        // padding:'20px',
        // margin:'5px',
        [theme.breakpoints.down('sm')]: {
          background: '#00000069',
        },
      },
      loopIcon: {
        color: '#3f51b5',
        '&.selected': {
          color: '#0921a9',
        },
        '&:hover': {
          color: '#7986cb',
        },
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      playIcon: {
        color: 'white',
        '&:hover': {
          color: '#ff4081',
        },
      },
      replayIcon: {
        color: '#e6e600',
      },
      pauseIcon: {
        color: '#0099ff',
      },
      volumeIcon: {
        color: 'white',
      },
      volumeSlider: {
        color: 'black',
      },
      progressTime: {
        color: 'white',
      },
      mainSlider: {
        color: '#3f51b5',
        '& .MuiSlider-rail': {
          color: 'white',
        },
        '& .MuiSlider-track': {
          color: 'white',
        },
        '& .MuiSlider-thumb': {
          color: 'white',
        },
      },
    };
  });

  return (
    <div>
     <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3 bg-[#00000069] h-[100vh]">
        <div className="row pb-4 mb-4" style={{borderBottom:'1px solid gray'}}>
            
            {/* <div className="col-sm-3">
                <img src={`https://graphicriver.img.customer.envatousercontent.com/files/304517763/memories-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=dd799db4f20bd20f5b59a54702905de1`}/>
            </div> */}

            <div className="col-sm-12">
                
                <h2 className="fw-700 mb-0 mt-0 font-md text-white d-flex align-items-center pt-2">
                    <Link to="/music-play">
                        No. 1 Hip Hop podcast meets wipcast
                    </Link>
                </h2>

                <p className="fw-400 mb-0 mt-0 font-xxs text-white d-flex align-items-center">
                    Albem: Test <span className='ml-4'>Artist: Podcast name</span>
                </p>

                <br/>
                    <br/>
                        <ThemeProvider theme={muiTheme}>
                        <AudioPlayer useStyles={useStyles} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
                        </ThemeProvider>
                    <br/>
                <br/>

                <div className=" flex">
                    <p className="fw-400 mb-0 mt-0 font-xs text-white d-flex align-items-center">
                        <Link to='./' className='m-2'>
                            <i className="font-sm ti-heart text-white pe-0"></i>
                        </Link>
                        <Link to='./' className='m-2'>
                        <i className="font-sm ti-comment text-white pe-0"></i>
                        </Link>
                        <Link to='./' className='m-2'>
                        <i className="font-sm ti-user text-white pe-0"></i>
                        </Link>
                    </p>
                    <div className=''>
                        <a href="/defaultgroup" className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-primary font-xssss fw-700 ls-lg text-white pt-[40px]">FOLLOW</a>
                    </div>
                </div>

            </div>
            <div className="col-sm-3">
                
            </div>
        </div>

                <h2 className={`fw-700 mb-0 mt-1 font-md d-flex align-items-center text-white`}>
                    Recent Played
                </h2>

                  <div className="mt-[10px]">
                    {/* <Pagetitle title="Music Play" bg='transparent'/> */}
                    <div className={`card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3 bg-[#00000069] }`}>
                    <div className="flex">
                        <div className="col-lg-1 col-sm-1 col-xs-1 w-[70px] mr-[30px]">
                            <img className='w-[100%]' src={`https://graphicriver.img.customer.envatousercontent.com/files/304517763/memories-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=dd799db4f20bd20f5b59a54702905de1`}/>
                        </div>
                        <div className="col-sm-11 col-sm-11 col-xs-11">
                            <h2 className={`fw-700 mb-0 mt-1 font-md d-flex align-items-center text-white`}>
                                 Podcast meets wipcast
                            </h2>
                            <p className="fw-400 mb-0 mt-0 font-xxs text-grey-700 d-flex align-items-center">
                                Albem: Test <span className='ml-4'>Artist: Podcast name</span>
                            </p>
                        </div>
                    </div>

                    </div>  
                </div>

                <div className="mt-[0px]">
                    {/* <Pagetitle title="Music Play" bg='transparent'/> */}
                    <div className={`card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3 bg-[#00000069] }`}>
                    <div className="flex">
                        <div className="col-lg-1 col-sm-1 col-xs-1 w-[70px] mr-[30px]">
                            <img className='w-[100%]' src={`https://graphicriver.img.customer.envatousercontent.com/files/304517763/memories-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=dd799db4f20bd20f5b59a54702905de1`}/>
                        </div>
                        <div className="col-sm-11 col-sm-11 col-xs-11">
                            <h2 className={`fw-700 mb-0 mt-1 font-md d-flex align-items-center text-white`}>
                                 Podcast meets wipcast
                            </h2>
                            <p className="fw-400 mb-0 mt-0 font-xxs text-grey-700 d-flex align-items-center">
                                Albem: Test <span className='ml-4'>Artist: Podcast name</span>
                            </p>
                        </div>
                    </div>

                    </div>  
                </div>
     </div>                   
    </div>
  )
}

export default MusicDetail