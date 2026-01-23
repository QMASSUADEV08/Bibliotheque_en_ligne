import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost/ququ%20projet/app_bibliotheque/backend/inscription.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "connexion",
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (data.message) {
      alert(data.message);
      
      // redirection selon le rôle
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else if (data.error) {
      alert(data.error); // "Email ou mot de passe incorrect"
    }
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    alert("Une erreur est survenue, réessayez plus tard.");
  }
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
        backgroundColor: 'var(--color-background)'
      }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: 'var(--spacing-2xl)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          width: '100%',
          maxWidth: '450px',
          margin: 'var(--spacing-xl)'
        }}>
          
          {/* Titre */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h1 style={{ 
              fontSize: 'var(--font-size-3xl)', 
              color: 'var(--color-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              👤 Connexion
            </h1>
            <p style={{ color: 'var(--color-gray)' }}>
              Connectez-vous à votre compte abonné
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            
            {/* Email */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--spacing-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-gray-dark)'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="votre.email@exemple.com"
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: '1px solid var(--color-gray-light)',
                  borderRadius: 'var(--border-radius-md)',
                  fontSize: 'var(--font-size-base)',
                  outline: 'none',
                  transition: 'var(--transition-base)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-light)'}
              />
            </div>

            {/* Mot de passe */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--spacing-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-gray-dark)'
              }}>
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: '1px solid var(--color-gray-light)',
                  borderRadius: 'var(--border-radius-md)',
                  fontSize: 'var(--font-size-base)',
                  outline: 'none',
                  transition: 'var(--transition-base)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-light)'}
              />
            </div>

            {/* Bouton de connexion */}
            <button 
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
            >
              Se connecter
            </button>
            {/* 🔑 Lien mot de passe oublié */}
           <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
           <Link 
           to="/forgot-password" 
           style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}
      >
          Mot de passe oublié ?
         </Link>
</div>


            {/* Liens */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--color-gray)', fontSize: 'var(--font-size-sm)' }}>
                Pas encore de compte ?{' '}
                <Link to="/register" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Inscrivez-vous
                </Link>
              </p>
              
              <p style={{ 
                marginTop: 'var(--spacing-md)', 
                color: 'var(--color-gray)', 
                fontSize: 'var(--font-size-sm)' 
              }}>
                Ou{' '}
                <Link to="/visitor" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                  accéder en tant que visiteur
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;