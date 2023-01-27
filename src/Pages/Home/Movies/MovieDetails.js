import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MovieDetails = () => {
     const data = useLoaderData();
     const { image, summary } = data;
     return (
          <div className='container md:mx-auto flex flex-wrap sm:flex-nowrap gap-10 mt-8 mx-5'>
               <img src={image?.medium} alt="" />
               <div className=''>{summary}<br />
                    <button className="px-6 py-2 mt-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                         Primary
                    </button>
               </div>
          </div>
     );
};

export default MovieDetails;