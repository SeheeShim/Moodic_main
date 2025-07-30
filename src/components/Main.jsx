import React, { useState, useRef } from 'react';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { BsShuffle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './main.scss';

import albumData from '../data/MainData';

const Main = () => {
  const swiperRef = useRef(null);
  const [selectedAlbum, setSelectedAlbum] = useState(albumData[0]);

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleReset = () => {
    swiperRef.current?.swiper.slideTo(0);
  };

  return (
    <div className='main'>
      <div className="controlBtn">
        <div className="nextBtn" onClick={handleNext}><TbPlayerTrackNextFilled /></div>
        <div className="prevBtn" onClick={handlePrev}><TbPlayerTrackPrevFilled /></div>
        <div className="resetBtn" onClick={handleReset}><BsShuffle /></div>
      </div>

      <div className="mainTextImg">
        <div className="mainText">
          <img src={process.env.PUBLIC_URL + '/img/home/home_text.png'} alt="main-title" />
        </div>

        <div className="mainImg_slider">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            ref={swiperRef}
          >
            {albumData.map((album, idx) => (
              <SwiperSlide className='albumImg' key={idx}>
                <img
                  src={process.env.PUBLIC_URL + '/' + album.img}
                  alt={album.name}
                  onClick={() => setSelectedAlbum(album)}
                  style={{ cursor: 'pointer' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedAlbum && (
        <div className="insta-wrapper">
          {/* <img
                className="insta-title-img"
                src={process.env.PUBLIC_URL + '/img/instagram/insta.png'}
                alt="instagram-title"
              /> */}
              <img
                className="insta-logo"
                src={process.env.PUBLIC_URL + '/img/instagram/insta_icon.png'}
                alt="instagram-logo"
              />
          <img
            className="corner-logo"
            src={process.env.PUBLIC_URL + '/img/instagram/black_logo.png'}
            alt="corner-logo"
          />

          <div className="insta-top">
            <div className="insta-header">
              
            </div>
          </div>

          <div className="insta-bottom">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="insta-swiper"
            >
              {selectedAlbum.insta.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={process.env.PUBLIC_URL + `/img/instagram/${img}`}
                    alt={`insta-${index}`}
                    className="slide-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="bottom-banner">
        <div className="banner-track">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={process.env.PUBLIC_URL + '/img/belt/belt_black.png'}
              alt="banner"
              className="banner-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
