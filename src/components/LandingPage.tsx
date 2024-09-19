import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import chair from '../images/chair.jpg';
import snowsitting from '../images/Dachshund_sitting_in_snow.jpg';
import portrait from '../images/portrait.jpg';
import party from '../images/party.jpg';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-4xl font-bold text-center mb-8">
        {t('landingPage.title')}
      </h4>
      <section className="mb-12">
        <img
          className="rounded-lg shadow-lg float-left mr-4 mb-4"
          src={portrait}
        />
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            {t('landingPage.description1')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.description2')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.description3')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.description4')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.description5')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.description6')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('landingPage.history')}</h3>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img
            className="rounded-lg shadow-lg float-left mr-4 mb-4"
            src={snowsitting}
            onClick={() => window.open('/history', '_blank')}
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            {t('landingPage.historyDescription1')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.historyDescription2')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('landingPage.characteristics')}</h3>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img
            className="rounded-lg shadow-lg float-left mr-4 mb-4"
            src={chair}
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            {t('landingPage.characteristicsDescription1')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.characteristicsDescription2')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.characteristicsDescription3')}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('landingPage.care')}</h3>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img
            className="rounded-lg shadow-lg float-left mr-4 mb-4"
            src={party}
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            {t('landingPage.careDescription1')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.careDescription2')}
          </p>
          <p className="text-lg mb-4">
            {t('landingPage.careDescription3')}
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">{t('landingPage.contactUs')}</h2>
          <p className="text-lg mb-4">
            {t('landingPage.contactUsDescription')}{' '}
            <Link to="/contact" className="text-blue-500 underline">
              {t('contact.title')}
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
