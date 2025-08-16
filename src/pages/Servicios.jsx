const Servicios = () => {
  return (
    <div className="studio-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SERVICIOS</h1>
          <p className="hero-subtitle">
            Grabado, mezclado y masterizado con los mayores estándares internacionales
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">GRABACIÓN</h3>
              <p className="mb-4">
                Contamos con estudios de grabación equipados con la tecnología más avanzada para capturar cada detalle de tu música.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Estudio A - Sala amplia para bandas completas</li>
                <li>• Estudio B - Cabina íntima para voces y solos</li>
                <li>• Equipos de alta gama</li>
                <li>• Ingenieros especializados</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">MEZCLA</h3>
              <p className="mb-4">
                Nuestros ingenieros de mezcla dan vida a tus grabaciones con un sonido profesional y equilibrado.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Mezcla analógica y digital</li>
                <li>• Procesamiento de audio avanzado</li>
                <li>• Revisiones ilimitadas</li>
                <li>• Formatos para todas las plataformas</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">MASTERIZACIÓN</h3>
              <p className="mb-4">
                El toque final que hace que tu música suene perfecta en cualquier sistema de reproducción.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Masterización para streaming</li>
                <li>• Masterización para vinilo</li>
                <li>• Masterización para CD</li>
                <li>• Análisis espectral completo</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">HORARIOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">ATENCIÓN COMERCIAL</h3>
                <p>De 10hr a 18hr días hábiles horario ARG.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">SERVICIOS</h3>
                <p>24hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
