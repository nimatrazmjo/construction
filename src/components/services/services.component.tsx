import Image from 'next/image';
import React from 'react';

const Services: React.FC = () => {
  return (
    <div id='services' className="flex flex-col items-center bg-primary-gray text-white py-20">
      <h2 className="text-5xl uppercase font-thin mb-10 text-center">Our Services</h2>
      <hr className="border-primary-red border w-36" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        <div className="flex flex-col items-center rounded-lg px-8 py-10">
          <Image src="https://via.placeholder.com/150" className='rounded-sm my-5' alt="renovations" width={150} height={150} />
          <h3 className="text-2xl uppercase font-extralight mb-3 text-center">New Build/Custom Homes</h3>
          <p className="text-center leading-8 font-extralight text-xl">We specialize in creating exceptional custom homes, tailored to your unique vision and requirements.</p>

        </div>

        <div className="flex flex-col items-center rounded-lg px-8 py-10">
          <Image src="https://via.placeholder.com/150" className='rounded-sm my-5' alt="renovations" width={150} height={150} />
          <h3 className="text-2xl uppercase font-extralight mb-3 text-center">Renovations</h3>
          <p className="text-center leading-8 font-extralight text-xl">From basement, kitchen, and bathroom renovations to transforming restaurants, offices, and stores, we handle all types of renovation projects.</p>

        </div>

        <div className="flex flex-col items-center rounded-lg px-8 py-10">
          <Image src="https://via.placeholder.com/150" className='rounded-sm my-5' alt="repairs" width={150} height={150} />
          <h3 className="text-2xl uppercase font-extralight mb-3 text-center">Repairs and Restorations</h3>
          <p className="text-center leading-8 font-extralight text-xl">We excel in repairing and restoring occupied and fully operational job sites, ensuring minimal disruption and top-notch results.</p>

        </div>
      </div>
    </div>


  );
};

export default Services;