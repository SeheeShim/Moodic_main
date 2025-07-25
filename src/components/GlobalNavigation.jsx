import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import './Navigation.scss';

const GlobalNavigation = () => {
  const [logoSrc, setLogoSrc] = useState('/img/Moodic_Logo.png');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
        setLogoSrc('/img/Moodic_Logo_color.png');
      } else {
        setScrolled(false);
        setLogoSrc('/img/Moodic_Logo.png');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setLogoSrc('/img/Moodic_Logo_color.png');
  };

  const handleMouseLeave = () => {
    if (!scrolled) {
      setLogoSrc('/img/Moodic_Logo.png');
    }
  };

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
