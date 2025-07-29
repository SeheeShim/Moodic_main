// src/pages/Genre.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Genre.scss';

// 상단 텍스트 이미지 파일 import
<div className="genre-header">
  <img
    src={process.env.PUBLIC_URL + "/img/genre/gerne_txt.png"}
    alt="Play the Mood, Feel the Music"
    className="genre-header-image"
  />
</div>
const genres = [
  { label: 'Pop', value: 'pop', image: '/img/genre/pop.png' },
  { label: 'K-Pop', value: 'k-pop', image: '/img/genre/kpop.png' },
  { label: 'Dance', value: 'dance', image: '/img/genre/dance.png' },
  { label: 'Hip-Hop', value: 'hip-hop', image: '/img/genre/hiphop.png' },
  { label: 'Ballad', value: 'ballad', image: '/img/genre/ballad.png' },
  { label: 'OST', value: 'ost', image: '/img/genre/ost.png' },
];

const API_KEY = '2cbe9837fd1d09eae15919b7844132de';

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [albums, setAlbums] = useState([]);

  const getImageUrl = (album) => {
    const imageObj = album.image?.find((img) => img.size === 'large');
    const url = imageObj?.['#text'];
    const isDefault = url?.includes('2a96cbd8b46e442fc41c2b86b821562f');
    return isDefault || !url ? '/images/default_album.jpg' : url;
  };

  useEffect(() => {
    if (!selectedGenre) return;

    const fetchAlbums = async () => {
      try {
        const res = await axios.get('https://ws.audioscrobbler.com/2.0/', {
          params: {
            method: 'tag.gettopalbums',
            tag: selectedGenre.value,
            api_key: API_KEY,
            format: 'json',
            limit: 9,
          },
        });
        setAlbums(res.data.albums.album);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, [selectedGenre]);

  return (
    <div className="genre-page">
        {/* 상단 텍스트 이미지 추가 */}
      <div className="genre-header">
        {/* <img
          src={process.env.PUBLIC_URL + "/img/genre/gerne_txt.png"}
          alt="Play the Mood, Feel the Music"
          className="genre-header-image-txt"
        /> */}
        <img
          src={process.env.PUBLIC_URL + "/img/genre/orange_icon.png"}
          alt="Play the Mood, Feel the Music"
          className="genre-header-image-orange"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/genre/green_icon.png"}
          alt=""
          className="genre-header-image-green"
        />
        
      </div>

      <div className='genre-navWrap'>
        <nav className="genre-nav">
          {genres.map((g) => (
            <button
              key={g.value}
              className={selectedGenre.value === g.value ? 'active' : ''}
              onClick={() => setSelectedGenre(g)}
            >
              {g.label}
            </button>
          ))}
        </nav>
      </div>
      

      <div className="genre-container">
        <div className="genre-content" style={{position: 'relative'}}>
          <img
          src={process.env.PUBLIC_URL + "/img/genre/gerne_txt.png"}
          alt="Play the Mood, Feel the Music"
          className="genre-header-image-txt"
        />
          <div className="genre-image">
            <img src={selectedGenre.image} alt={selectedGenre.label} />
          </div>
  
          <div className="track-list">
            {albums.map((album, idx) => (
              <div key={idx} className="track-item">
                <img
                  src={getImageUrl(album)}
                  alt={album.name}
                  className="album-art"
                />
                <div className="divider"></div>
                <div className="track-info">
                  <h3>{album.name}</h3>
                  <p>{album.artist.name}</p>
                  <a href={album.url} target="_blank" rel="noopener noreferrer">
                    View on Last.fm
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
