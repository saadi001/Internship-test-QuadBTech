import { StarIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
     const navigate = useNavigate();
     

     const { data: shows = [] } = useQuery({
          queryKey: ['shows'],
          queryFn: async () => {
               const res = await fetch('https://api.tvmaze.com/search/shows?q=all')
               const data = await res.json()
               console.log(data)
               return data;
          }
     })

     const navigateDetails = (id) =>{
          console.log(id)
          navigate(`/movieDetails/${id}`)
     }

     return (
          <div id='shows'>
               <h3 className='text-3xl mb-3 ml-3 md:ml-0'>All shows</h3>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 sm:mx-3 md:mx-1 lg:mx-0'>
                    {
                         shows.map(show => <div key={show.show.id}>
                              <div onClick={()=>navigateDetails(show.show.id)} className='relative cursor-pointer'>
                                   <img className='sm:h-96 h-auto w-full' src={`${show?.show?.image?.original}`} alt="show" />
                                   <div className='absolute bottom-0 top-0 w-full bg-gradient-to-b from-transparent to-slate-900 flex justify-between items-end px-2 py-5'>
                                        <div>
                                             <p className=' font-semibold text-2xl font-mono z-10 text-slate-200 hover:underline duration-150 ease-in '>{show?.show?.name}</p>
                                        <div className='flex gap-1'><StarIcon className='w-4 text-yellow-500'></StarIcon><span className='text-yellow-200 text-sm'>{show?.show?.rating?.average ? show?.show?.rating?.average : 'counting'}</span></div>
                                        </div>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Movies;