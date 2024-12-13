import React from 'react';

const GalleryPage = () => {
  return (
    <div className="gallery-section">
      <img src="image1.png" alt="A beautiful landscape" />
      <img src="image2.jpg" alt="" />  {/* Decorative image */}
      <img src="image3.jpg" alt="A cat playing with a ball of yarn" />
      <img src="image4.jpg" alt="" />  {/* Decorative image */}
    </div>
  );
};

export default GalleryPage;