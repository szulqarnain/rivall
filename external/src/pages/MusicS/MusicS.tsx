import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeaderMenu from '../../components/common/HeaderMenu/HeaderMenu'
import MusicSlider from '../../components/MusicSlider'
import LeftSide from './components/LeftSide/LeftSide'

import './Music.css'

function MusicS() {
  return (
    <div className="main-wrap">

        {/* Header */}
        <HeaderMenu/>

        <div className="cotent__sec flex">

                {/* Left side */}
                <LeftSide/>
                
                <div className="music__categories pl-[20px]">

                    <MusicSlider title={'Love songs'}/>

                    <MusicSlider title={'Love songs'}/>
                    
                    <MusicSlider title={'Love songs'}/>
                    
                    <MusicSlider title={'Love songs'}/>

                </div>
        </div>

    </div>
  )
}

export default MusicS
