// Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1>Contacto</h1>
      <p>¿Tienes algún proyecto o idea en mente? ¡Hablemos!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" placeholder="Tu correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
