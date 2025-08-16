import React from 'react';
import { Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import { Instagram, Email, WhatsApp, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Grabación Profesional',
    'Mezcla y Masterización',
    'Producción Musical',
    'Post-producción Audio',
    'Sesiones Remotas'
  ];

  const socialLinks = [
    {
      icon: <Instagram />,
      href: 'https://instagram.com/estudiospanda',
      label: 'Instagram'
    },
    {
      icon: <WhatsApp />,
      href: 'https://wa.me/5491234567890',
      label: 'WhatsApp'
    },
    {
      icon: <Email />,
      href: 'mailto:info@estudiospanda.com.ar',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container maxWidth="lg" className="py-16">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" component="h3" className="font-display font-bold text-2xl mb-4">
              ESTUDIOS PANDA
            </Typography>
            <Typography variant="body1" className="text-gray-300 mb-6 leading-relaxed">
              Desde 1980, el estudio de grabación latinoamericano que destaca en el mundo. 
              Trabajamos con los mayores estándares internacionales para hacer realidad tu música.
            </Typography>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <LocationOn className="text-blue-400" />
                <Typography variant="body2" className="text-gray-300">
                  Buenos Aires, Argentina
                </Typography>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" />
                <Typography variant="body2" className="text-gray-300">
                  Horarios: 10hr - 18hr (días hábiles)
                </Typography>
              </div>
            </div>

            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  className="bg-gray-800 hover:bg-blue-600 text-white transition-colors"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="h4" className="font-display font-bold text-lg mb-4">
              Navegación
            </Typography>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h4" className="font-display font-bold text-lg mb-4">
              Servicios
            </Typography>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Typography variant="body2" className="text-gray-300 hover:text-blue-400 transition-colors cursor-default">
                    {service}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h4" className="font-display font-bold text-lg mb-4">
              Contacto
            </Typography>
            <div className="space-y-4">
              <div>
                <Typography variant="body2" className="text-blue-400 font-semibold mb-1">
                  Horarios Comerciales
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                  De 10hr a 18hr días hábiles
                </Typography>
                <Typography variant="body2" className="text-gray-400 text-sm">
                  Horario ARG
                </Typography>
              </div>
              
              <div>
                <Typography variant="body2" className="text-blue-400 font-semibold mb-1">
                  Horarios de Servicios
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                  24 horas
                </Typography>
              </div>

              <div className="pt-4">
                <Typography variant="body2" className="text-yellow-400 font-semibold">
                  🏆 Premios Ganados
                </Typography>
                <Typography variant="body2" className="text-gray-300 text-sm">
                  Grammys Latinos • Billboard Awards • Premios Gardel
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <Divider className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Typography variant="body2" className="text-gray-400">
            © {currentYear} Estudios Panda. Todos los derechos reservados.
          </Typography>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Typography variant="body2" className="text-gray-400">
              Diseñado con ❤️ para la música
            </Typography>
            <div className="flex space-x-4 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">
                Términos de Uso
              </button>
              <button className="hover:text-blue-400 transition-colors">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Back to top button */}
      <div className="text-center pb-4">
        <IconButton
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
        >
          <LocationOn className="rotate-180" />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
