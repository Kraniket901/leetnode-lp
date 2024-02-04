'use client';

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar2 = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-[#010415]'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>

      <h1 className='w-full text-3xl font-bold text-[#c46641]'>LEETNODE.</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 hover:bg-[#c46641] rounded-xl m-2 cursor-pointer duration-30'
          >
            {item.text}
          </li>
        ))}
        <li
          className='px-6 py-2 bg-[#c46641] rounded-xl m-2 cursor-pointer duration-300'
        >Login</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

        <h1 className='w-full text-3xl font-bold text-[#c46641] m-4'>LEETNODE.</h1>

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#c46641] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Navbar2;