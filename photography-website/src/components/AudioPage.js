import React from "react";

const AudioPage = () => {
  return (
    <div className="audio-section">
      <h1>Audio Collection</h1>
      <p>Listen to amazing audio collection from Dubai.</p>
      <audio controls>
        <source src="/assets/Dubai-Audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPage;
