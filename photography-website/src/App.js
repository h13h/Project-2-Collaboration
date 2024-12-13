import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import GalleryPage from "./components/GalleryPage";
import AudioPage from "./components/AudioPage";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
