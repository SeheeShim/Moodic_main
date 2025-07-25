import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ onMainClick, onHeroClick, onChartsClick, onGenreClick, onScrollClick, onPlayerClick }) => {
  const [logoSrc, setLogoSrc] = useState('/img/Moodic_Logo.png'); // 기본 이미지

  return (
    <nav className='mainNav'>
      <button
        className='logo'
        onClick={onMainClick}
        onMouseEnter={() => setLogoSrc('/img/Moodic_Logo_color.png')}
        onMouseLeave={() => setLogoSrc('/img/Moodic_Logo.png')}
      >
        <img src={logoSrc} alt="Logo" />
      </button>

      <ul className='mainNav_center'>
        <li><button onClick={onChartsClick}>Charts</button></li>
        <li><button onClick={onGenreClick}>Genre</button></li>
        <li><button onClick={onScrollClick}>ScrollSection</button></li>
        <li><button onClick={onHeroClick}>Hero</button></li>
        <li><button onClick={onPlayerClick}>Player</button></li>
      </ul>

      <ul className='mainNav_right'>
        <li><Link to="/Login">로그인</Link></li>
        <li><Link to="/Register">룰룰</Link></li>
        <li><Link to="/Brand">무딕이란?</Link></li>
        <li><Link to="/PlaylistPage">플레이리스트</Link></li>
        <li><Link to="/Signup">회원가입</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

