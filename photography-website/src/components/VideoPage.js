import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-player">
      <div className="overlay">
        <h2>Video Player</h2>
        <video controls width="80%">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
