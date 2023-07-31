"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Header: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    console.log('toggle', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full bg-slate-50 text-primary-gray px-5 border-b border-slate-200 '>
      <nav className="flex items-center flex-wrap">
        <div className="flex items-center flex-shrink-0 flex-1">
          <Image src="/img/aiken-logo.svg" className='mr-5' alt="Aiken Construction Logo" width={100} height={100} />
          <span className="font-semibold md:text-lg text-sm tracking-tight">AIKEN CONSTRUCTION INC.</span>
        </div>
        <div className="block lg:hidden md:mr-5">
          <button onClick={toggle} className="flex items-center px-3 py-2 border rounded border-slate-900 hover:text-slate-600 hover:border-slate-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div id='home' className={`${isOpen ? "" : "hidden"} w-full lg:inline-flex lg:w-auto`}>
            {/* Write a Menu using tailwindcss with backgroun bg-primary-gray hover and selected primary-gray-light and selected and hover underline primary-red */}
            <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <li className="text-sm lg:text-base lg:mr-5  hover:bg-primary-red py-3  p-5 hover:border-b hover:border-b-primary-red text-primary-gray hover:text-white">
                <a href="#home" className="block lg:inline-block lg:mt-0  lg:mr-4">
                  Home
                </a>
              </li>

              <li className="text-sm lg:text-base lg:mr-5  hover:bg-primary-red py-3 p-5 hover:border-b hover:border-b-primary-red text-primary-gray hover:text-white">
                <a href="#services" className="block lg:inline-block lg:mt-0  lg:mr-4">
                  Services
                </a>
              </li>

              <li className="text-sm lg:text-base lg:mr-5  hover:bg-primary-red py-3 p-5 hover:border-b hover:border-b-primary-red text-primary-gray hover:text-white">
                <a href="#why-us" className="block lg:inline-block lg:mt-0  lg:mr-4">
                  Why Us
                </a>
              </li>

              <li className="text-sm lg:text-base lg:mr-5  hover:bg-primary-red py-3 p-5 hover:border-b hover:border-b-primary-red text-primary-gray hover:text-white">
                <a href="#about" className="block lg:inline-block lg:mt-0  lg:mr-4 ">
                  About
                </a>
              </li>
              <li className="text-sm lg:text-base lg:mr-5  bg-primary-red text-white py-3 p-5 hover:border-b hover:border-b-primary-red hover:text-white">
                <a href="#contact" className="block lg:inline-block lg:mt-0 lg:mr-4 ">
                  Contact
                </a>
              </li>
            </ul>

        </div>

      </nav>
    </header>
  );
}

export default Header;