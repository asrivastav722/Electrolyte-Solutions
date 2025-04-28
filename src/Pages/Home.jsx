import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Services from '../Sections/Services';
import WhyChoose from '../Sections/WhyChoose';
import Footer from '../Sections/Footer';
import Contact from '../Sections/Contact';

const Home = () => {

  return (
    <div className='h-100 w-100 '>
        <Hero/>
        <About/>
        <Services/>
        <WhyChoose/>
        <Contact/>
        <Footer/>
    </div>
  );
};

export default Home;
