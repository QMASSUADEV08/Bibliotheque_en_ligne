import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book, isVisitor = false }) => {
  const navigate = useNavigate();

  const handleBorrow = () => {
    const isLoggedIn = false; // À remplacer par vrai state
    
    if (!isLoggedIn) {
      alert('Vous devez être connecté pour emprunter un livre.');
      navigate('/login');
      return;
    }

    if (!book.available) {
      alert('Ce livre n\'est pas disponible actuellement.');
      return;
    }

    alert(`Emprunt du livre "${book.title}" confirmé ! (À connecter au backend)`);
  };

  const handleDetails = () => {
    navigate(`/livre/${book.id}`);
  };

  return (
    <div className="book-card">
      <div className="book-cover">
        <img 
          src={book.cover} 
          alt={book.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150x200/8B1538/FFFFFF?text=Livre';
          }}
        />
      </div>

      <div className="book-info">
        <div className="book-category">
          {book.category} - {book.type}
        </div>

        <h3 className="book-title">{book.title}</h3>

        <div className="book-author">
          {book.author} • {book.year}
        </div>

        <p className="book-summary">
          {isVisitor ? book.summaryShort : book.summaryFull}
        </p>

        <div className={`book-status ${book.available ? 'status-available' : 'status-unavailable'}`}>
          <span className="status-dot"></span>
          <span>{book.status}</span>
        </div>

        {isVisitor ? (
          <div style={{ 
            marginTop: 'var(--spacing-md)', 
            padding: 'var(--spacing-sm)',
            backgroundColor: 'var(--color-gray-lighter)',
            borderRadius: 'var(--border-radius-md)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray)'
          }}>
             Créez un compte pour voir plus de détails et emprunter ce livre
          </div>
        ) : (
          <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: 'var(--spacing-sm)' }}>
            <button 
              className="btn btn-primary"
              onClick={handleBorrow}
              disabled={!book.available}
              style={{
                opacity: book.available ? 1 : 0.5,
                cursor: book.available ? 'pointer' : 'not-allowed'
              }}
            >
              {book.available ? '📖 Emprunter' : '🔒 Non disponible'}
            </button>
            <button 
              className="btn btn-outline" 
              onClick={handleDetails}
              style={{ 
                color: 'var(--color-primary)', 
                borderColor: 'var(--color-primary)',
                backgroundColor: 'transparent'
              }}
            >
              ℹ️ Plus de détails
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;

