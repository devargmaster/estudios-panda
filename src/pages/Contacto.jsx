import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    studio: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear mensaje para WhatsApp
    const message = `🐼 CONTACTO DESDE WEB
    
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de Proyecto: ${formData.project}
Estudio Preferido: ${formData.studio}

Mensaje:
${formData.message}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=541162218021&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="studio-page">
      {/* Hero Contacto */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content-centered">
            <div className="studio-indicator">
              <span className="current-studio">CONTACTO</span>
            </div>
            <h1 className="hero-title">ESCRIBAMOS JUNTOS TU HISTORIA</h1>
            <p className="hero-subtitle">
              Ponete en contacto con nosotros y transformemos tu música en una obra maestra
            </p>
            <p className="hero-description">
              Desde 1980 ayudamos a artistas a materializar su visión musical. Contanos sobre tu proyecto y te asesoramos sobre la mejor manera de llevarlo adelante.
            </p>
            <div className="hero-buttons">
              <a href="https://api.whatsapp.com/send?phone=541162218021&text=🐼" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                CONTACTANOS
              </a>
              <a href="#contacto-info" className="btn btn-secondary">
                VER INFORMACIÓN
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Información de Contacto */}
      <div className="section section-dark" id="contacto-info">
        <div className="container">
          <h2>INFORMACIÓN DE CONTACTO</h2>
          
          <div className="contact-info-grid">
            <div className="contact-card primary-contact">
              <div className="contact-icon">📱</div>
              <h3>CONTACTO DIRECTO</h3>
              <div className="contact-details">
                <p><strong>WhatsApp:</strong></p>
                <a href="https://api.whatsapp.com/send?phone=541162218021&text=🐼" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="whatsapp-link">
                  +54 11 6221-8021
                </a>
                <p className="contact-note">Respuesta inmediata las 24hs</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">⏰</div>
              <h3>HORARIOS</h3>
              <div className="contact-details">
                <p><strong>Atención Comercial:</strong></p>
                <p>Lunes a Viernes: 10:00 - 18:00hs</p>
                <p><strong>Servicios de Estudio:</strong></p>
                <p>24 horas - Todos los días</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>UBICACIÓN</h3>
              <div className="contact-details">
                <p><strong>Buenos Aires, Argentina</strong></p>
                <p>Zona Palermo - Villa Crespo</p>
                <p className="contact-note">Dirección exacta por WhatsApp</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📸</div>
              <h3>REDES SOCIALES</h3>
              <div className="contact-details">
                <a href="https://www.instagram.com/estudiospanda/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="social-link">
                  @estudiospanda
                </a>
                <p className="contact-note">Seguinos para ver nuestros proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="section">
        <div className="container">
          <h2>FORMULARIO DE CONSULTA</h2>
          <p className="section-subtitle">
            Completá el formulario y nos pondremos en contacto contigo para asesorarte sobre tu proyecto
          </p>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="professional-contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre y apellido"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="studio">Estudio Preferido</label>
                  <select
                    id="studio"
                    name="studio"
                    value={formData.studio}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccionar estudio</option>
                    <option value="estudio-a">Estudio A - Premium</option>
                    <option value="estudio-b">Estudio B - Clásico</option>
                    <option value="ambos">Ambos estudios</option>
                    <option value="no-seguro">No estoy seguro</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="project">Tipo de Proyecto *</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar tipo de proyecto</option>
                  <option value="album-completo">Álbum Completo</option>
                  <option value="ep-single">EP / Single</option>
                  <option value="demo">Demo</option>
                  <option value="solo-grabacion">Solo Grabación</option>
                  <option value="solo-mezcla">Solo Mezcla</option>
                  <option value="solo-mastering">Solo Masterización</option>
                  <option value="produccion-integral">Producción Integral</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Contanos sobre tu proyecto *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describí tu proyecto: género musical, cantidad de temas, si ya tenés las canciones compuestas, experiencia previa, presupuesto estimado, fechas tentativas, etc."
                  rows={6}
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary form-submit">
                  ENVIAR POR WHATSAPP
                </button>
                <p className="form-note">
                  Al enviar el formulario se abrirá WhatsApp con tu consulta pre-cargada
                </p>
              </div>
            </form>

            {/* Tarjeta de información adicional */}
            <div className="contact-side-info">
              <div className="info-card">
                <h3>💡 ANTES DE CONTACTARNOS</h3>
                <ul>
                  <li>Tené una idea clara de tu proyecto musical</li>
                  <li>Pensá en fechas tentativas para tu sesión</li>
                  <li>Considerá tu presupuesto disponible</li>
                  <li>Escuchá referencias de sonido que te gusten</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>🎯 QUÉ INCLUYE NUESTRO ASESORAMIENTO</h3>
                <ul>
                  <li>Evaluación técnica de tu proyecto</li>
                  <li>Recomendación del estudio más adecuado</li>
                  <li>Presupuesto detallado sin sorpresas</li>
                  <li>Planificación de sesiones</li>
                  <li>Consejos de preproducción</li>
                </ul>
              </div>

              <div className="info-card highlight">
                <h3>⚡ RESPUESTA RÁPIDA</h3>
                <p>Respondemos todas las consultas en menos de 2 horas en horario comercial, y las 24hs por WhatsApp para urgencias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
