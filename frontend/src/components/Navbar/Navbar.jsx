import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../asset/logo/log.png';  // Updated logo path
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const notificationRef = useRef(null);

  const notifications = [
    { id: 1, text: "Votre livre 'React Avancé' est dû demain", read: false },
    { id: 2, text: "Nouveaux livres disponibles", read: false },
    { id: 3, text: "Votre réservation est prête", read: true }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    closeMenu();
  };

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  const handleNotificationClick = (id) => {
    console.log('Notification clicked:', id);
    setIsNotificationOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="logo-wrapper">
            <div className="logo-backdrop">
              <img 
                src={logo} 
                alt="OFPPT Taza Logo" 
                className="logo-image"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/default-logo.png';
                }}
              />
            </div>
          </div>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <NavItem to="/" text="Accueil" onClick={closeMenu} />
          <NavItem to="/catalogue" text="Catalogue" onClick={closeMenu} />
          {user && (
            <>
              <NavItem to="/reservation" text="Mes Réservations" onClick={closeMenu} />
              <NavItem to="/propose" text="À propos" onClick={closeMenu} />
              <NavItem to="/besoins" text="Besoins" onClick={closeMenu} />
            </>
          )}
        </ul>

        <div className="nav-controls">
          {user ? (
            <>
              <div className="notification-container" ref={notificationRef}>
                <button 
                  className="notification-btn"
                  onClick={toggleNotifications}
                >
                  <i className="fas fa-bell"></i>
                  {unreadCount > 0 && (
                    <span className="notification-badge">{unreadCount}</span>
                  )}
                </button>

                <div className={`notification-dropdown ${isNotificationOpen ? 'active' : ''}`}>
                  <div className="notification-header">
                    <h3>Notifications</h3>
                    <button 
                      className="mark-all-read"
                      onClick={markAllAsRead}
                    >
                      Tout marquer comme lu
                    </button>
                  </div>
                  
                  <div className="notification-list">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${!notification.read ? 'unread' : ''}`}
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        <p>{notification.text}</p>
                        <span className="notification-time">Il y a 2h</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <UserDropdown onLogout={handleLogout} user={user} />
            </>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, onClick }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link" onClick={onClick}>
      {text}
    </Link>
  </li>
);

const UserDropdown = ({ onLogout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userGender = user.gender || 'man';
  const avatarImage = userGender === 'woman' 
    ? require('../../asset/icons/woman.png') 
    : require('../../asset/icons/man.png');

  return (
    <div className="user-dropdown-container">
      <button className="user-avatar" onClick={() => setIsOpen(!isOpen)}>
        <img src={avatarImage} alt="User avatar" />
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span className="user-name">{user.prenom} {user.nom}</span>
            <span className="user-email">{user.email}</span>
          </div>
          <Link to="/profile" className="dropdown-item" onClick={() => setIsOpen(false)}>
            <i className="fas fa-user"></i> Mon Profil
          </Link>
          <Link to="/favorite" className="dropdown-item" onClick={() => setIsOpen(false)}>
            <i className="fas fa-heart"></i> Mes Favoris
          </Link>
          <Link to="/parametres" className="dropdown-item" onClick={() => setIsOpen(false)}>
            <i className="fas fa-cog"></i> Paramètres
          </Link>
          <button className="dropdown-item logout" onClick={onLogout}>
            <i className="fas fa-sign-out-alt"></i> Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

const AuthButtons = () => (
  <div className="auth-buttons">
    <Link to="/connexion" className="auth-btn login">
      <i className="fas fa-sign-in-alt"></i>
      <span>Connexion</span>
    </Link>
  </div>
);

export default Navbar;