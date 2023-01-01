import React from 'react'
import { Link } from 'react-router-dom'

function LeftSide() {
  return (
    <div className='music__left pl-8 xs:hidden'>
    <ul>
        <li>
            <Link to="/music" className='flex text-white'>
                <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 text-white uPxdw home-active-icon" viewBox="0 0 24 24" data-encore-id="icon" fill='white'><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>
                <span className='text-white text-[15px] pl-2 pt-[2px]'>All Musics</span>
            </Link>
        </li>
        <li className='pt-4'>
            <a href="#" className='flex text-white'>
                <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw search-icon" viewBox="0 0 24 24" fill='white' data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
                <span className='text-white text-[15px] font-thin pl-2 pt-[2px]'>Search</span>
            </a>
        </li>
        <li className='pt-4'>
            <a href="#" className='flex text-white'>
            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw collection-icon" viewBox="0 0 24 24" data-encore-id="icon" fill="white"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                <span className='text-white text-[15px] font-thin pl-2 pt-[2px]'>Library</span>
            </a>
        </li>
        <li className='pt-6'>
        </li>
        <li className='pt-4'>
            <a href="#" className='flex text-white'>
                <div className='Bwc9jlVb7HWs8JJupnBB rounded-sm bg-[#b2b2b2]'>
                    <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" fill="white" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg>
                </div>
                <span className='text-white text-[15px] font-thin pl-2 pt-[2px]'>Create Playlist</span>
            </a>
        </li>


        <li className='pt-4'>
            <a href="#" className='flex text-white'>
                <div className='Bwc9jlVb7HWs8JJupnBT rounded-sm bg-[#b2b2b2]'>
                    <svg role="img" fill="white" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg>
                </div>
                <span className='text-white text-[15px] font-thin pl-2 pt-[2px]'>Create Playlist</span>
            </a>
        </li>
    </ul>
    <hr className='mt-4 w-[90%]' style={{background:'#f2f2f2'}}/>
</div>
  )
}

export default LeftSide