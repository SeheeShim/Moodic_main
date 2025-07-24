import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import Login from '../page/Login';
import Register from '../page/Register';
import Brand from '../page/Brand';
import PlaylistPage from '../page/PlaylistPage';
import Signup from '../page/Signup';


const Navigation = ({ onHeroClick, onChartsClick, onGenreClick, onScrollClick, onPlayerClick }) => {
  return (
    <nav className='mainNav'>
      
      <ul className='mainNav_center'>
        <li><button onClick={onHeroClick}>Hero</button></li>
        <li><button onClick={onChartsClick}>Charts</button></li>
        <li><button onClick={onGenreClick}>Genre</button></li>
        <li><button onClick={onScrollClick}>ScrollSection</button></li>
        <li><button onClick={onPlayerClick}>Player</button></li>
      </ul>
      <ul className='mainNav_right'>
        <li><Link to="./Login">로그인</Link></li>
        <li><Link to="/Register">룰룰</Link></li>
        <li><Link to="/Brand">무딕이란?</Link></li>
        <li><Link to="/PlaylistPage">플레이리스트</Link></li>
        <li><Link to="/Signup">회원가입</Link></li>
      </ul>
      

    </nav>
  );
};

export default Navigation;
