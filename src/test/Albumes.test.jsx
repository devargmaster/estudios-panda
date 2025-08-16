import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Albumes from '../pages/Albumes'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Albumes Component', () => {
  it('should render without crashing', () => {
    expect(() => renderWithRouter(<Albumes />)).not.toThrow()
  })

  it('should display the main heading', () => {
    renderWithRouter(<Albumes />)
    const heading = screen.getByText('GRABADO, MEZCLADO Y MASTERIZADO EN ESTUDIOS PANDA')
    expect(heading).toBeInTheDocument()
  })

  it('should display the section indicator', () => {
    renderWithRouter(<Albumes />)
    const indicator = screen.getByText('ÁLBUMES')
    expect(indicator).toBeInTheDocument()
    expect(indicator).toHaveClass('current-studio')
  })

  it('should display the albums section', () => {
    renderWithRouter(<Albumes />)
    const albumsHeading = screen.getByText('ÁLBUMES DESTACADOS')
    expect(albumsHeading).toBeInTheDocument()
  })

  it('should display the services showcase section', () => {
    renderWithRouter(<Albumes />)
    const servicesHeading = screen.getByText('Y MUCHOS MÁS ÉXITOS DE HOY Y SIEMPRE')
    expect(servicesHeading).toBeInTheDocument()
  })

  it('should display service highlights', () => {
    renderWithRouter(<Albumes />)
    
    expect(screen.getByText('GRABACIÓN PROFESIONAL')).toBeInTheDocument()
    expect(screen.getByText('MEZCLA DE CALIDAD')).toBeInTheDocument()
    expect(screen.getByText('MASTERIZACIÓN')).toBeInTheDocument()
  })

  it('should display call to action section', () => {
    renderWithRouter(<Albumes />)
    const ctaHeading = screen.getByText('¿QUERÉS QUE TU MÚSICA ESTÉ ACÁ?')
    expect(ctaHeading).toBeInTheDocument()
  })

  it('should have WhatsApp and contact buttons', () => {
    renderWithRouter(<Albumes />)
    
    const whatsappButton = screen.getByText('CONTACTANOS POR WHATSAPP')
    const contactButton = screen.getByText('FORMULARIO DE CONTACTO')
    
    expect(whatsappButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
    
    // Verificar enlaces
    expect(whatsappButton.closest('a')).toHaveAttribute('href', expect.stringContaining('whatsapp'))
    expect(contactButton.closest('a')).toHaveAttribute('href', '/contacto')
  })

  it('should render spotify album embeds', () => {
    renderWithRouter(<Albumes />)
    
    // Verificar que haya iframes de Spotify (al menos algunos)
    const spotifyEmbeds = screen.getAllByTitle(/Spotify Album/)
    expect(spotifyEmbeds.length).toBeGreaterThan(0)
    
    // Verificar que tengan la estructura correcta
    spotifyEmbeds.forEach(embed => {
      expect(embed).toHaveAttribute('src', expect.stringContaining('spotify.com/embed'))
      expect(embed).toHaveClass('spotify-embed')
    })
  })

  it('should have correct album overlay structure', () => {
    renderWithRouter(<Albumes />)
    
    // Verificar que hay elementos con la clase album-overlay
    const albumCards = document.querySelectorAll('.album-card')
    expect(albumCards.length).toBeGreaterThan(0)
    
    albumCards.forEach(card => {
      const overlay = card.querySelector('.album-overlay')
      expect(overlay).toBeInTheDocument()
    })
  })
})
