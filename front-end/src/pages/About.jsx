import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        paddingTop: 'calc(var(--navbar-height) + 2rem)'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--spacing-lg)' }}>
          
          {/* En-tête */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <h1 style={{ 
              fontSize: 'var(--font-size-4xl)', 
              color: 'var(--color-primary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              À propos de la Bibliothèque UIYA
            </h1>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-gray)',
              fontStyle: 'italic'
            }}>
              Lire, apprendre, réussir
            </p>
          </div>

          {/* Contenu */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-2xl)',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-md)',
            lineHeight: 1.8
          }}>
            
            {/* Mission */}
            <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-2xl)', 
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
                borderBottom: '2px solid var(--color-primary)',
                paddingBottom: 'var(--spacing-sm)'
              }}>
                 Notre Mission
              </h2>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                La Bibliothèque de l'Université Internationale de Yamoussoukro (UIYA) a pour mission de 
                fournir un accès facile et moderne aux ressources littéraires et académiques. Nous 
                mettons à disposition des étudiants, enseignants et visiteurs une collection riche et 
                diversifiée de livres en littérature africaine, française et scientifique.
              </p>
            </section>

            {/* Services */}
            <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-2xl)', 
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
                borderBottom: '2px solid var(--color-primary)',
                paddingBottom: 'var(--spacing-sm)'
              }}>
                 Nos Services
              </h2>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                color: 'var(--color-gray-dark)'
              }}>
                <li style={{ marginBottom: 'var(--spacing-md)', paddingLeft: 'var(--spacing-lg)' }}>
                  ✅ <strong>Consultation gratuite</strong> : Accès visiteur pour consulter notre catalogue
                </li>
                <li style={{ marginBottom: 'var(--spacing-md)', paddingLeft: 'var(--spacing-lg)' }}>
                  ✅ <strong>Emprunt de livres</strong> : Service réservé aux membres inscrits
                </li>
                <li style={{ marginBottom: 'var(--spacing-md)', paddingLeft: 'var(--spacing-lg)' }}>
                  ✅ <strong>Recherche avancée</strong> : Trouvez rapidement les livres par titre, auteur ou catégorie
                </li>
                <li style={{ marginBottom: 'var(--spacing-md)', paddingLeft: 'var(--spacing-lg)' }}>
                  ✅ <strong>Suivi en ligne</strong> : Gérez vos emprunts depuis votre espace personnel
                </li>
              </ul>
            </section>

            {/* Collections */}
            <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-2xl)', 
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
                borderBottom: '2px solid var(--color-primary)',
                paddingBottom: 'var(--spacing-sm)'
              }}>
                 Nos Collections
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-lighter)', borderRadius: 'var(--border-radius-md)' }}>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                    Littérature Africaine
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
                    Auteurs africains classiques et contemporains
                  </p>
                </div>
                <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-lighter)', borderRadius: 'var(--border-radius-md)' }}>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                    🇫🇷 Littérature Française
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
                    Classiques et œuvres contemporaines
                  </p>
                </div>
                <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-gray-lighter)', borderRadius: 'var(--border-radius-md)' }}>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                     Sciences Humaines
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray)' }}>
                    Philosophie, histoire, sociologie
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 style={{ 
                fontSize: 'var(--font-size-2xl)', 
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
                borderBottom: '2px solid var(--color-primary)',
                paddingBottom: 'var(--spacing-sm)'
              }}>
                 Nous Contacter
              </h2>
              <p style={{ color: 'var(--color-gray-dark)', marginBottom: 'var(--spacing-sm)' }}>
                <strong>Adresse :</strong> Université Internationale de Yamoussoukro, Côte d'Ivoire
              </p>
              <p style={{ color: 'var(--color-gray-dark)', marginBottom: 'var(--spacing-sm)' }}>
                <strong>Email :</strong> bibliotheque@uiya.edu.ci
              </p>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                <strong>Horaires :</strong> Lundi - Vendredi : 8h00 - 18h00 | Samedi : 9h00 - 13h00
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;