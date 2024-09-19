import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('about.title')}</h2>
      <p>
        {t('about.description1')}
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
      <p>{t('about.description2')}</p>
    </div>
  );
};

export default About;
