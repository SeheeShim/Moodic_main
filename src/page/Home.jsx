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


const Home = () => {
    // 각 섹션 참조 생성
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
      {/* 내비게이션에 scroll 함수 전달 */}
      <Navigation
        onHeroClick={() => scrollToSection(heroRef)}
        onChartsClick={() => scrollToSection(chartsRef)}
        onGenreClick={() => scrollToSection(genreRef)}
        onScrollClick={() => scrollToSection(scrollRef)}
        onPlayerClick={() => scrollToSection(playerRef)}
      />

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={chartsRef}>
        <CountryChart />
      </div>
      <div ref={genreRef}>
        <Genre />
      </div>
      <div ref={scrollRef}>
        <ScrollSection />
      </div>
      <div ref={playerRef}>
        <Player />
      </div>
      {/* 다른 섹션들 */}
    </>
  );
    /* return (
        <div>
            <Header />
            <Hero/>
            <ScrollSection />
            <Preloader/>
            <Player />
            <Genre />
            <CountryChart />
        </div>
    ); */
};

export default Home;