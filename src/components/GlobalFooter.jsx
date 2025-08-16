import React from 'react';
import pandaLogo from '../assets/pandalogo.png';

const GlobalFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo-container">
              <img 
                src={pandaLogo} 
                alt="Estudios Panda" 
                className="footer-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="footer-logo-fallback" style={{display: 'none'}}>
                <h2 style={{color: '#d4af37', fontSize: '2rem', fontFamily: 'Inter', fontWeight: '700', margin: 0}}>ESTUDIOS PANDA</h2>
              </div>
            </div>
            <p>
              El estudio de grabación latinoamericano que destaca en el mundo. 
              Desde 1980 trabajando con los mayores estándares internacionales.
            </p>
          </div>
          
          <div className="footer-section footer-links">
            <h3>NAVEGACIÓN</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/estudio-a">Estudio A</a></li>
              <li><a href="/estudio-b">Estudio B</a></li>
              <li><a href="/albumes">Álbumes</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <h3>CONTACTO</h3>
            <div className="contact-info">
              <p>Av. Segurola 1289, Buenos Aires</p>
              <p>+54 011 6221 8021</p>
              <p>info@estudiospanda.com.ar</p>
              <p>@estudiospanda</p>
              <p>Servicios 24hs</p>
            </div>
          </div>

          <div className="footer-section footer-cta">
            <h3>CONSULTAS</h3>
            <p>¿Tenés un proyecto en mente?</p>
            <div className="footer-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=541162218021&text=Hola!%20Quiero%20consultar%20sobre%20servicios%20de%20grabación" 
                className="footer-btn footer-btn-primary" 
                target="_blank" 
                rel="noopener noreferrer" >
                WhatsApp
              </a>
              <a href="/contacto" className="footer-btn footer-btn-secondary">
                Formulario
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>&copy; 2025 Estudios Panda. Todos los derechos reservados. Grabado, mezclado y masterizado en Estudios Panda</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
