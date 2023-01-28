import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FormModal from '../../Shared/FormModal/FormModal';

const MovieDetails = () => {
     const [openModal, setOpenModal] = useState(false);
     const data = useLoaderData();
     const { image, summary, name, language, runtime, schedule } = data;
     const handleBooked = localStorage.getItem(`${name}`)

     const closeModal = () => {
          setOpenModal(false)
     }

     return (
          <div className='container md:mx-auto flex flex-wrap sm:flex-nowrap gap-10 mt-8 mx-5'>
               <img src={image?.medium} alt="" />
               <div className=''>
                    <p className='mb-8'>{summary}</p>
                    <label onClick={() => setOpenModal(true)} htmlFor="my-modal-6" className={`px-6  py-2 ${handleBooked==='booked' ? 'btn-disabled bg-blue-400' : ''} cursor-pointer font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80`}>{handleBooked=== 'booked' ? "booked" : "book"}</label>

               </div>
               {
                    openModal && <FormModal
                         name={name}
                         language={language}
                         runtime={runtime}
                         schedule={schedule}
                         closeModal={closeModal}
                    >

                    </FormModal>
               }
          </div>
     );
};

export default MovieDetails;