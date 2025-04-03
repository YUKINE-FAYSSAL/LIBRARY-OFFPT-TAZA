import React, { useState } from 'react';
import BookCatalogue from '../../components/BookCatalogue/BookCatalogue';
import './Catalogue.css';

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    author: '',
    availability: 'all',
    sortBy: 'title-asc'
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      author: '',
      availability: 'all',
      sortBy: 'title-asc'
    });
  };

  return (
    <div className="catalogue-page">
      <h1>Catalogue des Livres</h1>
      
      <div className="search-container">
        <div className="primary-search">
          <input
            type="text"
            className="search-box"
            placeholder="Rechercher un livre par titre, auteur ou mot-clé..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn">
            <i className="fas fa-search"></i> Rechercher
          </button>
        </div>
        
        <div className="search-filters">
          <div className="filter-group">
            <label>Catégorie:</label>
            <select 
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">Toutes</option>
              <option value="informatique">Informatique</option>
              <option value="gestion">Gestion</option>
              <option value="langues">Langues</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Auteur:</label>
            <input
              type="text"
              name="author"
              placeholder="Filtrer par auteur"
              value={filters.author}
              onChange={handleFilterChange}
            />
          </div>
          
          <div className="filter-group">
            <label>Disponibilité:</label>
            <select 
              name="availability"
              value={filters.availability}
              onChange={handleFilterChange}
            >
              <option value="all">Tous</option>
              <option value="available">Disponible</option>
              <option value="unavailable">Emprunté</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Trier par:</label>
            <select 
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
            >
              <option value="title-asc">Titre (A-Z)</option>
              <option value="title-desc">Titre (Z-A)</option>
              <option value="author-asc">Auteur (A-Z)</option>
              <option value="author-desc">Auteur (Z-A)</option>
            </select>
          </div>
          
          <button 
            className="reset-btn"
            onClick={resetFilters}
          >
            <i className="fas fa-redo"></i> Réinitialiser
          </button>
        </div>
      </div>
      
      <BookCatalogue 
        searchTerm={searchTerm}
        filters={filters}
      />
    </div>
  );
};

export default Catalogue;