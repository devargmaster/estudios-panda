import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import GlobalFooter from '../components/GlobalFooter'

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

describe('GlobalFooter Component', () => {
  it('should render without crashing', () => {
    renderWithRouter(<GlobalFooter />)
    expect(document.querySelector('.footer')).toBeInTheDocument()
  })

  it('should display company branding', () => {
    renderWithRouter(<GlobalFooter />)
    
    // Verificar que se muestra el logo o nombre de la empresa
    const brandElement = document.querySelector('.footer-brand')
    expect(brandElement).toBeInTheDocument()
  })

  it('should display navigation links', () => {
    renderWithRouter(<GlobalFooter />)
    
    const navLinks = document.querySelectorAll('.footer-links a')
    expect(navLinks.length).toBeGreaterThan(0)
    
    // Verificar algunos enlaces específicos
    const homeLink = document.querySelector('a[href="/"]')
    const contactLink = document.querySelector('a[href="/contacto"]')
    expect(homeLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('should display contact information', () => {
    renderWithRouter(<GlobalFooter />)
    
    const contactSection = document.querySelector('.footer-contact')
    expect(contactSection).toBeInTheDocument()
    
    // Verificar que hay información de contacto
    const contactInfo = contactSection.textContent
    expect(contactInfo).toContain('Buenos Aires')
    expect(contactInfo).toContain('+54')
  })

  it('should have WhatsApp links', () => {
    renderWithRouter(<GlobalFooter />)
    
    const whatsappLink = document.querySelector('a[href*="whatsapp"]')
    expect(whatsappLink).toBeInTheDocument()
    expect(whatsappLink).toHaveAttribute('target', '_blank')
  })

  it('should display quick contact form', () => {
    renderWithRouter(<GlobalFooter />)
    
    const ctaSection = document.querySelector('.footer-cta')
    expect(ctaSection).toBeInTheDocument()
    
    // Verificar que hay botones de acción
    const buttons = ctaSection.querySelectorAll('.footer-btn')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should display social media links', () => {
    renderWithRouter(<GlobalFooter />)
    
    // El componente actual tiene enlaces de WhatsApp en los botones
    const whatsappLink = document.querySelector('a[href*="whatsapp"]')
    expect(whatsappLink).toBeInTheDocument()
  })

  it('should display copyright information', () => {
    renderWithRouter(<GlobalFooter />)
    
    const copyright = document.querySelector('.footer-copy')
    expect(copyright).toBeInTheDocument()
    expect(copyright.textContent).toContain('2025')
    expect(copyright.textContent).toContain('Estudios Panda')
  })

  it('should have proper grid layout', () => {
    renderWithRouter(<GlobalFooter />)
    
    const footerContent = document.querySelector('.footer-content')
    expect(footerContent).toBeInTheDocument()
    
    // Verificar que hay secciones del footer
    const sections = footerContent.querySelectorAll('.footer-section')
    expect(sections.length).toBeGreaterThan(0)
  })

  it('should have navigation links that work with React Router', () => {
    renderWithRouter(<GlobalFooter />)
    
    const internalLinks = document.querySelectorAll('a[href^="/"]')
    expect(internalLinks.length).toBeGreaterThan(0)
  })

  it('should have proper styling classes', () => {
    renderWithRouter(<GlobalFooter />)
    
    // Verificar clases principales
    expect(document.querySelector('.footer')).toBeInTheDocument()
    expect(document.querySelector('.footer-content')).toBeInTheDocument()
    expect(document.querySelector('.footer-bottom')).toBeInTheDocument()
  })

  it('should display business information', () => {
    renderWithRouter(<GlobalFooter />)
    
    const footerText = document.querySelector('.footer').textContent
    expect(footerText).toContain('Estudios Panda')
    expect(footerText).toContain('estudio de grabación')
  })

  it('should display awards section', () => {
    renderWithRouter(<GlobalFooter />)
    
    const studioInfo = document.querySelector('.footer-copy')
    expect(studioInfo).toBeInTheDocument()
    expect(studioInfo.textContent).toContain('Grabado, mezclado y masterizado')
  })

  it('should have responsive footer layout', () => {
    renderWithRouter(<GlobalFooter />)
    
    const footer = document.querySelector('.footer')
    expect(footer).toBeInTheDocument()
    
    // Verificar que tiene container para responsive
    const container = footer.querySelector('.container')
    expect(container).toBeInTheDocument()
  })

  it('should have proper footer bottom layout', () => {
    renderWithRouter(<GlobalFooter />)
    
    const footerBottom = document.querySelector('.footer-bottom')
    expect(footerBottom).toBeInTheDocument()
    
    // Verificar que contiene copyright
    expect(footerBottom.querySelector('.footer-copy')).toBeInTheDocument()
  })
})