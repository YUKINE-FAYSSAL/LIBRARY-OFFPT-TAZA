import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.hash || '#compte');
  const [formData, setFormData] = useState({
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@ofppt.taza',
    telephone: '0612345678',
    langue: 'fr',
    notifications: true,
    darkMode: false,
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Paramètres enregistrés avec succès!');
  };

  return (
    <div className="settings-page">
      <h1>Paramètres</h1>
      
      <div className="settings-container">
        {/* Settings Navigation */}
        <div className="settings-nav">
          <Link 
            to="#compte" 
            className={`settings-nav-item ${activeTab === '#compte' ? 'active' : ''}`}
            onClick={() => setActiveTab('#compte')}
          >
            <i className="fas fa-user"></i>
            Compte
          </Link>
          <Link 
            to="#securite" 
            className={`settings-nav-item ${activeTab === '#securite' ? 'active' : ''}`}
            onClick={() => setActiveTab('#securite')}
          >
            <i className="fas fa-lock"></i>
            Sécurité
          </Link>
          <Link 
            to="#notifications" 
            className={`settings-nav-item ${activeTab === '#notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('#notifications')}
          >
            <i className="fas fa-bell"></i>
            Notifications
          </Link>
          <Link 
            to="#apparence" 
            className={`settings-nav-item ${activeTab === '#apparence' ? 'active' : ''}`}
            onClick={() => setActiveTab('#apparence')}
          >
            <i className="fas fa-palette"></i>
            Apparence
          </Link>
        </div>
        
        {/* Settings Content */}
        <div className="settings-content">
          {activeTab === '#compte' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Informations du Compte</h2>
                
                <div className="form-row">
                  <div className="settings-form-group">
                    <label>Nom</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="settings-form-group">
                    <label>Prénom</label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="settings-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <button type="submit" className="save-btn">
                <i className="fas fa-save"></i> Enregistrer
              </button>
            </form>
          )}
          
          {activeTab === '#securite' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Changer le Mot de Passe</h2>
                
                <div className="settings-form-group">
                  <label>Ancien mot de passe</label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Nouveau mot de passe</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Confirmer le nouveau mot de passe</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <button type="submit" className="save-btn">
                <i className="fas fa-save"></i> Mettre à jour
              </button>
            </form>
          )}
          
          {activeTab === '#notifications' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Préférences de Notification</h2>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={formData.notifications}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Activer les notifications</span>
                </div>
                
                <h3>Types de Notifications</h3>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Rappels d'emprunts</span>
                </div>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Nouveaux livres disponibles</span>
                </div>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Réservations prêtes</span>
                </div>
              </div>
              
              <button type="submit" className="save-btn">
                <i className="fas fa-save"></i> Enregistrer
              </button>
            </form>
          )}
          
          {activeTab === '#apparence' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Thème</h2>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="darkMode"
                      checked={formData.darkMode}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Mode sombre</span>
                </div>
                
                <h3>Langue</h3>
                
                <div className="settings-form-group">
                  <select
                    name="langue"
                    value={formData.langue}
                    onChange={handleChange}
                  >
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="save-btn">
                <i className="fas fa-save"></i> Enregistrer
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;