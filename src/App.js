import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Brand from './page/Brand';
import PlaylistPage from './page/PlaylistPage';
import Signup from './page/Signup';
import './App.scss';

function App() {
  return (
    <div>
      <Preloader />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
