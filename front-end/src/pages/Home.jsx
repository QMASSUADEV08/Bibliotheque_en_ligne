import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { books } from '../data/books';

const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Image bibliothèque plein écran */}
      <HeroSection />

      {/* Section Nouveautés - Style Lisez.com */}
      <section style={{
        backgroundColor: 'var(--color-background)',
        padding: 'var(--spacing-4xl) var(--spacing-md)'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Titre section */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{
              fontSize: 'var(--font-size-4xl)',
              color: 'var(--color-primary)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Nouveautés Bibliothèque UIYA
            </h2>
            <p style={{
              fontSize: 'var(--font-size-xl)',
              color: 'var(--color-gray)',
              fontStyle: 'italic'
            }}>
              Découvrez nos œuvres disponibles cette semaine
            </p>
          </div>

          {/* Grille de livres */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-3xl)'
          }}>
            {books.map((book) => (
              <Link
                key={book.id}
                to={`/livre/${book.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  transition: 'var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image couverture */}
                <div style={{
                  width: '100%',
                  aspectRatio: '2/3',
                  marginBottom: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative'
                }}>
                  <img 
                    src={book.cover}
                    alt={book.title}
                    onError={(e) => {
                      // Si l'image ne charge pas, utiliser un placeholder
                      e.target.src = `https://via.placeholder.com/200x300/8B1538/FFFFFF?text=${encodeURIComponent(book.title.substring(0, 20))}`;
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Badge disponibilité */}
                  {book.available && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'var(--color-success)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: 'var(--border-radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-bold)'
                    }}>
                      Disponible
                    </div>
                  )}
                </div>

                {/* Nom de l'auteur */}
                <div style={{
                  textAlign: 'center',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-black)'
                }}>
                  {book.author}
                </div>
              </Link>
            ))}
          </div>

          {/* Call to action */}
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
            <Link to="/livres" className="btn btn-primary" style={{ fontSize: 'var(--font-size-lg)' }}>
               Voir tous les livres
            </Link>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        padding: 'var(--spacing-xl)',
        textAlign: 'center'
      }}>
        <p>© 2026 Bibliothèque UIYA - Université Internationale de Yamoussoukro</p>
        <p style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-sm)', opacity: 0.8 }}>
          Lire, apprendre, réussir
        </p>
      </footer>
    </div>
  );
};

export default Home;

