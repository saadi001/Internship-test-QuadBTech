import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Movies', path: '/' },
          { id: 3, name: 'TV Shows', path: '/' },
          { id: 4, name: 'Award', path: '/' },
          { id: 5, name: 'About', path: '/' }
     ]
     return (
          <nav className='bg-teal-500/40 py-4 '>
               <div className='flex items-center container mx-auto'>
                    <div onClick={() => setOpen(!open)} className="h-5 w-5 mx-2 md:hidden cursor-pointer">
                         {
                              open ? <XMarkIcon />
                                   : <Bars3Icon />
                         }
                    </div>
                    <Link to={'/'} className='text-xl font-serif'>
                         Logo
                    </Link>

                    <ul className={`w-full z-20 md:flex justify-end  absolute md:static duration-300 ease-in ${open ? 'top-14 text-center font-bold bg-white' : 'top-[-150px]'}`}>
                         {
                              routes.map(route => <li key={route.id} className={`ml-10 text-center ${open && 'my-3 ml-0'}`}><Link to={route.path}>{route.name}</Link></li>)
                         }
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;