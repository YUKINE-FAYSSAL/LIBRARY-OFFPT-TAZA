import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';
import './AddBookForm.css';

const AddBookForm = () => {
  const { addBook } = useBookContext();
  const [formData, setFormData] = useState({
    titre: '',
    auteur: '',
    cote: '',
    categorie: 'informatique',
    datePublication: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    setFormData({
      titre: '',
      auteur: '',
      cote: '',
      categorie: 'informatique',
      datePublication: ''
    });
  };

  return (
    <div className="add-book-form">
      <h2>Ajouter un nouveau livre</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form fields here */}
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddBookForm;