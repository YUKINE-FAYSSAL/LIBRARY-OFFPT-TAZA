import React, { useContext } from 'react';
import BookCatalogue from '../../components/BookCatalogue/BookCatalogue';
import { AuthContext } from '../../context/AuthContext';
import './Favorite.css';

const Favorite = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="favorite-page">
      <h1>Mes Favoris</h1>
      {user ? (
        <BookCatalogue 
          isFavoritePage={true}
        />
      ) : (
        <div className="login-prompt">
          <p>Veuillez vous connecter pour voir vos livres favoris</p>
          <a href="/connexion" className="login-btn">Se connecter</a>
        </div>
      )}
    </div>
  );
};

export default Favorite;