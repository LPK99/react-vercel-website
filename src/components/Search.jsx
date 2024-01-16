import React from 'react';

const Search = () => {
  return (
    <section className='container px-4 my-16 grid gap-8'>
      <div className='md:col-span-2'>
        <h3 className='uppercase font-extrabold mb-4'>
          OVERVIEW
        </h3>
        <p className='mb-10 text-gray-600 text-justify'>
          
Nancy Holiday, based in California, is a unique travel agency that specializes in creating unforgettable travel experiences. In collaboration with Lu Hanh Nam Cuong, a renowned company in Vietnam, Nancy Holiday offers a bridge between the vibrant culture of Vietnam and the diverse landscapes of California. They provide tailored travel packages that cater to a variety of preferences, whether it's exploring the bustling streets of Hanoi, cruising along the serene waters of Ha Long Bay, or enjoying the sunny beaches of California. With a focus on personalized service and cultural immersion, Nancy Holiday and Lu Hanh Nam Cuong work together to ensure that each trip is not just a journey, but a lifetime memory.
        </p>
        <div className='flex flex-col sm:flex-row'>
          <div className='text-center'>
            <h4 className='uppercase font-extrabold'>OPENING SOON, CONTACT US FOR MORE PROSPECTED TOUR</h4>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Search;
