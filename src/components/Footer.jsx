// src/components/Footer.jsx
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__up">
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

      <div className="footer__down">
        <div className="left">
          <p>
            무딕(주) 대표이사 무디그 사업자등록번호 303-03-77373 <br />
            통신판매업신고번호 제2006-경기성남-0692호 <br />
            주소 경기도 성남시 분당 구 정자일로 95, 13561 <br /><br />
            대표전화1588-3303 이메일 cc n@moodic.com <br /><br />
            개인정보처리방침네이버 이용약관 커뮤니티 운영정책 고객센터 결제/환불 안내 <br />
            스마트봇톡톡 상담 사업자정보 확인 © MOODIC Corp.
          </p>
        </div>

        <div className="middle">
          <p>
            <strong>Play the Mood.</strong><br />
            Feel the Music.
          </p>
        </div>

        <div className="right">
          <img src={process.env.PUBLIC_URL + 'img/Globe.png'} alt="Globe" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
