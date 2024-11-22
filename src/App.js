import React from 'react';
import Header from './components/Header';
import About from './components/About';
import CurrencyConverter from './components/CurrencyConverter';
import Footer from './components/Footer';
import Huellitas from './components/Huellitas';
import './styles/App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#about">Sobre mí</a>
        <a href="#converter">Proyectos</a>
        <a href="#footer">Contacto</a>
      </nav>
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id='converter'>
        <h1>PROYECTOS</h1>
        <div className='convertidor'>
          <CurrencyConverter />
          <Huellitas></Huellitas>


        </div>


      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
