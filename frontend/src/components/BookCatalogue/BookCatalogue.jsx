import React, { useState, useContext } from 'react';
import './BookCatalogue.css';
import { AuthContext } from '../../context/AuthContext';

const BookCatalogue = ({ searchTerm = '', filters = {}, isFavoritePage = false }) => {
  const { user } = useContext(AuthContext);
  const [livres, setLivres] = useState([
    { 
      id: 1, 
      titre: 'React Avancé', 
      auteur: 'A. Développeur', 
      disponible: true, 
      cote: 'DEV001',
      categorie: 'informatique',
      datePublication: '2022-03-15',
      isFavorite: false
    },
    { 
      id: 2, 
      titre: 'JavaScript Moderne', 
      auteur: 'E. Script', 
      disponible: false, 
      cote: 'DEV002',
      categorie: 'informatique',
      datePublication: '2021-11-20',
      isFavorite: true
    },
    { 
      id: 3, 
      titre: 'Réseaux Informatiques', 
      auteur: 'N. Admin', 
      disponible: true, 
      cote: 'RES101',
      categorie: 'reseau',
      datePublication: '2023-01-10',
      isFavorite: false
    },
    { 
      id: 4, 
      titre: 'Gestion de Projet Agile', 
      auteur: 'P. Manager', 
      disponible: true, 
      cote: 'GES201',
      categorie: 'gestion',
      datePublication: '2022-09-05',
      isFavorite: false
    },
    { 
      id: 5, 
      titre: 'Angular pour Débutants', 
      auteur: 'T. Framework', 
      disponible: true, 
      cote: 'DEV003',
      categorie: 'informatique',
      datePublication: '2023-02-28',
      isFavorite: false
    },
    { 
      id: 6, 
      titre: 'Communication Professionnelle', 
      auteur: 'C. Speaker', 
      disponible: false, 
      cote: 'COM101',
      categorie: 'communication',
      datePublication: '2021-05-12',
      isFavorite: false
    }
  ]);

  const [favorites, setFavorites] = useState(
    livres.filter(livre => livre.isFavorite)
  );

  const toggleFavorite = (id) => {
    const updatedLivres = livres.map(livre => 
      livre.id === id ? { ...livre, isFavorite: !livre.isFavorite } : livre
    );
    setLivres(updatedLivres);
    setFavorites(updatedLivres.filter(livre => livre.isFavorite));
  };

  const filtrerLivres = () => {
    let filtered = isFavoritePage ? livres.filter(livre => livre.isFavorite) : livres;
    
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
                {user && (
                  <button 
                    className={`favorite-btn ${livre.isFavorite ? 'active' : ''}`}
                    onClick={() => toggleFavorite(livre.id)}
                    aria-label={livre.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  >
                    <i className={`fas ${livre.isFavorite ? 'fa-heart' : 'fa-heart-o'}`}></i>
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