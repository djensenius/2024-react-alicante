import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">{t('navbar.home')}</Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {t('navbar.home')}
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {t('navbar.gallery')}
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {t('navbar.about')}
          </Link>
          <Link
            to="/care"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {t('navbar.care')}
          </Link>
          <button
            onClick={() => changeLanguage('en')}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            ES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
