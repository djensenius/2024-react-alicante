import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import image1 from '../images/IMG_3137.jpg';
import image2 from '../images/IMG_3538.jpg';
import image3 from '../images/Eras-8.jpg';
import image4 from '../images/IMG_3591.jpg';
import '../index.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ImageGallery: React.FC = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const items = [
    {
      src: 'https://www.youtube.com/embed/zk0PeLn7PjM?autoplay=1',
      title: t('imageGallery.title'),
      description: t('imageGallery.description1'),
      isVideo: true,
    },
    {
      src: image1,
      title: t('imageGallery.title'),
      description: t('imageGallery.description2'),
      isVideo: false,
    },
    {
      src: image2,
      title: t('imageGallery.title'),
      description: t('imageGallery.description3'),
      isVideo: false,
    },
    {
      src: image3,
      title: t('imageGallery.title'),
      description: t('imageGallery.description4'),
      isVideo: false,
    },
    {
      src: image4,
      title: t('imageGallery.title'),
      description: t('imageGallery.description5'),
      isVideo: false,
    },
  ];

  const openModal = (itemSrc: string, isVideo: boolean) => {
    setSelectedItem(itemSrc);
    setIsVideo(isVideo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
    setIsVideo(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="md:flex pb-5">
        <h1 className="text-3xl font-bold underline">{t('imageGallery.title')}</h1>
      </div>
      <div className="grid gap-4 grid-cols-2">
        {items.map((item, index) => (
          <div key={index} onMouseUp={() => openModal(item.src, item.isVideo)}>
            {item.isVideo ? (
              <div className="rounded-lg md:w-56">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.src}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={item.src} className="rounded-lg md:w-56" />
            )}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
          {t('imageGallery.close')}
        </button>
        {selectedItem && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isVideo ? (
              <iframe
                width="100%"
                height="100%"
                src={selectedItem}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={selectedItem}
                style={{
                  maxWidth: '80%',
                  maxHeight: '80%',
                  objectFit: 'contain',
                }}
              />
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
