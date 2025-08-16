import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import EstudioA from './pages/EstudioA'
import EstudioB from './pages/EstudioB'
import Albumes from './pages/Albumes'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import GlobalFooter from './components/GlobalFooter'
import pandaLogo from './assets/pandalogo.png'
import './App.css'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <div className="container">
        <h1>
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={pandaLogo} alt="Panda Logo" className="logo" />
          </Link>
        </h1>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="studio-selector">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              HOME
            </Link>
            <Link 
              to="/estudio-a" 
              className={location.pathname === '/estudio-a' ? 'active' : ''}
              onClick={closeMenu}
            >
              ESTUDIO A
            </Link>
            <Link 
              to="/estudio-b" 
              className={location.pathname === '/estudio-b' ? 'active' : ''}
              onClick={closeMenu}
            >
              ESTUDIO B
            </Link>
            <Link 
              to="/albumes" 
              className={location.pathname === '/albumes' ? 'active' : ''}
              onClick={closeMenu}
            >
              ÁLBUMES
            </Link>
            <Link 
              to="/servicios" 
              className={location.pathname === '/servicios' ? 'active' : ''}
              onClick={closeMenu}
            >
              SERVICIOS
            </Link>
            <Link 
              to="/contacto" 
              className={location.pathname === '/contacto' ? 'active' : ''}
              onClick={closeMenu}
            >
              CONTACTO
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

function AppContent() {
  const location = useLocation()
  
  const getStudioClass = () => {
    if (location.pathname === '/estudio-a') return 'studio-a'
    if (location.pathname === '/estudio-b') return 'studio-b'
    // Las páginas generales mantienen el tema dorado por defecto
    return 'studio-general'
  }

  return (
    <div className={getStudioClass()}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudio-a" element={<EstudioA />} />
          <Route path="/estudio-b" element={<EstudioB />} />
          <Route path="/albumes" element={<Albumes />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <GlobalFooter />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
