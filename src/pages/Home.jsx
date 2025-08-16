import React from 'react';
import pandaLogo from '../assets/pandalogo.png';

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-logo">
            <img src={pandaLogo} alt="Estudios Panda Logo" className="hero-logo-img" />
          </div>
          <h1>ESTUDIOS PANDA</h1>
          <p className="hero-subtitle">El estudio de grabación latinoamericano que destaca en el mundo</p>
          <p className="hero-description">Desde 1980 trabajando con los mayores estándares internacionales</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">Ver Portfolio</a>
            <a href="#contacto" className="btn btn-secondary">Contacto</a>
          </div>
        </div>
      </div>
      
      {/* About */}
      <div id="nosotros" className="section">
        <div className="container">
          <h2>GRABADO, MEZCLADO Y MASTERIZADO EN ESTUDIOS PANDA</h2>
          <div className="about-content">
            <div className="about-text">
              <p>En la región somos el que cuenta con más créditos en producciones ganadoras de premios internacionales, entre ellos <strong>Grammys latinos e internacionales, Billboards awards y Premios Gardel</strong>.</p>
              <p>Trabajamos con los mayores estándares Internacionales, con ingenieros especialistas y las entregas finales son aptas para plataformas digitales, cd, vinilos, radio, tv y cine.</p>
              <p>Estamos detrás de grandes éxitos que suenan en el día a día, y también podemos contribuir al éxito del tuyo.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>45+</h3>
                <p>Años de experiencia</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Producciones</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Premios ganados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studios Preview */}
      <div className="section section-dark">
        <div className="container">
          <h2>NUESTROS ESTUDIOS</h2>
          <div className="studios-preview">
            <div className="studio-card studio-a-card">
              <div className="studio-image">
                <img src="https://estudiospanda.com.ar/wp-content/uploads/2023/03/3.png" alt="Estudio A" />
              </div>
              <div className="studio-content">
                <h3>ESTUDIO A</h3>
                <p>Nuestro estudio principal, el espacio ideal y el más equipado para producciones de alto nivel y artistas internacionales.</p>
                <ul>
                  <li>Consola SSL de última generación</li>
                  <li>Pro Tools HDX</li>
                  <li>Amplia selección de micrófonos vintage</li>
                  <li>Sala de grabación de 40m²</li>
                </ul>
                <button className="btn btn-primary" onClick={() => window.location.href = '#estudio-a'}>
                  Ver Estudio A
                </button>
              </div>
            </div>
            
            <div className="studio-card studio-b-card">
              <div className="studio-image">
                <img src="https://estudiospanda.com.ar/wp-content/uploads/2023/03/E7AC3E84-95B5-4AE7-B7AD-01AB48F30677.png" alt="Estudio B" />
              </div>
              <div className="studio-content">
                <h3>ESTUDIO B</h3>
                <p>Espacio versátil perfecto para grabaciones profesionales, ideal para artistas independientes y proyectos creativos.</p>
                <ul>
                  <li>Consola analógica profesional</li>
                  <li>Pro Tools HD</li>
                  <li>Selección de micrófonos profesionales</li>
                  <li>Sala de grabación de 25m²</li>
                </ul>
                <button className="btn btn-primary" onClick={() => window.location.href = '#estudio-b'}>
                  Ver Estudio B
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services */}
      <div id="servicios" className="section">
        <div className="container">
          <h2>NUESTROS SERVICIOS</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Grabación</h3>
              <p>Grabación profesional con equipos de última generación</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎛️</div>
              <h3>Mezcla</h3>
              <p>Mezcla profesional que resalta cada elemento</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎵</div>
              <h3>Masterización</h3>
              <p>Masterización para todas las plataformas digitales</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎸</div>
              <h3>Producción</h3>
              <p>Producción musical integral</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div id="portfolio" className="section section-dark">
        <div className="container">
          <h2>NUESTRO PORTFOLIO</h2>
          <p className="section-subtitle">Explorá una selección única de producciones musicales trabajadas con los mayores estándares internacionales</p>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">🎼</div>
              <h4>La Portuaria</h4>
              <p>Frenkel, Bilinkis, Schachtel</p>
              <span className="award">🏆 Premio Gardel</span>
              <span className="studio-tag">Estudio A</span>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">🎹</div>
              <h4>Nuevo Tesoro</h4>
              <p>Producción Digital</p>
              <span className="award">🏆 Disco de Oro</span>
              <span className="studio-tag">Estudio B</span>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">🎻</div>
              <h4>Música Clásica</h4>
              <p>Orquesta Sinfónica</p>
              <span className="award">🏆 Grammy Latino</span>
              <span className="studio-tag">Estudio A</span>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">🥁</div>
              <h4>Rock Nacional</h4>
              <p>Bandas Emergentes</p>
              <span className="award">🏆 Billboard</span>
              <span className="studio-tag">Estudio B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
