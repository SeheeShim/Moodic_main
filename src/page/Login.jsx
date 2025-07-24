import React from 'react';
import './Login.scss';
import logo from '../img/컬러로고.png';
import loginText from '../img/login.png';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    
    <div className="login-wrap">
      <header className="login-header">
        <img src={logo} alt="무딕 로고" />
        <nav>
          <ul>
            <li><Link to={process.env.PUBLIC_URL + '/Hero'}>무딕이란?</Link></li>
            <li><Link to={process.env.PUBLIC_URL + '/CountryChart'}>TOP 100</Link></li>
            <li><Link to={process.env.PUBLIC_URL + '/Genre'}>장르</Link></li>
            <li><Link to={process.env.PUBLIC_URL + '/Hero'}><img src="/img/검색.png" alt="검색" /></Link></li>
          </ul>
        </nav>
      </header>

      <main className="login-main">
        <div className="login-left">
          <img src="/img/LOGIN PAGE _ GO to Write.svg" alt="" />
        </div>

        <form className="login-form">
          <fieldset>
            <legend>로그인</legend>
            <div className="login-title">
              <img src={loginText} alt="로그인" />
            </div>
            <div className="input-wrap">
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
              <button type="submit" className="submit-btn">로그인</button>
              <a href="/signup" className="signup-link">회원가입</a>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Login;
