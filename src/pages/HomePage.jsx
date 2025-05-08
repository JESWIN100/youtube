import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (searchTerm = '') => {
    try {
      const response = await axios.get('http://localhost:5000/search', {
        params: { query: searchTerm },
      });
      console.log(response.data);
      
      setVideos(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error || 'An error occurred');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return toast.warning('Please enter a search term');
    fetchVideos(query);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="yt-clone-container min-h-screen bg-gray-100">
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <Sidebar />
      <main className="pt-20 px-4 md:ml-56">
        <VideoGrid videos={videos} />
      </main>
    </div>
  );
};

export default HomePage;
