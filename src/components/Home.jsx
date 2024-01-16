import React, { useEffect } from 'react';
import Hero from './Hero';
import Destinations from './Destinations';
import Search from './Search';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    document.title = "Nancy Holiday";
  }, []);
  return (
    <>

      <Hero />
      <Destinations />
      <Search />
      <Footer />
    </>
  );
};

export default Home;