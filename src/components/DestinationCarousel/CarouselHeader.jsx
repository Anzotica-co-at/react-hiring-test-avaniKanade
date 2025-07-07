import React from 'react';

const CarouselHeader = ({ heading, tagline, description, ctaText }) => (
  <div className="carousel-header">
    <div className="carousel-left">
      <p className="tagline">{tagline}</p>
      <h2 className="heading">{heading}</h2>
    </div>
    <div className="carousel-right">
      <p className="description">{description}</p>
      <button className="see-whats-new">{ctaText}</button>
    </div>
  </div>
);

export default CarouselHeader;
