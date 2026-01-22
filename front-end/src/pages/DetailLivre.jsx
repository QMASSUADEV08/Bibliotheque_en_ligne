import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getBookById } from '../data/books';

const DetailLivre = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dateRetrait, setDateRetrait] = useState('');
  const [showDateModal, setShowDateModal] = useState(false);

  useEffect(() => {
    // Récupérer le livre par ID
    const foundBook = getBookById(parseInt(id));
    if (foundBook) {
      setBook(foundBook);
    }
    setIsLoading(false);
  }, [id]);

  const handleBorrow = () => {
    // Vérifier si l'utilisateur est connecté
    const isLoggedIn = false; // À remplacer par vrai state d'authentification
    
    if (!isLoggedIn) {
      alert('Vous devez être connecté pour emprunter un livre.');
      navigate('/login');
      return;
    }

    if (!book.available) {
      alert('Ce livre n\'est pas disponible actuellement.');
      return;
    }

    // Afficher le modal de sélection de date
    setShowDateModal(true);
  };

  const confirmBorrow = () => {
    if (!dateRetrait) {
      alert('Veuillez sélectionner une date de retrait.');
      return;
    }

    // Vérifier que la date est dans le futur
    const selectedDate = new Date(dateRetrait);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('La date de retrait doit être dans le futur.');
      return;
    }

    // TODO: Appel API backend PHP pour emprunter le livre
    // fetch('http://localhost/api/emprunter.php', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ 
    //     user_id: currentUser.id, 
    //     book_id: book.id,
    //     date_retrait: dateRetrait
    //   })
    // })
    
   alert(`Emprunt confirmé !
       Livre : ${book.title}
Date de retrait : ${new Date(dateRetrait).toLocaleDateString('fr-FR')}

(À connecter au backend)`);
setShowDateModal(false);
setDateRetrait('');

  };

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingTop: 'var(--navbar-height)'
        }}>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div>
        <Navbar />
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          paddingTop: 'var(--navbar-height)',
          textAlign: 'center',
          padding: 'var(--spacing-xl)'
        }}>
          <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-md)' }}>
             Livre non trouvé
          </h1>
          <p style={{ color: 'var(--color-gray)', marginBottom: 'var(--spacing-xl)' }}>
            Le livre que vous recherchez n'existe pas.
          </p>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        paddingTop: 'calc(var(--navbar-height) + 2rem)',
        paddingBottom: 'var(--spacing-4xl)'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--spacing-lg)' }}>
          
          {/* Fil d'Ariane */}
          <div style={{ marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
            <Link to="/" style={{ color: 'var(--color-primary)' }}>Accueil</Link>
            {' > '}
            <Link to="/livres" style={{ color: 'var(--color-primary)' }}>Nos livres</Link>
            {' > '}
            <span>{book.title}</span>
          </div>

          {/* Contenu principal */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: 'var(--spacing-2xl)',
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: 'var(--spacing-2xl)'
          }}>
            
            {/* Colonne gauche : Image */}
            <div>
              <img 
                src={book.cover}
                alt={book.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400/8B1538/FFFFFF?text=' + encodeURIComponent(book.title);
                }}
                style={{
                  width: '100%',
                  borderRadius: 'var(--border-radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  marginBottom: 'var(--spacing-lg)'
                }}
              />

              {/* Statut */}
              <div style={{
                padding: 'var(--spacing-md)',
                backgroundColor: book.available ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                borderRadius: 'var(--border-radius-md)',
                textAlign: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-sm)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: book.available ? 'var(--color-success)' : 'var(--color-danger)'
                }}>
                  <span style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: book.available ? 'var(--color-success)' : 'var(--color-danger)'
                  }}></span>
                  {book.status}
                </div>
              </div>

              {/* Bouton Emprunter */}
              <button 
                className="btn btn-primary"
                onClick={handleBorrow}
                disabled={!book.available}
                style={{
                  width: '100%',
                  opacity: book.available ? 1 : 0.5,
                  cursor: book.available ? 'pointer' : 'not-allowed',
                  fontSize: 'var(--font-size-lg)',
                  padding: 'var(--spacing-md)'
                }}
              >
                {book.available ? '📖 Emprunter ce livre' : '🔒 Non disponible'}
              </button>
            </div>

            {/* Colonne droite : Informations */}
            <div>
              {/* Catégorie */}
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-primary)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {book.category} - {book.type}
              </div>

              {/* Titre */}
              <h1 style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-black)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: 1.2
              }}>
                {book.title}
              </h1>

              {/* Auteur */}
              <p style={{
                fontSize: 'var(--font-size-xl)',
                color: 'var(--color-gray)',
                marginBottom: 'var(--spacing-xl)'
              }}>
                par <strong>{book.author}</strong>
              </p>

              {/* Informations détaillées */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-2xl)',
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--color-gray-lighter)',
                borderRadius: 'var(--border-radius-md)'
              }}>
                <div>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-gray-dark)' }}>
                     Année :
                  </span>
                  <br />
                  {book.year}
                </div>
                <div>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-gray-dark)' }}>
                     Pays :
                  </span>
                  <br />
                  {book.country}
                </div>
                <div>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-gray-dark)' }}>
                     Pages :
                  </span>
                  <br />
                  {book.pages}
                </div>
                <div>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-gray-dark)' }}>
                    🗣️ Langue :
                  </span>
                  <br />
                  {book.language}
                </div>
                <div>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-gray-dark)' }}>
                     Éditeur :
                  </span>
                  <br />
                  {book.publisher}
                </div>
                <div>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-gray-dark)' }}>
                    🔢 ISBN :
                  </span>
                  <br />
                  {book.isbn}
                </div>
              </div>

              {/* Résumé */}
              <div>
                <h2 style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-md)',
                  borderBottom: '2px solid var(--color-primary)',
                  paddingBottom: 'var(--spacing-sm)'
                }}>
                   Résumé
                </h2>
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 1.8,
                  color: 'var(--color-gray-dark)',
                  textAlign: 'justify'
                }}>
                  {book.summaryFull}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal de sélection de date */}
      {showDateModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: 'var(--spacing-2xl)',
            borderRadius: 'var(--border-radius-lg)',
            maxWidth: '500px',
            width: '90%',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-2xl)',
              color: 'var(--color-primary)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              📅 Choisir une date de retrait
            </h3>

            <p style={{
              color: 'var(--color-gray-dark)',
              marginBottom: 'var(--spacing-lg)',
              lineHeight: 1.6
            }}>
              Sélectionnez la date à laquelle vous viendrez retirer le livre à la bibliothèque.
            </p>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'var(--spacing-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-gray-dark)'
              }}>
                Date de retrait *
              </label>
              <input
                type="date"
                name="date_retrait"
                value={dateRetrait}
                onChange={(e) => setDateRetrait(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: '2px solid var(--color-gray-light)',
                  borderRadius: 'var(--border-radius-md)',
                  fontSize: 'var(--font-size-base)',
                  outline: 'none'
                }}
              />
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-gray)',
                marginTop: 'var(--spacing-xs)'
              }}>
                 Un délai vous sera attribué. Un avertissement par mail sera envoyé en cas de retard.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <button
                className="btn btn-primary"
                onClick={confirmBorrow}
                style={{ flex: 1 }}
              >
                ✅ Confirmer l'emprunt
              </button>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setShowDateModal(false);
                  setDateRetrait('');
                }}
                style={{
                  flex: 1,
                  color: 'var(--color-gray)',
                  borderColor: 'var(--color-gray)'
                }}
              >
                ❌ Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailLivre;