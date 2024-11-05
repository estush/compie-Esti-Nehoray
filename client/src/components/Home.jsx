import React from 'react';
import '../styles/imageGallery.scss';
import { images } from './images'; // ייבוא המערך images

const Home = () => {
  return (
    <div className="image-gallery">
      <h1>Art Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.name} />
            <h2>{image.name}</h2>
            <h3>{image.artist}</h3>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
