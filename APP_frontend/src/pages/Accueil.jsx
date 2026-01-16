import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&h=800&fit=crop",
      title: "Bienvenue sur notre bibliothèque en ligne",
      subtitle: "Découvrez une collection riche et diversifiée"
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=800&fit=crop",
      title: "Pour les étudiants, par les étudiants",
      subtitle: "Votre réussite est notre priorité"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Carrousel Hero */}
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden', width: '100%' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.75), rgba(107, 15, 42, 0.65)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ textAlign: 'center', color: 'white', maxWidth: '700px', padding: '20px' }}>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {slide.title}
              </h1>
              <p style={{ 
                fontSize: '1.15rem', 
                marginBottom: '2rem',
                opacity: '0.95',
                fontWeight: '400'
              }}>
                {slide.subtitle}
              </p>

              <button
                type="button"
                onClick={() => navigate('/livres')}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#8B1538',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.75rem 2.5rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
              >
                Parcourir les livres →
              </button>
            </div>
          </div>
        ))}

        {/* Boutons navigation */}
        <button
          type="button"
          aria-label="Slide précédent"
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#8B1538',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#8B1538';
            e.target.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.target.style.color = '#8B1538';
          }}
        >
          ◀
        </button>

        <button
          type="button"
          aria-label="Slide suivant"
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#8B1538',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#8B1538';
            e.target.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.target.style.color = '#8B1538';
          }}
        >
          ▶
        </button>

        {/* Indicateurs */}
        <div
          style={{
            position: 'absolute',
            bottom: '25px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            zIndex: 10
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Aller au slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '35px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: '#FFFFFF',
                opacity: currentSlide === index ? 1 : 0.6,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Section Fonctionnalités */}
      <div style={{ 
        backgroundColor: '#F8F9FA', 
        padding: '3rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px' 
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '2.5rem',
            color: '#2d3748'
          }}>
            Pourquoi choisir notre bibliothèque ?
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {/* Carte 1 */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #E5E5E5',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#8B1538';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#E5E5E5';
            }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                color: '#8B1538'
              }}>
                📚
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '700', 
                marginBottom: '0.75rem',
                color: '#2d3748'
              }}>
                Collection variée
              </h3>
              <p style={{ 
                color: '#6B7280', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                Des milliers de livres académiques et littéraires pour tous les niveaux d'études.
              </p>
            </div>

            {/* Carte 2 */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #E5E5E5',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#8B1538';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#E5E5E5';
            }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                color: '#8B1538'
              }}>
                🚀
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '700', 
                marginBottom: '0.75rem',
                color: '#2d3748'
              }}>
                Accès rapide
              </h3>
              <p style={{ 
                color: '#6B7280', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                Empruntez et consultez vos livres en quelques clics, disponible 24/7.
              </p>
            </div>

            {/* Carte 3 */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #E5E5E5',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#8B1538';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#E5E5E5';
            }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                color: '#8B1538'
              }}>
                🎓
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '700', 
                marginBottom: '0.75rem',
                color: '#2d3748'
              }}>
                Support étudiant
              </h3>
              <p style={{ 
                color: '#6B7280', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                Une équipe dédiée pour vous accompagner dans vos recherches académiques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section CTA */}
      <div style={{ 
        background: 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 100%)',
        color: 'white',
        padding: '3rem 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1rem' 
          }}>
            Prêt à commencer ?
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            opacity: '0.95'
          }}>
            Rejoignez notre communauté et accédez à des milliers de ressources académiques.
          </p>
          <button
            type="button"
            onClick={() => navigate('/connexion')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#8B1538',
              border: 'none',
              borderRadius: '6px',
              padding: '0.75rem 2.5rem',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;