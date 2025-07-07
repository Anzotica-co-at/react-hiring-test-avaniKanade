import '../../styles//HotelCarousel.scss'; 
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CarouselHeader from './CarouselHeader';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import { CarouselContainer, SlideWrapper } from './SlideStyles'; // Adjust the path as needed

const DestinationCarousel = ({ slides, heading, tagline, description, ctaText }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="carousel-wrapper">
      <CarouselHeader heading={heading} tagline={tagline} description={description} ctaText={ctaText} />

      <CarouselContainer>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.3}           // Show 1 full + part of next
          centeredSlides={true}
          spaceBetween={40}             // Controls visible gap between slides
          loop={true}
          speed={600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideWrapper>
                <CarouselSlide slide={slide} />
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>

      <div style={{ marginTop: '6rem' }}>
      <CarouselControls
        swiperRef={swiperRef}
        currentIndex={currentIndex}
        total={slides.length}
      />
      </div>
    </div>
  );
};

export default DestinationCarousel;
