// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3 border-top mt-5">
      <Container>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>
              Bibliothèque en Ligne - UIYA
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
              © 2026 - Tous droits réservés
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;