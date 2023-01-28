import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
     return (
          <div className='min-h-[300px] bg-slate-300 my-10 top-banner flex '>
               <div className='w-full md:w-1/2  flex items-center px-5'>
                    <div>
                         <p className='text-5xl mb-8'>Watch shows on our website</p>
                         <a href='#shows' className='px-6 py-2 bg-teal-500/80  rounded-md'>Watch now</a>
                    </div>
               </div>
               <div className='w-1/2 md:flex justify-center hidden '>
                    <img className='w-3/4 py-5' src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg" alt="" />
               </div>
          </div>
     );
};

export default TopBanner;