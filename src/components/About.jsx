import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { Award, MusicNote, Public, EmojiEvents } from '@mui/icons-material';

const About = () => {
  const achievements = [
    {
      icon: <Award className="text-4xl text-blue-500" />,
      title: "Desde 1980",
      description: "Más de 40 años de experiencia en la industria musical"
    },
    {
      icon: <EmojiEvents className="text-4xl text-yellow-500" />,
      title: "Premios Internacionales",
      description: "Grammys Latinos, Billboard Awards, Premios Gardel"
    },
    {
      icon: <Public className="text-4xl text-green-500" />,
      title: "Reconocimiento Mundial",
      description: "El estudio latinoamericano que destaca en el mundo"
    },
    {
      icon: <MusicNote className="text-4xl text-purple-500" />,
      title: "Estándares Internacionales",
      description: "Trabajamos con los mayores estándares internacionales"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" component="h2" className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            GRABADO, MEZCLADO Y MASTERIZADO
          </Typography>
          <Typography variant="h3" component="h3" className="font-display font-bold text-2xl md:text-3xl text-blue-600 mb-8">
            EN ESTUDIOS PANDA
          </Typography>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Trabajamos con los mayores estándares Internacionales, con ingenieros 
              especialistas y las entregas finales son aptas para plataformas digitales, 
              cd, vinilos, radio, tv y cine.
            </p>
            <p>
              Estamos detrás de grandes éxitos que suenan en el día a día, y también podemos 
              contribuir al éxito del tuyo. Contamos con las propuestas, los estudios y equipos 
              ideales para tu música, sin importar el género que sea.
            </p>
            <p className="font-semibold text-xl text-blue-600">
              Ponete en contacto con nosotros y escribamos juntos tu historia y la de tu banda.
            </p>
          </div>
        </div>

        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="text-center p-8">
                  <div className="mb-4">
                    {achievement.icon}
                  </div>
                  <Typography variant="h6" component="h4" className="font-display font-bold text-xl mb-3 text-gray-900">
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <Typography variant="h4" component="h3" className="font-display font-bold text-2xl md:text-3xl mb-4">
              Explorá una selección única de producciones musicales
            </Typography>
            <Typography variant="body1" className="text-lg leading-relaxed max-w-3xl mx-auto">
              Cada Álbum, EP o Single, es una expresión artística que refleja el talento, 
              la pasión y el esfuerzo de nuestros clientes junto a la calidad y el diseño 
              sonoro de excelencia que nos caracteriza.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
