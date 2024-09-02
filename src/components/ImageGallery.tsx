import React, { useState } from 'react';
import Modal from 'react-modal';
import image1 from '../images/IMG_3137.jpg';
import image2 from '../images/IMG_3538.jpg';
import image3 from '../images/Eras-8.jpg';
import image4 from '../images/IMG_3591.jpg';
import '../index.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ImageGallery: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="md:flex pb-5">
        <h1 className="text-3xl font-bold underline">Image Gallery</h1>
      </div>
      <div className="grid gap-4 grid-cols-2">
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image.src)}>
            <img src={image.src} className="rounded-lg md:w-56" />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            overflow: 'hidden',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          Close
        </button>
        {selectedImage && (
          <div
            style={{
              width: '90%',
              height: '90%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={selectedImage}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
              }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
