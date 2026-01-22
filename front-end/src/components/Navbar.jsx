import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/livres?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* ========== LIGNE 1 : Logo + Accueil + À propos + Recherche + Mon Compte ========== */}
        <div className="navbar-top">
          
          {/* Section gauche : Logo + Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', zIndex: 1 }}>
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <span style={{ fontSize: '1.5rem' }}>
                <img 
                 src="/images/logo.jpeg" 
                 alt="Logo Bibliothèque UIYA" 
                 style={{ height: "45px" }} 
  />
              </span>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', lineHeight: 1.2 }}>
                   Université Internationale de Yamoussoukro
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 'normal', opacity: 0.9, lineHeight: 1.2 }}>
                     Bibliothèque UIYA
                </div>
              </div>
            </Link>

            {/* Menu Ligne 1 */}
            <ul style={{ margin: 1, listStyle: 'none', display: 'flex', gap: '2.5rem' }}>
              <li className="navbar-item">
                <Link to="/">Accueil</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about">À propos</Link>
              </li>
            </ul>
          </div>

          {/* Barre de recherche CENTRÉE */}
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-bar">
              <span className="search-icon"></span>
              <input 
                type="text"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un livre..."
                style={{ width: '100%' }}
              />
            </form>
          </div>

          {/* Section droite : Mon Compte */}
          <div style={{ zIndex: 1 }}>
            {/* Menu utilisateur */}
            <div className="user-menu dropdown">
              <div className="dropdown-toggle" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <span>👤</span>
                <span>Mon Compte</span>
                <span style={{ fontSize: '0.8rem' }}>▼</span>
              </div>

              <div className="dropdown-menu" style={{ right: 0, left: 'auto', minWidth: '200px' }}>
                {!isLoggedIn ? (
                  <>
                    <Link to="/login" className="dropdown-item">
                      👤 Connexion
                    </Link>
                    <Link to="/register" className="dropdown-item">
                       Inscription
                    </Link>
                    <Link to="/visitor" className="dropdown-item">
                       Accès Visiteur
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/dashboard" className="dropdown-item">
                      📊 Tableau de bord
                    </Link>
                    <Link to="/borrowings" className="dropdown-item">
                       Mes emprunts
                    </Link>
                    <Link to="/profile" className="dropdown-item">
                       Mon profil
                    </Link>
                    <div className="dropdown-item" onClick={() => setIsLoggedIn(false)}>
                       Déconnexion
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hamburger menu pour mobile */}
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* ========== LIGNE 2 : Nos livres + Nos auteurs (FOND BLANC LONG) ========== */}
<div className="navbar-secondary">
          <div style={{ 
            maxWidth: 'var(--container-max-width)', 
            margin: '0 auto',
            padding: '0 var(--spacing-lg)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            
            {/* NOS LIVRES - Extrême gauche */}
            <div className="navbar-secondary-item dropdown">
              <div className="dropdown-toggle" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                <span>Nos livres</span>
                <span style={{ fontSize: '0.7rem', marginLeft: '4px' }}>▼</span>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-item" style={{ fontWeight: 'bold', color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)', cursor: 'default' }}>
                   GENRES
                </div>
                <Link to="/livres?category=africain" className="dropdown-item">
                  Littérature africaine
                </Link>
                <Link to="/livres?category=francais" className="dropdown-item">
                  Littérature française
                </Link>
                <Link to="/livres?category=sciences" className="dropdown-item">
                  Sciences humaines
                </Link>
                <Link to="/livres?category=essais" className="dropdown-item">
                  Essais
                </Link>
              </div>
            </div>

            {/* NOS AUTEURS - Extrême droite */}
            <div className="navbar-secondary-item dropdown">
              <div className="dropdown-toggle" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                <span>Nos auteurs</span>
                <span style={{ fontSize: '0.7rem', marginLeft: '4px' }}>▼</span>
              </div>
              <div className="dropdown-menu" style={{ right: 0, left: 'auto', minWidth: '250px' }}>
                <div className="dropdown-item" style={{ fontWeight: 'bold', color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)', cursor: 'default' }}>
                   AUTEURS
                </div>
                
                {/* Mariama Bâ */}
                <Link to="/auteurs/mariama-ba" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop" 
                    alt="Mariama Bâ"
                    style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span>Mariama Bâ</span>
                </Link>

                {/* Ahmadou Kourouma */}
                <Link to="/auteurs/ahmadou-kourouma" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" 
                    alt="Ahmadou Kourouma"
                    style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span>Ahmadou Kourouma</span>
                </Link>

                {/* Camara Laye */}
                <Link to="/auteurs/camara-laye" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop" 
                    alt="Camara Laye"
                    style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span>Camara Laye</span>
                </Link>

                {/* Albert Camus */}
                <Link to="/auteurs/albert-camus" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop" 
                    alt="Albert Camus"
                    style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span>Albert Camus</span>
                </Link>

                {/* Saint-Exupéry */}
                <Link to="/auteurs/saint-exupery" className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop" 
                    alt="Antoine de Saint-Exupéry"
                    style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span>Antoine de Saint-Exupéry</span>
                </Link>

                <div style={{ borderTop: '1px solid var(--color-gray-light)', margin: '8px 0' }}></div>
                <Link to="/auteurs" className="dropdown-item" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  Voir tous les auteurs →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

