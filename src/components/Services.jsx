import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import { MicExternalOn, AudiotrackOutlined, Equalizer, RadioButtonChecked } from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      icon: <MicExternalOn className="text-5xl text-blue-500" />,
      title: "Grabación",
      description: "Grabación profesional con equipos de última generación y ingenieros especializados",
      features: ["Estudios acústicamente tratados", "Micrófonos premium", "Consolas analógicas", "Grabación multipista"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Equalizer className="text-5xl text-green-500" />,
      title: "Mezclado",
      description: "Mezcla profesional que resalta cada elemento de tu música con claridad y potencia",
      features: ["Mezcla ITB y OTB", "Procesamiento analógico", "Automatización avanzada", "Referencias profesionales"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <AudiotrackOutlined className="text-5xl text-purple-500" />,
      title: "Masterizado",
      description: "Masterización de alta calidad para todos los formatos y plataformas digitales",
      features: ["Loudness para streaming", "Optimización para vinilo", "Mastering para radio", "Formatos múltiples"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <RadioButtonChecked className="text-5xl text-red-500" />,
      title: "Producción",
      description: "Producción musical integral desde la pre-producción hasta el producto final",
      features: ["Arreglos musicales", "Programación", "Sesionistas profesionales", "Dirección artística"],
      color: "from-red-500 to-red-600"
    }
  ];

  const platforms = [
    "Spotify", "Apple Music", "YouTube Music", "Amazon Music", 
    "Deezer", "Tidal", "Radio", "TV", "Cine", "Vinilo", "CD"
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" component="h2" className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            NUESTROS SERVICIOS
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios integrales de audio con los más altos estándares internacionales, 
            adaptados a todas las plataformas y formatos modernos.
          </Typography>
        </div>

        <Grid container spacing={4} className="mb-16">
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" component="h3" className="font-display font-bold text-2xl text-gray-900 mb-3">
                        {service.title}
                      </Typography>
                      <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <Typography variant="body2" className="text-gray-700">
                          {feature}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <Typography variant="h4" component="h3" className="font-display font-bold text-2xl text-center text-gray-900 mb-6">
            Entregas Optimizadas Para
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform, index) => (
              <Chip
                key={index}
                label={platform}
                variant="outlined"
                className="text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="contained"
              size="large"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consultar Precios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
