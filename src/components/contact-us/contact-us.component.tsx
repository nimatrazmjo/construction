"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';

const Contact: React.FC = () => {
    return (
        <div className="bg-primary-gray text-white pt-20" id='contact'>
        <h2 className="text-5xl uppercase font-thin mb-10 text-center">Contact Us</h2>
        <hr className="border-primary-red border w-36 mb-10 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 py-20">
          <div className="flex flex-col justify-center mx-auto">
            <div className="flex items-center mb-8">
              <Image src="/icons/location.svg" alt="location" width={50} height={50} />
              <div className="ml-4">
                <h3 className="text-xl">Address</h3>
                <p className="text-xl italic leading-7 font-thin">1234 Main St, San Francisco, CA 94122</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <Image src="/icons/call.svg" alt="phone" width={50} height={50} />
              <div className="ml-4">
                <h3 className="text-xl">Phone</h3>
                <p className="text-xl italic leading-7 font-thin">+1 415 555 2671</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src="/icons/message.svg" alt="email" width={50} height={50} />
              <div className="ml-4">
                <h3 className="text-xl">Email</h3>
                <p className="text-xl italic leading-7 font-thin">
                  <a href="mailto:abc@gmail.com" className="text-white hover:underline">abc@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <iframe
              title="Map"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-81.547136,42.691907,-76.273699,44.521364&layer=mapnik`}
            ></iframe>
          </div>
        </div>
      </div>

    );
};

export default Contact;
