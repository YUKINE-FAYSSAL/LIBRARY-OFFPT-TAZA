import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BookCatalogue from '../../components/BookCatalogue/BookCatalogue';
import { AuthContext } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoriteContext';
import './Favorite.css';

const Favorite = () => {
  const { user } = useContext(AuthContext);
  const { totalFavorites } = useFavorites();

  return (
    <div className="favorite-page">
      <h1>Mes Favoris {totalFavorites > 0 && `(${totalFavorites})`}</h1>
      
      {user ? (
        <div className="favorite-content">
          <BookCatalogue isFavoritePage={true} />
          {totalFavorites === 0 && (
            <div className="empty-favorites">
              <p>Votre liste de favoris est vide</p>
              <Link to="/catalogue" className="browse-btn">
                Parcourir le catalogue
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="login-prompt">
          <p>Connectez-vous pour gérer vos favoris</p>
          <Link to="/connexion" className="login-btn">
            Se connecter
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;