import React, { useState, useContext } from 'react';
import './BookCatalogue.css';
import { AuthContext } from '../../context/AuthContext';

const BookCatalogue = ({ searchTerm = '', filters = {}, isFavoritePage = false }) => {
  const { user } = useContext(AuthContext);
  
  // YOUR EXISTING BOOK DATA (unchanged)
  const [livres, setLivres] = useState([
    { 
      id: 1, 
      titre: 'React Avancé', 
      auteur: 'A. Développeur', 
      disponible: true, 
      cote: 'DEV001',
      categorie: 'informatique',
      datePublication: '2022-03-15'
    },
    { 
      id: 2, 
      titre: 'JavaScript Moderne', 
      auteur: 'E. Script', 
      disponible: false, 
      cote: 'DEV002',
      categorie: 'informatique',
      datePublication: '2021-11-20'
    },
    // ... (keep all your other books exactly as you had them)
  ]);

  // NEW: Favorites state (only addition)
  const [favorites, setFavorites] = useState([]);

  // NEW: Toggle favorite function
  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(bookId => bookId !== id) 
        : [...prev, id]
    );
  };

  // YOUR EXISTING FILTER FUNCTION (unchanged)
  const filtrerLivres = () => {
    let filtered = isFavoritePage 
      ? livres.filter(livre => favorites.includes(livre.id)) // NEW: Filter favorites
      : livres;
    
    return filtered.filter(livre => {
      const matchesSearch = 
        livre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        livre.auteur.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        !filters.category || livre.categorie === filters.category;
      
      const matchesAvailability = 
        filters.availability === 'all' ||
        (filters.availability === 'available' && livre.disponible) ||
        (filters.availability === 'unavailable' && !livre.disponible);
      
      return matchesSearch && matchesCategory && matchesAvailability;
    });
  };

  // YOUR EXISTING SORT FUNCTION (unchanged)
  const trierLivres = (livres) => {
    switch(filters.sortBy) {
      case 'title-asc':
        return [...livres].sort((a, b) => a.titre.localeCompare(b.titre));
      case 'title-desc':
        return [...livres].sort((a, b) => b.titre.localeCompare(a.titre));
      case 'author-asc':
        return [...livres].sort((a, b) => a.auteur.localeCompare(b.auteur));
      case 'author-desc':
        return [...livres].sort((a, b) => b.auteur.localeCompare(a.auteur));
      case 'date-newest':
        return [...livres].sort((a, b) => new Date(b.datePublication) - new Date(a.datePublication));
      case 'date-oldest':
        return [...livres].sort((a, b) => new Date(a.datePublication) - new Date(b.datePublication));
      default:
        return livres;
    }
  };

  const livresFiltres = trierLivres(filtrerLivres());

  // YOUR EXISTING RESERVE FUNCTION (unchanged)
  const reserverLivre = (id) => {
    alert(`Livre ${id} réservé avec succès!`);
  };

  return (
    <div className="catalogue-container">
      <div className="livres-grid">
        {livresFiltres.length > 0 ? (
          livresFiltres.map(livre => (
            <div key={livre.id} className="livre-card">
              <div className="livre-header">
                <h3>{livre.titre}</h3>
                {/* NEW: Favorite button (only change in JSX) */}
                {user && (
                  <button 
                    className={`favorite-btn ${favorites.includes(livre.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(livre.id)}
                  >
                    <i className={`fas ${favorites.includes(livre.id) ? 'fa-heart' : 'fa-heart-o'}`}></i>
                  </button>
                )}
              </div>
              <p>Auteur: {livre.auteur}</p>
              <div className="livre-meta">
                <span className="cote">{livre.cote}</span>
                <span className={`disponibilite ${livre.disponible ? 'disponible' : 'indisponible'}`}>
                  {livre.disponible ? 'Disponible' : 'Emprunté'}
                </span>
              </div>
              <button 
                className="reserver-btn" 
                disabled={!livre.disponible}
                onClick={() => reserverLivre(livre.id)}
              >
                {livre.disponible ? 'Réserver' : 'Indisponible'}
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            {isFavoritePage 
              ? 'Vous n\'avez aucun livre dans vos favoris' 
              : 'Aucun livre trouvé avec les critères de recherche sélectionnés'}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCatalogue;