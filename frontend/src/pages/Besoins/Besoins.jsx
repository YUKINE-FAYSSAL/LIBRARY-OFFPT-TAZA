// src/pages/Besoins/Besoins.jsx
import React, { useState } from 'react';
import './Besoins.css';

const Besoins = () => {
  const [formData, setFormData] = useState({
    titreLivre: '',
    nomAuteur: '',
    description: '',
    nomSuggesteur: '',
    imageCouverture: null,
    aperçuImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const fichier = e.target.files[0];
    if (fichier) {
      const lecteur = new FileReader();
      lecteur.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imageCouverture: fichier,
          aperçuImage: lecteur.result
        }));
      };
      lecteur.readAsDataURL(fichier);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous enverriez normalement les données à votre backend
    const suggestion = {
      titre: formData.titreLivre,
      auteur: formData.nomAuteur,
      description: formData.description,
      suggéréPar: formData.nomSuggesteur,
      image: formData.imageCouverture ? formData.imageCouverture.name : 'Aucune image'
    };
    console.log('Suggestion de livre soumise:', suggestion);
    alert(`Suggestion envoyée !\nTitre: ${formData.titreLivre}\nAuteur: ${formData.nomAuteur}`);
  };

  return (
    <div className="besoins-page">
      <div className="besoins-container">
        <h1>Suggérer un Livre</h1>
        <p className="texte-intro">
          Aidez-nous à enrichir notre collection en suggérant des livres que vous aimeriez voir dans notre bibliothèque.
          Veuillez remplir tous les champs obligatoires ci-dessous.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="groupe-form">
            <label>Titre du Livre *</label>
            <input
              type="text"
              name="titreLivre"
              value={formData.titreLivre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="groupe-form">
            <label>Nom de l'Auteur *</label>
            <input
              type="text"
              name="nomAuteur"
              value={formData.nomAuteur}
              onChange={handleChange}
              required
            />
          </div>

          <div className="groupe-form">
            <label>Description du Livre *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <div className="groupe-form">
            <label>Votre Nom *</label>
            <input
              type="text"
              name="nomSuggesteur"
              value={formData.nomSuggesteur}
              onChange={handleChange}
              required
            />
          </div>

          <div className="groupe-form">
            <label>Image de Couverture (optionnel)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {formData.aperçuImage && (
              <div className="aperçu-image">
                <img src={formData.aperçuImage} alt="Aperçu de la couverture" />
                <p>{formData.imageCouverture.name}</p>
              </div>
            )}
          </div>

          <button type="submit" className="bouton-soumettre">
            Soumettre la Suggestion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Besoins;