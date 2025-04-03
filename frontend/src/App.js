import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Accueil from './pages/Accueil/Accueil';
import Catalogue from './pages/Catalogue/Catalogue';
import Emprunts from './pages/Emprunts/Emprunts';
import Profile from './pages/Profile/Profile';
import Inscription from './pages/Inscription/Inscription';
import Reservation from './pages/Reservation/Reservation';
import Settings from './pages/Settings/Settings'; // New import
import Notifications from './components/Notifications/Notifications';
import Connexion from './pages/Connexion/Connexion';
import { AuthContext } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import { LoanProvider } from './context/LoanContext';
import './App.css';

// Admin imports
import ManageBooks from './pages/Admin/ManageBooks/ManageBooks';
import ManageUsers from './pages/Admin/ManageUsers/ManageUsers';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isLoading } = React.useContext(AuthContext);
  const currentLocation = useLocation();

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/connexion" state={{ from: currentLocation }} replace />;
  }

  if (adminOnly && user.typeEmploye !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { user } = React.useContext(AuthContext);
  const location = useLocation();

  return (
    <BookProvider>
      <LoanProvider>
        <div className="app">
          <Navbar />
          <Notifications />
          <main className="contenu-principal">
            <Routes location={location} key={location.key}>
              {/* Public Routes */}
              <Route path="/" element={<Accueil />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/inscription" element={<Inscription />} />
              
              {/* Authenticated Routes */}
              <Route path="/emprunts" element={
                <ProtectedRoute>
                  <Emprunts />
                </ProtectedRoute>
              } />
              
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              <Route path="/reservation" element={
                <ProtectedRoute>
                  <Reservation />
                </ProtectedRoute>
              } />

              <Route path="/parametres" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />

              {/* Admin Routes */}
              <Route path="/admin/books" element={
                <ProtectedRoute adminOnly>
                  <ManageBooks />
                </ProtectedRoute>
              } />

              <Route path="/admin/users" element={
                <ProtectedRoute adminOnly>
                  <ManageUsers />
                </ProtectedRoute>
              } />

              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LoanProvider>
    </BookProvider>
  );
}

export default App;