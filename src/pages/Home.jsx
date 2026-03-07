import React from 'react';
import Hero from '../components/hero/Hero.jsx';
import AboutUs from '../components/aboutUs/AboutUs.jsx';
import StatsSection from '../components/stats/StatsSection.jsx';
import ServicesSection from '../components/services/Services.jsx';
import WorkProcess from '../components/workprocess/Workprocess.jsx';
import Footer from '../components/footer/Footer.jsx';
import Industries from '../components/marketing-solution/MarketingSolutions.jsx';
import ContactForm from '../components/contactForm/ContactForm.jsx';
import BrandsSlider from '../components/services/Services.jsx';
import Testimonials from '../components/testimonial/Testimonial.jsx';
import ScreenshotsSlider from '../components/portfolio/Portfolio.jsx';
const Home = () => {
  
  
  return (
    <>

      < Hero />
      <ServicesSection />
      <AboutUs />
      <WorkProcess />
      <StatsSection />
      {/* <Industries /> */}
      {/* 
      <ContactForm />
      <BrandsSlider />
      <Testimonials />  
      */}

    </>
  );
};

export default Home;