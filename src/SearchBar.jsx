// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://youtube-backend-fjum.onrender.com/search', {
        params: { query },
      });
      setVideos(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred');
      console.log(error);
    }
  };

  return (
    <div className="search-bar-container">
      <h4>
        Search for a video
      </h4>
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
      <div className="container">
        <div className="coloum">
          {videos.map((video) => (
            <div className="" key={video.id.videoId}>
              <div className="video-item">
                <h3 className="video-title">{video.snippet.title}</h3>
                <iframe
                  className="video-iframe"
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet.title}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
