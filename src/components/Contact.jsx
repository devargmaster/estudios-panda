import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button, IconButton, Alert, Snackbar } from '@mui/material';
import { LocationOn, Phone, Email, AccessTime, Instagram, WhatsApp, Send } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <LocationOn className="text-2xl text-blue-500" />,
      title: "Ubicación",
      content: "Buenos Aires, Argentina",
      detail: "Estudios profesionales en CABA"
    },
    {
      icon: <AccessTime className="text-2xl text-green-500" />,
      title: "Horarios Comerciales",
      content: "10hr a 18hr días hábiles",
      detail: "Horario ARG"
    },
    {
      icon: <AccessTime className="text-2xl text-purple-500" />,
      title: "Horarios de Servicios",
      content: "24 horas",
      detail: "Servicios disponibles todo el día"
    },
    {
      icon: <Phone className="text-2xl text-orange-500" />,
      title: "Contacto Directo",
      content: "WhatsApp disponible",
      detail: "Respuesta inmediata"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" component="h2" className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            DONDE ENCONTRARNOS
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para hacer realidad tu proyecto musical. Contactanos y empecemos a trabajar juntos.
          </Typography>
        </div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <div className="space-y-6">
              <Typography variant="h4" component="h3" className="font-display font-bold text-2xl text-gray-900 mb-8">
                Información de Contacto
              </Typography>
              
              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          {info.icon}
                        </div>
                        <Typography variant="h6" className="font-bold text-gray-900 mb-2">
                          {info.title}
                        </Typography>
                        <Typography variant="body1" className="text-blue-600 font-semibold mb-1">
                          {info.content}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          {info.detail}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mt-8">
                <Typography variant="h5" className="font-display font-bold mb-4">
                  Conectá con nosotros
                </Typography>
                <div className="flex space-x-4">
                  <IconButton 
                    className="bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => window.open('https://instagram.com/estudiospanda', '_blank')}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton 
                    className="bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
                  >
                    <WhatsApp />
                  </IconButton>
                  <IconButton 
                    className="bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => window.open('mailto:info@estudiospanda.com.ar', '_blank')}
                  >
                    <Email />
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Typography variant="h4" component="h3" className="font-display font-bold text-2xl text-gray-900 mb-6">
                  Contanos sobre tu proyecto
                </Typography>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  
                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                  
                  <TextField
                    fullWidth
                    label="Tipo de Proyecto"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    select
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    <option value="">Seleccionar tipo de proyecto</option>
                    <option value="grabacion">Grabación</option>
                    <option value="mezcla">Mezcla</option>
                    <option value="master">Masterización</option>
                    <option value="produccion">Producción Completa</option>
                    <option value="otro">Otro</option>
                  </TextField>
                  
                  <TextField
                    fullWidth
                    label="Contanos sobre tu proyecto"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                    placeholder="Describí tu proyecto, género musical, timeline, presupuesto aproximado, etc."
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<Send />}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg"
                  >
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowAlert(false)} 
          severity="success" 
          variant="filled"
          className="w-full"
        >
          ¡Mensaje enviado correctamente! Te contactaremos pronto.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
