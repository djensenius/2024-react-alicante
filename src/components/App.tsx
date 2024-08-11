import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import Contact from './Contact';

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
          </ul>
        </nav>
        <Route path="/" exact component={ImageGallery} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
