import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AudioPage from './components/AudioPage';
import VideoPage from './components/VideoPage';
import AboutUsPage from './components/AboutUsPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* Add more routes for contact, etc. */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;