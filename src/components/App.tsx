import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import Contact from './Contact';
import About from './About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Image Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={ImageGallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
