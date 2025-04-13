import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import './Settings.css';

const Settings = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.hash || '#compte');
  const [formData, setFormData] = useState({
    // Account Tab
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@ofppt.taza',
    telephone: '0612345678',
    
    // Security Tab
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Notifications Tab
    notificationsEmail: true,
    notificationsSMS: false,
    notificationsApp: true,
    
    // Appearance Tab
    langue: localStorage.getItem('langue') || 'fr',
    darkMode: false, // Disabled by default
  });

  // Sync with context when dark mode changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      darkMode: darkMode
    }));
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'darkMode') {
      toggleDarkMode(); // Update context
    }

    if (name === 'langue') {
      localStorage.setItem('langue', value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Paramètres enregistrés avec succès!');
  };

  return (
    <div className="settings-page">
      <h1>Paramètres</h1>
      
      <div className="settings-container">
        {/* Navigation */}
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
        
        {/* Content */}
        <div className="settings-content">
          {/* Account Tab */}
          {activeTab === '#compte' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Informations du compte</h2>
                
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
          
          {/* Security Tab */}
          {activeTab === '#securite' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Sécurité du compte</h2>
                
                <div className="settings-form-group">
                  <label>Ancien mot de passe</label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                    placeholder="Entrez votre mot de passe actuel"
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Nouveau mot de passe</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Entrez votre nouveau mot de passe"
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Confirmer le mot de passe</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirmez votre nouveau mot de passe"
                  />
                </div>
              </div>
              
              <button type="submit" className="save-btn">
                <i className="fas fa-save"></i> Mettre à jour
              </button>
            </form>
          )}
          
          {/* Notifications Tab */}
          {activeTab === '#notifications' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Notifications</h2>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="notificationsEmail"
                      checked={formData.notificationsEmail}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Notifications par email</span>
                </div>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="notificationsSMS"
                      checked={formData.notificationsSMS}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Notifications par SMS</span>
                </div>
                
                <div className="toggle-label">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="notificationsApp"
                      checked={formData.notificationsApp}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <span>Notifications dans l'application</span>
                </div>
              </div>
              
              <button type="submit" className="save-btn">
                <i className="fas fa-save"></i> Enregistrer
              </button>
            </form>
          )}
          
          {/* Appearance Tab */}
          {activeTab === '#apparence' && (
            <form onSubmit={handleSubmit}>
              <div className="settings-section">
                <h2>Apparence</h2>
                
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