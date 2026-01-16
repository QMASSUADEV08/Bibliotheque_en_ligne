import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge, Modal } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

function DetailLivre() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  // Base de données des livres (devrait correspondre à celle de Livres.jsx)
  const tousLesLivres = [
    {
      id: 1,
      titre: "L'Enfant noir",
      auteur: "Camara Laye",
      description: "Récit autobiographique de l'enfance de l'auteur en Guinée, évoquant les traditions et la culture malinké. Un témoignage touchant sur la vie en Afrique de l'Ouest avant l'indépendance, mêlant souvenirs personnels et réflexions sur l'identité culturelle.",
      resumeComplet: "L'Enfant noir est un récit autobiographique publié en 1953 par l'écrivain guinéen Camara Laye. L'œuvre relate l'enfance et l'adolescence de l'auteur dans la Haute-Guinée des années 1930 et 1940. À travers ses souvenirs, Camara Laye dépeint la vie quotidienne dans son village natal de Kouroussa, les traditions ancestrales, l'apprentissage auprès de son père forgeron, et son parcours scolaire qui le mènera jusqu'à Conakry puis en France. Le livre est considéré comme un classique de la littérature africaine francophone et offre un témoignage précieux sur la société africaine précoloniale.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
      categorie: "LITTÉRATURE AFRICAINE",
      niveau: "Facile",
      duree: "4 heures",
      pages: 256,
      editeur: "Plon",
      annee: 1953,
      langue: "Français",
      isbn: "978-2-259-00000-0",
      disponible: true,
      exemplaires: 5
    },
    {
      id: 2,
      titre: "Une si longue lettre",
      auteur: "Mariama Bâ",
      description: "Roman épistolaire sénégalais qui aborde la condition de la femme africaine et la polygamie. À travers la correspondance de Ramatoulaye, l'auteure dénonce les injustices faites aux femmes dans la société sénégalaise traditionnelle.",
      resumeComplet: "Une si longue lettre est un roman épistolaire publié en 1979 par Mariama Bâ. L'histoire est racontée à travers les lettres de Ramatoulaye à son amie Aïssatou. Suite au décès de son mari qui l'avait abandonnée pour épouser une seconde femme plus jeune, Ramatoulaye fait le bilan de sa vie et de son mariage. Le roman aborde les thèmes de la polygamie, de l'éducation des femmes, de l'émancipation et des traditions qui entravent le développement de la femme africaine.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
      categorie: "LITTÉRATURE SÉNÉGALAISE",
      niveau: "Facile",
      duree: "3 heures",
      pages: 165,
      editeur: "Nouvelles Éditions Africaines",
      annee: 1979,
      langue: "Français",
      isbn: "978-2-7236-0000-0",
      disponible: true,
      exemplaires: 3
    },
    {
      id: 3,
      titre: "Le Monde s'effondre",
      auteur: "Chinua Achebe",
      description: "Chef-d'œuvre de la littérature nigériane racontant la colonisation et ses impacts sur la société Igbo. L'histoire d'Okonkwo, un guerrier respecté dont la vie bascule avec l'arrivée des colonisateurs britanniques et des missionnaires.",
      resumeComplet: "Le Monde s'effondre (Things Fall Apart) est un roman publié en 1958 par Chinua Achebe. Il raconte l'histoire d'Okonkwo, un guerrier et chef respecté de la tribu Igbo au Nigeria, à la fin du XIXe siècle. Le récit se déroule en trois parties : la vie traditionnelle du village d'Umuofia, l'exil d'Okonkwo suite à un accident tragique, et son retour au village transformé par l'arrivée des missionnaires et des colonisateurs britanniques. Le roman explore les thèmes de la colonisation, du choc des cultures, de la masculinité et de la tragédie personnelle.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600",
      categorie: "LITTÉRATURE NIGÉRIANE",
      niveau: "Moyen",
      duree: "6 heures",
      pages: 224,
      editeur: "Heinemann",
      annee: 1958,
      langue: "Français (traduit de l'anglais)",
      isbn: "978-0-435-90000-0",
      disponible: true,
      exemplaires: 4
    },
    {
      id: 4,
      titre: "Sous l'orage",
      auteur: "Seydou Badian",
      description: "Roman malien qui explore le conflit entre tradition et modernité dans l'Afrique contemporaine. L'histoire de Kany, une jeune fille qui refuse un mariage arrangé pour poursuivre ses études, symbolisant la lutte des jeunes africains pour leur émancipation.",
      resumeComplet: "Sous l'orage, publié en 1957, est l'un des premiers romans de la littérature malienne. Il raconte l'histoire de Kany, une jeune lycéenne qui refuse le mariage arrangé par son père avec Famagan, un riche commerçant. Elle préfère poursuivre ses études et épouser Samou, son ami d'enfance. Le roman met en scène le conflit générationnel et le choc entre les valeurs traditionnelles et les aspirations modernes de la jeunesse africaine post-coloniale.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600",
      categorie: "LITTÉRATURE MALIENNE",
      niveau: "Facile",
      duree: "3 heures",
      pages: 186,
      editeur: "Présence Africaine",
      annee: 1957,
      langue: "Français",
      isbn: "978-2-7087-0000-0",
      disponible: true,
      exemplaires: 6
    },
    {
      id: 5,
      titre: "Le Vieux Nègre et la Médaille",
      auteur: "Ferdinand Oyono",
      description: "Satire acerbe de la colonisation française au Cameroun à travers l'histoire de Meka. Un vieux paysan qui a tout donné pour la France coloniale découvre l'ingratitude et l'hypocrisie du système colonial lors d'une cérémonie de remise de médaille.",
      resumeComplet: "Le Vieux Nègre et la Médaille est un roman publié en 1956 par Ferdinand Oyono. Il raconte l'histoire de Meka, un vieux Camerounais qui a donné ses terres et ses fils à la France coloniale. En récompense de sa loyauté, il doit recevoir une médaille lors d'une cérémonie officielle. Mais cette journée qui devait être glorieuse se transforme en humiliation, révélant le mépris et l'hypocrisie du système colonial. Le roman est une critique virulente et ironique de la colonisation.",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600",
      categorie: "LITTÉRATURE CAMEROUNAISE",
      niveau: "Moyen",
      duree: "4 heures",
      pages: 208,
      editeur: "Julliard",
      annee: 1956,
      langue: "Français",
      isbn: "978-2-260-00000-0",
      disponible: false,
      exemplaires: 0
    }
  ];

  // Trouver le livre correspondant
  const livre = tousLesLivres.find(l => l.id === parseInt(id)) || tousLesLivres[0];

  const handleEmprunter = () => {
    setShowModal(true);
  };

  return (
    <Container className="py-4">
      {/* Bouton retour */}
      <Button 
        as={Link} 
        to="/livres" 
        variant="outline-secondary" 
        className="mb-3"
        style={{ 
          borderRadius: '6px',
          padding: '0.5rem 1.2rem',
          fontSize: '0.9rem',
          fontWeight: '500',
          border: '2px solid #4A4A4A',
          color: '#4A4A4A'
        }}
      >
        ← Retour aux livres
      </Button>

      <Row>
        {/* Image du livre */}
        <Col md={4} lg={3} className="mb-4">
          <div 
            style={{
              position: 'sticky',
              top: '90px'
            }}
          >
            <img 
              src={livre.image} 
              alt={livre.titre}
              className="img-fluid rounded shadow"
              style={{ 
                width: '100%', 
                maxHeight: '420px', 
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid #E5E5E5'
              }}
            />
            
            {/* Statut de disponibilité */}
            <div className="mt-3 text-center">
              {livre.disponible ? (
                <Badge 
                  bg="success" 
                  className="px-3 py-2" 
                  style={{ 
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    backgroundColor: '#28A745',
                    borderRadius: '6px'
                  }}
                >
                  ✓ Disponible ({livre.exemplaires} exemplaire{livre.exemplaires > 1 ? 's' : ''})
                </Badge>
              ) : (
                <Badge 
                  bg="danger" 
                  className="px-3 py-2" 
                  style={{ 
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    backgroundColor: '#DC3545',
                    borderRadius: '6px'
                  }}
                >
                  ✗ Non disponible
                </Badge>
              )}
            </div>
          </div>
        </Col>

        {/* Détails du livre */}
        <Col md={8} lg={9}>
          {/* Catégorie */}
          <div className="mb-2">
            <Badge 
              style={{ 
                backgroundColor: '#8B1538',
                fontSize: '0.7rem',
                padding: '5px 12px',
                borderRadius: '6px',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}
            >
              {livre.categorie}
            </Badge>
          </div>

          {/* Titre */}
          <h1 className="fw-bold mb-2" style={{ fontSize: '2rem', color: '#2d3748' }}>
            {livre.titre}
          </h1>

          {/* Auteur */}
          <h4 className="mb-3" style={{ fontSize: '1.1rem', color: '#6B7280', fontWeight: '500' }}>
            par {livre.auteur}
          </h4>

          {/* Informations rapides */}
          <div className="d-flex flex-wrap gap-3 mb-3 pb-3 border-bottom" style={{ borderColor: '#E5E5E5' }}>
            <div className="d-flex align-items-center gap-2">
              <svg width="18" height="18" fill="#4A4A4A" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
              </svg>
              <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>{livre.pages} pages</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <svg width="18" height="18" fill="#4A4A4A" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>{livre.duree}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <svg width="18" height="18" fill="#4A4A4A" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6v2.5a.5.5 0 0 1-1 0v-3z"/>
              </svg>
              <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>Niveau: {livre.niveau}</span>
            </div>
          </div>

          {/* Description courte */}
          <div className="mb-3">
            <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem', color: '#2d3748' }}>Résumé</h5>
            <p style={{ lineHeight: '1.7', fontSize: '0.95rem', color: '#4A5568' }}>
              {livre.description}
            </p>
          </div>

          {/* Résumé complet */}
          <div className="mb-3 p-3" style={{ backgroundColor: '#F8F9FA', borderRadius: '8px', border: '1px solid #E5E5E5' }}>
            <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem', color: '#2d3748' }}>À propos de ce livre</h5>
            <p style={{ lineHeight: '1.7', fontSize: '0.9rem', color: '#4A5568', marginBottom: '0' }}>
              {livre.resumeComplet}
            </p>
          </div>

          {/* Informations détaillées */}
          <div className="mb-4">
            <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem', color: '#2d3748' }}>Informations détaillées</h5>
            <table className="table table-borderless" style={{ fontSize: '0.9rem' }}>
              <tbody>
                <tr>
                  <td className="fw-semibold" style={{ width: '160px', color: '#6B7280', padding: '0.5rem 0' }}>Éditeur</td>
                  <td style={{ color: '#2d3748', padding: '0.5rem 0' }}>{livre.editeur}</td>
                </tr>
                <tr>
                  <td className="fw-semibold" style={{ color: '#6B7280', padding: '0.5rem 0' }}>Année de publication</td>
                  <td style={{ color: '#2d3748', padding: '0.5rem 0' }}>{livre.annee}</td>
                </tr>
                <tr>
                  <td className="fw-semibold" style={{ color: '#6B7280', padding: '0.5rem 0' }}>Langue</td>
                  <td style={{ color: '#2d3748', padding: '0.5rem 0' }}>{livre.langue}</td>
                </tr>
                <tr>
                  <td className="fw-semibold" style={{ color: '#6B7280', padding: '0.5rem 0' }}>ISBN</td>
                  <td style={{ padding: '0.5rem 0' }}>
                    <code style={{ backgroundColor: '#E5E5E5', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>
                      {livre.isbn}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold" style={{ color: '#6B7280', padding: '0.5rem 0' }}>Nombre de pages</td>
                  <td style={{ color: '#2d3748', padding: '0.5rem 0' }}>{livre.pages} pages</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Boutons d'action */}
          <div className="d-flex flex-wrap gap-2">
            <Button 
              size="lg"
              disabled={!livre.disponible}
              onClick={handleEmprunter}
              style={{
                backgroundColor: livre.disponible ? '#8B1538' : '#CCCCCC',
                border: 'none',
                borderRadius: '6px',
                padding: '0.7rem 2rem',
                fontWeight: '600',
                fontSize: '0.95rem',
                boxShadow: livre.disponible ? '0 2px 8px rgba(139, 21, 56, 0.25)' : 'none',
                color: 'white'
              }}
            >
              {livre.disponible ? '📚 Emprunter ce livre' : '✗ Non disponible'}
            </Button>
            <Button 
              variant="outline-primary" 
              size="lg"
              style={{
                border: '2px solid #8B1538',
                color: '#8B1538',
                borderRadius: '6px',
                padding: '0.7rem 2rem',
                fontWeight: '600',
                fontSize: '0.95rem',
                backgroundColor: 'transparent'
              }}
            >
              ❤ Ajouter aux favoris
            </Button>
          </div>
        </Col>
      </Row>

      {/* Modal de confirmation d'emprunt */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ borderBottom: '1px solid #E5E5E5' }}>
          <Modal.Title style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2d3748' }}>
            Confirmer l'emprunt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center py-3">
            <div style={{ fontSize: '3.5rem' }}>📚</div>
            <h5 className="mt-3 mb-2" style={{ fontSize: '1.1rem', color: '#2d3748', fontWeight: '600' }}>
              Emprunter "{livre.titre}" ?
            </h5>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0' }}>
              Vous devez être connecté pour emprunter un livre.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: '1px solid #E5E5E5' }}>
          <Button 
            variant="secondary" 
            onClick={() => setShowModal(false)}
            style={{
              backgroundColor: '#4A4A4A',
              border: 'none',
              borderRadius: '6px',
              padding: '0.6rem 1.5rem',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            Annuler
          </Button>
          <Button 
            as={Link}
            to="/connexion"
            style={{
              backgroundColor: '#8B1538',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '0.6rem 1.5rem',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            Se connecter
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DetailLivre;
