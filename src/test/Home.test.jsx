import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

// Mock de la imagen
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

describe('Home Component', () => {
  beforeEach(() => {
    // Limpiar cualquier mock antes de cada test
    vi.clearAllMocks()
  })

  it('should render without crashing', () => {
    expect(() => renderWithRouter(<Home />)).not.toThrow()
  })

  it('should display the main heading', () => {
    renderWithRouter(<Home />)
    const heading = screen.getByText('ESTUDIOS PANDA')
    expect(heading).toBeInTheDocument()
  })

  it('should display the hero subtitle', () => {
    renderWithRouter(<Home />)
    const subtitle = screen.getByText('El estudio de grabación latinoamericano que destaca en el mundo')
    expect(subtitle).toBeInTheDocument()
  })

  it('should display the hero description', () => {
    renderWithRouter(<Home />)
    const description = screen.getByText('Desde 1980 trabajando con los mayores estándares internacionales')
    expect(description).toBeInTheDocument()
  })

  it('should have the panda logo image', () => {
    renderWithRouter(<Home />)
    const logo = screen.getByAltText('Estudios Panda Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('hero-logo-img')
  })

  it('should have navigation buttons', () => {
    renderWithRouter(<Home />)
    const portfolioButton = screen.getByText('Ver Portfolio')
    const contactButton = screen.getByText('Contacto')
    
    expect(portfolioButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
    expect(portfolioButton).toHaveClass('btn', 'btn-primary')
    expect(contactButton).toHaveClass('btn', 'btn-secondary')
  })

  it('should have proper button links', () => {
    renderWithRouter(<Home />)
    const portfolioButton = screen.getByText('Ver Portfolio')
    const contactButton = screen.getByText('Contacto')
    
    expect(portfolioButton.closest('a')).toHaveAttribute('href', '#portfolio')
    expect(contactButton.closest('a')).toHaveAttribute('href', '#contacto')
  })
})
