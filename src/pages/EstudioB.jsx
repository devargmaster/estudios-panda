import React from 'react';

const EstudioB = () => {
  return (
    <div className="studio-page">
      {/* Hero Estudio B */}
      <div className="studio-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="studio-hero-content">
            <h1>ESTUDIO B</h1>
            <p className="studio-subtitle">Espacio versátil y profesional</p>
            <p className="studio-description">
              El Estudio B ofrece un ambiente perfecto para grabaciones profesionales, 
              ideal para artistas independientes y proyectos creativos que buscan calidad y flexibilidad.
            </p>
          </div>
          <div className="studio-hero-image">
            <img src="https://estudiospanda.com.ar/wp-content/uploads/2023/03/E7AC3E84-95B5-4AE7-B7AD-01AB48F30677.png" alt="Estudio B" />
          </div>
        </div>
      </div>

      {/* Características principales */}
      <div className="section">
        <div className="container">
          <h2>CARACTERÍSTICAS DEL ESTUDIO B</h2>
          <div className="studio-features">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">🎛️</div>
                <h3>Consola Analógica</h3>
                <p>Consola Neve analógica que aporta el carácter y calidez únicos que caracterizan las grabaciones profesionales.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💻</div>
                <h3>Pro Tools HD</h3>
                <p>Sistema Pro Tools HD confiable y versátil para grabación y edición digital de calidad profesional.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔊</div>
                <h3>Monitoreo Clásico</h3>
                <p>Monitores Yamaha NS-10 y KRK, referencias clásicas en la industria musical para mezcla y masterización.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎤</div>
                <h3>Micrófonos Pro</h3>
                <p>Selección cuidadosa de micrófonos profesionales: Shure, Sennheiser, Audio-Technica, y más.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🏠</div>
                <h3>Sala Versátil</h3>
                <p>Sala de grabación de 25m² con tratamiento acústico versátil, perfecta para bandas y solistas.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎸</div>
                <h3>Backline Completo</h3>
                <p>Amplificadores, teclados, batería completa y accesorios disponibles para sesiones ágiles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipamiento técnico */}
      <div className="section section-dark">
        <div className="container">
          <h2>EQUIPAMIENTO TÉCNICO</h2>
          <div className="equipment-section">
            <div className="equipment-category">
              <h3>Consola y Audio Digital</h3>
              <ul>
                <li>Consola Neve 8816 Summing Mixer</li>
                <li>Pro Tools HD Native con interfaces</li>
                <li>Conversores Focusrite Red 4Pre</li>
                <li>Preamplificadores Warm Audio WA273-EQ</li>
              </ul>
            </div>
            
            <div className="equipment-category">
              <h3>Micrófonos</h3>
              <ul>
                <li>Shure SM57, SM58, Beta 57A</li>
                <li>Sennheiser MD421, e609</li>
                <li>Audio-Technica AT4040, AT2020</li>
                <li>AKG D112, C214</li>
                <li>Rode NTK (Válvulas)</li>
              </ul>
            </div>
            
            <div className="equipment-category">
              <h3>Monitoreo</h3>
              <ul>
                <li>Yamaha NS-10M Studio (Referencia)</li>
                <li>KRK Rokit 8 G3</li>
                <li>Behringer Truth B2030A</li>
                <li>Auriculares Sony MDR-7506</li>
              </ul>
            </div>
            
            <div className="equipment-category">
              <h3>Instrumentos y Backline</h3>
              <ul>
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
      <div className="section">
        <div className="container">
          <h2>TRABAJOS REALIZADOS EN ESTUDIO B</h2>
          <div className="studio-portfolio">
            <div className="portfolio-item featured">
              <div className="portfolio-image">🎹</div>
              <div className="portfolio-content">
                <h4>Nuevo Tesoro Digital</h4>
                <p>Artistas Independientes</p>
                <span className="award">🏆 Disco de Oro</span>
                <p className="project-description">
                  Compilado de nuevos talentos latinoamericanos grabado completamente en Estudio B.
                </p>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🥁</div>
              <div className="portfolio-content">
                <h4>Rock Nacional Emergente</h4>
                <p>Bandas Independientes</p>
                <span className="award">🏆 Billboard Latin</span>
                <p className="project-description">
                  Grabaciones de bandas de rock nacional con sonido moderno y potente.
                </p>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎶</div>
              <div className="portfolio-content">
                <h4>Folk Moderno</h4>
                <p>Cantautores Argentinos</p>
                <span className="award">🏆 Premios Gardel</span>
                <p className="project-description">
                  Grabaciones íntimas de cantautores con arreglos acústicos y electrónicos.
                </p>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎵</div>
              <div className="portfolio-content">
                <h4>Hip Hop Urbano</h4>
                <p>MC Flow y Colaboradores</p>
                <span className="award">🏆 Disco de Platino</span>
                <p className="project-description">
                  EP de hip hop urbano con producción moderna y beats potentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventajas del Estudio B */}
      <div className="section section-studio">
        <div className="container">
          <h2>¿POR QUÉ ELEGIR EL ESTUDIO B?</h2>
          <div className="advantages-grid">
            <div className="advantage-item">
              <h3>💰 Precio Accesible</h3>
              <p>Tarifas competitivas sin comprometer la calidad profesional, ideal para artistas independientes y proyectos con presupuesto ajustado.</p>
            </div>
            
            <div className="advantage-item">
              <h3>⚡ Sesiones Ágiles</h3>
              <p>Configuración rápida y eficiente, perfecta para grabaciones dinámicas y sesiones de trabajo intensivo.</p>
            </div>
            
            <div className="advantage-item">
              <h3>🎯 Versatilidad</h3>
              <p>Adaptable a múltiples géneros musicales: rock, pop, folk, hip hop, electrónica y más.</p>
            </div>
            
            <div className="advantage-item">
              <h3>👥 Ambiente Creativo</h3>
              <p>Espacio relajado y creativo que inspira a los artistas a dar lo mejor de sí en cada sesión.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reservas y contacto */}
      <div className="section">
        <div className="container">
          <h2>RESERVÁ EL ESTUDIO B</h2>
          <div className="booking-section">
            <div className="booking-info">
              <h3>Tarifas Especiales</h3>
              <div className="rate-item">
                <strong>Sesión de 4 horas</strong>
                <p>Perfecta para demos y grabaciones rápidas</p>
              </div>
              <div className="rate-item">
                <strong>Sesión de 8 horas</strong>
                <p>Ideal para grabar un EP completo</p>
              </div>
              <div className="rate-item">
                <strong>Paquete semanal</strong>
                <p>Para proyectos de álbum completo con descuento</p>
              </div>
              <div className="rate-item">
                <strong>🎓 Descuento estudiantes</strong>
                <p>20% OFF para estudiantes de música (con credencial)</p>
              </div>
              <p className="booking-note">
                * Incluye ingeniero de grabación y equipamiento básico.
                * Músicos sesionistas disponibles con costo adicional.
                * Mezcla y masterización con tarifas especiales.
              </p>
            </div>
            
            <div className="booking-form">
              <h3>Solicitar Reserva</h3>
              <form>
                <input type="text" placeholder="Nombre del artista/banda" required />
                <input type="email" placeholder="Email de contacto" required />
                <input type="tel" placeholder="Teléfono" required />
                <input type="date" placeholder="Fecha preferida" required />
                <select required>
                  <option value="">Tipo de sesión</option>
                  <option value="4h">4 horas - Demo/Single</option>
                  <option value="8h">8 horas - EP</option>
                  <option value="semanal">Paquete semanal - Álbum</option>
                  <option value="estudiante">Sesión estudiante (4h)</option>
                </select>
                <select>
                  <option value="">Género musical</option>
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="folk">Folk</option>
                  <option value="hip-hop">Hip Hop</option>
                  <option value="electronica">Electrónica</option>
                  <option value="otro">Otro</option>
                </select>
                <textarea placeholder="Contanos sobre tu proyecto (cantidad de músicos, instrumentos, objetivos, etc.)" required></textarea>
                <button type="submit" className="btn btn-primary">Solicitar Reserva</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudioB;
