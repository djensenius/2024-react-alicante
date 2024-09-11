import React from 'react';
import picasso from '../images/picasso.webp';
import field from '../images/Dachshund_running_in_field.jpg';
import log from '../images/Dachshund_crossing_log.jpg';
import snow from '../images/Dachshund_in_the_snow.jpg';
import minilonggold from '../images/MiniDachshundLongCoatGold.jpg';
import tia from '../images/Tia.jpg';
import two from '../images/two.jpg';

const HistoryPage = () => {
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
            src={field}
            alt="Dachshund Overview"
          />
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">History</h2>
        <p className="text-lg mb-4">
          The dachshund originated in Germany and has a history that dates back
          to at least the 15th century. The breed was developed to hunt badgers,
          and its name literally means “badger dog” in German. The dachshund’s
          long body and short legs were ideal for digging into badger burrows
          and other small game dens.
        </p>
        <p className="text-lg mb-4">
          Over the centuries, the breed was refined and standardized. By the
          17th century, the dachshund had become a popular hunting dog among
          European nobility. The breed’s versatility allowed it to hunt not only
          badgers but also foxes, rabbits, and other small game.
        </p>
        <p className="text-lg mb-4">
          In the 19th century, dachshunds began to be bred more for
          companionship than for hunting. This shift in breeding focus led to
          the development of the three coat varieties we see today: smooth,
          longhaired, and wirehaired. Each variety has its own unique
          characteristics and appeal.
        </p>
        <p className="text-lg mb-4">
          Dachshunds were first imported to the United States in the late 19th
          century. The breed quickly gained popularity and was recognized by the
          American Kennel Club (AKC) in 1885. Today, dachshunds are one of the
          most popular dog breeds in the world, known for their playful and
          affectionate nature.
        </p>
        <p className="text-lg mb-4">
          Despite their small size, dachshunds have a big personality. They are
          known for their bravery, curiosity, and loyalty. These traits,
          combined with their unique appearance, have made them a beloved breed
          among dog enthusiasts.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={log}
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
        <p className="text-lg mb-4">
          The smooth-coated dachshund has a short, shiny coat that requires
          minimal grooming. The longhaired dachshund has a silky, flowing coat
          that needs regular brushing to prevent tangles. The wirehaired
          dachshund has a rough, wiry coat that also requires regular grooming.
        </p>
        <p className="text-lg mb-4">
          Dachshunds are known for their intelligence and independence. They can
          be stubborn at times, but they are also very loyal to their owners.
          They are good with children and can get along well with other pets if
          properly socialized.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={snow}
            alt="Dachshund Characteristics"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Care</h2>
        <p className="text-lg mb-4">
          Dachshunds require regular exercise and a balanced diet to maintain
          their health. They are prone to back problems due to their long spine,
          so it’s important to avoid activities that could strain their back.
          Regular vet check-ups and a healthy lifestyle can help them live a
          long and happy life.
        </p>
        <p className="text-lg mb-4">
          It’s important to keep dachshunds at a healthy weight to avoid putting
          extra strain on their back. They should be fed a high-quality diet and
          given regular opportunities for exercise. Dachshunds enjoy walks,
          playtime, and activities that engage their minds and bodies.
        </p>
        <p className="text-lg mb-4">
          Grooming needs vary depending on the coat type. Smooth-coated
          dachshunds require minimal grooming, while longhaired and wirehaired
          dachshunds need regular brushing to keep their coats in good
          condition. Regular dental care is also important to prevent dental
          issues.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={minilonggold}
            alt="Dachshund Care"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Training</h2>
        <p className="text-lg mb-4">
          Training a dachshund can be a rewarding experience, but it requires
          patience and consistency. Dachshunds are intelligent and can learn
          quickly, but they can also be stubborn and independent. Positive
          reinforcement methods, such as treats and praise, work best with this
          breed.
        </p>
        <p className="text-lg mb-4">
          Early socialization is important for dachshunds to help them become
          well-adjusted adults. Exposing them to different people, places, and
          experiences can help prevent behavioral issues. Basic obedience
          training, such as teaching commands like sit, stay, and come, is also
          important.
        </p>
        <p className="text-lg mb-4">
          Dachshunds can excel in various dog sports and activities, such as
          agility, obedience, and earthdog trials. These activities provide
          mental and physical stimulation and can strengthen the bond between
          the dog and owner.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={tia}
            alt="Dachshund Training"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Health</h2>
        <p className="text-lg mb-4">
          Dachshunds are generally healthy dogs, but they are prone to certain
          health issues. The most common health concern for dachshunds is
          intervertebral disc disease (IVDD), which affects the spine. IVDD can
          cause pain, mobility issues, and in severe cases, paralysis.
        </p>
        <p className="text-lg mb-4">
          Other health issues that can affect dachshunds include hip dysplasia,
          patellar luxation, and eye conditions such as progressive retinal
          atrophy (PRA). Regular veterinary check-ups and preventive care can
          help detect and manage these conditions.
        </p>
        <p className="text-lg mb-4">
          Dachshunds have a lifespan of 12-16 years, and with proper care, they
          can live long, healthy lives. Providing a balanced diet, regular
          exercise, and preventive healthcare are key to keeping a dachshund
          healthy and happy.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={two}
            alt="Dachshund Health"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Famous Dachshunds</h2>
        <p className="text-lg mb-4">
          Dachshunds have been popular pets among many famous individuals. Some
          notable dachshund owners include artist
          <a
            href="https://en.wikipedia.org/wiki/Pablo_Picasso"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Pablo Picasso
          </a>
          , actor
          <a
            href="https://en.wikipedia.org/wiki/Marlon_Brando"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Marlon Brando
          </a>
          , and writer
          <a
            href="https://en.wikipedia.org/wiki/E._B._White"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            E.B. White
          </a>
          . The breed has also appeared in various films, TV shows, and books.
        </p>
        <p className="text-lg mb-4">
          One of the most famous dachshunds in popular culture is
          <a
            href="https://en.wikipedia.org/wiki/Wiener-Dog"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            “Wiener-Dog”
          </a>
          , the star of the 2016 film of the same name. The breed has also been
          featured in animated films such as
          <a
            href="https://en.wikipedia.org/wiki/The_Secret_Life_of_Pets"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            “The Secret Life of Pets”
          </a>
          and
          <a
            href="https://en.wikipedia.org/wiki/Lady_and_the_Tramp"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            “Lady and the Tramp”
          </a>
          .
        </p>
        <p className="text-lg mb-4">
          Dachshunds have a strong presence on social media, with many dachshund
          influencers gaining large followings. These social media stars
          showcase the breed’s playful and charming personality, further
          increasing their popularity.
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={picasso}
            alt="Famous Dachshunds"
          />
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
