import React, { useEffect } from 'react';
import Mission_statement from './Mission_statement';
import About_hero from './About_hero';
import Destinations from './Destinations';
import Search from './Search';
import Selections from './Selections';
import Carousel from './Carousel';
import Footer from './Footer';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <About_hero />
      <Mission_statement />
      <Footer />
    </>
  );
};

export default About;