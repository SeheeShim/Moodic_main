import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import './Navigation.scss';

const LOGO_DEFAULT = '/img/Moodic_Logo.png';       // 블랙
const LOGO_COLOR = '/img/Moodic_Logo_color.png';   // 컬러

const GlobalNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LOGO_DEFAULT);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      setLogoSrc(isHovered ? LOGO_DEFAULT : LOGO_COLOR);
    } else {
      setLogoSrc(isHovered ? LOGO_COLOR : LOGO_DEFAULT);
    }
  }, [scrolled, isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
      <Link
        className="logo"
        to="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={logoSrc} alt="Logo" />
      </Link>

      <ul className="mainNav_center">
        {/* 메뉴 항목 */}
      </ul>

      <ul className="mainNav_right">
        <li><Link to="/Register">룰룰</Link></li>
        <li><Link to="/Brand">무딕이란?</Link></li>
        <li><Link to="/Playlist"><IoPerson /></Link></li>
        <li><Link to="/Signup">회원가입</Link></li>
        <li><Link to="/Login">로그인</Link></li>
      </ul>
    </nav>
  );
};

export default GlobalNavigation;
