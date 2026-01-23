import { Library, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import '../../admin.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <Library size={24} color="white" />
            <h3 style={{ fontSize: '1.125rem', margin: 0 }}>BiblioAdmin</h3>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
            Système de gestion de bibliothèque moderne et efficace.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              padding: '0.4rem', 
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <Facebook size={16} />
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              padding: '0.4rem', 
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <Twitter size={16} />
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              padding: '0.4rem', 
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <Instagram size={16} />
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 style={{ fontSize: '1.125rem' }}>Liens rapides</h3>
          <a href="/admin/dashboard">Tableau de bord</a>
          <a href="/admin/livres">Gestion des livres</a>
          <a href="/admin/membres">Gestion des membres</a>
          <a href="/admin/emprunts">Gestion des emprunts</a>
        </div>
        
        <div className="footer-section">
          <h3 style={{ fontSize: '1.125rem' }}>Contact</h3>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <MapPin size={16} />
            
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <Phone size={16} />
            
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <Mail size={16} />
            
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p style={{ fontSize: '0.875rem', margin: 0 }}>
          &copy; 2026 BiblioAdmin. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}