import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const drawer = (
    <div className="w-64">
      <div className="flex justify-between items-center p-4 border-b">
        <Typography variant="h6" className="font-display font-bold">
          ESTUDIOS PANDA
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label} 
            button 
            onClick={() => {
              handleDrawerToggle();
              document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          className={`transition-all duration-300 ${
            scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
          }`}
          elevation={scrolled ? 4 : 0}
        >
          <Toolbar className="max-w-7xl mx-auto w-full px-4">
            <Typography 
              variant="h6" 
              component="div" 
              className="flex-grow font-display font-bold text-white text-xl"
            >
              ESTUDIOS PANDA
            </Typography>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  className="text-white hover:text-blue-300 transition-colors"
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className="md:hidden"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
