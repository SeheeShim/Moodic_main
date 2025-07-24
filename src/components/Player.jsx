import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import PlayerData from '../data/PlayerData.js';
import './Player.scss';

const Player = () => {
  const [toggledIndexes, setToggledIndexes] = useState([]);

  const handleToggle = (index) => {
    setToggledIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="makes" className="section makes">
      <div className="master-snap-sections">
        <Swiper spaceBetween={50} slidesPerView={1}>
          {PlayerData.map((sec, i) => {
            const isToggled = toggledIndexes.includes(i);

            return (
              <SwiperSlide key={i}>
                <div className={`master-snap-section _${i + 1}`}>
                  {/* 이미지 토글 */}
                  <img
                    src={isToggled ? sec.images[1] : sec.images[0]}
                    alt=""
                    className="image-cover"
                  />

                  <div className="snap-top-gradient">
                    <div className="text-wrap-snap">
                      <div className="label">{sec.label}</div>
                      <div className="text-mask-snap">
                        <div className="text-snap-large first-layer">{sec.texts[0]}</div>
                        <div className="text-snap-large second-layer">{sec.texts[1]}</div>
                      </div>
                    </div>
                  </div>

                  <div className="snap-bottom-gradient">
                    <div className="button-wrap-snap">
                      <div
                        className={`button-snap _${i + 1}`}
                        onClick={() => handleToggle(i)}
                      >
                        <div className={`button-cirlce-wrap _${i + 1}`}>
                          <div
                            className={`button-circle _${i + 1}`}
                            style={{ backgroundColor : sec.buttonColor }}
                          />
                        </div>
                        <div className={`button-visible-text _${i + 1}`}>
                          <div className="label">
                            {isToggled ? sec.buttonLabelAlt || sec.buttonLabel : sec.buttonLabel}
                          </div>
                        </div>
                      </div>
                      <div className="label">{sec.description}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Player;
