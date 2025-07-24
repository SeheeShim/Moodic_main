// src/page/Brand.jsx
import React, { useEffect, useRef } from 'react';
import './Brand.scss';
import logo from '../img/컬러로고.png';
import searchIcon from '../img/검색.png';
import myIconImg from '../img/마이.png';

const Brand = () => {
  const menuRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        iconRef.current &&
        !menuRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        menuRef.current.style.display = 'none';
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (e) => {
    e.preventDefault();
    const menu = menuRef.current;
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  };

  return (
    <div id="wrap" className="brand-page">
      {/* Skip Navigation */}
      <ul id="skip">
        <li><a href="#header">헤더 바로가기</a></li>
        <li><a href="#nav">메뉴 바로가기</a></li>
        <li><a href="#content">내용 바로가기</a></li>
      </ul>

      {/* Header */}
      <header id="header">
        <h1 className="logo">
          <img src={logo} alt="로고" />
        </h1>
        <div className="top_right">
          <ul>
            <li><a href="#">무딕이란?</a></li>
            <li><a href="#">TOP 100</a></li>
            <li><a href="#">장르</a></li>
            <li><a href="#"><img src={searchIcon} alt="검색" /></a></li>
            <li>
              <a href="#" id="myIcon" onClick={toggleMenu} ref={iconRef}>
                <img src={myIconImg} alt="마이" />
              </a>
              <div className="menu" id="myMenu" ref={menuRef}>
                <button><a href="/login">로그인</a></button>
                <button><a href="/register">회원가입</a></button>
              </div>
            </li>
          </ul>
        </div>
      </header>

      {/* Main */}
      <main id="content">
        <section className="one">
          <div className="banner_1"><img src="../img/11.png" alt="배너1" /></div>
          <img src="/img/123 (5).png" alt="" className="y" />
          <img src="/img/123 (3).png" alt="" className="g" />
        </section>

        <section className="two">
          <div className="banner_2"><img src="../img/22.png" alt="배너2" /></div>
          <img src="/img/123 (1).png" alt="" className="p" />
          <img src="/img/123.png" alt="" className="b" />
        </section>

        <section className="three">
          <div className="banner_3"><img src="../img/33.png" alt="배너3" /></div>
          <img src="/img/123 (4).png" alt="" className="o" />
          <img src="/img/123 (2).png" alt="" className="pp" />
        </section>

        <section className="four">
          <div className="banner_4"><img src="../img/44.png" alt="배너4" /></div>
        </section>
      </main>
    </div>
  );
};

export default Brand;
