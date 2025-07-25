import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Brand from './page/Brand';
import Playlist from './components/Preloader';
import Signup from './page/Signup';

import './App.scss';

function App() {
  
  return (
    
      <div>
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/Playlist" element={<Playlist />} />
          <Route path="/Signup" element={<Signup />} />     
        </Routes>
        <Footer />
      </div>
  
  );
}

export default App;
