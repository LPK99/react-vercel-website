import React from 'react';

import bgVideo from '../assets/edited travel video.mp4';

const Hero = () => {
  return (
    <header className='w-screen h-screen relative'>
      <video
        src={bgVideo}
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
      <h1 className='text-white mb-2'>Our Missions</h1>        
      </div>
    </header>
  );
};

export default Hero;


