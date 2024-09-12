import React from 'react';
import '../index.css';

const CarePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h4 className="text-4xl font-bold text-center mb-8">
        Caring for Your Dachshund
      </h4>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">Diet and Nutrition</h3>
        <p className="text-lg mb-4">
          A balanced diet is crucial for maintaining your dachshund’s health.
          Dachshunds are prone to obesity, so it’s important to monitor their
          food intake and ensure they get enough exercise.
        </p>
        <p className="text-lg mb-4">
          Here are some popular dog food brands that are well-suited for
          dachshunds:
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
          The amount of food your dachshund needs can vary based on their age,
          weight, and activity level. As a general guideline:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Puppies: 3-4 meals per day</li>
          <li>Adults: 2 meals per day</li>
          <li>Seniors: 2 smaller meals per day</li>
        </ul>
        <p className="text-lg mb-4">
          Always consult your veterinarian to determine the best diet and
          feeding schedule for your dachshund.
        </p>
        <p className="text-lg mb-4">
          <span className="italic">
            Do not feed your dachshund the following foods:
          </span>
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Chocolate</li>
          <li>Onions</li>
          <li>Garlic</li>
          <li>Avocado</li>
          <li>Alcohol</li>
          <li>Caffeine</li>
          <li>Grapes and raisins</li>
          <li>Macadamia nuts</li>
          <li>Raw yeast dough</li>
          <li>Xylitol (a sugar substitute)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
        <p className="text-lg mb-4">
          Regular exercise is essential for keeping your dachshund healthy and
          happy. Dachshunds have a lot of energy and enjoy activities such as
          walks, playtime, and even agility training.
        </p>
        <p className="text-lg mb-4">
          Aim for at least 30 minutes of exercise per day. This can be broken up
          into multiple shorter sessions if needed. Be mindful of their long
          backs and avoid activities that could strain their spine, such as
          jumping from heights.
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">Grooming</h4>
        <p className="text-lg mb-4">
          Grooming needs vary depending on the type of coat your dachshund has:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Smooth-coated: Minimal grooming, regular brushing to remove loose
            hair
          </li>
          <li>Longhaired: Regular brushing to prevent tangles and mats</li>
          <li>Wirehaired: Regular brushing and occasional trimming</li>
        </ul>
        <p className="text-lg mb-4">
          Regular nail trimming, ear cleaning, and dental care are also
          important parts of your dachshund’s grooming routine.
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">Health Care</h4>
        <p className="text-lg mb-4">
          Regular veterinary check-ups are essential for keeping your dachshund
          healthy. Dachshunds are prone to certain health issues, such as
          intervertebral disc disease (IVDD), hip dysplasia, and dental
          problems.
        </p>
        <p className="text-lg mb-4">
          Preventive care, including vaccinations, parasite control, and dental
          cleanings, can help keep your dachshund in good health. Be proactive
          about addressing any health concerns with your veterinarian.
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-3xl font-semibold mb-4">
          Training and Socialization
        </h4>
        <p className="text-lg mb-4">
          Training and socialization are important for dachshunds to become
          well-behaved and confident dogs. Start training early and use positive
          reinforcement methods, such as treats and praise.
        </p>
        <p className="text-lg mb-4">
          Socialize your dachshund by exposing them to different people, places,
          and experiences. This can help prevent behavioral issues and make them
          more adaptable to new situations.
        </p>
      </section>
    </div>
  );
};

export default CarePage;
