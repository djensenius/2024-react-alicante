import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer
      style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1' }}
    >
      <p>{t('footer.copy', { year: new Date().getFullYear() })}</p>
      <p>
        <a href="https://gh.io/ra" target="_blank" rel="noopener noreferrer">
          {t('footer.viewOnGitHub')}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
