import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    matricule: 'OFPPT123',
    nom: 'Dupont',
    prenom: 'Jean',
    codeFil: 'DEV101',
    niveau: 'TS',
    groupe: 'G1',
    anneeInscription: '2022',
    typeEmploye: 'Étudiant',
    telephone: '0612345678',
    email: 'jean.dupont@ofppt.taza',
    adresse: '123 Rue Principale, Taza'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // API call to update user profile
  };

  return (
    <div className="profile-page">
      <h1>Mon Profil</h1>
      
      <div className="profile-card">
        {!isEditing ? (
          <>
            <div className="profile-section">
              <h3 className="section-title">Informations Personnelles</h3>
              <div className="profile-grid">
                <div className="profile-field">
                  <label>Matricule</label>
                  <div className="field-value">{user.matricule}</div>
                </div>
                <div className="profile-field">
                  <label>Nom</label>
                  <div className="field-value">{user.nom}</div>
                </div>
                <div className="profile-field">
                  <label>Prénom</label>
                  <div className="field-value">{user.prenom}</div>
                </div>
                <div className="profile-field">
                  <label>Email</label>
                  <div className="field-value">{user.email}</div>
                </div>
                <div className="profile-field">
                  <label>Téléphone</label>
                  <div className="field-value">{user.telephone}</div>
                </div>
                <div className="profile-field">
                  <label>Adresse</label>
                  <div className="field-value">{user.adresse}</div>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3 className="section-title">Informations Académiques</h3>
              <div className="profile-grid">
                <div className="profile-field">
                  <label>Filière</label>
                  <div className="field-value">{user.codeFil}</div>
                </div>
                <div className="profile-field">
                  <label>Niveau</label>
                  <div className="field-value">{user.niveau}</div>
                </div>
                <div className="profile-field">
                  <label>Groupe</label>
                  <div className="field-value">{user.groupe}</div>
                </div>
                <div className="profile-field">
                  <label>Année d'inscription</label>
                  <div className="field-value">{user.anneeInscription}</div>
                </div>
                <div className="profile-field">
                  <label>Statut</label>
                  <div className="field-value">{user.typeEmploye}</div>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button 
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                <i className="fas fa-edit"></i> Modifier Profil
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="profile-section">
              <h3 className="section-title">Informations Personnelles</h3>
              <div className="profile-grid">
                <div className="profile-field edit-field">
                  <label>Matricule</label>
                  <input
                    type="text"
                    name="matricule"
                    value={user.matricule}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={user.nom}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    value={user.prenom}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={user.telephone}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Adresse</label>
                  <input
                    type="text"
                    name="adresse"
                    value={user.adresse}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3 className="section-title">Informations Académiques</h3>
              <div className="profile-grid">
                <div className="profile-field edit-field">
                  <label>Filière</label>
                  <input
                    type="text"
                    name="codeFil"
                    value={user.codeFil}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Niveau</label>
                  <select
                    name="niveau"
                    value={user.niveau}
                    onChange={handleChange}
                  >
                    <option value="TS">Technicien Spécialisé</option>
                    <option value="T">Technicien</option>
                    <option value="Q">Qualification</option>
                  </select>
                </div>
                <div className="profile-field edit-field">
                  <label>Groupe</label>
                  <input
                    type="text"
                    name="groupe"
                    value={user.groupe}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Année d'inscription</label>
                  <input
                    type="text"
                    name="anneeInscription"
                    value={user.anneeInscription}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field edit-field">
                  <label>Statut</label>
                  <select
                    name="typeEmploye"
                    value={user.typeEmploye}
                    onChange={handleChange}
                  >
                    <option value="Étudiant">Étudiant</option>
                    <option value="Formateur">Formateur</option>
                    <option value="Administratif">Administratif</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="button"
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                <i className="fas fa-times"></i> Annuler
              </button>
              <button 
                type="submit"
                className="save-btn"
              >
                <i className="fas fa-save"></i> Enregistrer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;