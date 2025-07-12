import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Industryusecases from './components/Industryusecases' ;
import ContactSection from './components/ContactSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Industryusecases />
      <ContactSection />
      <FAQsection/>
      <Footer />
    </div>
  );
};

export default App;