import { Settings as SettingsIcon, Bell, Shield, Database } from 'lucide-react';
import '../../admin.css';
import { Navbar } from '../../components/Admin/Navbar.jsx';
import { Footer } from '../../components/Admin/Footer.jsx';

export function Settings() {
  return (
    <div>
      <Navbar />
      <div className="section-header">
        <h2 className="section-title">Paramètres</h2>
        <p className="section-subtitle">Configurer votre système de gestion</p>
      </div>

      <div className="grid-2">
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <SettingsIcon size={24} color="#dc2626" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Informations générales</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Nom de la bibliothèque
              </label>
              <input
                type="text"
                className="search-input"
                defaultValue="Bibliothèque Municipale"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Email de contact
              </label>
              <input
                type="email"
                className="search-input"
                defaultValue="contact@bibliotheque.fr"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Téléphone
              </label>
              <input
                type="tel"
                className="search-input"
                defaultValue="01 23 45 67 89"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Adresse
              </label>
              <input
                type="text"
                className="search-input"
                defaultValue="123 Rue de la République, 75001 Paris"
              />
            </div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Bell size={24} color="#dc2626" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Règles d'emprunt</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Durée d'emprunt (jours)
              </label>
              <input
                type="number"
                className="search-input"
                defaultValue="14"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Nombre maximum d'emprunts par membre
              </label>
              <input
                type="number"
                className="search-input"
                defaultValue="5"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Nombre de renouvellements autorisés
              </label>
              <input
                type="number"
                className="search-input"
                defaultValue="2"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Pénalité de retard (€/jour)
              </label>
              <input
                type="number"
                step="0.01"
                className="search-input"
                defaultValue="0.50"
              />
            </div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Shield size={24} color="#dc2626" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Sécurité</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Mot de passe actuel
              </label>
              <input
                type="password"
                className="search-input"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="search-input"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="search-input"
                placeholder="••••••••"
              />
            </div>
            <button className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              Changer le mot de passe
            </button>
          </div>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Database size={24} color="#dc2626" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Système</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                Dernière sauvegarde: 22 janvier 2026 à 02:00
              </p>
              <button className="btn btn-outline">
                Télécharger la sauvegarde
              </button>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                Dernière maintenance: 15 janvier 2026
              </p>
              <button className="btn btn-outline">
                Lancer la maintenance
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <button className="btn btn-outline">
          Annuler
        </button>
        <button className="btn btn-primary">
          Enregistrer les modifications
        </button>
      </div>
      <Footer />
    </div>
  );
}
