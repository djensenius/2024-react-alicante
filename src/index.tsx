import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import About from './components/About';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={ImageGallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
