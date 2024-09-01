import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h2>About This App</h2>
      <p>
        This app is being developed for the React Alicante conference by
        <a
          href="https://github.com/alenanik"
          className="text-blue-100 hover:text-blue-700 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @alenanik
        </a>
        and
        <a
          href="https://github.com/djensenius"
          className="text-blue-100 hover:text-blue-700 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @djensenius
        </a>
        .
      </p>
      <p>
        The React Alicante conference is a great opportunity to learn and
        network with other React developers.
      </p>
    </div>
  );
};

export default About;
