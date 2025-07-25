// src/components/HomeNavigation.jsx
import React, { useState, useEffect } from 'react';
import { IoPerson } from "react-icons/io5";
import './Navigation.scss';

const HomeNavigation = ({ onMainClick, onHeroClick, onChartsClick, onGenreClick, onScrollClick, onPlayerClick }) => {
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
      <button className="logo" onClick={onMainClick} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={logoSrc} alt="Logo" />
      </button>

      <ul className="mainNav_center">
        <li><button onClick={onChartsClick}>Charts</button></li>
        <li><button onClick={onGenreClick}>Genre</button></li>
        <li><button onClick={onScrollClick}>ScrollSection</button></li>
        <li><button onClick={onHeroClick}>Hero</button></li>
        <li><button onClick={onPlayerClick}>Player</button></li>
      </ul>

      <ul className="mainNav_right">
        <li><a href="/Register">룰룰</a></li>
        <li><a href="/Brand">무딕이란?</a></li>
        <li><a href="/Playlist"><IoPerson /></a></li>
        <li><a href="/Login">로그인</a></li>
        <li><a href="/Signup">회원가입</a></li>
      </ul>
    </nav>
  );
};

export default HomeNavigation;
