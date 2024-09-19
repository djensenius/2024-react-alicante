import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = t('contact.title') + ' - Rhizome the Dachshund';
  }, [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div>
      <h2>{t('contact.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <span className="p-2 m-2">{t('contact.name')}:</span>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-1/2 p-2 m-2 mb-5 border border-gray-300 rounded"
          />
        </div>
        <div>
          <span className="p-2 m-2">{t('contact.email')}:</span>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 p-2 m-2 mb-5 border border-gray-300 rounded"
          />
        </div>
        <div>
          <span className="p-2 m-2">{t('contact.message')}:</span>
          <br />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-1/2 p-2 m-2 mb-5 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 m-2 mb-5 bg-blue-500 text-white rounded"
        >
          {t('contact.submit')}
        </button>
      </form>
    </div>
  );
};

export default Contact;
