const Albumes = () => {
  return (
    <div className="studio-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ÁLBUMES</h1>
          <p className="hero-subtitle">
            Explorá una selección única de producciones musicales trabajadas con los mayores estándares internacionales en Estudios Panda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12 text-center">
            Cada Álbum, EP o Single, es una expresión artística que refleja el talento, la pasión y el esfuerzo de nuestros clientes junto a la calidad y el diseño sonoro de excelencia que nos caracteriza.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aquí irían las cartas de álbumes - por ahora contenido placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-current/20 to-current/40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Álbum Destacado 1</h3>
              <p className="text-sm opacity-80">Artista • Año</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-current/20 to-current/40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Álbum Destacado 2</h3>
              <p className="text-sm opacity-80">Artista • Año</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-current/20 to-current/40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Álbum Destacado 3</h3>
              <p className="text-sm opacity-80">Artista • Año</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albumes;
