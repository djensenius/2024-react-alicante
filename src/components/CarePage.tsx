import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const CarePage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-4xl font-bold text-center mb-8">
        {t('carePage.title')}
      </h4>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('carePage.dietAndNutrition')}</h3>
        <p className="text-lg mb-4">
          {t('carePage.dietDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('carePage.dietDescription2')}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a
              href="https://www.royalcanin.com/us/dogs/products/retail-products/dachshund-adult-dry-dog-food"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Royal Canin Dachshund Adult Dry Dog Food
            </a>
          </li>
          <li>
            <a
              href="https://www.hillspet.com/dog-food/dh-canine-adult-small-bites-dry"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hill’s Science Diet Adult Small Bites
            </a>
          </li>
          <li>
            <a
              href="https://www.bluebuffalo.com/dog-food/life-protection/"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blue Buffalo Life Protection Formula
            </a>
          </li>
          <li>
            <a
              href="https://www.wellnesspetfood.com/natural-dog-food"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wellness Complete Health Natural Dry Dog Food
            </a>
          </li>
        </ul>
        <p className="text-lg mb-4">
          {t('carePage.dietDescription3')}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>{t('carePage.dietDescription4')}</li>
          <li>{t('carePage.dietDescription5')}</li>
          <li>{t('carePage.dietDescription6')}</li>
        </ul>
        <p className="text-lg mb-4">
          {t('carePage.dietDescription7')}
        </p>
        <p className="text-lg mb-4">
          <span className="italic">
            {t('carePage.dietDescription8')}
          </span>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>{t('carePage.dietDescription9')}</li>
          <li>{t('carePage.dietDescription10')}</li>
          <li>{t('carePage.dietDescription11')}</li>
          <li>{t('carePage.dietDescription12')}</li>
          <li>{t('carePage.dietDescription13')}</li>
          <li>{t('carePage.dietDescription14')}</li>
          <li>{t('carePage.dietDescription15')}</li>
          <li>{t('carePage.dietDescription16')}</li>
          <li>{t('carePage.dietDescription17')}</li>
          <li>{t('carePage.dietDescription18')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('carePage.exercise')}</h3>
        <p className="text-lg mb-4">
          {t('carePage.exerciseDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('carePage.exerciseDescription2')}
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">{t('carePage.grooming')}</h4>
        <p className="text-lg mb-4">
          {t('carePage.groomingDescription1')}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>{t('carePage.groomingDescription2')}</li>
          <li>{t('carePage.groomingDescription3')}</li>
          <li>{t('carePage.groomingDescription4')}</li>
        </ul>
        <p className="text-lg mb-4">
          {t('carePage.groomingDescription5')}
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">{t('carePage.healthCare')}</h4>
        <p className="text-lg mb-4">
          {t('carePage.healthCareDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('carePage.healthCareDescription2')}
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">
          {t('carePage.trainingAndSocialization')}
        </h4>
        <p className="text-lg mb-4">
          {t('carePage.trainingAndSocializationDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('carePage.trainingAndSocializationDescription2')}
        </p>
      </section>
    </div>
  );
};

export default CarePage;
