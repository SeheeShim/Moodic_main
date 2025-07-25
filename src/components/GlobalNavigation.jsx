// src/components/GlobalNavigation.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
      <Link className="logo" to="/">
        <img src={logoSrc} alt="Logo" />
      </Link>

      <ul className="mainNav_center">
        {/* 필요 없다면 비워도 됨 */}
      </ul>

      <ul className="mainNav_right">
        <li><Link to="/Login">로그인</Link></li>
        <li><Link to="/Register">룰룰</Link></li>
        <li><Link to="/Brand">무딕이란?</Link></li>
        <li><Link to="/Playlist">플레이리스트</Link></li>
        <li><Link to="/Signup">회원가입</Link></li>
      </ul>
    </nav>
  );
};

export default GlobalNavigation;
