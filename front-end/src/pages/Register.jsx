import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }

    // TODO: Appel API backend pour inscription
    console.log('Données inscription:', formData);
    
    // fetch('http://localhost/api/inscription.php', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     alert('Inscription réussie !');
    //     navigate('/login');
    //   }
    // });
    
    alert('Inscription réussie ! (À connecter au backend)');
    navigate('/login');
  };

  const inputStyle = {
    width: '100%',
    padding: 'var(--spacing-md)',
    border: '1px solid var(--color-gray-light)',
    borderRadius: 'var(--border-radius-md)',
    fontSize: 'var(--font-size-base)',
    outline: 'none',
    transition: 'var(--transition-base)'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: 'var(--spacing-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-gray-dark)'
  };

  return (
    <div>
      <Navbar />
      
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--navbar-height)',
        backgroundColor: 'var(--color-background)',
        padding: 'var(--spacing-xl)'
      }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'var(--spacing-2xl)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          width: '100%',
          maxWidth: '500px'
        }}>
          
          {/* Titre */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h1 style={{ 
              fontSize: 'var(--font-size-3xl)', 
              color: 'var(--color-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
               Inscription
            </h1>
            <p style={{ color: 'var(--color-gray)' }}>
              Créez votre compte pour emprunter des livres
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            
            {/* Nom */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>
                Nom *
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder="Ex: Kouassi"
                style={inputStyle}
              />
            </div>

            {/* Prénom */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>
                Prénom 
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                placeholder="Ex: Jean"
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>
                Email 
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@exemple.com"
                style={inputStyle}
              />
            </div>

            {/* Téléphone */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>
                Téléphone 
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                placeholder="+225 XX XX XX XX XX"
                style={inputStyle}
              />
            </div>

            {/* Mot de passe */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>
                Mot de passe 
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength="6"
                style={inputStyle}
              />
            </div>

            {/* Confirmation mot de passe */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>
                Confirmer le mot de passe 
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength="6"
                style={inputStyle}
              />
            </div>

            {/* Bouton d'inscription */}
            <button 
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
            >
              S'inscrire
            </button>

            {/* Lien vers connexion */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
                Vous avez déjà un compte ?{' '}
                <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Connectez-vous
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;