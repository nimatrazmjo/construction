import { Metadata } from 'next';
import Head from 'next/head';
import ContactForm from '../components/contact-us/contact-us.component';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';
import Slideshow from '../components/home/slideshow.component';
import Services from '../components/services/services.component';
import Why from '../components/why-us/why-us.componenet';

export const metadata: Metadata = {
    title: 'Aiken Construction - Your Reliable Partner for Construction Projects',
    description: 'Aiken Construction specializes in new builds, renovations, and repairs of homes, offices, and more. With over 20 years of combined experience, we deliver high-quality results in the Greater Toronto Area.',
    keywords: 'construction, new builds, renovations, repairs, homes, offices, Greater Toronto Area, skilled team, experienced, local expertise, quality results',
}

const Home = () => {
    return (
        <>
            <Head>


                <link rel="canonical" href="https:/aikenconstruction.ca/" />
                <meta property="og:url" content="https:/aikenconstruction.ca/" />
                <meta property="og:image" content="https:/aikenconstruction.ca/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Aiken Construction - Building Excellence in the GTA" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@aikenconstruction" />
                <meta name="twitter:creator" content="@aikenconstruction" />
                <link rel="application-name" href="Aiken Construction" />
            </Head>
            <div className='flex flex-col bg-slate-50 text-primary-gray mx-auto max-w-screen-2xl min-h-screen'>
                <Header />
                <Slideshow />
                <Why />

                <Services />
                <ContactForm />
                <Footer />
            </div>
        </>
    )
};

export default Home;
