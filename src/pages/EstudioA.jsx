import React from 'react';

const EstudioA = () => {
  return (
    <div className="studio-page">
      {/* Hero Estudio A */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="studio-indicator">
              <span className="current-studio">ESTUDIO A</span>
            </div>
            <h1 className="hero-title">EL ESPACIO IDEAL</h1>
            <p className="hero-subtitle">
              Nuestro Estudio A es el espacio ideal y el más equipado para producciones de gran envergadura
            </p>
            <p className="hero-description">
              Desde 1980, el estudio de Latinoamérica que destaca en el mundo. Contamos con más créditos en producciones ganadoras de premios internacionales, entre ellos Grammys latinos e internacionales, Billboard Awards y Premios Gardel.
            </p>
            <div className="hero-buttons">
              <a href="https://api.whatsapp.com/send?phone=541162218021&text=🐼" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                CONTACTANOS
              </a>
              <a href="#caracteristicas" className="btn btn-secondary">
                VER CARACTERÍSTICAS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Características del Estudio A */}
      <div className="section section-dark" id="caracteristicas">
        <div className="container">
          <h2>CARACTERÍSTICAS DEL ESTUDIO A</h2>
          <p className="section-subtitle">
            El estudio más amplio y versátil de nuestras instalaciones, diseñado para grabaciones de bandas completas y producciones de gran formato.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎛️</div>
              <h3>CONSOLA DE MEZCLA</h3>
              <p>Consola analógica profesional de alta gama con capacidad para múltiples canales y procesamiento de señal premium.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎸</div>
              <h3>SALA AMPLIA</h3>
              <p>Espacio de grabación de 120m² con techos altos, ideal para sesiones de bandas completas y instrumentos acústicos.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎚️</div>
              <h3>OUTBOARD PREMIUM</h3>
              <p>Procesadores analógicos de última generación, compresores vintage y efectos profesionales.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>MICRÓFONOS SELECTOS</h3>
              <p>Colección de micrófonos de condensador, dinámicos y de cinta de las mejores marcas mundiales.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎧</div>
              <h3>MONITOREO DE PRECISIÓN</h3>
              <p>Monitores de estudio de referencia y sistemas de auriculares profesionales para mezcla crítica.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💿</div>
              <h3>GRABACIÓN DIGITAL</h3>
              <p>Sistema Pro Tools HDX con conversores de alta definición para máxima calidad de audio.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Proyectos Destacados */}
      <div className="section">
        <div className="container">
          <h2>PROYECTOS DESTACADOS</h2>
          <p className="section-subtitle">
            Algunos de los trabajos más reconocidos realizados en nuestro Estudio A
          </p>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">🏆</div>
              <h4>La Portuaria</h4>
              <p>Grabación y mezcla de álbum ganador de Premio Gardel</p>
              <span className="award">Grammy Latino - Mejor Álbum Rock</span>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎵</div>
              <h4>Frenkel</h4>
              <p>Producción completa de álbum debut aclamado por la crítica</p>
              <span className="award">Billboard Award - Artista Revelación</span>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎼</div>
              <h4>Bilinkis</h4>
              <p>Grabación de sinfónico con orquesta de 40 músicos</p>
              <span className="award">Premios Gardel - Mejor Álbum Instrumental</span>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎹</div>
              <h4>Schachtel</h4>
              <p>Proyecto experimental de música electrónica y jazz</p>
              <span className="award">Mejor Álbum Alternativo</span>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🥇</div>
              <h4>Nuevo Tesoro Musical</h4>
              <p>Compilado de artistas emergentes grabado íntegramente en Estudio A</p>
              <span className="award">Disco de Oro - Ventas</span>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎺</div>
              <h4>Colaboraciones Internacionales</h4>
              <p>Grabaciones con artistas de Estados Unidos, España y Brasil</p>
              <span className="award">Múltiples nominaciones Grammy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contacto Rápido */}
      <div className="section">
        <div className="container">
          <h2>RESERVA TU SESIÓN</h2>
          <p className="section-subtitle">
            Contactanos para conocer disponibilidad y tarifas del Estudio A
          </p>
          
          <div className="contact-grid">
            <div>
              <div className="contact-item">
                <strong>WhatsApp Directo:</strong>
                <p>
                  <a href="https://api.whatsapp.com/send?phone=541162218021&text=🐼%20Consulta%20sobre%20Estudio%20A" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{color: 'var(--current-accent)', textDecoration: 'none'}}>
                    +54 11 6221-8021
                  </a>
                </p>
              </div>
              
              <div className="contact-item">
                <strong>Email:</strong>
                <p>estudioa@estudiospanda.com.ar</p>
              </div>
              
              <div className="contact-item">
                <strong>Horarios:</strong>
                <p>Lunes a Viernes: 9:00 - 22:00<br />Sábados: 10:00 - 20:00</p>
              </div>
              
              <div className="contact-item">
                <strong>Ubicación:</strong>
                <p>Buenos Aires, Argentina<br />Palermo - Villa Crespo</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Consulta Rápida</h3>
              <form>
                <input type="text" placeholder="Nombre completo" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Teléfono" />
                <select required>
                  <option value="">Tipo de proyecto</option>
                  <option value="album">Álbum completo</option>
                  <option value="single">Single/EP</option>
                  <option value="demo">Demo</option>
                  <option value="mixing">Solo mezcla</option>
                  <option value="mastering">Solo masterización</option>
                  <option value="other">Otro</option>
                </select>
                <textarea placeholder="Comentario o mensaje" rows="4"></textarea>
                <button type="submit" className="btn btn-primary">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudioA;
