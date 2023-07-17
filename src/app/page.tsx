import ContactForm from '../components/contact-us/contact-us.component';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';
import Landing from '../components/home/landing.component';
import Slideshow from '../components/home/slideshow.component';
import Services from '../components/services/services.component';
import Team from '../components/team/team.component';
import Testimonial from '../components/testimonial/testimonial.component';
import Why from '../components/why-us/why-us.componenet';



const Home = () => {
    return (
    <div className='flex flex-col bg-slate-50 text-primary-gray mx-auto max-w-screen-2xl min-h-screen'>
        <Header />
        <Landing />
        <Services />
        <Why />
        {/* <Slideshow /> */}
        {/* <Team /> */}
        <Testimonial />
        <ContactForm />
        <Footer />
    </div>
    )
};

export default Home;
