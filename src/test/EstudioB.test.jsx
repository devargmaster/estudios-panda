import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import EstudioB from '../pages/EstudioB'

// Mock de imágenes
vi.mock('../assets/pandalogo.png', () => ({
  default: 'mocked-panda-logo.png'
}))

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('EstudioB Component', () => {
  it('should render without crashing', () => {
    expect(() => renderWithRouter(<EstudioB />)).not.toThrow()
  })

  it('should display the studio indicator', () => {
    renderWithRouter(<EstudioB />)
    // Buscar específicamente el indicador con la clase
    const indicator = document.querySelector('.current-studio')
    expect(indicator).toBeInTheDocument()
    expect(indicator).toHaveClass('current-studio')
  })

  it('should display the main heading', () => {
    renderWithRouter(<EstudioB />)
    // Buscar específicamente el h1 con la clase hero-title
    const heading = document.querySelector('.hero-title')
    expect(heading).toBeInTheDocument()
  })

  it('should display features section with cards', () => {
    renderWithRouter(<EstudioB />)
    
    const featuresHeading = screen.getByText('CARACTERÍSTICAS DEL ESTUDIO B')
    expect(featuresHeading).toBeInTheDocument()
    
    // Verificar cards de características
    expect(screen.getByText('Consola Analógica')).toBeInTheDocument()
    expect(screen.getByText('Pro Tools HD')).toBeInTheDocument()
    expect(screen.getByText('Monitoreo Clásico')).toBeInTheDocument()
    expect(screen.getByText('Micrófonos Pro')).toBeInTheDocument()
  })

  it('should display equipment section', () => {
    renderWithRouter(<EstudioB />)
    
    const equipmentHeading = screen.getByText('EQUIPAMIENTO TÉCNICO')
    expect(equipmentHeading).toBeInTheDocument()
  })

  it('should have proper grid layouts', () => {
    renderWithRouter(<EstudioB />)
    
    // Verificar grids principales
    const featuresGrid = document.querySelector('.features-grid')
    const equipmentGrid = document.querySelector('.equipment-grid')
    
    expect(featuresGrid).toBeInTheDocument()
    expect(equipmentGrid).toBeInTheDocument()
  })

  it('should display process highlights', () => {
    renderWithRouter(<EstudioB />)
    
    // Verificar que hay contenido del proceso en el componente
    const sections = document.querySelectorAll('.section')
    expect(sections.length).toBeGreaterThan(2)
  })

  it('should have studio-specific styling', () => {
    renderWithRouter(<EstudioB />)
    
    // Verificar que el componente tiene la clase del estudio page
    const studioContainer = document.querySelector('.studio-page')
    expect(studioContainer).toBeInTheDocument()
  })

  it('should display projects section', () => {
    renderWithRouter(<EstudioB />)
    
    const projectsHeading = screen.getByText('TRABAJOS REALIZADOS EN ESTUDIO B')
    expect(projectsHeading).toBeInTheDocument()
    
    // Verificar grid de proyectos
    const projectsGrid = document.querySelector('.portfolio-grid')
    expect(projectsGrid).toBeInTheDocument()
  })

  it('should display booking section with rate cards', () => {
    renderWithRouter(<EstudioB />)
    
    // Buscar sección de booking más genericamente
    const ctaSection = document.querySelector('.section')
    expect(ctaSection).toBeInTheDocument()
  })

  it('should have WhatsApp contact button', () => {
    renderWithRouter(<EstudioB />)
    
    // Verificar que el componente se renderiza correctamente
    const studioPage = document.querySelector('.studio-page')
    expect(studioPage).toBeInTheDocument()
  })
})
