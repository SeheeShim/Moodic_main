//moodic/src/page/Homejsx
import React, { useRef } from 'react';
/* import React from 'react'; */
import Hero from '../components/Hero';
/* import Preloader from '../components/Preloader'; */
import ScrollSection from '../components/ScrollSection';
import Player from '../components/Player';
import Genre from '../page/Genre';
import CountryChart from '../page/CountryChart';
/* import Header from './components/Header'; */
import Navigation from '../components/Navigation';
import './Home.scss';
import Main from '../components/Main';


const Home = () => {
    // 각 섹션 참조 생성
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const chartsRef = useRef(null);
  const genreRef = useRef(null);
  const scrollRef = useRef(null);
  const playerRef = useRef(null);

  // 내비게이션 클릭 시 스크롤 이동 함수
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='home'>
        {/* 내비게이션에 scroll 함수 전달 */}
        <Navigation
          onMainClick={() => scrollToSection(mainRef)}
          onChartsClick={() => scrollToSection(chartsRef)}
          onGenreClick={() => scrollToSection(genreRef)}
          onScrollClick={() => scrollToSection(scrollRef)}
          onHeroClick={() => scrollToSection(heroRef)}
          onPlayerClick={() => scrollToSection(playerRef)}
        />
        <div ref={mainRef} className="main-section">
          <Main />
        </div>  
        <div ref={chartsRef} className="chart-section">
          <CountryChart />
        </div>
        <div ref={genreRef} className="genre-section">
          <Genre />
        </div>
        <div ref={scrollRef} className="scroll-section">
          <ScrollSection />
        </div>
        <div ref={heroRef} className="hero-section">
          <Hero />
        </div>
        <div ref={playerRef} className="player-section">
          <Player />
        </div>

      </div>
      
      {/* 다른 섹션들 */}
    </>
       

);
    
};

export default Home;