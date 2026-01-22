import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      
      {/* Image de fond (bibliothèque) - Depuis Unsplash */}
      <img 
        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop" 
        alt="Bibliothèque UIYA"
        className="hero-background"
      />

      {/* Contenu par-dessus l'image */}
      <div className="hero-content">
        <h1 className="hero-title">
          Bibliothèque UIYA
        </h1>
        
        <p className="hero-subtitle">
          Lire, apprendre, réussir
        </p>

        {/* Boutons d'action */}
        <div className="hero-buttons">
          <Link to="/visitor" className="btn btn-primary">
             Accès Visiteur
          </Link>
          
          <Link to="/login" className="btn btn-outline">
            👤 Connexion
          </Link>
          
          <Link to="/register" className="btn btn-outline">
            ✍️ Inscription
          </Link>
        </div>

        {/* Indication de scroll */}
        <div style={{ 
          marginTop: '3rem', 
          fontSize: '0.9rem', 
          opacity: 0.8,
          animation: 'bounce 2s infinite'
        }}>
          ↓ Découvrir nos livres
        </div>
      </div>

      {/* Animation bounce pour la flèche */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;