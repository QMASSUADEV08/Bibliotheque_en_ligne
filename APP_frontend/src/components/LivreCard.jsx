// src/components/LivreCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LivreCard({ livre }) {
  // Fonction pour déterminer la couleur du badge de niveau
  const getNiveauColor = (niveau) => {
    switch(niveau?.toLowerCase()) {
      case 'facile': return 'success';
      case 'moyen': return 'warning';
      case 'difficile': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Link to={`/livre/${livre.id}`} style={{ textDecoration: 'none' }}>
      <Card className="h-100 border-0 shadow-sm hover-card" style={{ cursor: 'pointer' }}>
        {/* Image du livre */}
        <Card.Img 
          variant="top" 
          src={livre.image || 'https://via.placeholder.com/300x200?text=Livre'} 
          style={{ height: '180px', objectFit: 'cover' }}
        />
        
        <Card.Body className="d-flex flex-column p-3">
          {/* Catégorie */}
          <div className="mb-2">
            <small className="text-primary fw-semibold" style={{ fontSize: '0.75rem' }}>
              {livre.categorie || 'LITTÉRATURE'}
            </small>
          </div>

          {/* Titre */}
          <Card.Title className="fw-bold mb-2" style={{ fontSize: '1rem', color: '#2d3748' }}>
            {livre.titre}
          </Card.Title>

          {/* Auteur */}
          <Card.Text className="text-muted mb-3" style={{ fontSize: '0.875rem' }}>
            par {livre.auteur}
          </Card.Text>

          {/* Informations (Niveau et Durée) */}
          <div className="mt-auto d-flex align-items-center gap-3" style={{ fontSize: '0.875rem' }}>
            {/* Niveau */}
            {livre.niveau && (
              <div className="d-flex align-items-center gap-1">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
                <span className="text-muted">{livre.niveau}</span>
              </div>
            )}

            {/* Durée */}
            {livre.duree && (
              <div className="d-flex align-items-center gap-1">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                <span className="text-muted">{livre.duree}</span>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default LivreCard;