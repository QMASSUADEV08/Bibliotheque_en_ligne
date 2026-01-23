import { Library, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../admin.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', path: '/admin/dashboard' },
    { id: 'books', label: 'Livres', path: '/admin/livres' },
    { id: 'members', label: 'Membres', path: '/admin/membres' },
    { id: 'loans', label: 'Emprunts', path: '/admin/emprunts' },
    { id: 'settings', label: 'Paramètres', path: '/admin/settings' },
  ];

  const activeSection = menuItems.find(item => item.path === location.pathname)?.id || 'dashboard';

  const handleSectionChange = (section) => {
    const item = menuItems.find(item => item.id === section);
    if (item) {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Library size={32} />
            <div>
              <h1>BiblioAdmin</h1>
              <p>Gestion de bibliothèque</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionChange(item.id)}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button 
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <Library size={28} />
            <div>
              <h1 style={{ fontSize: '1.25rem' }}>BiblioAdmin</h1>
            </div>
          </div>
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="mobile-menu-items">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}` }
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}