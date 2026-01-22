import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';

// Pages
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import CatalogueVisitor from './pages/CatalogueVisitor';
import About from './pages/About';
import DetailLivre from './pages/DetailLivre';

function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Connexion */}
        <Route path="/login" element={<Login />} />
        
        {/* Inscription */}
        <Route path="/register" element={<Register />} />
        
        {/* Accès visiteur */}
        <Route path="/visitor" element={<CatalogueVisitor />} />
        
        {/* Catalogue (alias pour visiteur) */}
        <Route path="/catalogue" element={<CatalogueVisitor />} />
        
        {/* À propos */}
        <Route path="/about" element={<About />} />
        
        {/* Livres */}
        <Route path="/livres" element={<CatalogueVisitor />} />
        
        {/* Détail d'un livre */}
        <Route path="/livre/:id" element={<DetailLivre />} />
        
        {/* Page par défaut (404) */}
        <Route path="*" element={
          <div style={{ 
            textAlign: 'center', 
            padding: '100px 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h1 style={{ fontSize: '4rem', color: 'var(--color-primary)' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page non trouvée</p>
            <a href="/" className="btn btn-primary">Retour à l'accueil</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;