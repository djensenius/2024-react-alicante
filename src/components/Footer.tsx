import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1' }}
    >
      <p>&copy; {new Date().getFullYear()}</p>
      <p>
        <a href="https://gh.io/ra" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
