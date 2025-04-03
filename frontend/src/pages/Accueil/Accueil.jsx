import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Accueil.css';
import poster from '../../asset/poster/poster.jpg';

const Accueil = () => {
  const { user, isLoading } = useContext(AuthContext);

  // Sample data
  const features = [
    { icon: 'fas fa-search', title: 'Recherche de Documents', description: 'Explorez notre catalogue en ligne' },
    { icon: 'fas fa-book-open', title: 'Gestion des Emprunts', description: 'Suivez vos emprunts en cours' },
    { icon: 'fas fa-calendar-check', title: 'Réservation en Ligne', description: 'Réservez vos documents à distance' }
  ];

  const stats = [
    { value: "5,000+", label: "Livres disponibles" },
    { value: "24/7", label: "Accès en ligne" },
    { value: "98%", label: "Satisfaction" }
  ];

  if (isLoading) {
    return <div className="loading-spinner">Chargement...</div>;
  }

  return (
    <div className="accueil-container">
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(${poster})` }}
      >
        <div className="hero-content">
          <h1>Bienvenue à la Bibliothèque OFPPT Taza</h1>
          <p>Accédez à notre collection de ressources pédagogiques</p>
          <div className="hero-buttons">
            <Link to="/catalogue" className="btn primary">
              <i className="fas fa-book-open"></i> Explorer le catalogue
            </Link>
            {!user && (
              <Link to="/inscription" className="btn secondary">
                <i className="fas fa-user-plus"></i> Créer un compte
              </Link>
            )}
            {user && (
              <Link to="/profile" className="btn secondary">
                <i className="fas fa-user"></i> Mon compte
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Nos Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Prêt à découvrir notre collection?</h2>
        <Link to={user ? "/catalogue" : "/connexion"} className="btn primary">
          {user ? "Continuer vers le catalogue" : "Se connecter"}
        </Link>
      </section>
    </div>
  );
};

export default Accueil;