import React from "react";
interface WhyChooseUs {
    id: number;
    title: string;
    description: string;
    icon: string;
}
const Why: React.FC = () => {

    const whyChooseUs: WhyChooseUs[] = [
        {
            id: 1,
            title: "Expertise and Experience",
            description: "With extensive construction industry experience, our skilled team delivers exceptional results on every project.",
            icon: "1.svg"
        },
        {
            id: 2,
            title: "Quality Workmanship",
            description: "We strive for top-notch work and service. Our skilled team delivers projects promptly, within budget, and to the highest standards.",
            icon: "2.svg"
        },
        {
            id: 3,
            title: "Customer Satisfaction",
            description: "Customer satisfaction is our priority. We exceed expectations through strong relationships, open communication, and transparency.",
            icon: "3.svg"
        },
        {
            id: 4,
            title: "Timely Project Completion",
            description: "We value time and money. Our dedicated professionals complete projects on time, within budget, and to high standards.",
            icon: "4.svg"
        }

    ];
    return (
        <div id='why-us' className="flex flex-col items-center min-h-[50vh]  py-20">
            <h2 className="text-5xl uppercase font-thin mb-10 text-center">Why CHoose Us</h2>
            <hr className="border-primary-red border w-36" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
                {whyChooseUs.map((item) => (
                    <div className="flex flex-col items-center rounded-lg px-8 py-10">
                        <img src={`/icons/${item.icon}`} className='rounded-sm my-5' alt="renovations" width={150} height={150} />
                        <h3 className="text-2xl uppercase font-extralight mb-3 text-center">{item.title}</h3>
                        <p className="text-center leading-8 font-extralight text-xl text-primary-gray_light">{item.description}</p>

                    </div>
                ))}
            </div>
        </div>

    );
}

export default Why;