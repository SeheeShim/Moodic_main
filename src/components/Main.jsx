import React, { useState, useRef } from 'react';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { BsShuffle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import './main.scss';

const images = [
  'img/home_img/CD.jfif','img/home_img/various.jfif',
  'img/home_img/ment1.png','img/home_img/ment2.png',
  'img/home_img/hand.jfif','img/home_img/drink.jfif',
  'img/home_img/gitar.jfif','img/home_img/headset.jpg',
];

const Main = () => {
  const swiperRef = useRef(null);

  // 다음 슬라이드
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
      swiperRef.current.swiper.slideNext();
    }
  };

  // 이전 슬라이드
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
      swiperRef.current.swiper.slidePrev();
    }
  };

  // 리셋(처음으로 이동 후 자동재생 시작)
  const handleReset = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
      swiperRef.current.swiper.autoplay.start();
    }
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
          <img src={process.env.PUBLIC_URL + 'img/home/home_text.png'} alt="" />
        </div>
        <div className="mainImg_slider">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            ref={swiperRef}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={process.env.PUBLIC_URL + img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* 하단 무한 띠지 */}
      <div className="bottom-banner">
        <div className="banner-track">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={process.env.PUBLIC_URL + 'img/belt/belt_black.png'}
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