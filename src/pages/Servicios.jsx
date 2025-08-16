import React from 'react';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      icon: '🎛️',
      title: 'GRABACIÓN PROFESIONAL',
      description: 'Estudios equipados con la mejor tecnología para capturar cada detalle de tu música',
      features: [
        'Estudio A - Sala amplia para bandas completas',
        'Estudio B - Cabina íntima para voces y solos',
        'Equipos de alta gama (Neumann, SSL, Pro Tools)',
        'Ingenieros especializados con experiencia internacional',
        'Monitoreo profesional y acústica tratada'
      ]
    },
    {
      id: 2,
      icon: '🎚️',
      title: 'MEZCLA DE ALTA CALIDAD',
      description: 'Procesamiento analógico y digital para lograr el balance perfecto de tu producción',
      features: [
        'Mezcla analógica y digital híbrida',
        'Procesamiento con outboard de primera línea',
        'Revisiones ilimitadas hasta tu satisfacción',
        'Formatos optimizados para todas las plataformas',
        'Referencias en sistemas de monitoreo diversos'
      ]
    },
    {
      id: 3,
      icon: '💎',
      title: 'MASTERIZACIÓN PROFESIONAL',
      description: 'El toque final que hace que tu música suene perfecta en cualquier sistema',
      features: [
        'Masterización para streaming (Spotify, Apple Music)',
        'Masterización para vinilo con cortes especializados',
        'Masterización para CD con estándares Red Book',
        'Análisis espectral completo y corrección',
        'Loudness optimizado para cada plataforma'
      ]
    }
  ];

  return (
    <div className="studio-page">
      {/* Hero Servicios */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content-centered">
            <div className="studio-indicator">
              <span className="current-studio">SERVICIOS</span>
            </div>
            <h1 className="hero-title">SERVICIOS PROFESIONALES</h1>
            <p className="hero-subtitle">
              Grabado, mezclado y masterizado con los mayores estándares internacionales
            </p>
            <p className="hero-description">
              Ofrecemos servicios completos de producción musical con tecnología de vanguardia y la experiencia de ingenieros reconocidos internacionalmente.
            </p>
            <div className="hero-buttons">
              <a href="https://api.whatsapp.com/send?phone=541162218021&text=🐼" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                CONTACTANOS
              </a>
              <a href="#servicios" className="btn btn-secondary">
                VER SERVICIOS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Principales */}
      <div className="section-dark" id="servicios">
        <div className="container">
          <h2>NUESTROS SERVICIOS</h2>
          <p className="section-subtitle">
            Cada servicio está diseñado para llevar tu música al siguiente nivel profesional
          </p>
          
          <div className="services-grid">
            {servicios.map((servicio, index) => (
              <div key={servicio.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{servicio.icon}</div>
                  <h3>{servicio.title}</h3>
                </div>
                <p className="service-description">{servicio.description}</p>
                <ul className="service-features">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">▶</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-cta">
                  <a 
                    href="https://api.whatsapp.com/send?phone=541162218021&text=🐼%20Consulta%20sobre%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    CONSULTAR PRECIO
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso de Trabajo */}
      <div className="section-dark">
        <div className="container">
          <h2>NUESTRO PROCESO</h2>
          <p className="section-subtitle">
            Un flujo de trabajo optimizado para obtener los mejores resultados
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>CONSULTA INICIAL</h4>
              <p>Analizamos tu proyecto y definimos el mejor enfoque para tu música</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>PREPRODUCCIÓN</h4>
              <p>Planificamos la sesión y preparamos el estudio según tus necesidades</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>GRABACIÓN</h4>
              <p>Capturamos tu música con la mejor calidad y atención al detalle</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>POSTPRODUCCIÓN</h4>
              <p>Mezcla y masterización hasta lograr el sonido perfecto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Información Adicional */}
      <div className="section-dark">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>HORARIOS</h3>
              <div className="info-content">
                <div className="schedule-item">
                  <strong>Atención Comercial:</strong>
                  <span>10:00 - 18:00 hrs (ARG)</span>
                </div>
                <div className="schedule-item">
                  <strong>Servicios de Estudio:</strong>
                  <span>24 horas disponibles</span>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>ESPECIALIDADES</h3>
              <div className="info-content">
                <div className="specialty-tags">
                  <span className="tag">Rock</span>
                  <span className="tag">Pop</span>
                  <span className="tag">Jazz</span>
                  <span className="tag">Electrónica</span>
                  <span className="tag">Folk</span>
                  <span className="tag">Clásica</span>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🏆</div>
              <h3>EXPERIENCIA</h3>
              <div className="info-content">
                <ul className="achievements">
                  <li>Ganadores de Grammy Latino</li>
                  <li>Colaboraciones con Sony y Universal</li>
                  <li>Más de 500 producciones exitosas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-dark">
        <div className="container">
          <div className="cta-section">
            <h2>¿LISTO PARA CREAR TU PRÓXIMO HIT?</h2>
            <p>Contactanos y hablemos de tu proyecto musical</p>
            <div className="cta-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=541162218021&text=🐼%20Consulta%20sobre%20servicios" 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                CONTACTANOS POR WHATSAPP
              </a>
              <a href="/contacto" className="btn btn-secondary">
                FORMULARIO DE CONTACTO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
