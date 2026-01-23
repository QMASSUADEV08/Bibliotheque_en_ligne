import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/ququ%20projet/app_bibliotheque/backend/inscription.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          action: "forgot_password",
          email: email
        })
      });

      const data = await response.json();
      if (data.message) {
        alert(data.message); // "Un lien de réinitialisation a été envoyé à votre email"
      } else if (data.error) {
        alert(data.error);
      }
    } catch (error) {
      console.error("Erreur lors de la demande de réinitialisation:", error);
      alert("Une erreur est survenue, réessayez plus tard.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🔑 Réinitialiser le mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Votre email" 
          required 
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ForgotPassword;