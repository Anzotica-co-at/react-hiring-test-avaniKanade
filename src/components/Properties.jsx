import React from 'react';
import DestinationCarousel from './DestinationCarousel';
import nujumaImg from '../assets/images/nujuma.jpeg'
import daressalamImg from '../assets/images/daressalam.jpeg'
import turtlebayImg from '../assets/images/turtlebay.jpeg'
import masaimaraImg from '../assets/images/masaimara.jpeg';

const hotelSlides = [
  {
    image: nujumaImg,
    title: 'Nujuma, a Ritz-Carlton Reserve',
    description: 'Disconver an unspoiled Red Sea sanctury where exploration unveils unforgettable experiences.',
  },
  {
    image: daressalamImg,
    title: 'The Ritz-Carlton Rabat, Dar Es Salam',
    description: "Set within a palm grove, this palatial oasis brings exclusivity to Morocco's capital.",
  },
  { 
    image: turtlebayImg,
    title: "The Ritz-Carlton O'ahu, Turtle Bay",
    description: 'Immerge yourself in the natural beauty and cultural richness of the North Shore.',
  },
  { 
    image: masaimaraImg,
    title: "The Ritz-Carlton, Masai Mara Safari Camp",
    description: 'Sustainably designed in harmony with nature in the heart of the Masai Mara National Reserve.',
  },
];

const Properties = () => {
  return (
    <div>
      <DestinationCarousel
        slides={hotelSlides}
        heading="NEW HOTELS"
        tagline="Where To Go Next"
        description="Boundary-pushing architecture, innovative amenities, intriguing destinations — all with legendary Ritz-Carlton service and attention to detail. Discover the newest hotels and resorts from The Ritz-Carlton and open up a world of possibility."
        ctaText="See What’s New"
      />
    </div>
  );
};

export default Properties;
