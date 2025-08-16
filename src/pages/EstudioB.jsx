import React from 'react';

const EstudioB = () => {
  return (
    <div className="studio-page">
      {/* Hero Estudio B */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content-centered">
            <div className="studio-indicator">
              <span className="current-studio">ESTUDIO B</span>
            </div>
            <h1 className="hero-title">ESTUDIO B</h1>
            <p className="hero-subtitle">
              Espacio versátil y profesional para proyectos creativos
            </p>
            <p className="hero-description">
              El Estudio B ofrece un ambiente perfecto para grabaciones profesionales, 
              ideal para artistas independientes y proyectos creativos que buscan calidad y flexibilidad.
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

      {/* Características principales */}
      <div className="section section-dark" id="caracteristicas">
        <div className="container">
          <h2>CARACTERÍSTICAS DEL ESTUDIO B</h2>
          <p className="section-subtitle">
            Equipamiento profesional y ambiente creativo para dar vida a tus ideas musicales
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎛️</div>
              <h3>Consola Analógica</h3>
              <p>Consola Neve analógica que aporta el carácter y calidez únicos que caracterizan las grabaciones profesionales.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Pro Tools HD</h3>
              <p>Sistema Pro Tools HD confiable y versátil para grabación y edición digital de calidad profesional.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔊</div>
              <h3>Monitoreo Clásico</h3>
              <p>Monitores Yamaha NS-10 y KRK, referencias clásicas en la industria musical para mezcla y masterización.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎤</div>
              <h3>Micrófonos Pro</h3>
              <p>Selección cuidadosa de micrófonos profesionales: Shure, Sennheiser, Audio-Technica, y más.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Sala Versátil</h3>
              <p>Sala de grabación de 25m² con tratamiento acústico versátil, perfecta para bandas y solistas.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎸</div>
              <h3>Backline Completo</h3>
              <p>Amplificadores, teclados, batería completa y accesorios disponibles para sesiones ágiles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipamiento técnico */}
      <div className="section section-dark">
        <div className="container">
          <h2>EQUIPAMIENTO TÉCNICO</h2>
          <p className="section-subtitle">
            Tecnología de vanguardia para grabaciones de calidad profesional
          </p>
          
          <div className="equipment-grid">
            <div className="equipment-card">
              <h3>Consola y Audio Digital</h3>
              <ul className="equipment-list">
                <li>Consola Neve 8816 Summing Mixer</li>
                <li>Pro Tools HD Native con interfaces</li>
                <li>Conversores Focusrite Red 4Pre</li>
                <li>Preamplificadores Warm Audio WA273-EQ</li>
              </ul>
            </div>
            
            <div className="equipment-card">
              <h3>Micrófonos</h3>
              <ul className="equipment-list">
                <li>Shure SM57, SM58, Beta 57A</li>
                <li>Sennheiser MD421, e609</li>
                <li>Audio-Technica AT4040, AT2020</li>
                <li>AKG D112, C214</li>
                <li>Rode NTK (Válvulas)</li>
              </ul>
            </div>
            
            <div className="equipment-card">
              <h3>Monitoreo</h3>
              <ul className="equipment-list">
                <li>Yamaha NS-10M Studio (Referencia)</li>
                <li>KRK Rokit 8 G3</li>
                <li>Behringer Truth B2030A</li>
                <li>Auriculares Sony MDR-7506</li>
              </ul>
            </div>
            
            <div className="equipment-card">
              <h3>Instrumentos y Backline</h3>
              <ul className="equipment-list">
                <li>Batería Pearl Export completa</li>
                <li>Amplificador Marshall JCM900</li>
                <li>Amplificador Fender Twin Reverb</li>
                <li>Teclado Yamaha P-125</li>
                <li>Bajo Fender Precision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trabajos realizados */}
      <div className="section section-dark">
        <div className="container">
          <h2>TRABAJOS REALIZADOS EN ESTUDIO B</h2>
          <p className="section-subtitle">
            Proyectos destacados que muestran la versatilidad y calidad del estudio
          </p>
          
          <div className="portfolio-grid">
            <div className="portfolio-card featured">
              <div className="portfolio-icon">🎹</div>
              <div className="portfolio-content">
                <h4>Nuevo Tesoro Digital</h4>
                <p className="portfolio-artist">Artistas Independientes</p>
                <div className="portfolio-award">
                  <span className="award-icon">🏆</span>
                  Disco de Oro
                </div>
                <p className="portfolio-description">
                  Compilado de nuevos talentos latinoamericanos grabado completamente en Estudio B.
                </p>
              </div>
            </div>
            
            <div className="portfolio-card">
              <div className="portfolio-icon">🥁</div>
              <div className="portfolio-content">
                <h4>Rock Nacional Emergente</h4>
                <p className="portfolio-artist">Bandas Independientes</p>
                <div className="portfolio-award">
                  <span className="award-icon">🏆</span>
                  Billboard Latin
                </div>
                <p className="portfolio-description">
                  Grabaciones de bandas de rock nacional con sonido moderno y potente.
                </p>
              </div>
            </div>
            
            <div className="portfolio-card">
              <div className="portfolio-icon">🎶</div>
              <div className="portfolio-content">
                <h4>Folk Moderno</h4>
                <p className="portfolio-artist">Cantautores Argentinos</p>
                <div className="portfolio-award">
                  <span className="award-icon">🏆</span>
                  Premios Gardel
                </div>
                <p className="portfolio-description">
                  Grabaciones íntimas de cantautores con arreglos acústicos y electrónicos.
                </p>
              </div>
            </div>
            
            <div className="portfolio-card">
              <div className="portfolio-icon">🎵</div>
              <div className="portfolio-content">
                <h4>Hip Hop Urbano</h4>
                <p className="portfolio-artist">MC Flow y Colaboradores</p>
                <div className="portfolio-award">
                  <span className="award-icon">🏆</span>
                  Disco de Platino
                </div>
                <p className="portfolio-description">
                  EP de hip hop urbano con producción moderna y beats potentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventajas del Estudio B */}
      <div className="section section-dark">
        <div className="container">
          <h2>¿POR QUÉ ELEGIR ESTUDIO B?</h2>
          <p className="section-subtitle">
            Las ventajas que nos distinguen en el mundo de la producción musical
          </p>
          
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">💰</div>
              <h3>Tarifas Competitivas</h3>
              <p>
                Precios accesibles sin comprometer la calidad. Planes especiales para artistas independientes y proyectos a largo plazo.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">🎯</div>
              <h3>Enfoque Personalizado</h3>
              <p>
                Cada proyecto es único. Adaptamos nuestro flujo de trabajo a las necesidades específicas de tu música y visión artística.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">⚡</div>
              <h3>Ambiente Dinámico</h3>
              <p>
                Espacio diseñado para la creatividad y productividad. Perfecto para sesiones largas y proyectos que requieren energía constante.
              </p>
            </div>
            
            <div className="advantage-card">
              <div className="advantage-icon">🔄</div>
              <h3>Flexibilidad Total</h3>
              <p>
                Horarios adaptables y sesiones flexibles. Trabajamos contigo para encontrar el ritmo perfecto para tu proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reservas y contacto */}
      <div className="section section-dark">
        <div className="container">
          <h2>RESERVÁ EL ESTUDIO B</h2>
          <p className="section-subtitle">
            Contactanos para coordinar tu sesión y comenzar tu proyecto musical
          </p>
          
          <div className="booking-content">
            <div className="booking-info">
              <h3>Tarifas y Paquetes</h3>
              <div className="rate-cards">
                <div className="rate-card">
                  <div className="rate-header">
                    <h4>Sesión Demo</h4>
                    <div className="rate-duration">4 horas</div>
                  </div>
                  <p className="rate-description">Perfecta para demos y grabaciones rápidas</p>
                  <div className="rate-includes">
                    <p>✓ Ingeniero de grabación</p>
                    <p>✓ Equipamiento básico</p>
                    <p>✓ Mezcla básica incluida</p>
                  </div>
                </div>
                
                <div className="rate-card">
                  <div className="rate-header">
                    <h4>Sesión EP</h4>
                    <div className="rate-duration">8 horas</div>
                  </div>
                  <p className="rate-description">Ideal para grabar un EP completo</p>
                  <div className="rate-includes">
                    <p>✓ Todo lo anterior</p>
                    <p>✓ Mezcla profesional</p>
                    <p>✓ Consultoría artística</p>
                  </div>
                </div>
                
                <div className="rate-card featured">
                  <div className="rate-header">
                    <h4>Paquete Álbum</h4>
                    <div className="rate-duration">Semanal</div>
                  </div>
                  <p className="rate-description">Para proyectos de álbum completo con descuento</p>
                  <div className="rate-includes">
                    <p>✓ Todo lo anterior</p>
                    <p>✓ Masterización incluida</p>
                    <p>✓ 20% descuento</p>
                  </div>
                </div>
                
                <div className="rate-card student">
                  <div className="rate-header">
                    <h4>Estudiantes</h4>
                    <div className="rate-duration">4 horas</div>
                  </div>
                  <p className="rate-description">20% OFF para estudiantes de música</p>
                  <div className="rate-includes">
                    <p>✓ Con credencial vigente</p>
                    <p>✓ Sesión completa</p>
                    <p>✓ Apoyo educativo</p>
                  </div>
                </div>
              </div>
              
              <div className="booking-notes">
                <h4>Servicios Adicionales</h4>
                <ul>
                  <li>Músicos sesionistas disponibles</li>
                  <li>Mezcla y masterización externa</li>
                  <li>Producción musical completa</li>
                  <li>Consultoría de carrera artística</li>
                </ul>
              </div>
            </div>
            
            <div className="booking-contact">
              <h3>Contacto Directo</h3>
              <div className="contact-options">
                <a 
                  href="https://wa.me/5491134567890?text=Hola!%20Me%20interesa%20reservar%20el%20Estudio%20B.%20Quisiera%20saber%20disponibilidad%20y%20tarifas." 
                  className="whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="whatsapp-icon">📱</span>
                  WhatsApp: +54 9 11 3456-7890
                </a>
                
                <div className="contact-info">
                  <p><strong>📧 Email:</strong> estudiob@estudiospanda.com.ar</p>
                  <p><strong>📞 Teléfono:</strong> (011) 4567-8901</p>
                  <p><strong>🕐 Horarios:</strong> Lunes a Domingo 10:00 - 22:00</p>
                  <p><strong>📍 Dirección:</strong> Av. Corrientes 1234, CABA</p>
                </div>
              </div>
              
              <div className="booking-tip">
                <p>💡 <strong>Consejo:</strong> Para una mejor atención, envianos por WhatsApp:</p>
                <ul>
                  <li>Tipo de proyecto musical</li>
                  <li>Fechas preferidas</li>
                  <li>Duración estimada de la sesión</li>
                  <li>Género musical y referencias</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudioB;
