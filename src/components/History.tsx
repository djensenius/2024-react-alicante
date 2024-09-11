import React from 'react';

const HistoryPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">History of Dachshunds</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Origins</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              className="rounded-lg shadow-lg float-left mr-4 mb-4"
              src="https://example.com/dachshund1.jpg"
              alt="Dachshund Origins"
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
        <h2 className="text-3xl font-semibold mb-4">Development</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              className="rounded-lg shadow-lg float-left mr-4 mb-4"
              src="https://example.com/dachshund2.jpg"
              alt="Dachshund Development"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-4">
              In the 19th century, dachshunds began to be bred more for companionship than for hunting. This shift in breeding focus led to the development of the three coat varieties we see today: smooth, longhaired, and wirehaired. Each variety has its own unique characteristics and appeal.
            </p>
            <p className="text-lg mb-4">
              Dachshunds were first imported to the United States in the late 19th century. The breed quickly gained popularity and was recognized by the American Kennel Club (AKC) in 1885. Today, dachshunds are one of the most popular dog breeds in the world, known for their playful and affectionate nature.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Famous Dachshunds</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              className="rounded-lg shadow-lg float-left mr-4 mb-4"
              src="https://example.com/dachshund3.jpg"
              alt="Famous Dachshunds"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-4">
              Dachshunds have been popular pets among many famous individuals. Some notable dachshund owners include artist 
              <a href="https://en.wikipedia.org/wiki/Pablo_Picasso" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> Pablo Picasso</a>, 
              actor 
              <a href="https://en.wikipedia.org/wiki/Marlon_Brando" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> Marlon Brando</a>, 
              and writer 
              <a href="https://en.wikipedia.org/wiki/E._B._White" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> E.B. White</a>. 
              The breed has also appeared in various films, TV shows, and books.
            </p>
            <p className="text-lg mb-4">
              One of the most famous dachshunds in popular culture is 
              <a href="https://en.wikipedia.org/wiki/Wiener-Dog" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> "Wiener-Dog"</a>, 
              the star of the 2016 film of the same name. The breed has also been featured in animated films such as 
              <a href="https://en.wikipedia.org/wiki/The_Secret_Life_of_Pets" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> "The Secret Life of Pets"</a> 
              and 
              <a href="https://en.wikipedia.org/wiki/Lady_and_the_Tramp" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> "Lady and the Tramp"</a>.
            </p>
            <p className="text-lg mb-4">
              Dachshunds have a strong presence on social media, with many dachshund influencers gaining large followings. These social media stars showcase the breed's playful and charming personality, further increasing their popularity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;