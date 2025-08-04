// src/components/Footer.jsx
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_text">
        <div className="left">
          <div className="favicon">
          <img src={process.env.PUBLIC_URL + '/img/favicon.png'} alt="favicon_footer" />
          <span className='moodic'>MOODIC</span>
          </div>
          <p>
            <strong>무딕(주)</strong> <br />
            대표이사 무딕 | 사업자등록번호 303-03-77373 | 통신판매업신고번호 제2006-경기성남-0692호 | 주소 경기도 성남시 분당 구 정자일로 95, 13561
            <br />
            대표전화1588-3303 |  이메일 cc n@moodic.com |  MOODIC : 무딕
          </p>
        </div>
        <div className="link">
          <a href="#">회사소개 | 이용약관 | 개인정보처리방침 | 취소/환불 정책 | 자주 듣는 질문 | 공지사항</a>
        </div>
        <div className="sns">
          <img src={process.env.PUBLIC_URL + '/img/sns.png'} alt="sns" />
        </div>
      </div>

      <div className="belt">
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
    </footer>
  );
};

export default Footer;
