// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Livres from "./pages/Livres";
import DetailLivre from "./pages/DetailLivre";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/livres" element={<Livres />} />
        <Route path="/livres/:id" element={<DetailLivre />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


