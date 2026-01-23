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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation spécifique pour nom et prénom
    if ((name === "nom" || name === "prenom") && /\d/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Veuillez saisir un " + name + " valide (sans chiffres)."
      });
    } else {
      setErrors({
        ...errors,
        [name]: ""
      });
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifie si erreurs
    if (errors.nom || errors.prenom) {
      alert("Veuillez corriger les erreurs dans le formulaire.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }

    try {
      const response = await fetch("http://localhost/ququ%20projet/app_bibliotheque/backend/inscription.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          action: "inscription",
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          password: formData.password
        })
      });
      const data = await response.json();
      if (data.message) {
        alert(data.message); // "Inscription réussie"
        navigate("/login");
      } else if (data.error) {
        alert(data.error); // "Veuillez remplir tous les champs"
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      alert("Une erreur est survenue, réessayez plus tard.");
    }
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

          <form onSubmit={handleSubmit}>
            {/* Nom */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder="Ex: Kouassi"
                style={inputStyle}
              />
              {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
            </div>

            {/* Prénom */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>Prénom</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                placeholder="Ex: Jean"
                style={inputStyle}
              />
              {errors.prenom && <p style={{ color: "red" }}>{errors.prenom}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={labelStyle}>Email</label>
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
              <label style={labelStyle}>Téléphone</label>
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
              <label style={labelStyle}>Mot de passe</label>
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
              <label style={labelStyle}>Confirmer le mot de passe</label>
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

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
            >
              S'inscrire
            </button>

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