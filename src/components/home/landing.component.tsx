import Image from 'next/image';
import { useState } from 'react';

const Landing: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 my-20 lg:my-5 lg:min-h-[80vh] items-center px-10">
            <div className="flex flex-col row-start-2 lg:row-start-1 col-start-1">
                <h2 className="text-3xl md:text-6xl text-primary-gray font-bold mb-5 tracking-widest">
                    Your Trusted Construction Partner
                </h2>
                <p className="leading-7 md:leading-10 text-base md:text-lg text-primary-gray_light">
                    20+ years' experience delivering quality builds and renovations in Greater Toronto. From custom homes to kitchen remodels, our skilled team offers comprehensive services. Contact us for exceptional craftsmanship and cost-effective solutions.
                </p>
                <button className="bg-primary-red text-white py-2 px-4 mt-5 rounded-md">Contact Us</button>
            </div>
            <div className="flex flex-col row-start-1 col-start-1 lg:col-start-2">
                <Image src="/img/landing.jpg" width={600} height={600} alt="Landing" />
            </div>
        </div>

    );
};

export default Landing;