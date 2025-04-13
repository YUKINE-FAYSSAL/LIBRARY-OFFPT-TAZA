import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import './Accueil.css';

// Modern library images
import mainHero from '../../asset/images/modern-library-interior.jpg';
import bookCollection from '../../asset/images/book-collection-display.jpg';
import digitalSection from '../../asset/images/digital-reading-area.jpg';
import studyZone from '../../asset/images/study-zone.jpg';
import featuredBook1 from '../../asset/images/featured-book-1.jpg';
import featuredBook2 from '../../asset/images/featured-book-2.jpg';

const Accueil = () => {
  const { user, isLoading } = useContext(AuthContext);

  const features = [
    {
      icon: 'fas fa-books',
      title: 'Collection Physique',
      description: '15,000+ livres couvrant tous les domaines académiques',
      image: bookCollection,
      color: '#4361ee'
    },
    {
      icon: 'fas fa-tablet-alt',
      title: 'Espace Digital',
      description: 'Zone dédiée avec liseuses et tablettes',
      image: digitalSection,
      color: '#3a0ca3'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Zones d\'Étude',
      description: 'Espaces silencieux et salles de travail en groupe',
      image: studyZone,
      color: '#7209b7'
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
            <Link to="/visite" className="cta-button outline">
              <i className="fas fa-video"></i> Visite virtuelle
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Nos <span>Services</span></h2>
          <p>Découvrez ce que nous offrons à notre communauté</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-image" style={{ backgroundColor: feature.color }}>
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-content">
                <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to="/services" className="feature-link">
                  En savoir plus <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          ))}
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
          <p>Nos sélections spéciales</p>
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
          <h2>Prêt à explorer notre collection ?</h2>
          <p>Rejoignez notre communauté de lecteurs passionnés</p>
          <div className="cta-buttons">
            <Link to="/catalogue" className="cta-button large">
              <i className="fas fa-book-open"></i> Parcourir les livres
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