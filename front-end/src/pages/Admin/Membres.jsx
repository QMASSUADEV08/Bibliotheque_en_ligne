import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Mail, Phone, Calendar } from 'lucide-react';
import { Navbar } from '../../components/Admin/Navbar.jsx';
import { Footer } from '../../components/Admin/Footer.jsx';
import '../../admin.css';

export function Membres() {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    {
      id: '1',
      name: 'Marie Kouadio',
      email: 'marie.kouadio@email.com',
      phone: '06 12 34 56 78',
      address: 'assabou',
      membershipDate: '2024-01-15',
      birthDate: '1985-05-20',
      activeLoans: 2,
      totalLoans: 45,
      status: 'active'
    },
    {
      id: '2',
      name: 'Jean yao',
      email: 'jeanyao@email.com',
      phone: '06 23 45 67 89',
      address: 'millionnaire',
      membershipDate: '2024-02-20',
      birthDate: '1978-11-12',
      activeLoans: 1,
      totalLoans: 23,
      status: 'active'
    },
    {
      id: '3',
      name: 'Sophie Die',
      email: 'sophiedie@email.com',
      phone: '06 34 56 78 90',
      address: 'millionaire',
      membershipDate: '2023-11-10',
      birthDate: '1992-03-08',
      activeLoans: 3,
      totalLoans: 67,
      status: 'active'
    },
    {
      id: '4',
      name: 'Pierre koffi',
      email: 'pierrekoffi@email.com',
      phone: '06 45 67 89 01',
      address: 'assabou',
      membershipDate: '2024-01-05',
      birthDate: '1990-09-15',
      activeLoans: 0,
      totalLoans: 12,
      status: 'inactive'
    },
    {
      id: '5',
      name: 'Claire ZAKOURIE',
      email: 'claire.zakourie@email.com',
      phone: '06 56 78 90 12',
      address: '220 logements',
      membershipDate: '2023-09-22',
      birthDate: '1988-07-25',
      activeLoans: 1,
      totalLoans: 89,
      status: 'active'
    },
    {
      id: '6',
      name: 'Lucas konan',
      email: 'lucaskonan@email.com',
      phone: '06 67 89 01 23',
      address: 'djahakro',
      membershipDate: '2023-08-14',
      birthDate: '1995-12-03',
      activeLoans: 0,
      totalLoans: 34,
      status: 'suspended'
    },
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.includes(searchTerm)
  );

  const getStatusBadge = (status) => {
    if (status === 'active') return <span className="badge badge-success">Actif</span>;
    if (status === 'inactive') return <span className="badge" style={{ background: '#f3f4f6', color: '#374151' }}>Inactif</span>;
    return <span className="badge badge-danger">Suspendu</span>;
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div>
      <Navbar />
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="section-title">Gestion des Membres</h2>
          <p className="section-subtitle">Gérer les membres de la bibliothèque</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Ajouter un membre
        </button>
      </div>

      <div className="search-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Search size={20} color="#6b7280" />
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher par nom, email ou téléphone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid-2">
        {filteredMembers.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-avatar">
              {getInitials(member.name)}
            </div>
            <div className="member-info" style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h3 className="member-name">{member.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>ID: {member.id}</p>
                </div>
                {getStatusBadge(member.status)}
              </div>
              
              <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="#dc2626" />
                  {member.email}
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="#dc2626" />
                  {member.phone}
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#dc2626" />
                  Membre depuis: {new Date(member.membershipDate).toLocaleDateString('fr-FR')}
                </p>
              </div>

              <div style={{ 
                marginTop: '1rem', 
                paddingTop: '1rem', 
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.875rem'
              }}>
                <div>
                  <p style={{ color: '#6b7280' }}>Emprunts actifs</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#dc2626' }}>{member.activeLoans}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280' }}>Total emprunts</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#dc2626' }}>{member.totalLoans}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                  <button className="btn btn-outline" style={{ padding: '0.5rem' }}>
                    <Edit size={16} />
                  </button>
                  <button className="btn btn-outline" style={{ padding: '0.5rem', color: '#dc2626', borderColor: '#dc2626' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
