// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import ImageGallery2 from '../components/ImageGallery2.jsx';
import Discussion from '../components/Discussion.jsx';  // ייבוא דף הדיון
import Navbar from '../components/Navbar.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageGallery" element={<ImageGallery />} />
        <Route path="/imageGallery2" element={<ImageGallery2 />} />
        <Route path="/discussion/:id" element={<Discussion />} /> {/* דף דיון לתמונה */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
