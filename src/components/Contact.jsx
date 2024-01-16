import Navbar from './Navbar';
import Hero from './Hero';
import Contact_hero  from './Contact_hero';
import Destinations from './Destinations';
import Search from './Search';
import Selections from './Selections';
import Carousel from './Carousel';
import Footer from './Footer';
import React, { useEffect } from 'react';


const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <Contact_hero />
      <Footer />
    </>
  );
};

export default Contact;