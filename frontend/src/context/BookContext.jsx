import React, { createContext, useState, useEffect, useContext } from 'react';
import { getBooks } from '../services/bookService';
import { AuthContext } from './AuthContext';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
      if (user) {
        const userFavorites = data.filter(book => 
          user.favorites?.includes(book.id)
        );
        setFavorites(userFavorites);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (bookId) => {
    try {
      // Here you would typically make an API call to update favorites
      const updatedBooks = books.map(book => 
        book.id === bookId 
          ? { ...book, isFavorite: !book.isFavorite } 
          : book
      );
      setBooks(updatedBooks);
      setFavorites(updatedBooks.filter(book => book.isFavorite));
    } catch (err) {
      console.error('Error updating favorite:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [user]);

  return (
    <BookContext.Provider value={{ 
      books, 
      favorites,
      loading, 
      error, 
      refreshBooks: fetchBooks,
      toggleFavorite
    }}>
      {children}
    </BookContext.Provider>
  );
};