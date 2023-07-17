"use client";

import React, { useState } from 'react';

const Testimonial: React.FC = () => {
    const testimonials = [
        {
            name: 'John Smith',
            position: 'CEO, ABC Company',
            image: 'https://via.placeholder.com/150',
            testimonial:
                'I am extremely impressed with the construction services provided by XYZ Construction. They delivered exceptional results, completing the project on time and within budget. The quality of their workmanship and attention to detail exceeded my expectations. I highly recommend XYZ Construction for any construction project.',
        },
        {
            name: 'Emily Davis',
            position: 'Project Manager, XYZ Corporation',
            image: 'https://via.placeholder.com/150',
            testimonial:
                'Working with ABC Construction was a fantastic experience. Their team demonstrated professionalism, expertise, and a strong commitment to delivering high-quality work. They effectively communicated throughout the project, ensuring that our needs were met and exceeded. I would gladly collaborate with ABC Construction again in the future.',
        },
        {
            name: 'Michael Johnson',
            position: 'Homeowner',
            image: 'https://via.placeholder.com/150',
            testimonial:
                'I want to express my sincere appreciation to LMN Construction for their outstanding work on my home renovation. They transformed my space beyond my imagination. The team was skilled, reliable, and respectful throughout the entire process. I am thrilled with the final results, and I highly recommend LMN Construction to anyone seeking top-notch construction services.',
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (

        <div className="flex flex-col items-center rounded-t-lg px-8 py-20">
            <h2 className="text-5xl uppercase font-thin mb-10 text-center">
                WHAT OUR CLIENTS SAY
            </h2>

            <hr className="border-primary-red border w-36 mb-10" />
            <figure className="max-w-screen-md mx-auto text-center">

                <svg className="w-10 h-10 mx-auto mb-3 text-primary-red" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic leading-10 font-thin ">{testimonials[currentTestimonial].testimonial}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src={testimonials[currentTestimonial].image} alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-primary-gray_light dark:divide-gray-700">
                        <cite className="pr-3 font-medium "> {testimonials[currentTestimonial].name} {' '}</cite>
                        <cite className="pl-3 text-sm ">  {testimonials[currentTestimonial].position}</cite>
                    </div>
                </figcaption>
            </figure>
            <div className="flex justify-center my-10">
            {
                testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-2 rounded-full cusror:pointer ${
                            index === currentTestimonial
                                ? 'bg-primary-red'
                                : 'bg-primary-gray_light'
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                    />
                ))}
            </div>
        </div>

    );
};

export default Testimonial;
