import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import CurrencyConverter from '../components/CurrencyConverter';

function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <CurrencyConverter />
      <Footer />
    </div>
  );
}

export default HomePage;
