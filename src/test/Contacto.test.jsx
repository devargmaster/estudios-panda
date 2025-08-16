import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Contacto from '../pages/Contacto'

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

describe('Contacto Component', () => {
  it('should render without crashing', () => {
    expect(() => renderWithRouter(<Contacto />)).not.toThrow()
  })

  it('should display the main heading', () => {
    renderWithRouter(<Contacto />)
    const heading = screen.getByText('ESCRIBAMOS JUNTOS TU HISTORIA')
    expect(heading).toBeInTheDocument()
  })

  it('should display contact information', () => {
    renderWithRouter(<Contacto />)
    
    expect(screen.getByText('INFORMACIÓN DE CONTACTO')).toBeInTheDocument()
    expect(screen.getByText(/\+54 11 6221-8021/)).toBeInTheDocument()
    expect(screen.getByText('CONTACTO DIRECTO')).toBeInTheDocument()
    expect(screen.getByText('HORARIOS')).toBeInTheDocument()
    expect(screen.getByText('UBICACIÓN')).toBeInTheDocument()
  })

  it('should display contact form', () => {
    renderWithRouter(<Contacto />)
    
    expect(screen.getByText('FORMULARIO DE CONSULTA')).toBeInTheDocument()
    
    // Verificar campos del formulario
    expect(screen.getByLabelText('Nombre Completo *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email *')).toBeInTheDocument()
    expect(screen.getByLabelText('Teléfono')).toBeInTheDocument()
    expect(screen.getByLabelText('Tipo de Proyecto *')).toBeInTheDocument()
  })

  it('should have WhatsApp links', () => {
    renderWithRouter(<Contacto />)
    
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]')
    expect(whatsappLinks.length).toBeGreaterThan(0)
  })

  it('should validate form inputs', () => {
    renderWithRouter(<Contacto />)
    
    const nameInput = screen.getByLabelText('Nombre Completo *')
    const emailInput = screen.getByLabelText('Email *')
    
    expect(nameInput).toHaveAttribute('required')
    expect(emailInput).toHaveAttribute('required')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('should handle form submission', () => {
    renderWithRouter(<Contacto />)
    
    const form = document.querySelector('form')
    expect(form).toBeInTheDocument()
    
    const submitButton = screen.getByText('ENVIAR POR WHATSAPP')
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('should display services options in project select', () => {
    renderWithRouter(<Contacto />)
    
    const projectSelect = screen.getByLabelText('Tipo de Proyecto *')
    expect(projectSelect).toBeInTheDocument()
    
    // Verificar que tiene opciones de servicios
    const options = projectSelect.querySelectorAll('option')
    expect(options.length).toBeGreaterThan(1) // Más de la opción por defecto
  })

  it('should have proper form structure', () => {
    renderWithRouter(<Contacto />)
    
    const formContainer = document.querySelector('.professional-contact-form')
    expect(formContainer).toBeInTheDocument()
    
    const formGroups = document.querySelectorAll('.form-group')
    expect(formGroups.length).toBeGreaterThan(0)
  })

  it('should display business hours', () => {
    renderWithRouter(<Contacto />)
    
    expect(screen.getByText('HORARIOS')).toBeInTheDocument()
    expect(screen.getByText(/Atención Comercial/)).toBeInTheDocument()
  })

  it('should handle input changes', () => {
    renderWithRouter(<Contacto />)
    
    const nameInput = screen.getByLabelText('Nombre Completo *')
    fireEvent.change(nameInput, { target: { value: 'Test User' } })
    expect(nameInput.value).toBe('Test User')
  })
})
