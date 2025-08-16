import React from 'react';

const EstudioA = () => {
  return (
    <div className="studio-page studio-a">
      {/* Hero Estudio A */}
      <div className="studio-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="studio-hero-content">
            <h1>ESTUDIO A</h1>
            <p className="studio-subtitle">El espacio ideal y el más equipado</p>
            <p className="studio-description">
              Nuestro Estudio A es el estudio principal, diseñado para producciones de alto nivel 
              y artistas internacionales que buscan la máxima calidad en sus grabaciones.
            </p>
          </div>
          <div className="studio-hero-image">
            <img src="https://estudiospanda.com.ar/wp-content/uploads/2023/03/3.png" alt="Estudio A" />
          </div>
        </div>
      </div>

      {/* Características principales */}
      <div className="section">
        <div className="container">
          <h2>CARACTERÍSTICAS DEL ESTUDIO A</h2>
          <div className="studio-features">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">🎛️</div>
                <h3>Consola SSL</h3>
                <p>Consola SSL de 32 canales con la calidad y el sonido característico que han utilizado los estudios más prestigiosos del mundo.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💻</div>
                <h3>Pro Tools HDX</h3>
                <p>Sistema Pro Tools HDX de última generación para grabación digital de máxima calidad y sin latencia.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔊</div>
                <h3>Monitoreo Premium</h3>
                <p>Monitores Genelec de campo cercano y lejano para una referencia de audio impecable.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎤</div>
                <h3>Micrófonos Vintage</h3>
                <p>Amplia selección de micrófonos vintage y modernos: Neumann, AKG, Shure, Coles, entre otros.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🏠</div>
                <h3>Sala Amplia</h3>
                <p>Sala de grabación de 40m² con acústica tratada profesionalmente para todo tipo de instrumentos.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎸</div>
                <h3>Amplificadores</h3>
                <p>Colección de amplificadores vintage y modernos: Marshall, Fender, Vox, Mesa Boogie.</p>
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
                <li>Consola SSL 4000 E/G+ Series</li>
                <li>Pro Tools HDX con interfaces Avid</li>
                <li>Conversores Antelope Audio Orion 32+</li>
                <li>Preamplificadores Neve 1073, API 512c</li>
              </ul>
            </div>
            
            <div className="equipment-category">
              <h3>Micrófonos</h3>
              <ul>
                <li>Neumann U67, U87, U47 FET</li>
                <li>AKG C12, C414, D112</li>
                <li>Shure SM57, SM58, Beta 52A</li>
                <li>Coles 4038 (Ribbon)</li>
                <li>Royer R-121 (Ribbon)</li>
              </ul>
            </div>
            
            <div className="equipment-category">
              <h3>Monitoreo</h3>
              <ul>
                <li>Genelec 1032A (Principales)</li>
                <li>Yamaha NS-10M Studio</li>
                <li>Auratone 5C Super Sound Cube</li>
                <li>Subwoofer Genelec 7060B</li>
              </ul>
            </div>
            
            <div className="equipment-category">
              <h3>Outboard y Efectos</h3>
              <ul>
                <li>Compresor Empirical Labs Distressor</li>
                <li>EQ Pultec EQP-1A</li>
                <li>Reverb Lexicon 480L</li>
                <li>Delay TC Electronic 2290</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trabajos realizados */}
      <div className="section">
        <div className="container">
          <h2>TRABAJOS REALIZADOS EN ESTUDIO A</h2>
          <div className="studio-portfolio">
            <div className="portfolio-item featured">
              <div className="portfolio-image">🎼</div>
              <div className="portfolio-content">
                <h4>La Portuaria</h4>
                <p>Frenkel, Bilinkis, Schachtel</p>
                <span className="award">🏆 Premio Gardel 2024</span>
                <p className="project-description">
                  Grabación completa del nuevo álbum con técnicas analógicas y digitales combinadas.
                </p>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎻</div>
              <div className="portfolio-content">
                <h4>Música Clásica Contemporánea</h4>
                <p>Orquesta Sinfónica Nacional</p>
                <span className="award">🏆 Grammy Latino 2023</span>
                <p className="project-description">
                  Grabación de música clásica con técnicas de microfonía avanzada.
                </p>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">🎺</div>
              <div className="portfolio-content">
                <h4>Jazz Fusion Internacional</h4>
                <p>Varios Artistas</p>
                <span className="award">🏆 Disco de Platino</span>
                <p className="project-description">
                  Proyecto colaborativo con músicos de jazz de Argentina, Brasil y Uruguay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservas y contacto */}
      <div className="section section-studio">
        <div className="container">
          <h2>RESERVÁ EL ESTUDIO A</h2>
          <div className="booking-section">
            <div className="booking-info">
              <h3>Tarifas y Disponibilidad</h3>
              <div className="rate-item">
                <strong>Sesión de 4 horas</strong>
                <p>Incluye ingeniero de grabación y asistente</p>
              </div>
              <div className="rate-item">
                <strong>Sesión de 8 horas</strong>
                <p>Día completo con descuento especial</p>
              </div>
              <div className="rate-item">
                <strong>Proyecto completo</strong>
                <p>Cotización personalizada según el proyecto</p>
              </div>
              <p className="booking-note">
                * Todos los precios incluyen equipamiento básico e ingeniería.
                * Consultar por servicios adicionales como músicos sesionistas.
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
                  <option value="">Duración de la sesión</option>
                  <option value="4h">4 horas</option>
                  <option value="8h">8 horas</option>
                  <option value="proyecto">Proyecto completo</option>
                </select>
                <textarea placeholder="Detalles del proyecto (género, cantidad de músicos, instrumentos, etc.)" required></textarea>
                <button type="submit" className="btn btn-primary">Solicitar Reserva</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudioA;
