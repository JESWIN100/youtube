// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://youtube-backend-fjum.onrender.com', {
        params: {
          query,
        },
      });
      setVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-bar-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search YouTube"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="videos-container">
        {videos.map((video) => (
          <div className="video-item" key={video.id.videoId}>
            <h3 className="video-title">{video.snippet.title}</h3>
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default SearchBar;
