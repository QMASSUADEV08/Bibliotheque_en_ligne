import { BookOpen, Users, BookCopy, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useState } from 'react';
import { Navbar } from '../../components/Admin/Navbar.jsx';
import { Footer } from '../../components/Admin/Footer.jsx';

export function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const stats = [
    { title: 'Total Livres', value: '1,234', icon: BookOpen, change: '+12% ce mois' },
    { title: 'Membres Actifs', value: '856', icon: Users, change: '+8% ce mois' },
    { title: 'Emprunts en cours', value: '342', icon: BookCopy, change: '-5% ce mois' },
    { title: 'Emprunts ce mois', value: '1,789', icon: TrendingUp, change: '+23% ce mois' },
  ];

  const monthlyData = [
    { mois: 'Jan', emprunts: 450, retours: 420 },
    { mois: 'Fév', emprunts: 520, retours: 480 },
    { mois: 'Mar', emprunts: 680, retours: 650 },
    { mois: 'Avr', emprunts: 590, retours: 610 },
    { mois: 'Mai', emprunts: 720, retours: 680 },
    { mois: 'Juin', emprunts: 850, retours: 790 },
  ];

  const categoryData = [
    { categorie: 'Roman', nombre: 450 },
    { categorie: 'Science', nombre: 280 },
    { categorie: 'Histoire', nombre: 180 },
    { categorie: 'Art', nombre: 120 },
    { categorie: 'Jeunesse', nombre: 204 },
  ];

  return (
    <div>
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="section-header">
        <h2 className="section-title">Tableau de bord</h2>
        <p className="section-subtitle">Vue d'ensemble de votre bibliothèque</p>
      </div>

      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="stat-card">
              <div className="stat-card-header">
                <div>
                  <p className="stat-label">{stat.title}</p>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-change" style={{ color: '#dc2626' }}>{stat.change}</p>
                </div>
                <div className="stat-icon">
                  <Icon size={32} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid-2">
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Évolution des emprunts et retours</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emprunts" stroke="#dc2626" strokeWidth={2} name="Emprunts" />
              <Line type="monotone" dataKey="retours" stroke="#16a34a" strokeWidth={2} name="Retours" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Livres par catégorie</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categorie" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="nombre" fill="#dc2626" name="Nombre de livres" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
