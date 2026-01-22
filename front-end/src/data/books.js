export const books = [
  {
    id: 1,
    title: "Une si longue lettre",
    author: "Mariama Bâ",
    year: 1980,
    category: "LITTÉRATURE AFRICAINE",
    type: "Roman épistolaire",
    country: "Sénégal",
    isbn: "978-2-7489-0000-1",
    
    // Résumé court (pour visiteurs)
    summaryShort: "À travers une longue lettre adressée à son amie Aïssatou, Ramatoulaye raconte sa vie de femme sénégalaise confrontée à la polygamie et aux traditions.",
    
    // Résumé complet (pour abonnés)
    summaryFull: "Une si longue lettre est un roman épistolaire qui dénonce avec force et émotion la condition de la femme africaine. À travers une longue lettre adressée à son amie d'enfance Aïssatou, Ramatoulaye raconte sa vie, ses espoirs déçus et sa révolte face à la polygamie. Lorsque son mari prend une seconde épouse, plus jeune, elle doit faire face à l'humiliation et à la solitude. Ce roman est un plaidoyer pour l'émancipation des femmes et une réflexion profonde sur les traditions africaines face à la modernité.",
    
    // Statut du livre
    available: true,
    status: "Disponible",
    
    // Image
    cover: "/books/unelongue.jpeg",
    
    // Métadonnées supplémentaires
    pages: 130,
    language: "Français",
    publisher: "Le Serpent à Plumes"
  },
  
  {
    id: 2,
    title: "Les Soleils des Indépendances",
    author: "Ahmadou Kourouma",
    year: 1968,
    category: "LITTÉRATURE AFRICAINE",
    type: "Roman",
    country: "Côte d'Ivoire",
    isbn: "978-2-02-000518-4",
    
    summaryShort: "L'histoire de Fama, prince déchu devenu mendiant après les indépendances africaines, qui assiste impuissant à l'effondrement de son monde traditionnel.",
    
    summaryFull: "Les Soleils des Indépendances raconte le destin tragique de Fama Doumbouya, dernier descendant d'une lignée princière malinké. Après les indépendances, Fama, autrefois prince respecté, est réduit à la mendicité et assiste impuissant à la désintégration de son monde. Le roman dresse un portrait sans concession de l'Afrique post-coloniale, dénonçant la corruption des nouveaux dirigeants et le désarroi d'une génération prise entre traditions et modernité. Kourouma utilise une langue française africanisée, mêlant expressions malinkés et tournures inédites, créant ainsi une écriture révolutionnaire.",
    
    available: false,
    status: "Emprunté",
    
    cover: "/books/kourou.jpeg",
    
    pages: 196,
    language: "Français",
    publisher: "Éditions du Seuil"
  },
  
  {
    id: 3,
    title: "L'Enfant noir",
    author: "Camara Laye",
    year: 1953,
    category: "LITTÉRATURE AFRICAINE",
    type: "Roman autobiographique",
    country: "Guinée",
    isbn: "978-2-266-12836-7",
    
    summaryShort: "Récit autobiographique de l'enfance de l'auteur en Haute-Guinée, évoquant avec nostalgie les traditions, la famille et l'apprentissage de la vie.",
    
    summaryFull: "L'Enfant noir est un récit autobiographique dans lequel Camara Laye évoque son enfance en Haute-Guinée. Avec une écriture poétique et nostalgique, l'auteur raconte sa vie au sein de sa famille, les rites initiatiques, l'apprentissage auprès de son père forgeron, et la découverte du monde moderne à travers l'école coloniale. Ce roman est un témoignage précieux sur la vie traditionnelle africaine avant les bouleversements de l'indépendance. Camara Laye célèbre la beauté de la culture malinké tout en exprimant la douleur de l'exil et de la séparation d'avec son monde originel.",
    
    available: true,
    status: "Disponible",
    
    cover: "/books/noir.jpeg",
    
    pages: 224,
    language: "Français",
    publisher: "Plon"
  },
  
  {
    id: 4,
    title: "L'Étranger",
    author: "Albert Camus",
    year: 1942,
    category: "LITTÉRATURE FRANÇAISE",
    type: "Roman philosophique",
    country: "France",
    isbn: "978-2-07-036002-4",
    
    summaryShort: "L'histoire de Meursault, un homme indifférent qui tue un Arabe sur une plage algéroise et se retrouve confronté à l'absurdité de l'existence.",
    
    summaryFull: "L'Étranger raconte l'histoire de Meursault, employé de bureau vivant à Alger. Après la mort de sa mère, il se montre étrangement détaché et indifférent. Quelques jours plus tard, lors d'une journée à la plage, il tue un Arabe sans raison apparente. Au cours de son procès, ce n'est pas tant le meurtre qu'on lui reproche que son attitude lors de l'enterrement de sa mère et son apparente absence d'émotion. À travers ce personnage atypique, Camus explore les thèmes de l'absurde, de l'aliénation et du refus de l'hypocrisie sociale. Ce roman est devenu un classique de la littérature du XXe siècle.",
    
    available: true,
    status: "Disponible",
    
    cover: "/books/camus.jpeg",
    
    pages: 186,
    language: "Français",
    publisher: "Gallimard"
  },
  
  {
    id: 5,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    category: "LITTÉRATURE FRANÇAISE",
    type: "Conte philosophique",
    country: "France",
    isbn: "978-2-07-061275-8",
    
    summaryShort: "Un aviateur rencontre dans le désert un petit prince venu d'une autre planète, qui lui raconte ses voyages et ses rencontres extraordinaires.",
    
    summaryFull: "Le Petit Prince est un conte poétique et philosophique qui raconte la rencontre entre un aviateur en panne dans le désert du Sahara et un mystérieux petit garçon venu d'une autre planète. À travers les récits du petit prince sur ses voyages de planète en planète et ses rencontres avec des adultes étranges (un roi, un vaniteux, un businessman, un allumeur de réverbères), Saint-Exupéry livre une réflexion profonde sur l'amour, l'amitié, la solitude et le sens de la vie. Avec des phrases devenues célèbres comme 'On ne voit bien qu'avec le cœur, l'essentiel est invisible pour les yeux', ce livre pour enfants touche également les adultes par sa sagesse universelle.",
    
    available: true,
    status: "Disponible",
    
    cover: "books/prince.jpeg",
    
    pages: 96,
    language: "Français",
    publisher: "Gallimard"
  }
];

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

// Obtenir tous les livres
export const getAllBooks = () => books;

// Obtenir un livre par ID
export const getBookById = (id) => books.find(book => book.id === id);

// Filtrer les livres disponibles
export const getAvailableBooks = () => books.filter(book => book.available);

// Filtrer par catégorie
export const getBooksByCategory = (category) => 
  books.filter(book => book.category === category);

// Rechercher des livres
export const searchBooks = (query) => {
  const lowerQuery = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) ||
    book.author.toLowerCase().includes(lowerQuery) ||
    book.category.toLowerCase().includes(lowerQuery)
  );
};

// Obtenir les catégories uniques
export const getCategories = () => {
  const categories = [...new Set(books.map(book => book.category))];
  return categories;
};