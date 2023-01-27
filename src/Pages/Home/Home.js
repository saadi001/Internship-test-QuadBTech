import React from 'react';
import Movies from './Movies/Movies';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
     return (
          <div className='container mx-auto'>
               <TopBanner></TopBanner>
               <Movies></Movies>
          </div>
     );
};

export default Home;