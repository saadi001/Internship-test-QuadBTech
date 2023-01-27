import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          { id: 1, name: 'Home', path: '/Home' },
          { id: 2, name: 'Products', path: '/Home' },
          { id: 3, name: 'Orders', path: '/Home' },
          { id: 4, name: 'Contact', path: '/Home' },
          { id: 5, name: 'About', path: '/Home' }
     ]
     return (
          <nav className='bg-gray-400 py-4 '>
               <div className='flex items-center container mx-auto'>
                    <div onClick={() => setOpen(!open)} className="h-5 w-5 mx-2 md:hidden cursor-pointer">
                         {
                              open ? <XMarkIcon />
                                   : <Bars3Icon />
                         }
                    </div>
                    <div className='text-xl font-serif'>
                         Logo
                    </div>

                    <ul className={` w-full bg-gray-400 md:flex justify-end  absolute md:static duration-300 ease-in ${open ? 'top-14 text-center font-bold' : 'top-[-150px]'}`}>
                         {
                              routes.map(route => <li key={route.id} className={`ml-10 text-center ${open && 'my-3'}`}><Link to={route.path}>{route.name}</Link></li>)
                         }
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;