import React from "react";

const VideoPage = () => {
  return (
    <div className="video-section">
      <h1>Video Collection</h1>
      <p>Watch our amazing videos.</p>
      <video width="600" controls>
        <source src="/assets/Dubai-Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
