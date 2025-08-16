import React from 'react';

const Albumes = () => {
  // Álbumes reales del sitio original de Estudios Panda - TODOS los álbumes
  const albumesDestacados = [
    {
      id: "1Eh8uP6MvoseEDTWIb8qv6",
      spotifyUrl: "https://open.spotify.com/album/1Eh8uP6MvoseEDTWIb8qv6?si=i87phtlYSSWI3PM8M9P5zg",
      embedUrl: "https://open.spotify.com/embed/album/1Eh8uP6MvoseEDTWIb8qv6"
    },
    {
      id: "7CJ59CBDycdjun1rBbSKlK",
      spotifyUrl: "https://open.spotify.com/album/7CJ59CBDycdjun1rBbSKlK?si=R7wOS8IEQOezA07p9oeBxw",
      embedUrl: "https://open.spotify.com/embed/album/7CJ59CBDycdjun1rBbSKlK"
    },
    {
      id: "1zjbR96hLWnMN6cFqam8O9",
      spotifyUrl: "https://open.spotify.com/album/1zjbR96hLWnMN6cFqam8O9?si=ecfQ4rFvT6quBPAEz0T85g",
      embedUrl: "https://open.spotify.com/embed/album/1zjbR96hLWnMN6cFqam8O9"
    },
    {
      id: "4MrFVzdNEgxfZbJyC2RQt9",
      spotifyUrl: "https://open.spotify.com/album/4MrFVzdNEgxfZbJyC2RQt9?si=da66e56fc8f04b1d",
      embedUrl: "https://open.spotify.com/embed/album/4MrFVzdNEgxfZbJyC2RQt9"
    },
    {
      id: "2OXZJLXxM8jrY3gBoVNfmz",
      spotifyUrl: "https://open.spotify.com/album/2OXZJLXxM8jrY3gBoVNfmz",
      embedUrl: "https://open.spotify.com/embed/album/2OXZJLXxM8jrY3gBoVNfmz"
    },
    {
      id: "00LJlcxKc8GtrRAxIAvV9O",
      spotifyUrl: "https://open.spotify.com/album/00LJlcxKc8GtrRAxIAvV9O",
      embedUrl: "https://open.spotify.com/embed/album/00LJlcxKc8GtrRAxIAvV9O"
    },
    {
      id: "0BDe1xU84IYJoM6kZi3z9G",
      spotifyUrl: "https://open.spotify.com/album/0BDe1xU84IYJoM6kZi3z9G",
      embedUrl: "https://open.spotify.com/embed/album/0BDe1xU84IYJoM6kZi3z9G"
    },
    {
      id: "0DUCdIMPrlfPFPPKsNyzx3",
      spotifyUrl: "https://open.spotify.com/album/0DUCdIMPrlfPFPPKsNyzx3",
      embedUrl: "https://open.spotify.com/embed/album/0DUCdIMPrlfPFPPKsNyzx3"
    },
    {
      id: "0eH6ICTcUbNqjplgRISQEg",
      spotifyUrl: "https://open.spotify.com/album/0eH6ICTcUbNqjplgRISQEg",
      embedUrl: "https://open.spotify.com/embed/album/0eH6ICTcUbNqjplgRISQEg"
    },
    {
      id: "0GEdAkGPf0hOqaHtg6arIl",
      spotifyUrl: "https://open.spotify.com/album/0GEdAkGPf0hOqaHtg6arIl",
      embedUrl: "https://open.spotify.com/embed/album/0GEdAkGPf0hOqaHtg6arIl"
    },
    {
      id: "0m1Jpz8kxFIewCTy2NdkVt",
      spotifyUrl: "https://open.spotify.com/album/0m1Jpz8kxFIewCTy2NdkVt",
      embedUrl: "https://open.spotify.com/embed/album/0m1Jpz8kxFIewCTy2NdkVt"
    },
    {
      id: "0MTUFk4egA3SYvPjjsJUpX",
      spotifyUrl: "https://open.spotify.com/album/0MTUFk4egA3SYvPjjsJUpX",
      embedUrl: "https://open.spotify.com/embed/album/0MTUFk4egA3SYvPjjsJUpX"
    },
    {
      id: "0S8d8vJ5SiNtYsZmeCM9Qj",
      spotifyUrl: "https://open.spotify.com/album/0S8d8vJ5SiNtYsZmeCM9Qj",
      embedUrl: "https://open.spotify.com/embed/album/0S8d8vJ5SiNtYsZmeCM9Qj"
    },
    {
      id: "0zDs3M8rUvhn1D6IFNJMgI",
      spotifyUrl: "https://open.spotify.com/album/0zDs3M8rUvhn1D6IFNJMgI",
      embedUrl: "https://open.spotify.com/embed/album/0zDs3M8rUvhn1D6IFNJMgI"
    },
    {
      id: "0zXEyFkwoxht6Bqd3SgnOm",
      spotifyUrl: "https://open.spotify.com/album/0zXEyFkwoxht6Bqd3SgnOm",
      embedUrl: "https://open.spotify.com/embed/album/0zXEyFkwoxht6Bqd3SgnOm"
    },
    {
      id: "1AHlMa2wtRfyS8ZGyv6NbD",
      spotifyUrl: "https://open.spotify.com/album/1AHlMa2wtRfyS8ZGyv6NbD",
      embedUrl: "https://open.spotify.com/embed/album/1AHlMa2wtRfyS8ZGyv6NbD"
    },
    {
      id: "1kJD3mYufavAaI1IZwrP3i",
      spotifyUrl: "https://open.spotify.com/album/1kJD3mYufavAaI1IZwrP3i",
      embedUrl: "https://open.spotify.com/embed/album/1kJD3mYufavAaI1IZwrP3i"
    },
    {
      id: "1KYkaepx3oUWJRDR8ypzxH",
      spotifyUrl: "https://open.spotify.com/album/1KYkaepx3oUWJRDR8ypzxH",
      embedUrl: "https://open.spotify.com/embed/album/1KYkaepx3oUWJRDR8ypzxH"
    },
    {
      id: "1M7xS9mJ9jOxFKCWKqvMhy",
      spotifyUrl: "https://open.spotify.com/album/1M7xS9mJ9jOxFKCWKqvMhy",
      embedUrl: "https://open.spotify.com/embed/album/1M7xS9mJ9jOxFKCWKqvMhy"
    },
    {
      id: "1nE0dr9IW4y6nKDtVO8yTn",
      spotifyUrl: "https://open.spotify.com/album/1nE0dr9IW4y6nKDtVO8yTn",
      embedUrl: "https://open.spotify.com/embed/album/1nE0dr9IW4y6nKDtVO8yTn"
    },
    {
      id: "1nqhr6N5KbIaUbsTXq5WCa",
      spotifyUrl: "https://open.spotify.com/album/1nqhr6N5KbIaUbsTXq5WCa",
      embedUrl: "https://open.spotify.com/embed/album/1nqhr6N5KbIaUbsTXq5WCa"
    },
    {
      id: "1oZU9a9rdlLV2AB0OCocTZ",
      spotifyUrl: "https://open.spotify.com/album/1oZU9a9rdlLV2AB0OCocTZ",
      embedUrl: "https://open.spotify.com/embed/album/1oZU9a9rdlLV2AB0OCocTZ"
    },
    {
      id: "1qeqv8V5qkNHRmhcBD5QnD",
      spotifyUrl: "https://open.spotify.com/album/1qeqv8V5qkNHRmhcBD5QnD",
      embedUrl: "https://open.spotify.com/embed/album/1qeqv8V5qkNHRmhcBD5QnD"
    },
    {
      id: "1wkaJ7ryO3tGOCiErotmJM",
      spotifyUrl: "https://open.spotify.com/album/1wkaJ7ryO3tGOCiErotmJM",
      embedUrl: "https://open.spotify.com/embed/album/1wkaJ7ryO3tGOCiErotmJM"
    },
    {
      id: "2kn0EF90FuahMHtPpwVsX4",
      spotifyUrl: "https://open.spotify.com/album/2kn0EF90FuahMHtPpwVsX4",
      embedUrl: "https://open.spotify.com/embed/album/2kn0EF90FuahMHtPpwVsX4"
    },
    {
      id: "2METVTEMqPU2DNEYzTIpAn",
      spotifyUrl: "https://open.spotify.com/album/2METVTEMqPU2DNEYzTIpAn",
      embedUrl: "https://open.spotify.com/embed/album/2METVTEMqPU2DNEYzTIpAn"
    },
    {
      id: "2Z1OKCVyqJ1lMHTU612E07",
      spotifyUrl: "https://open.spotify.com/album/2Z1OKCVyqJ1lMHTU612E07",
      embedUrl: "https://open.spotify.com/embed/album/2Z1OKCVyqJ1lMHTU612E07"
    },
    {
      id: "2zABqsniagHwdKt0x6qgSi",
      spotifyUrl: "https://open.spotify.com/album/2zABqsniagHwdKt0x6qgSi",
      embedUrl: "https://open.spotify.com/embed/album/2zABqsniagHwdKt0x6qgSi"
    },
    {
      id: "3bSPbmYHqouqpTO2dw0EW5",
      spotifyUrl: "https://open.spotify.com/album/3bSPbmYHqouqpTO2dw0EW5",
      embedUrl: "https://open.spotify.com/embed/album/3bSPbmYHqouqpTO2dw0EW5"
    },
    {
      id: "3Fsk32axNH29FxUHxfGpmw",
      spotifyUrl: "https://open.spotify.com/album/3Fsk32axNH29FxUHxfGpmw",
      embedUrl: "https://open.spotify.com/embed/album/3Fsk32axNH29FxUHxfGpmw"
    },
    {
      id: "3h4pyWRJIB9ZyRKXChbX22",
      spotifyUrl: "https://open.spotify.com/album/3h4pyWRJIB9ZyRKXChbX22",
      embedUrl: "https://open.spotify.com/embed/album/3h4pyWRJIB9ZyRKXChbX22"
    },
    {
      id: "3pnfr6czXGlVH5jegQnjJg",
      spotifyUrl: "https://open.spotify.com/album/3pnfr6czXGlVH5jegQnjJg",
      embedUrl: "https://open.spotify.com/embed/album/3pnfr6czXGlVH5jegQnjJg"
    },
    {
      id: "3u3tYP3TjexWPMtSlb9DfH",
      spotifyUrl: "https://open.spotify.com/album/3u3tYP3TjexWPMtSlb9DfH",
      embedUrl: "https://open.spotify.com/embed/album/3u3tYP3TjexWPMtSlb9DfH"
    },
    {
      id: "3y63u5vmuMugqI8lfuUY3a",
      spotifyUrl: "https://open.spotify.com/album/3y63u5vmuMugqI8lfuUY3a",
      embedUrl: "https://open.spotify.com/embed/album/3y63u5vmuMugqI8lfuUY3a"
    },
    {
      id: "3zdVrZHfF2LkZjc8j7zuV7",
      spotifyUrl: "https://open.spotify.com/album/3zdVrZHfF2LkZjc8j7zuV7",
      embedUrl: "https://open.spotify.com/embed/album/3zdVrZHfF2LkZjc8j7zuV7"
    },
    {
      id: "417hziqslI7SOO5ysAakGF",
      spotifyUrl: "https://open.spotify.com/album/417hziqslI7SOO5ysAakGF",
      embedUrl: "https://open.spotify.com/embed/album/417hziqslI7SOO5ysAakGF"
    },
    {
      id: "46Rax7TjwVz8337CITVdEa",
      spotifyUrl: "https://open.spotify.com/album/46Rax7TjwVz8337CITVdEa",
      embedUrl: "https://open.spotify.com/embed/album/46Rax7TjwVz8337CITVdEa"
    },
    {
      id: "4csOppCBwphip5JnxwhL7Z",
      spotifyUrl: "https://open.spotify.com/album/4csOppCBwphip5JnxwhL7Z",
      embedUrl: "https://open.spotify.com/embed/album/4csOppCBwphip5JnxwhL7Z"
    },
    {
      id: "4eZKmaAjQLChmpJ7uqoZAY",
      spotifyUrl: "https://open.spotify.com/album/4eZKmaAjQLChmpJ7uqoZAY",
      embedUrl: "https://open.spotify.com/embed/album/4eZKmaAjQLChmpJ7uqoZAY"
    },
    {
      id: "4gtaQlVj6KIUbZTULn34a1",
      spotifyUrl: "https://open.spotify.com/album/4gtaQlVj6KIUbZTULn34a1",
      embedUrl: "https://open.spotify.com/embed/album/4gtaQlVj6KIUbZTULn34a1"
    },
    {
      id: "4jrl8361FYPSK2gdEEKATh",
      spotifyUrl: "https://open.spotify.com/album/4jrl8361FYPSK2gdEEKATh",
      embedUrl: "https://open.spotify.com/embed/album/4jrl8361FYPSK2gdEEKATh"
    },
    {
      id: "4OZincs6XqlfEuKEFtpq1Y",
      spotifyUrl: "https://open.spotify.com/album/4OZincs6XqlfEuKEFtpq1Y",
      embedUrl: "https://open.spotify.com/embed/album/4OZincs6XqlfEuKEFtpq1Y"
    },
    {
      id: "4v9i7H9Xk9BjEdJcHHhGc9",
      spotifyUrl: "https://open.spotify.com/album/4v9i7H9Xk9BjEdJcHHhGc9",
      embedUrl: "https://open.spotify.com/embed/album/4v9i7H9Xk9BjEdJcHHhGc9"
    },
    {
      id: "4VdWh8m5cYm3XI6dhayGIg",
      spotifyUrl: "https://open.spotify.com/album/4VdWh8m5cYm3XI6dhayGIg",
      embedUrl: "https://open.spotify.com/embed/album/4VdWh8m5cYm3XI6dhayGIg"
    },
    {
      id: "5ADI9PqHepQQRW348HDwcX",
      spotifyUrl: "https://open.spotify.com/album/5ADI9PqHepQQRW348HDwcX",
      embedUrl: "https://open.spotify.com/embed/album/5ADI9PqHepQQRW348HDwcX"
    },
    {
      id: "5BXYr7iU56rEX24QQPYcjO",
      spotifyUrl: "https://open.spotify.com/album/5BXYr7iU56rEX24QQPYcjO",
      embedUrl: "https://open.spotify.com/embed/album/5BXYr7iU56rEX24QQPYcjO"
    },
    {
      id: "5DV6MI8MgRGWvRoNNl66x4",
      spotifyUrl: "https://open.spotify.com/album/5DV6MI8MgRGWvRoNNl66x4",
      embedUrl: "https://open.spotify.com/embed/album/5DV6MI8MgRGWvRoNNl66x4"
    },
    {
      id: "5FBolm8f2uHMWKaauznlJ3",
      spotifyUrl: "https://open.spotify.com/album/5FBolm8f2uHMWKaauznlJ3",
      embedUrl: "https://open.spotify.com/embed/album/5FBolm8f2uHMWKaauznlJ3"
    },
    {
      id: "5kIVb2gjzotXETv1veJDje",
      spotifyUrl: "https://open.spotify.com/album/5kIVb2gjzotXETv1veJDje",
      embedUrl: "https://open.spotify.com/embed/album/5kIVb2gjzotXETv1veJDje"
    },
    {
      id: "5N6dSqrWduJNntj4svDbfE",
      spotifyUrl: "https://open.spotify.com/album/5N6dSqrWduJNntj4svDbfE",
      embedUrl: "https://open.spotify.com/embed/album/5N6dSqrWduJNntj4svDbfE"
    },
    {
      id: "5PIRdawQqgbshMXBBedm41",
      spotifyUrl: "https://open.spotify.com/album/5PIRdawQqgbshMXBBedm41",
      embedUrl: "https://open.spotify.com/embed/album/5PIRdawQqgbshMXBBedm41"
    },
    {
      id: "5PzpQ3Wx1dU16rRdQHVSCx",
      spotifyUrl: "https://open.spotify.com/album/5PzpQ3Wx1dU16rRdQHVSCx",
      embedUrl: "https://open.spotify.com/embed/album/5PzpQ3Wx1dU16rRdQHVSCx"
    },
    {
      id: "5ReQGBH80OoPK8Qy4wOrGj",
      spotifyUrl: "https://open.spotify.com/album/5ReQGBH80OoPK8Qy4wOrGj",
      embedUrl: "https://open.spotify.com/embed/album/5ReQGBH80OoPK8Qy4wOrGj"
    },
    {
      id: "5t3edOKtSD9HMJXBwTvBWp",
      spotifyUrl: "https://open.spotify.com/album/5t3edOKtSD9HMJXBwTvBWp",
      embedUrl: "https://open.spotify.com/embed/album/5t3edOKtSD9HMJXBwTvBWp"
    },
    {
      id: "5TkkA7O5NFZJes2HaEtja3",
      spotifyUrl: "https://open.spotify.com/album/5TkkA7O5NFZJes2HaEtja3",
      embedUrl: "https://open.spotify.com/embed/album/5TkkA7O5NFZJes2HaEtja3"
    },
    {
      id: "5UmrOPpQ3VmXmBRSvXMbcR",
      spotifyUrl: "https://open.spotify.com/album/5UmrOPpQ3VmXmBRSvXMbcR",
      embedUrl: "https://open.spotify.com/embed/album/5UmrOPpQ3VmXmBRSvXMbcR"
    },
    {
      id: "68CATT5x7h27zl3KKnLM3g",
      spotifyUrl: "https://open.spotify.com/album/68CATT5x7h27zl3KKnLM3g",
      embedUrl: "https://open.spotify.com/embed/album/68CATT5x7h27zl3KKnLM3g"
    },
    {
      id: "68xKnVblFsSQ48CtgZT0oY",
      spotifyUrl: "https://open.spotify.com/album/68xKnVblFsSQ48CtgZT0oY",
      embedUrl: "https://open.spotify.com/embed/album/68xKnVblFsSQ48CtgZT0oY"
    },
    {
      id: "6hFXLM8kG3P4ArcGNDb574",
      spotifyUrl: "https://open.spotify.com/album/6hFXLM8kG3P4ArcGNDb574",
      embedUrl: "https://open.spotify.com/embed/album/6hFXLM8kG3P4ArcGNDb574"
    },
    {
      id: "6MZrL088FKZhlDvPpwVAQd",
      spotifyUrl: "https://open.spotify.com/album/6MZrL088FKZhlDvPpwVAQd",
      embedUrl: "https://open.spotify.com/embed/album/6MZrL088FKZhlDvPpwVAQd"
    },
    {
      id: "6sN1L8SbguregFdB6slLWU",
      spotifyUrl: "https://open.spotify.com/album/6sN1L8SbguregFdB6slLWU",
      embedUrl: "https://open.spotify.com/embed/album/6sN1L8SbguregFdB6slLWU"
    },
    {
      id: "7FYLw9fTOiYnJFbFk2Mntn",
      spotifyUrl: "https://open.spotify.com/album/7FYLw9fTOiYnJFbFk2Mntn",
      embedUrl: "https://open.spotify.com/embed/album/7FYLw9fTOiYnJFbFk2Mntn"
    },
    {
      id: "7MgbrR6Xi7eF8Jl6TLirX7",
      spotifyUrl: "https://open.spotify.com/album/7MgbrR6Xi7eF8Jl6TLirX7",
      embedUrl: "https://open.spotify.com/embed/album/7MgbrR6Xi7eF8Jl6TLirX7"
    }
  ];

  return (
    <div className="studio-page">
      {/* Hero Álbumes */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="albums-hero-content">
            <div className="studio-indicator">
              <span className="current-studio">ÁLBUMES</span>
            </div>
            <h1 className="hero-title">GRABADO, MEZCLADO Y MASTERIZADO EN ESTUDIOS PANDA</h1>
            <p className="hero-subtitle">
              Explorá una selección única de producciones musicales trabajadas con los mayores estándares internacionales
            </p>
            <p className="hero-description">
              Nos enorgullece contribuir al éxito de canciones reconocidas a nivel global y local, ofreciendo un servicio personalizado que se adapta a las necesidades y visiones artísticas de cada cliente.
            </p>
          </div>
        </div>
      </div>

      {/* Descripción del Trabajo */}
      <div className="section section-dark">
        <div className="container">
          <div className="albums-intro">
            <h2>NUESTRO TRABAJO</h2>
            <div className="albums-description">
              <p>
                Trabajamos con artistas referentes de Latinoamérica y el mundo, desde proyectos emergentes e independientes hasta multinacionales como <strong>Sony</strong> y <strong>Universal</strong>.
              </p>
              <p>
                Desde álbumes aclamados hasta sencillos impactantes, en cada proyecto asumimos el compromiso de capturar la esencia musical de cada artista y producirla con los mayores estándares internacionales.
              </p>
              <p>
                Explorá nuestro catálogo y descubrí por qué somos líderes en Latinoamérica en producciones ganadoras de <strong>Grammys y Latin Grammys</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Álbumes */}
      <div className="section">
        <div className="container">
          <h2>ÁLBUMES DESTACADOS</h2>
          <p className="section-subtitle">
            Cada álbum, EP o single es una expresión artística que refleja el talento, la pasión y el esfuerzo de nuestros clientes junto a la calidad y el diseño sonoro de excelencia que nos caracteriza.
          </p>
          
          <div className="albums-grid">
            {albumesDestacados.map((album, index) => (
              <div key={album.id} className="album-card">
                <div className="album-cover">
                  <iframe 
                    src={`${album.embedUrl}?utm_source=generator&theme=0`}
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="spotify-embed"
                    title={`Spotify Album ${album.id}`}
                  />
                  <div className="album-overlay">
                    <a 
                      href={album.spotifyUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="spotify-btn"
                    >
                      <span className="spotify-icon">▶️</span>
                      ABRIR EN SPOTIFY
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="section section-dark">
        <div className="container">
          <h2>Y MUCHOS MÁS ÉXITOS DE HOY Y SIEMPRE</h2>
          <p className="section-subtitle">
            Nuestro catálogo incluye cientos de producciones exitosas en diversos géneros musicales
          </p>
          
          <div className="services-showcase">
            <div className="service-highlight">
              <div className="service-icon">🎛️</div>
              <h3>GRABACIÓN PROFESIONAL</h3>
              <p>Estudios equipados con la mejor tecnología para capturar cada detalle de tu música</p>
            </div>
            
            <div className="service-highlight">
              <div className="service-icon">🎚️</div>
              <h3>MEZCLA DE CALIDAD</h3>
              <p>Procesamiento analógico y digital para lograr el balance perfecto de tu producción</p>
            </div>
            
            <div className="service-highlight">
              <div className="service-icon">💎</div>
              <h3>MASTERIZACIÓN</h3>
              <p>Toque final profesional para que tu música suene perfecta en cualquier plataforma</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section">
        <div className="container">
          <div className="albums-cta">
            <h2>¿QUERÉS QUE TU MÚSICA ESTÉ ACÁ?</h2>
            <p>Contactanos y trabajemos juntos en tu próximo proyecto musical</p>
            <div className="cta-buttons">
              <a href="https://api.whatsapp.com/send?phone=541162218021&text=🐼%20Consulta%20sobre%20grabación" 
                 className="btn btn-primary" 
                 target="_blank" 
                 rel="noopener noreferrer">
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

export default Albumes;
