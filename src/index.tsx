import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import About from './components/About';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ImageGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
