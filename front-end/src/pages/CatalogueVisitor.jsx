import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { books, searchBooks } from '../data/books';

const CatalogueVisitor = () => {
  const [visitorName, setVisitorName] = useState('');
  const [niveau, setNiveau] = useState('');
  const [isAccessed, setIsAccessed] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (searchQuery) {
      const results = searchBooks(searchQuery);
      setFilteredBooks(results);
    } else {
      setFilteredBooks(books);
    }
  }, [searchQuery]);

  const handleAccess = (e) => {
    e.preventDefault();
    if (visitorName && niveau) {
      setIsAccessed(true);
      // Sauvegarder en localStorage (temporaire, pour la session)
      sessionStorage.setItem('visitorName', visitorName);
      sessionStorage.setItem('visitorNiveau', niveau);
    }
  };

  // Si pas encore d'accès, afficher le formulaire
  if (!isAccessed) {
    return (
      <div>
        <Navbar />
        
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'var(--navbar-height)',
          backgroundColor: 'var(--color-background)'
        }}>
          <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-2xl)',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            width: '100%',
            maxWidth: '450px',
            margin: 'var(--spacing-xl)'
          }}>
            
            {/* Titre */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h1 style={{ 
                fontSize: 'var(--font-size-3xl)', 
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                 Accès Visiteur
              </h1>
              <p style={{ color: 'var(--color-gray)' }}>
                Consultez notre catalogue sans créer de compte
              </p>
            </div>

            {/* Info */}
            <div style={{
              backgroundColor: 'var(--color-gray-lighter)',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)',
              marginBottom: 'var(--spacing-lg)',
              fontSize: 'var(--font-size-sm)'
            }}>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                Pour voir la liste des livres
              </p>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                Pour consulter les résumés
              </p>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                pour vérifier les disponibilités
              </p>
              <p style={{ color: 'var(--color-danger)' }}>
                Et  Emprunter des livres vous devez créer un compte
              </p>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleAccess}>
              
              {/* Nom */}
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 'var(--spacing-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-gray-dark)'
                }}>
                  Votre nom
                </label>
                <input
                  type="text"
                  name="nom"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  required
                  placeholder="Ex: Jean Kouassi"
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: '1px solid var(--color-gray-light)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: 'var(--font-size-base)',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Niveau */}
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 'var(--spacing-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-gray-dark)'
                }}>
                  Votre niveau
                </label>
                <select
                  name="niveau"
                  value={niveau}
                  onChange={(e) => setNiveau(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: '1px solid var(--color-gray-light)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: 'var(--font-size-base)',
                    outline: 'none',
                    backgroundColor: 'var(--color-white)'
                  }}
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="L1">Licence 1</option>
                  <option value="L2">Licence 2</option>
                  <option value="L3">Licence 3</option>
                  <option value="M1">Master 1</option>
                  <option value="M2">Master 2</option>
                </select>
              </div>

              {/* Bouton */}
              <button 
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
              >
                Accéder au catalogue
              </button>

              {/* Lien vers création de compte */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
                  Voulez-vous emprunter des livres ?{' '}
                  <Link to="/register" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                    Créer un compte
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Si accès accordé, afficher le catalogue
  return (
    <div>
      <Navbar />
      
      <div style={{ paddingTop: 'var(--navbar-height)' }}>
        <section className="section">
          <div className="container">
            
            {/* Header avec info visiteur */}
            <div style={{
              backgroundColor: 'var(--color-gray-lighter)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--border-radius-lg)',
              marginBottom: 'var(--spacing-2xl)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-xs)' }}>
                  Bienvenue, {visitorName} !
                </h2>
                <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
                  Niveau : {niveau} • Mode Visiteur
                </p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setIsAccessed(false);
                  setVisitorName('');
                  setNiveau('');
                  sessionStorage.clear();
                }}
              >
                Se déconnecter
              </button>
            </div>

           <h2 className="section-title">
  {searchQuery ? `Résultats pour "${searchQuery}"` : 'Catalogue des Livres'}
</h2>


            {filteredBooks.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: 'var(--spacing-3xl)',
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius-lg)'
              }}>
                <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray)' }}>
                  Aucun livre trouvé pour "{searchQuery}"
                </p>
              </div>
            ) : (
              <div>
                {filteredBooks.map((book) => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    isVisitor={true}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CatalogueVisitor;