import React from 'react';
import { useTranslation } from 'react-i18next';
import picasso from '../images/picasso.webp';
import field from '../images/Dachshund_running_in_field.jpg';
import log from '../images/Dachshund_crossing_log.jpg';
import snow from '../images/Dachshund_in_the_snow.jpg';
import minilonggold from '../images/MiniDachshundLongCoatGold.jpg';
import two from '../images/two.jpg';

const HistoryPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-4xl font-bold text-center mb-8">
        {t('historyPage.title')}
      </h4>
      <section className="mb-12">
        <p className="text-lg mb-4">
          {t('historyPage.description1')}
        </p>
        <img
          className="rounded-lg shadow-lg float-left mr-4 mb-4"
          src={field}
        />
      </section>
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('historyPage.history')}</h3>
        <p className="text-lg mb-4">
          {t('historyPage.historyDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.historyDescription2')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.historyDescription3')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.historyDescription4')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.historyDescription5')}
        </p>
        <img
          className="rounded-lg shadow-lg  float-right ml-4 mb-4"
          src={log}
        />
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">{t('historyPage.characteristics')}</h4>
        <p className="text-lg mb-4">
          {t('historyPage.characteristicsDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.characteristicsDescription2')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.characteristicsDescription3')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.characteristicsDescription4')}
        </p>
        <img
          className="rounded-lg shadow-lg  float-left mr-4 mb-4"
          src={snow}
        />
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('historyPage.care')}</h3>
        <p className="text-lg mb-4">
          {t('historyPage.careDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.careDescription2')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.careDescription3')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.careDescription4')}
        </p>
        <img
          className="rounded-lg shadow-lg float-right ml-4 mb-4"
          src={minilonggold}
        />
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">{t('historyPage.training')}</h4>
        <p className="text-lg mb-4">
          {t('historyPage.trainingDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.trainingDescription2')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.trainingDescription3')}
        </p>
        <img className="rounded-lg shadow-lg float-left mr-4 mb-4" src={two} />
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">{t('historyPage.health')}</h3>
        <p className="text-lg mb-4">
          {t('historyPage.healthDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.healthDescription2')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.healthDescription3')}
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">{t('historyPage.famousDachshunds')}</h4>
        <p className="text-lg mb-4">
          {t('historyPage.famousDachshundsDescription1')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.famousDachshundsDescription2')}
        </p>
        <p className="text-lg mb-4">
          {t('historyPage.famousDachshundsDescription3')}
        </p>
        <div className="flex justify-center">
          <img className="rounded-lg shadow-lg" src={picasso} />
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
