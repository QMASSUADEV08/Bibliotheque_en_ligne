// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav 
      className="navbar navbar-expand-lg shadow-sm fixed-top py-0" 
      style={{ backgroundColor: '#f8f9fa', minHeight: '45px' }} // navbar plus fine
    >
      <div className="container px-2">
        {/* Logo + Nom de la bibliothèque */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src="/logo.jpeg"
            alt="Logo UIYA"
            style={{
              width: '45px',   // logo conservé à 45px
              height: '45px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '8px',
              border: '2px solid #E53E3E'
            }}
          />
          
          <div style={{ lineHeight: '1' }}>
            <div 
              className="fw-bold" 
              style={{ fontSize: '0.80rem', color: '#2d3748' }}
            >
              UIYA Bibliothèque
            </div>
            <small 
              style={{ fontSize: '0.60rem', color: '#E53E3E', fontWeight: '500' }}
            >
              Votre bibliothèque en ligne
            </small>
          </div>
        </Link>

        {/* Bouton hamburger pour mobile */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-1">
              <Link to="/" className="nav-link fw-semibold" style={{ color: '#2d3748', fontSize: '0.80rem' }}>
                Accueil
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/livres" className="nav-link fw-semibold" style={{ color: '#2d3748', fontSize: '0.80rem' }}>
                Livres
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link 
                to="/connexion" 
                className="nav-link fw-semibold"
                style={{ color: '#E53E3E', fontSize: '0.80rem' }}
              >
                Connexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;





