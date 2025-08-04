// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Brand from './page/Brand';
import Playlist from './components/Playlist';
import Signup from './page/Signup';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HomeNavigation from './components/HomeNavigation';
import GlobalNavigation from './components/GlobalNavigation';


function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Preloader />
      
      {/* 조건부 내비게이션 */}
      {isHome ? <></> : <GlobalNavigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Playlist" element={<Playlist />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
