import React from 'react';
import { Button, Container } from '@mui/material';
import { PlayArrow as PlayIcon, KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background Video/Image placeholder */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')"
        }}
      ></div>
      
      <Container maxWidth="lg" className="relative z-20 text-center text-white">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            ESTUDIOS
            <span className="block text-blue-400">PANDA</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            El estudio de grabación latinoamericano que destaca en el mundo
          </p>
          
          <div className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto space-y-4">
            <p>
              Desde 1980 el estudio de Latinoamérica que destaca en el mundo. 
              En la región somos el que cuenta con más créditos en producciones ganadoras de premios internacionales.
            </p>
            <p className="font-semibold text-blue-300">
              Grammys latinos e internacionales, Billboards awards y Premios Gardel
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayIcon />}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold"
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Portfolio
            </Button>
            <Button
              variant="outlined"
              size="large"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactanos
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="text-white text-4xl" />
        </div>
      </Container>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
