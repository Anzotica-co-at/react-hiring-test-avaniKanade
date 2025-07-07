import styled, { css } from 'styled-components';

// Container
export const SlideContent = styled.div`
  position: relative;
  width: 100%;
`;

// Image
export const HotelImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

// Caption position logic
const positionStyles = {
    'top-right': css`
    top: -3rem;
    right: -15rem;
    left: auto;
    bottom: auto;
  `,
    'bottom-right': css`
    bottom: -3rem; //change to move out
  right: -15rem; //change to move out
  left: auto;
  top: auto;
  `,
    'top-left': css`
    top: 2rem;
    left: 2rem;
    right: auto;
    bottom: auto;
  `,
    'bottom-left': css`
    bottom: 2rem;
    left: 2rem;
    right: auto;
    top: auto;
  `,
};

// Caption box
export const CaptionBox = styled.div`
  position: absolute;
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  max-width: 60%;
  z-index: 2;

  ${({ position }) => positionStyles[position] || positionStyles['bottom-left']};

  // Only show on active slide
  .swiper-slide:not(.swiper-slide-active) & {
    display: none;
  }

  @media (max-width: 768px) {
    position: static;
    max-width: 100%;
    margin-top: 1rem;
    display: block;
  }
`;


// Optional substyles
export const NowOpen = styled.p`
  font-weight: bold;
  color: #b30000;
  margin-bottom: 0.5rem;
`;

export const ExploreButton = styled.button`
  margin-top: 1rem;
  background-color: black;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

export const SlideWrapper = styled.div`
  width: 70%;              // picture size change
  margin: 0 auto;
  border-radius: 0.5rem;
  position: relative;
  overflow: visible;
  background-color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Wrapper around Swiper to allow overflow and spacing
export const CarouselContainer = styled.div`
  overflow: visible;
  padding: 0 40px;

  .swiper {
    overflow: visible !important;
  }

  .swiper-slide {
    overflow: visible;
    display: flex;
    justify-content: center;
  }
`;


