import React from 'react';
import image1 from '../images/IMG_3137.jpg';
import image2 from '../images/IMG_3538.jpg';
import image3 from '../images/Eras-8.jpg';
import image4 from '../images/IMG_3591.jpg';

const ImageGallery: React.FC = () => {
  const images = [
    {
      src: image1,
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      src: image2,
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      src: image3,
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      src: image4,
      title: 'Image 4',
      description: 'Description for Image 4',
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
