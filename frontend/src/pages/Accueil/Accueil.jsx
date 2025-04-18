import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import './Accueil.css';

// Images
import mainHero from '../../asset/images/modern-library-interior.jpg';
import reservationImg from '../../asset/images/book-reservation.jpg';
import programBooksImg from '../../asset/images/program-books.jpg';
import digitalSection from '../../asset/images/digital-reading-area.jpg';
import studyZone from '../../asset/images/study-zone.jpg';
import featuredBook1 from '../../asset/images/featured-book-1.jpg';
import featuredBook2 from '../../asset/images/featured-book-2.jpg';
import ofpptBuilding from '../../asset/images/ofppt-taza-building.jpg';

const Accueil = () => {
  const { user, isLoading } = useContext(AuthContext);

  // Services data
  const services = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Réservation de Livres',
      description: 'Réservez vos livres en ligne et récupérez-les à la bibliothèque',
      image: reservationImg,
      color: '#4361ee',
      link: '/reservation'
    },
    {
      icon: 'fas fa-book-open',
      title: 'Livres par Spécialité',
      description: 'Collections dédiées à chaque filière OFPPT (TSDI, TCE, etc.)',
      image: programBooksImg,
      color: '#3a0ca3',
      link: '/program-books'
    },
    {
      icon: 'fas fa-tablet-alt',
      title: 'Ressources Digitales',
      description: 'Accès aux e-books, cours en ligne et bases de données',
      image: digitalSection,
      color: '#7209b7',
      link: '/digital'
    },
    {
      icon: 'fas fa-users',
      title: 'Espaces Collaboratifs',
      description: 'Zones de travail pour les projets de groupe par filière',
      image: studyZone,
      color: '#f72585',
      link: '/study-spaces'
    }
  ];

  const stats = [
    { value: "15K+", label: "Livres Physiques", icon: "fas fa-book" },
    { value: "10K+", label: "Ressources Digitales", icon: "fas fa-laptop" },
    { value: "24/7", label: "Accès en Ligne", icon: "fas fa-globe" },
    { value: "98%", label: "Satisfaction", icon: "fas fa-smile" }
  ];

  const featuredBooks = [
    {
      image: featuredBook1,
      title: "Les Nouveautés",
      description: "Découvrez nos dernières acquisitions"
    },
    {
      image: featuredBook2,
      title: "Coups de Cœur",
      description: "Les préférés de nos membres"
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="book">
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
          </div>
          <h2>Chargement...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-library">
      {/* Floating Navigation */}
      <nav className="floating-nav">
        <Link to="/catalogue" className="nav-btn">
          <i className="fas fa-book-open"></i>
          <span>Catalogue</span>
        </Link>
        <Link to="/reservation" className="nav-btn">
          <i className="fas fa-calendar-check"></i>
          <span>Réservation</span>
        </Link>
        {user ? (
          <Link to="/profile" className="nav-btn">
            <i className="fas fa-user"></i>
            <span>Profil</span>
          </Link>
        ) : (
          <Link to="/connexion" className="nav-btn">
            <i className="fas fa-sign-in-alt"></i>
            <span>Connexion</span>
          </Link>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-image-container">
          <img src={mainHero} alt="Bibliothèque moderne OFPPT Taza" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Bienvenue à la <span>Bibliothèque OFPPT</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Un espace moderne dédié à la connaissance et à l'apprentissage
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/catalogue" className="cta-button">
              <i className="fas fa-search"></i> Explorer la collection
            </Link>
            <Link to="/reservation" className="cta-button outline">
              <i className="fas fa-bookmark"></i> Réserver un livre
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Nos <span>Services Étudiants</span></h2>
          <p>Des solutions adaptées à vos besoins académiques</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-image" style={{ backgroundColor: service.color }}>
                <img src={service.image} alt={service.title} />
                <div className="service-badge">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Découvrir <i className="fas fa-arrow-right"></i>
                </Link>
                
                {service.title.includes('Spécialité') && (
                  <div className="program-badge">
                    <span>Disponible pour toutes les filières</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="service-cta">
          <p>Vous ne trouvez pas ce qu'il vous faut ?</p>
          <Link to="/contact" className="cta-button outline">
            <i className="fas fa-headset"></i> Contactez notre équipe
          </Link>
        </div>
      </section>

      {/* OFPPT Section */}
      <section className="ofppt-section">
        <div className="ofppt-container">
          <div className="ofppt-content">
            <h2>Centre <span>OFPPT</span> Taza</h2>
            <p>Le Centre OFPPT de Taza offre des formations professionnelles de qualité dans divers domaines techniques, préparant les étudiants aux défis du marché du travail.</p>
            <p>Notre bibliothèque soutient toutes les filières avec des ressources spécialisées.</p>
            
            <div className="ofppt-features">
              <div className="ofppt-feature">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h3>Filières Supportées</h3>
                  <p>TSDI, TCE, Mécanique, Électricité, et plus</p>
                </div>
              </div>
              <div className="ofppt-feature">
                <i className="fas fa-book"></i>
                <div>
                  <h3>Ressources Spécialisées</h3>
                  <p>Manuels techniques et ressources par filière</p>
                </div>
              </div>
            </div>
            
            <Link to="/programs" className="cta-button ofppt">
              <i className="fas fa-list"></i> Voir toutes les filières
            </Link>
          </div>
          
          <div className="ofppt-image">
            <img src={ofpptBuilding} alt="Centre OFPPT Taza" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books">
        <div className="section-header">
          <h2>À Découvrir</h2>
          <p>Nos sélections spéciales pour étudiants</p>
        </div>
        <div className="books-grid">
          {featuredBooks.map((book, index) => (
            <motion.div 
              key={index}
              className="book-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <Link to="/catalogue" className="book-link">
                  Voir la collection <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Prêt à commencer votre recherche ?</h2>
          <p>Accédez à des milliers de ressources pour réussir votre formation</p>
          <div className="cta-buttons">
            <Link to="/catalogue" className="cta-button large">
              <i className="fas fa-book-open"></i> Explorer le catalogue
            </Link>
            {!user && (
              <Link to="/inscription" className="cta-button outline large">
                <i className="fas fa-user-plus"></i> Créer un compte
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;