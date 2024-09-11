import React from 'react';
import chair from '../images/chair.jpg';
import snowsitting from '../images/Dachshund_sitting_in_snow.jpg';
import portrait from '../images/portrait.jpg';
import party from '../images/party.jpg';

const LandingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to the Dachshund Information Page
      </h1>
      <section className="mb-12">
        <p className="text-lg mb-4">
          Dachshunds are a breed of dog known for their long bodies and short legs. They are playful, loyal, and make great companions. Originally bred in Germany to hunt badgers, their name literally means "badger dog" in German. Over the centuries, they have become beloved pets around the world.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg float-left mr-4 mb-4"
            src={portrait}
            alt="Dachshund Overview"
          />
        </div>
        <p className="text-lg mb-4">
          Dachshunds come in three coat varieties: smooth, longhaired, and wirehaired. Each variety has its own unique characteristics and grooming needs. Despite their small size, dachshunds have a big personality and are known for their bravery and curiosity.
        </p>
        <p className="text-lg mb-4">
          They are intelligent and independent, which can sometimes make training a challenge. However, with patience and positive reinforcement, dachshunds can learn a variety of commands and tricks. They are also known for their loyalty and affection towards their owners.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">History</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              className="rounded-lg shadow-lg float-left mr-4 mb-4"
              src={snowsitting}
              alt="Dachshund History"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-4">
              The dachshund originated in Germany and has a history that dates back to at least the 15th century. The breed was developed to hunt badgers, and its name literally means "badger dog" in German. The dachshund's long body and short legs were ideal for digging into badger burrows and other small game dens.
            </p>
            <p className="text-lg mb-4">
              Over the centuries, the breed was refined and standardized. By the 17th century, the dachshund had become a popular hunting dog among European nobility. The breed's versatility allowed it to hunt not only badgers but also foxes, rabbits, and other small game.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Characteristics</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              className="rounded-lg shadow-lg float-left mr-4 mb-4"
              src={chair}
              alt="Dachshund Characteristics"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-4">
              Dachshunds come in three coat varieties: smooth, longhaired, and wirehaired. They are known for their bold and curious nature. Despite their small size, they have a big personality and are very brave.
            </p>
            <p className="text-lg mb-4">
              The smooth-coated dachshund has a short, shiny coat that requires minimal grooming. The longhaired dachshund has a silky, flowing coat that needs regular brushing to prevent tangles. The wirehaired dachshund has a rough, wiry coat that also requires regular grooming.
            </p>
            <p className="text-lg mb-4">
              Dachshunds are known for their intelligence and independence. They can be stubborn at times, but they are also very loyal to their owners. They are good with children and can get along well with other pets if properly socialized.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Care</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              className="rounded-lg shadow-lg float-left mr-4 mb-4"
              src={party}
              alt="Dachshund Care"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-4">
              Dachshunds require regular exercise and a balanced diet to maintain their health. They are prone to back problems due to their long spine, so it's important to avoid activities that could strain their back. Regular vet check-ups and a healthy lifestyle can help them live a long and happy life.
            </p>
            <p className="text-lg mb-4">
              It's important to keep dachshunds at a healthy weight to avoid putting extra strain on their back. They should be fed a high-quality diet and given regular opportunities for exercise. Dachshunds enjoy walks, playtime, and activities that engage their minds and bodies.
            </p>
            <p className="text-lg mb-4">
              Grooming needs vary depending on the coat type. Smooth-coated dachshunds require minimal grooming, while longhaired and wirehaired dachshunds need regular brushing to keep their coats in good condition. Regular dental care is also important to prevent dental issues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;