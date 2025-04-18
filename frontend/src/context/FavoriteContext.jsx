import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    if (user) {
      const savedFavorites = localStorage.getItem(`favorites_${user.id}`);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    }
  }, [user]);

  // Save favorites to localStorage when they change
  useEffect(() => {
    if (user && favorites.length >= 0) {
      localStorage.setItem(`favorites_${user.id}`, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  const addFavorite = (bookId) => {
    setFavorites(prev => [...prev, bookId]);
  };

  const removeFavorite = (bookId) => {
    setFavorites(prev => prev.filter(id => id !== bookId));
  };

  const isFavorite = (bookId) => {
    return favorites.includes(bookId);
  };

  return (
    <FavoriteContext.Provider value={{ 
      favorites, 
      addFavorite, 
      removeFavorite, 
      isFavorite,
      totalFavorites: favorites.length 
    }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);