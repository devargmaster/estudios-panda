import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogContent, IconButton, Chip } from '@mui/material';
import { PlayArrow, Close, VolumeUp } from '@mui/icons-material';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "La Portuaria",
      artist: "Frenkel, Bilinkis, Schachtel",
      genre: "Rock Nacional",
      year: "2024",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Producción completa del nuevo álbum de La Portuaria, grabado en Estudio A con técnicas analógicas y digitales.",
      services: ["Grabación", "Mezcla", "Master"],
      awards: ["Premio Gardel 2024", "Disco de Oro"]
    },
    {
      id: 2,
      title: "Nuevo Tesoro",
      artist: "Varios Artistas",
      genre: "Pop Latino",
      year: "2024",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Compilado de nuevos talentos latinoamericanos, masterizado para todas las plataformas digitales.",
      services: ["Mezcla", "Master"],
      awards: ["Billboard Latin"]
    },
    {
      id: 3,
      title: "Espacios Sonoros",
      artist: "Ensemble Contemporáneo",
      genre: "Música Clásica",
      year: "2023",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Grabación de música clásica contemporánea con técnicas de microfonía avanzada.",
      services: ["Grabación", "Mezcla", "Master"],
      awards: ["Grammy Latino 2023"]
    },
    {
      id: 4,
      title: "Beats Urbanos",
      artist: "MC Flow",
      genre: "Hip Hop",
      year: "2023",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "EP de hip hop urbano con producción moderna y sonido potente para streaming.",
      services: ["Producción", "Grabación", "Mezcla", "Master"],
      awards: ["Disco de Platino"]
    },
    {
      id: 5,
      title: "Folklore Moderno",
      artist: "Raíces del Sur",
      genre: "Folklore",
      year: "2023",
      image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Fusión de folklore tradicional con elementos electrónicos contemporáneos.",
      services: ["Grabación", "Mezcla", "Master"],
      awards: ["Premio Gardel"]
    },
    {
      id: 6,
      title: "Sinfonía Digital",
      artist: "Orquesta Virtual",
      genre: "Electrónica",
      year: "2022",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Proyecto experimental que combina orquesta sinfónica con elementos electrónicos.",
      services: ["Producción", "Mezcla", "Master"],
      awards: ["Grammy Internacional"]
    }
  ];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" component="h2" className="font-display font-bold text-4xl md:text-5xl mb-6">
            NUESTRO PORTFOLIO
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Una selección de producciones musicales trabajadas con los mayores estándares internacionales. 
            Cada proyecto refleja el talento y la pasión de nuestros clientes.
          </Typography>
        </div>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card className="bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <IconButton 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleOpenProject(project)}
                    >
                      <PlayArrow className="text-3xl" />
                    </IconButton>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Chip label={project.genre} size="small" className="bg-blue-600 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Typography variant="h6" component="h3" className="font-display font-bold text-xl mb-2 text-white">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-blue-400 mb-2">
                    {project.artist}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    {project.year}
                  </Typography>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.services.map((service, index) => (
                      <Chip 
                        key={index} 
                        label={service} 
                        size="small" 
                        variant="outlined" 
                        className="text-gray-300 border-gray-600"
                      />
                    ))}
                  </div>
                  <Button
                    variant="outlined"
                    fullWidth
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                    onClick={() => handleOpenProject(project)}
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="text-center mt-16">
          <Button
            variant="contained"
            size="large"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
          >
            Ver Todos los Trabajos
          </Button>
        </div>
      </Container>

      {/* Project Detail Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseProject}
        maxWidth="md"
        fullWidth
        PaperProps={{
          className: "bg-gray-800 text-white"
        }}
      >
        {selectedProject && (
          <DialogContent className="p-0">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <IconButton
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={handleCloseProject}
              >
                <Close />
              </IconButton>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Typography variant="h4" component="h2" className="font-display font-bold text-2xl mb-2">
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="h6" className="text-blue-400 mb-2">
                    {selectedProject.artist}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    {selectedProject.genre} • {selectedProject.year}
                  </Typography>
                </div>
                <VolumeUp className="text-blue-500 text-3xl" />
              </div>
              
              <Typography variant="body1" className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </Typography>
              
              <div className="mb-6">
                <Typography variant="h6" className="font-bold mb-3">Servicios Realizados</Typography>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service, index) => (
                    <Chip 
                      key={index} 
                      label={service} 
                      className="bg-blue-600 text-white"
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <Typography variant="h6" className="font-bold mb-3">Reconocimientos</Typography>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.awards.map((award, index) => (
                    <Chip 
                      key={index} 
                      label={award} 
                      className="bg-yellow-600 text-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
