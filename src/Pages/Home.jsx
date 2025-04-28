import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Services from '../Sections/Services';
import WhyChoose from '../Sections/WhyChoose';
import Footer from '../Sections/Footer';
import Contact from '../Sections/Contact';

const ElectrolyteSolutions = () => {

  return (
    <div>
      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About/>

      {/* Services Section */}
      <Services/>

      {/* Why Choose Us Section */}
      <WhyChoose/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
        <Footer/>
    </div>
  );
};

export default ElectrolyteSolutions;
