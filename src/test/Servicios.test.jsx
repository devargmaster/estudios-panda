import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Servicios from '../pages/Servicios'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Servicios Component', () => {
  it('should render without crashing', () => {
    expect(() => renderWithRouter(<Servicios />)).not.toThrow()
  })

  it('should display the main heading', () => {
    renderWithRouter(<Servicios />)
    const heading = screen.getByText('SERVICIOS PROFESIONALES')
    expect(heading).toBeInTheDocument()
  })

  it('should display service cards', () => {
    renderWithRouter(<Servicios />)
    
    expect(screen.getByText('GRABACIÓN PROFESIONAL')).toBeInTheDocument()
    expect(screen.getByText('MEZCLA DE ALTA CALIDAD')).toBeInTheDocument()
    expect(screen.getByText('MASTERIZACIÓN PROFESIONAL')).toBeInTheDocument()
  })

  it('should display process section', () => {
    renderWithRouter(<Servicios />)
    
    const processHeading = screen.getByText('NUESTRO PROCESO')
    expect(processHeading).toBeInTheDocument()
    
    expect(screen.getByText('CONSULTA INICIAL')).toBeInTheDocument()
    expect(screen.getByText('PREPRODUCCIÓN')).toBeInTheDocument()
    expect(screen.getByText('GRABACIÓN')).toBeInTheDocument()
    expect(screen.getByText('POSTPRODUCCIÓN')).toBeInTheDocument()
  })

  it('should display info grid section', () => {
    renderWithRouter(<Servicios />)
    
    expect(screen.getByText('HORARIOS')).toBeInTheDocument()
    expect(screen.getByText('ESPECIALIDADES')).toBeInTheDocument()
    expect(screen.getByText('EXPERIENCIA')).toBeInTheDocument()
  })

  it('should display specialty tags with proper contrast', () => {
    renderWithRouter(<Servicios />)
    
    // Verificar que las etiquetas de especialidad están presentes
    expect(screen.getByText('Rock')).toBeInTheDocument()
    expect(screen.getByText('Pop')).toBeInTheDocument()
    expect(screen.getByText('Jazz')).toBeInTheDocument()
    expect(screen.getByText('Electrónica')).toBeInTheDocument()
    
    // Verificar que tienen la clase correcta para el contraste
    const tags = document.querySelectorAll('.tag')
    expect(tags.length).toBeGreaterThan(0)
  })

  it('should display achievements list', () => {
    renderWithRouter(<Servicios />)
    
    expect(screen.getByText('Ganadores de Grammy Latino')).toBeInTheDocument()
    expect(screen.getByText('Colaboraciones con Sony y Universal')).toBeInTheDocument()
    expect(screen.getByText('Más de 500 producciones exitosas')).toBeInTheDocument()
  })

  it('should have call to action with WhatsApp link', () => {
    renderWithRouter(<Servicios />)
    
    const ctaHeading = screen.getByText('¿LISTO PARA CREAR TU PRÓXIMO HIT?')
    expect(ctaHeading).toBeInTheDocument()
    
    const whatsappButton = screen.getByText('CONTACTANOS POR WHATSAPP')
    const contactButton = screen.getByText('FORMULARIO DE CONTACTO')
    
    expect(whatsappButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
    
    // Verificar enlaces
    expect(whatsappButton.closest('a')).toHaveAttribute('href', expect.stringContaining('whatsapp'))
    expect(contactButton.closest('a')).toHaveAttribute('href', '/contacto')
  })

  it('should have proper service card structure', () => {
    renderWithRouter(<Servicios />)
    
    const serviceCards = document.querySelectorAll('.service-card')
    expect(serviceCards.length).toBe(3) // 3 servicios principales
    
    serviceCards.forEach(card => {
      expect(card).toHaveClass('service-card')
    })
  })

  it('should have process steps with numbers', () => {
    renderWithRouter(<Servicios />)
    
    const stepNumbers = document.querySelectorAll('.step-number')
    expect(stepNumbers.length).toBe(4) // 4 pasos del proceso
    
    expect(stepNumbers[0]).toHaveTextContent('01')
    expect(stepNumbers[1]).toHaveTextContent('02')
    expect(stepNumbers[2]).toHaveTextContent('03')
    expect(stepNumbers[3]).toHaveTextContent('04')
  })
})
