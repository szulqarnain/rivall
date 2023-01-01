import React from 'react'
import HeaderMenu from '../../components/common/HeaderMenu/HeaderMenu'
import MusicSlider from '../../components/MusicSlider'
import LeftSide from './components/LeftSide/LeftSide'

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { Link } from 'react-router-dom';

import './Music.css'

const data:any = ['','','','','','','','','','','','','','','','','','','',''];

function MusicCategory() {

    const muiTheme = createMuiTheme({});

    const useStyles = makeStyles((theme) => {
      return {
        root: {
          background: 'transparent',
          // padding:'20px',
          // margin:'5px',
          [theme.breakpoints.down('sm')]: {
            background: 'transparent',
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
    <div className="main-wrap">

        {/* Header */}
        <HeaderMenu/>

        <div className="cotent__sec flex">

                {/* Left side */}
                <LeftSide/>
                
                <div className="music">

                <div className="trans__effect"></div>

                    <div className='p-[30px]'>
                    <div className="cover pt-4">
                            <div className="flex">
                                <div className="thumbnail mob__hide">
                                    <img className="rounded-md w-[400px]" src="https://i.scdn.co/image/ab67616d00001e0212b7442d3b3eea9a482bcdcd" alt="" />
                                </div>
                                <div className="detail pt-2 lg:pl-8">
                                    <h2 className='text-[#cecece]'>PLAYLIST</h2>
                                    <h1 className='text-[#cecece] text-[40px] pt-3 pb-3 font-bold	'>Top Song - Global</h1>
                                    <p className='text-[#aaa] mob__hide leading-[20px] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur reiciendis fugiat! Error quasi blanditiis est architecto ipsam veniam sequi sed animi iste quos, commodi ab inventore autem, quisquam nam.</p>
                                    <p className='text-[#cecece] pt-2'>Rivall . 823,132,1 Likes . 50 Songs</p>
                                </div>
                            </div>
                    </div>

                    <div className="cover_detail">
                        <div className="actions pt-4 pb-4 pl-2 pr-2">
                            
                            <ThemeProvider theme={muiTheme}>
                                 <AudioPlayer useStyles={useStyles} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
                            </ThemeProvider>

                            <div className="actions__detail">

                                <div className=''>
                                    <a href="/defaultgroup" className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-primary font-xssss fw-700 ls-lg text-white pt-[40px]">FOLLOW</a>
                                </div>

                            </div>
                        </div>

                        <div className="music-list flex text-white w-full pt-[30px]">
                            <table className='table__music table text-[#cecece]'>
                                <thead className='text-[#cecece] text-[12px]' style={{borderBottom:'1px solid #2f2f2f'}}>
                                    <tr>
                                        <th>Sr.</th>
                                        <th>TITLE</th>
                                        <th className='mob__hide'>PLAY</th>
                                        <th className='mob__hide'>ALBUM</th>
                                        <th className='mob__hide'>TIME</th>
                                    </tr>
                                </thead>
                                {data.map((item:any,index:any)=>{
                                    return (
                                    <tr style={{borderBottom:'1px solid #2f2f2f'}}>
                                        <td>{index+1}</td>
                                        <td>
                                            <div className="music_detail p-2 flex border-0">
                                                <img className="h-[40px] rounded-md" src="https://i.scdn.co/image/ab67616d00001e0212b7442d3b3eea9a482bcdcd" alt="" />
                                                <div className='pl-2'>
                                                    <h2 className='text-white'>All I want</h2>
                                                    <p>Marry caryy</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='mob__hide'>123,342,12</td>
                                        <td className='mob__hide'>123,342,12</td>
                                        <td className='mob__hide'>4:20</td>
                                    </tr>
                                    )
                                })}


                            </table>
                        </div>


                    </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default MusicCategory
