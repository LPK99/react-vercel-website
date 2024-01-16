import React, { useEffect } from 'react';
import Mission_statement from './Mission_statement';
import About_hero from './About_hero';
import Destinations from './Destinations';
import Search from './Search';
import Selections from './Selections';
import Carousel from './Carousel';
import Footer from './Footer';
import bgVideo from '../assets/edited travel video.mp4';
const Destination = () => {
  useEffect(() => {
    document.title = "Destinations";
  }, []);
  return (
    
    <>
    <header className='gap-2 w-screen h-screen relative'>
      <video
        src={bgVideo}
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
      <h1 className='text-white mb-2'>Destinations</h1>        
      </div>
    </header>
    <Selections />
    <Carousel />
    <Footer />
    </>
  );
};

export default Destination;