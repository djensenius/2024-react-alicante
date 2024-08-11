import React from 'react';

const ImageGallery: React.FC = () => {
  const images = [
    {
      src: 'https://via.placeholder.com/150',
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      src: 'https://via.placeholder.com/150',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      src: 'https://via.placeholder.com/150',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
  ];

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
