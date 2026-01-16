import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Livres() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const livres = [
    {
      id: 1,
      titre: "L'Enfant noir",
      auteur: "Camara Laye",
      description: "Récit autobiographique de l'enfance de l'auteur en Guinée, évoquant les traditions et la culture malinké",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      categorie: "Littérature Africaine",
      disponible: true
    },
    {
      id: 2,
      titre: "Une si longue lettre",
      auteur: "Mariama Bâ",
      description: "Roman épistolaire sénégalais qui aborde la condition de la femme africaine et la polygamie",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      categorie: "Littérature Sénégalaise",
      disponible: true
    },
    {
      id: 3,
      titre: "Le Monde s'effondre",
      auteur: "Chinua Achebe",
      description: "Chef-d'œuvre de la littérature nigériane racontant la colonisation et ses impacts sur la société Igbo",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      categorie: "Littérature Nigériane",
      disponible: true
    },
    {
      id: 4,
      titre: "Sous l'orage",
      auteur: "Seydou Badian",
      description: "Roman malien qui explore le conflit entre tradition et modernité dans l'Afrique contemporaine",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
      categorie: "Littérature Malienne",
      disponible: true
    },
    {
      id: 5,
      titre: "Le Vieux Nègre et la Médaille",
      auteur: "Ferdinand Oyono",
      description: "Satire acerbe de la colonisation française au Cameroun à travers l'histoire de Meka",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400",
      categorie: "Littérature Camerounaise",
      disponible: false
    }
  ];

  // Extraire les catégories uniques
  const categories = ['Tous', ...new Set(livres.map(livre => livre.categorie))];

  // Filtrer les livres
  const filteredLivres = livres.filter(livre => {
    const matchSearch = livre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       livre.auteur.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'Tous' || livre.categorie === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <Container className="py-4">
      {/* En-tête */}
      <div className="mb-4">
        <h1 
          className="fw-bold mb-2" 
          style={{ fontSize: '2rem', color: '#2d3748' }}
        >
          Catalogue de livres
        </h1>
        <p style={{ color: '#6B7280', fontSize: '1rem' }}>
          {filteredLivres.length} ouvrage{filteredLivres.length > 1 ? 's' : ''} disponible{filteredLivres.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="mb-4">
        <div className="row g-3">
          {/* Recherche */}
          <div className="col-md-8">
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher par titre ou auteur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '0.7rem 1rem 0.7rem 2.8rem',
                  border: '2px solid #E5E5E5',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#8B1538'}
                onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
              />
              <svg 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '18px',
                  height: '18px',
                  fill: '#6B7280'
                }}
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
          </div>

          {/* Filtre par catégorie */}
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '0.7rem 1rem',
                border: '2px solid #E5E5E5',
                borderRadius: '6px',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#8B1538'}
              onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Liste des livres */}
      {filteredLivres.length === 0 ? (
        <div 
          className="text-center py-5" 
          style={{ 
            backgroundColor: '#F8F9FA', 
            borderRadius: '8px',
            border: '1px solid #E5E5E5'
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
          <h5 style={{ color: '#4A5568', fontWeight: '600' }}>Aucun livre trouvé</h5>
          <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {filteredLivres.map(livre => (
            <div 
              key={livre.id} 
              className="d-flex align-items-start p-3 bg-white border rounded"
              style={{ 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderColor: '#E5E5E5'
              }}
              onClick={() => navigate(`/livres/${livre.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#8B1538';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E5E5E5';
              }}
            >
              {/* Image */}
              <img 
                src={livre.image} 
                alt={livre.titre} 
                style={{ 
                  width: '110px', 
                  height: '150px', 
                  objectFit: 'cover', 
                  borderRadius: '6px', 
                  marginRight: '1.2rem',
                  border: '1px solid #E5E5E5'
                }} 
              />

              {/* Informations */}
              <div style={{ flex: 1 }}>
                {/* Statut disponibilité */}
                <div className="mb-2">
                  {livre.disponible ? (
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: '#28A745',
                        fontSize: '0.7rem',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}
                    >
                      ✓ Disponible
                    </span>
                  ) : (
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: '#DC3545',
                        fontSize: '0.7rem',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontWeight: '600'
                      }}
                    >
                      ✗ Indisponible
                    </span>
                  )}
                </div>

                {/* Titre */}
                <h5 
                  className="fw-bold mb-1" 
                  style={{ fontSize: '1.15rem', color: '#2d3748' }}
                >
                  {livre.titre}
                </h5>

                {/* Auteur */}
                <p 
                  className="mb-2" 
                  style={{ color: '#6B7280', fontSize: '0.9rem', fontStyle: 'italic' }}
                >
                  par {livre.auteur}
                </p>
                
                {/* Description */}
                <p 
                  style={{ 
                    fontSize: '0.9rem', 
                    color: '#4A5568',
                    lineHeight: '1.6',
                    marginBottom: '0.75rem'
                  }}
                >
                  {livre.description.length > 120 
                    ? `${livre.description.substring(0, 120)}...` 
                    : livre.description}
                </p>

                {/* Catégorie et bouton */}
                <div className="d-flex align-items-center justify-content-between">
                  <span 
                    className="badge" 
                    style={{ 
                      backgroundColor: '#E5E5E5',
                      color: '#4A4A4A',
                      fontSize: '0.75rem',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}
                  >
                    {livre.categorie}
                  </span>

                  <button 
                    className="btn btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/livres/${livre.id}`);
                    }}
                    style={{
                      backgroundColor: '#8B1538',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.4rem 1.2rem',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#6B0F2A';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#8B1538';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Voir détails →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Livres;