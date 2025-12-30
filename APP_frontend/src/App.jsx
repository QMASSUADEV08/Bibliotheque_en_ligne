import { Routes, Route } from "react-router-dom";

// Pages (on va les créer juste après)
import Home from "./pages/Home.jsx";
import Livres from "./pages/Livres.jsx";
import LivreDetail from "./pages/LivreDetail.jsx";
import Connexion from "./pages/Connexion.jsx";

export default function App() {
  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livres" element={<Livres />} />
        <Route path="/livre/:id" element={<LivreDetail />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}
