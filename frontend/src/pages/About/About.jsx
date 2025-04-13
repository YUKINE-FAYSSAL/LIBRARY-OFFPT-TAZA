// src/pages/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-library">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="hero-content">
          <h1>Bibliothèque OFPPT Taza</h1>
          <p>Votre porte d'entrée vers le savoir et la réussite professionnelle</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="library-container">
        {/* About Section */}
        <section className="library-about">
          <div className="about-card">
            <h2>Notre Mission</h2>
            <p>
              La bibliothèque de l'OFPPT Taza met à votre disposition une collection variée de livres techniques,
              manuels de formation et ouvrages spécialisés pour accompagner votre parcours professionnel.
            </p>
            <div className="icon-box">
              <i className="fas fa-book-open"></i>
              <span>5000+ Ouvrages</span>
            </div>
          </div>

          <div className="about-card">
            <h2>Services</h2>
            <ul>
              <li><i className="fas fa-check-circle"></i> Prêt de livres (15 jours renouvelables)</li>
              <li><i className="fas fa-check-circle"></i> Espace de lecture silencieuse</li>
              <li><i className="fas fa-check-circle"></i> Accès aux ressources numériques</li>
              <li><i className="fas fa-check-circle"></i> Aide à la recherche documentaire</li>
            </ul>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="reservation-section">
          <h2>Comment réserver un livre ?</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Recherchez</h3>
              <p>Consultez notre catalogue en ligne ou sur place</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Réservez</h3>
              <p>Via notre plateforme ou à l'accueil de la bibliothèque</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Récupérez</h3>
              <p>Retirez le livre dans les 48h à la bibliothèque</p>
            </div>
          </div>
          <button className="cta-button">Accéder au Catalogue</button>
        </section>

        {/* Location Section */}
        <section className="location-section">
          <h2>Nous Trouver</h2>
          <div className="location-content">
            <div className="location-info">
              <h3>Horaires d'ouverture</h3>
              <ul>
                <li>Lundi-Vendredi: 8h30 - 18h30</li>
                <li>Samedi: 9h - 13h</li>
                <li>Dimanche: Fermé</li>
              </ul>
              <h3>Contact</h3>
              <ul>
                <li><i className="fas fa-phone"></i> +212 5 35 00 00 00</li>
                <li><i className="fas fa-envelope"></i> bibliotheque@ofppt-taza.ac.ma</li>
                <li><i className="fas fa-map-marker-alt"></i> Avenue Mohammed VI, Taza</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe 
                title="Localisation OFPPT Taza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7196.57814367141!2d-3.9938750762226825!3d34.228902925311466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9e172b4c27a5df%3A0x4e9a717e058869be!2sOFPPT!5e0!3m2!1sfr!2sma!4v1744489822500!5m2!1sfr!2sma" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;