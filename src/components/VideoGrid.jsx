import React from 'react';

const VideoGrid = ({ videos }) => {
  if (!videos.length) {
    return <p className="text-center text-gray-600 mt-10">No videos found. Try searching something!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        
        <div className="bg-white rounded shadow p-2" key={video.id.videoId}>
            
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.snippet.title}
            className="rounded"
          ></iframe>
          <p className="mt-2 text-sm font-medium">{video.snippet.title}</p>
          <p className="line-clamp-1 pt-1">{video.snippet.channelTitle}</p>
          <p className="text-xs text-gray-500">
            Published on: {new Date(video.snippet.publishedAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
