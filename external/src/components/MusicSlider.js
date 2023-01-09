import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MusicData } from "../config/musicData";
import Pagetitle from "./Pagetitle";

function MusicSlider(props) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    console.log("hovering");
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const { title } = props;

  const storysettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <>
      <div className={`mt-4 d-block d-flex border-0 mb-2`}>
        <h4
          className={`fw-500  mt-0 font-xs d-flex align-items-center text-white mb-2}`}
          style={{ color: "white" }}
        >
          {title}
        </h4>
      </div>

      <Slider {...storysettings}>
        {MusicData.map((value, index) => (
          <div key={index}>
            <div
              className="card group w200 h-[260px] d-block border-0 shadow-xss rounded-lg overflow-hidden cursor-pointer mb-3 mt-0 me-3 bg-[#2a2a2a]">
              <Link to={`/music-list/${value.id}`}>
              <div className="w-[48px] h-[48px] flex absolute right-4 bottom-[90px] bg-[#1ed760] rounded-full justify-center items-center hidden group-hover:flex">
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      class="Svg-sc-ytk21e-0 uPxdw"
                    >
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
          </div>
                <div className="card-body d-block p-2 w-100 bottom-0">
                  <img
                    className="h-[170px] w-full rounded-lg"
                    alt="test"
                    src={value.bgImage}
                  />

                  <div className="clearfix mt-1"></div>
                  <h4 className="fw-600 position-relative z-index-1 ls-1 font-xsss text-white mt-2 mb-0">
                    {value.songName}{" "}
                  </h4>
                  <p className="leading-[13px] pt-2 fw-400 position-relative z-index-1 ls-1 text-[12px] text-[#a7a7a7] mt-0 mb-1">
                    {value.description}{" "}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default MusicSlider;
