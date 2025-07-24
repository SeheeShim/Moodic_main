// src/page/CountryChart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './CountryChart.scss';

const countries = [
  { name: 'Global', code: '' },
  { name: '한국', code: 'south+korea' },
  { name: '미국', code: 'united+states' },
  { name: '영국', code: 'united+kingdom' },
  { name: '일본', code: 'japan' },
  { name: '중국', code: 'china' },
  { name: '프랑스', code: 'france' },
  { name: '독일', code: 'germany' },
  { name: '캐나다', code: 'canada' },
  { name: '대만', code: 'taiwan' },
  { name: '필리핀', code: 'philippines' }
];

const CountryChart = () => {
  const [selectedCountry, setSelectedCountry] = useState('Global');
  const [tracks, setTracks] = useState([]);
  const API_KEY = '2cbe9837fd1d09eae15919b7844132de';

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const countryObj = countries.find((c) => c.name === selectedCountry);
        const tag = countryObj?.code || 'global';

        const response = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=${API_KEY}&format=json`
        );

        const tracksWithImages = await Promise.all(
          response.data.tracks.track.slice(0, 24).map(async (track) => {
            const trackInfoRes = await axios.get(
              `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&artist=${encodeURIComponent(
                track.artist.name
              )}&track=${encodeURIComponent(track.name)}&api_key=${API_KEY}&format=json`
            );
            return {
              name: track.name,
              artist: track.artist.name,
              image:
                trackInfoRes?.data?.track?.album?.image?.find((img) => img.size === 'large')?.['#text'] || '',
              url: track.url
            };
          })
        );

        setTracks(tracksWithImages);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };
    fetchTracks();
  }, [selectedCountry]);

  return (
    <div className="country-chart-wrapper">
      <div className="selector">
        {countries.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedCountry(c.name)}
            className={selectedCountry === c.name ? 'active' : ''}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="headline">
        <motion.h2 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          {selectedCountry} 차트
        </motion.h2>
        <button className="play-btn">Play</button>
      </div>

      <div className="circle-wrapper">
        {tracks.map((track, index) => {
          const angle = (360 / tracks.length) * index;
          const radius = 260;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.a
              key={index}
              href={track.url}
              target="_blank"
              rel="noreferrer"
              className="circle-image"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`
              }}
            >
              <motion.img
                src={track.image}
                alt={track.name}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default CountryChart;
