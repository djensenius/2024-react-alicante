import React from 'react';

const LandingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Dachshund Information
      </h1>
      <section className="mb-12">
        <p className="text-lg mb-4">
          Dachshunds are a breed of dog known for their long bodies and short
          legs. They are playful, loyal, and make great companions.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src="https://example.com/dachshund1.jpg"
            alt="Dachshund Overview"
          />
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">History</h2>
        <p className="text-lg mb-4">
          Dachshunds were originally bred in Germany to hunt badgers. Their name
          literally means "badger dog" in German. They have a rich history
          and have been popular pets for centuries.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src="https://example.com/dachshund2.jpg"
            alt="Dachshund History"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Characteristics</h2>
        <p className="text-lg mb-4">
          Dachshunds come in three coat varieties: smooth, longhaired, and
          wirehaired. They are known for their bold and curious nature. Despite
          their small size, they have a big personality and are very brave.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src="https://example.com/dachshund3.jpg"
            alt="Dachshund Characteristics"
          />
        </div>
        <a href="/history" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> More</a>.
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Care</h2>
        <p className="text-lg mb-4">
          Dachshunds require regular exercise and a balanced diet to maintain
          their health. They are prone to back problems due to their long spine,
          so it's important to avoid activities that could strain their back.
          Regular vet check-ups and a healthy lifestyle can help them live a
          long and happy life. 
          <a href="/care" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> More</a>.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src="https://example.com/dachshund4.jpg"
            alt="Dachshund Care"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
