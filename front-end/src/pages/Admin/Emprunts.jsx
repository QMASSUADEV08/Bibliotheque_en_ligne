import { useState } from 'react';
import { Plus, Search, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Navbar } from '../../components/Admin/Navbar.jsx';
import { Footer } from '../../components/Admin/Footer.jsx';

// Define the Loan type as a constant
const Loan = {
  id: '',
  memberName: '',
  memberEmail: '',
  bookTitle: '',
  bookAuthor: '',
  loanDate: '',
  dueDate: '',
  returnDate: undefined,
  status: 'active' // or 'overdue' or 'returned'
};

export function Emprunts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [activeSection, setActiveSection] = useState('loans');

  const loans = [
    {
      id: '1',
      memberName: 'Marie Dubois',
      memberEmail: 'marie.dubois@email.com',
      bookTitle: 'Les Misérables',
      bookAuthor: 'Victor Hugo',
      loanDate: '2026-01-20',
      dueDate: '2026-02-03',
      status: 'active'
    },
    {
      id: '2',
      memberName: 'Jean Martin',
      memberEmail: 'jean.martin@email.com',
      bookTitle: '1984',
      bookAuthor: 'George Orwell',
      loanDate: '2026-01-18',
      dueDate: '2026-02-01',
      status: 'active'
    },
    {
      id: '3',
      memberName: 'Sophie Laurent',
      memberEmail: 'sophie.laurent@email.com',
      bookTitle: 'Le Petit Prince',
      bookAuthor: 'Antoine de Saint-Exupéry',
      loanDate: '2026-01-15',
      dueDate: '2026-01-29',
      status: 'active'
    },
    {
      id: '4',
      memberName: 'Claire Moreau',
      memberEmail: 'claire.moreau@email.com',
      bookTitle: 'Harry Potter',
      bookAuthor: 'J.K. Rowling',
      loanDate: '2026-01-10',
      dueDate: '2026-01-24',
      status: 'overdue'
    },
    {
      id: '5',
      memberName: 'Pierre Durand',
      memberEmail: 'pierre.durand@email.com',
      bookTitle: 'L\'Étranger',
      bookAuthor: 'Albert Camus',
      loanDate: '2026-01-05',
      dueDate: '2026-01-19',
      returnDate: '2026-01-18',
      status: 'returned'
    },
    {
      id: '6',
      memberName: 'Lucas Bernard',
      memberEmail: 'lucas.bernard@email.com',
      bookTitle: '1984',
      bookAuthor: 'George Orwell',
      loanDate: '2026-01-08',
      dueDate: '2026-01-22',
      status: 'overdue'
    },
  ];

  const filteredLoans = loans.filter(loan =>
    loan.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loan.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeLoans = filteredLoans.filter(loan => loan.status === 'active');
  const overdueLoans = filteredLoans.filter(loan => loan.status === 'overdue');
  const returnedLoans = filteredLoans.filter(loan => loan.status === 'returned');

  const displayedLoans = activeTab === 'all' ? filteredLoans :
                         activeTab === 'active' ? activeLoans :
                         activeTab === 'overdue' ? overdueLoans :
                         returnedLoans;

  const getStatusInfo = (status) => {
    if (status === 'active') return { label: 'En cours', className: 'badge' + ' ' + 'badge-success', icon: Clock };
    if (status === 'overdue') return { label: 'En retard', className: 'badge' + ' ' + 'badge-danger', icon: AlertCircle };
    return { label: 'Retourné', className: 'badge' + ' ' + 'badge-success', icon: CheckCircle };
  };

  const calculateDaysRemaining = (dueDate) => {
    const today = new Date('2026-01-22');
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div>
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="section-title">Gestion des Emprunts</h2>
          <p className="section-subtitle">Gérer les emprunts et retours</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Nouvel emprunt
        </button>
      </div>

      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#dbeafe', color: '#1d4ed8', padding: '0.75rem', borderRadius: '10px' }}>
              <Clock size={24} />
            </div>
            <div>
              <p className="stat-label">Emprunts en cours</p>
              <p className="stat-value">{activeLoans.length}</p>
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '10px' }}>
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="stat-label">En retard</p>
              <p className="stat-value">{overdueLoans.length}</p>
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#dcfce7', color: '#16a34a', padding: '0.75rem', borderRadius: '10px' }}>
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="stat-label">Retournés</p>
              <p className="stat-value">{returnedLoans.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="search-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Search size={20} color="#6b7280" />
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher par membre ou livre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderBottom: activeTab === 'all' ? '2px solid #dc2626' : 'none',
              fontWeight: activeTab === 'all' ? '600' : '400',
              color: activeTab === 'all' ? '#dc2626' : '#6b7280'
            }}
          >
            Tous ({filteredLoans.length})
          </button>
          <button
            onClick={() => setActiveTab('active')}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderBottom: activeTab === 'active' ? '2px solid #dc2626' : 'none',
              fontWeight: activeTab === 'active' ? '600' : '400',
              color: activeTab === 'active' ? '#dc2626' : '#6b7280'
            }}
          >
            En cours ({activeLoans.length})
          </button>
          <button
            onClick={() => setActiveTab('overdue')}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderBottom: activeTab === 'overdue' ? '2px solid #dc2626' : 'none',
              fontWeight: activeTab === 'overdue' ? '600' : '400',
              color: activeTab === 'overdue' ? '#dc2626' : '#6b7280'
            }}
          >
            En retard ({overdueLoans.length})
          </button>
          <button
            onClick={() => setActiveTab('returned')}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderBottom: activeTab === 'returned' ? '2px solid #dc2626' : 'none',
              fontWeight: activeTab === 'returned' ? '600' : '400',
              color: activeTab === 'returned' ? '#dc2626' : '#6b7280'
            }}
          >
            Retournés ({returnedLoans.length})
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {displayedLoans.map((loan) => {
            const daysRemaining = calculateDaysRemaining(loan.dueDate);
            const statusInfo = getStatusInfo(loan.status);
            const StatusIcon = statusInfo.icon;

            return (
              <div key={loan.id} style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0 }}>{loan.bookTitle}</h4>
                    <span className={statusInfo.className} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <StatusIcon size={14} />
                      {statusInfo.label}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0.25rem 0' }}>
                    par {loan.bookAuthor}
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                    <div>
                      <span style={{ color: '#6b7280' }}>Membre: </span>
                      <span style={{ fontWeight: '500' }}>{loan.memberName}</span>
                    </div>
                    <div>
                      <span style={{ color: '#6b7280' }}>Date d'emprunt: </span>
                      <span style={{ fontWeight: '500' }}>{new Date(loan.loanDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div>
                      <span style={{ color: '#6b7280' }}>Date de retour: </span>
                      <span style={{ fontWeight: '500' }}>{new Date(loan.dueDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    {loan.status !== 'returned' && (
                      <div>
                        <span style={{ color: '#6b7280' }}>Jours restants: </span>
                        <span style={{
                          fontWeight: '600',
                          color: daysRemaining < 0 ? '#dc2626' : daysRemaining <= 3 ? '#f59e0b' : '#16a34a'
                        }}>
                          {daysRemaining < 0 ? `${Math.abs(daysRemaining)} jour(s) de retard` : `${daysRemaining} jour(s)`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {loan.status !== 'returned' && (
                  <button className="btn btn-primary">
                    Marquer comme retourné
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
