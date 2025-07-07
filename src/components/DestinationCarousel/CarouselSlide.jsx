import React from 'react';
import {
  SlideContent,
  HotelImage,
  CaptionBox,
  NowOpen,
  ExploreButton
} from './SlideStyles';

const VALID_POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const CarouselSlide = ({ slide }) => {
const position = VALID_POSITIONS.includes(slide.position) ? slide.position : 'bottom-right';

  return (
    <SlideContent>
      <HotelImage src={slide.image} alt={slide.title} />
      <CaptionBox position={position}>
        <NowOpen>NOW OPEN</NowOpen>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <ExploreButton>Explore More</ExploreButton>
      </CaptionBox>
    </SlideContent>
  );
}

export default CarouselSlide;
