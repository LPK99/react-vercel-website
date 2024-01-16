import React from 'react';

import Selection from './Selection';

import sensorio_2 from '../assets/sensorio_2.jpg';
import pebble from '../assets/pebble_2.jpg';
import laketahoe from '../assets/laketahoe.jpg';
import longbeach from '../assets/longbeach.jpg';
import sanfrancisco from '../assets/sanfrancisco.jpg';
import sequoia from '../assets/sequoia.jpg';

const Selections = () => {
  return (
    
    <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={sensorio_2} caption='Sensorio' />
      <Selection figure={pebble} caption='Pebble Beach' />
      <Selection figure={laketahoe} caption='Lake Tahoe' />
      <Selection figure={longbeach} caption='Long Beach' />
      <Selection figure={sanfrancisco} caption='San Francisco' />
      <Selection figure={sequoia} caption='Sequoia' />
    </section>
  );
};

export default Selections;
