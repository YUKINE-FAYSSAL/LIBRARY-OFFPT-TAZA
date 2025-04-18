// src/context/BookContext.jsx
import React, { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    // Your initial book data here
  ]);

  const addBook = (newBook) => {
    setBooks(prev => [...prev, { ...newBook, id: Date.now() }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);