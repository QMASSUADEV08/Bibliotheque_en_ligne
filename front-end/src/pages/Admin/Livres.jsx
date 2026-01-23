import '../../admin.css';
import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { Navbar } from '../../components/Admin/Navbar.jsx';
import { Footer } from '../../components/Admin/Footer.jsx';


export function Livres() {
  const [searchTerm, setSearchTerm] = useState('');

  const books = [
    {
      id: '1',
      title: 'Les Misérables',
      author: 'Victor Hugo',
      isbn: '978-2253096337',
      category: 'Roman',
      publisher: 'Livre de Poche',
      year: '2019',
      pages: '1664',
      quantity: 5,
      available: 3,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      description: 'Un chef-d\'œuvre de la littérature française'
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0451524935',
      category: 'Science-Fiction',
      publisher: 'Gallimard',
      year: '1950',
      pages: '368',
      quantity: 4,
      available: 1,
      status: 'low',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
      description: 'Dystopie totalitaire devenue incontournable'
    },
    {
      id: '3',
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      isbn: '978-0156012195',
      category: 'Jeunesse',
      publisher: 'Gallimard',
      year: '1943',
      pages: '96',
      quantity: 8,
      available: 6,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      description: 'Conte philosophique et poétique'
    },
    {
      id: '4',
      title: 'Harry Potter à l\'école des sorciers',
      author: 'J.K. Rowling',
      isbn: '978-2070643028',
      category: 'Jeunesse',
      publisher: 'Gallimard Jeunesse',
      year: '1998',
      pages: '320',
      quantity: 10,
      available: 0,
      status: 'unavailable',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      description: 'Premier tome de la saga magique'
    },
    {
      id: '5',
      title: 'Une brève histoire du temps',
      author: 'Stephen Hawking',
      isbn: '978-0553380163',
      category: 'Science',
      publisher: 'Flammarion',
      year: '1989',
      pages: '256',
      quantity: 3,
      available: 2,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop',
      description: 'Vulgarisation de la cosmologie'
    },
    {
      id: '6',
      title: 'L\'Étranger',
      author: 'Albert Camus',
      isbn: '978-2070360024',
      category: 'Roman',
      publisher: 'Gallimard',
      year: '1942',
      pages: '186',
      quantity: 6,
      available: 4,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop',
      description: 'Roman philosophique de l\'absurde'
    },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.isbn.includes(searchTerm)
  );

  const getStatusBadge = (status) => {
    if (status === 'available') return <span className="badge badge-success">Disponible</span>;
    if (status === 'low') return <span className="badge badge-warning">Stock faible</span>;
    return <span className="badge badge-danger">Indisponible</span>;
  };

  return (
    <div>
      <Navbar />
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="section-title">Gestion des Livres</h2>
          <p className="section-subtitle">Gérer le catalogue de la bibliothèque</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Ajouter un livre
        </button>
      </div>

      <div className="search-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Search size={20} color="#6b7280" />
          <input
            type="text"
            placeholder="Rechercher par titre, auteur ou ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              backgroundColor: 'transparent'
            }}
          />
        </div>
      </div>

      <div className="grid-3">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">par {book.author}</p>
              
              {getStatusBadge(book.status)}
              
              <div className="book-details">
                <p><strong>Catégorie:</strong> {book.category}</p>
                <p><strong>Éditeur:</strong> {book.publisher}</p>
                <p><strong>Année:</strong> {book.year}</p>
                <p><strong>Pages:</strong> {book.pages}</p>
                <p><strong>Quantité totale:</strong> {book.quantity}</p>
                <p><strong>Disponibles:</strong> {book.available}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  {book.description}
                </p>
              </div>

              
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}