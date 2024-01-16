import React, { useState } from 'react';

const CAROUSEL_DATA = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Tahoe_North_Shore_from_the_East_Shore.jpg/1200px-Tahoe_North_Shore_from_the_East_Shore.jpg',
  },
  {
    url: 'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/styles/welcome_image/public/VC_TheBroad_Supplied_the_broad_photo_by_iwan_baan_3811_HR_1280x640.jpg',
  },
  {
    url: 'https://image-tc.galaxy.tf/wijpeg-vz2ozovjrouf3b7otz7a8h0v/knotte28099s-berry-farm_standard.jpg?crop=114%2C0%2C1772%2C1329',
  },
  {
    url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/travelpasoca/Sensorio_9d9b6c25-ef31-4713-a224-f24ddcf1c87c.png'
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementIndex = () => {
    console.log(currentIndex);
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % CAROUSEL_DATA.length;
    });
  };
  const decrementIndex = () => {
    console.log(currentIndex);
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
    });
  };
  return (
    <section className='container px-4 my-12 h-3/4 relative'>
      <img src={CAROUSEL_DATA[currentIndex].url} className='rounded-md' />
      <div
        onClick={decrementIndex}
        className='absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </div>

      <div
        onClick={incrementIndex}
        className='absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
