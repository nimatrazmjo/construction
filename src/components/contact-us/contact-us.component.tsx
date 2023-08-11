"use client";

const Contact: React.FC = () => {

    return (
        <div className="flex justify-center flex-col items-center" id="contact">
            <h2 className="text-5xl uppercase font-thin my-20 text-center">Contact Us</h2>
            <hr className="border-primary-red border w-36" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl my-10">
                <div className="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"><path d="M12 22.81c-.69 0-1.34-.35-1.8-.96l-1.5-2a.472.472 0 0 0-.2-.1H8c-4.17 0-6.75-1.13-6.75-6.75V8c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25H8Z" fill="#d80000"></path><path d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM16 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z" fill="#d80000"></path></svg>
                    <h3 className="text-2xl font-semibold my-5">Email Us:</h3>
                    <p className="text-center text-gray-600 my-3">

Don&apos;t hesitate to reach out to us for any inquiries you may have. Whether it&apos;s about pricing, our services, or anything else, our team is here to help. We value your questions and are dedicated to providing you with the information you need. Feel free to contact us via email – we&apos;re ready to assist you!
                    </p>
                    <a href="mailto:info@aikenconstruction.ca" className="mt-2 text-primary-red hover:underline">
                        info@aikenconstruction.ca
                    </a>
                </div>
                <div className="flex flex-col items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"><path d="M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06-1.17-.86-2.3-1.82-3.37-2.87-1.06-1.07-2.02-2.2-2.87-3.36-.86-1.2-1.55-2.4-2.04-3.56-.52-1.24-.78-2.44-.78-3.57 0-.78.14-1.52.41-2.21.28-.71.73-1.37 1.34-1.94.77-.76 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.49.56.95 1.07 1.41 1.54.59.58 1.08 1.04 1.54 1.42.57.48.94.72 1.16.83l-.02.05.73-.72c.31-.31.61-.54.9-.69.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.37.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41-.21.45-.47.84-.8 1.2-.57.63-1.19 1.08-1.91 1.37-.69.28-1.44.43-2.23.43Zm-11.86-20c-.55 0-1.06.24-1.55.72-.46.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26.8 1.1 1.71 2.17 2.71 3.18 1 .99 2.08 1.91 3.19 2.72 1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5a.757.757 0 0 0-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.22-.09-.31-.18-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3l-.27-.12c-.41-.22-.89-.56-1.42-1.01-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62-.47-.55-.81-1.02-1.02-1.41l-.12-.3c-.06-.23-.08-.36-.08-.5 0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.07-.16-.18-.34-.32-.53L6.46 3.17a.922.922 0 0 0-.37-.31c-.16-.07-.33-.11-.5-.11Zm8.36 12.26-.16.68.27-.7c-.05-.01-.09 0-.11.02Z" fill="#d80000"></path></svg>
                    <h3 className="text-2xl font-semibold my-5">Call Us:</h3>
                    <p className="text-center text-gray-600 my-3">

Call us to connect with our dedicated team. Whether you have questions, need assistance, or want to discuss your project, we&apos;re here to provide the support you need. Our commitment to helping you is unwavering – we&apos;re always available to lend a hand. Reach out via phone, and let&apos;s start talking today!
                    </p>
                    <p className="mt-2 text-primary-red font-medium">+1 (437) 774-9486</p>
                    <p className="text-primary-red font-medium">+1 (416) 618-4435</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
