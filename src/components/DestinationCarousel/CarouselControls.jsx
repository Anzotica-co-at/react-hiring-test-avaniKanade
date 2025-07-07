import React from 'react';

const CarouselControls = ({ swiperRef, currentIndex, total }) => (
  <div>
    <div className="carousel-controls">
      <button onClick={() => swiperRef.current?.slidePrev()} className="nav-button">
        &#8592; Previous
      </button>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(currentIndex / total) * 100}%` }}
        />
      </div>

      <button onClick={() => swiperRef.current?.slideNext()} className="nav-button">
        Next &#8594;
      </button>
    </div>

    <div className="slide-count">{currentIndex} / {total}</div>
  </div>
);

export default CarouselControls;
