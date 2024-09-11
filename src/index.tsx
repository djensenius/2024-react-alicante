import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CarePage from './components/CarePage';
import HistoryPage from './components/History';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/care" element={<CarePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
