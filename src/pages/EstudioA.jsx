import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  if (!images || images.length === 0) {
    return <div style={{color: 'white', padding: '20px'}}>No hay imágenes disponibles</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '15px'
          }}
        />
        <div className="carousel-caption">
          <h4>{images[currentIndex].title}</h4>
          <p>{images[currentIndex].description}</p>
        </div>
        
        <button 
          className="carousel-btn carousel-btn-prev" 
          onClick={goToPrevious}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}
        >
          &#8249;
        </button>
        <button 
          className="carousel-btn carousel-btn-next" 
          onClick={goToNext}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}
        >
          &#8250;
        </button>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px'}}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex ? '#38bdf8' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const EstudioA = () => {
  // Imágenes del carrusel del Estudio A
  const studioImages = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Consola de mezcla profesional",
      title: "Consola Analógica Premium",
      description: "Consola de mezcla de alta gama con 64 canales y procesamiento vintage"
    },
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sala de grabación amplia",
      title: "Sala de Grabación Principal",
      description: "120m² de espacio acústicamente tratado para bandas completas"
    },
    {
      src: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Equipo outboard vintage",
      title: "Outboard Vintage Collection",
      description: "Compresores, EQs y efectos analógicos de las mejores marcas"
    },
    {
      src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Micrófofos profesionales",
      title: "Microfonía Selecta",
      description: "Colección de micrófonos de condensador, dinámicos y de cinta"
    },
    {
      src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Monitores de estudio",
      title: "Sistema de Monitoreo",
      description: "Monitores de referencia y auriculares para mezcla de precisión"
    }
  ];

  return (
    <div className="studio-page">
      {/* Hero Estudio A */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content-centered">
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
              <a href="#galeria" className="btn btn-secondary">
                VER GALERÍA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Galería del Estudio A */}
      <div className="section section-dark" id="galeria">
        <div className="container">
          <h2>GALERÍA DEL ESTUDIO A</h2>
          <p className="section-subtitle">
            Descubre nuestras instalaciones y equipamiento de primer nivel
          </p>
          <div className="gallery-carousel-container">
            <div style={{
              background: 'rgba(0,0,0,0.3)', 
              padding: '30px', 
              borderRadius: '20px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <ImageCarousel images={studioImages} />
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

      {/* Servicios Especializados */}
      <div className="section section-dark">
        <div className="container">
          <h2>SERVICIOS ESPECIALIZADOS</h2>
          <p className="section-subtitle">
            Servicios profesionales adaptados a las necesidades de cada proyecto
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎛️</div>
              <h3>GRABACIÓN MULTIPISTA</h3>
              <p>Grabación simultánea de hasta 64 canales con sincronización perfecta para bandas y orquestas.</p>
              <ul>
                <li>Grabación en vivo</li>
                <li>Overdubs profesionales</li>
                <li>Edición de precisión</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎚️</div>
              <h3>MEZCLA ANALÓGICA</h3>
              <p>Mezcla en consola analógica con procesamiento outboard vintage para ese sonido cálido y característico.</p>
              <ul>
                <li>Compresores vintage</li>
                <li>EQs analógicos</li>
                <li>Efectos de hardware</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💎</div>
              <h3>MASTERIZACIÓN</h3>
              <p>Masterización profesional con monitores de referencia y procesadores de alta gama.</p>
              <ul>
                <li>Mastering para streaming</li>
                <li>Mastering para vinilo</li>
                <li>Versiones para radio</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎼</div>
              <h3>PRODUCCIÓN MUSICAL</h3>
              <p>Servicios de producción integral desde la preproducción hasta el producto final.</p>
              <ul>
                <li>Arreglos musicales</li>
                <li>Sesiones de músicos</li>
                <li>Dirección artística</li>
              </ul>
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
