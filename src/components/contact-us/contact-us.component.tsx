"use client";
import { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex justify-center flex-col items-center  bg-primary-gray" id='contact'>
          <h2 className="text-5xl uppercase font-thin my-20 text-center text-white">Contact Us</h2>
          <hr className="border-primary-red border w-36" />
            <form onSubmit={handleSubmit} className="w-1/2 p-6 pb-20 rounded-md bg-primary-gray text-white">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-xl font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-primary-gray_light border border-gray-600 rounded-md text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-xl font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-primary-gray_light border border-gray-600 rounded-md text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-xl font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-primary-gray_light border border-gray-600 rounded-md resize-none text-white"
                        rows={4}
                        required
                    />
                </div>
                <button type="submit" className="bg-primary-red text-white py-2 px-4 rounded-md hover:bg-opacity-80">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
