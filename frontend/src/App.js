import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Accueil from './pages/Accueil/Accueil';
import Catalogue from './pages/Catalogue/Catalogue';
import Connexion from './pages/Connexion/Connexion';
import Profile from './pages/Profile/Profile';
import Reservation from './pages/Reservation/Reservation';
import Settings from './pages/Settings/Settings';
import Propose from './pages/About/About';
import Besoins from './pages/Besoins/Besoins';
import Favorite from './pages/Favorite/Favorite'; // Added Favorite page import
import { AuthContext } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import { LoanProvider } from './context/LoanContext';
import { ThemeProvider } from './context/ThemeContext';
import { FavoriteProvider } from './context/FavoriteContext'; // Added FavoriteProvider
import './App.css';

// Admin imports
import ManageBooks from './pages/Admin/ManageBooks/ManageBooks';
import ManageUsers from './pages/Admin/ManageUsers/ManageUsers';
import AddBookForm from './components/AddBookForm/AddBookForm'; // Added AddBookForm

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isLoading } = React.useContext(AuthContext);
  const currentLocation = useLocation();

  if (isLoading) {
    return <div className="loading-overlay">Chargement...</div>;
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
  const location = useLocation();

  return (
    <ThemeProvider>
      <BookProvider>
        <LoanProvider>
          <FavoriteProvider> {/* Added FavoriteProvider wrapper */}
            <div className="app">
              <Navbar />
              <main className="contenu-principal">
                <Routes location={location} key={location.key}>
                  {/* Public Routes */}
                  <Route path="/" element={<Accueil />} />
                  <Route path="/catalogue" element={<Catalogue />} />
                  <Route path="/connexion" element={<Connexion />} />
                  
                  {/* Authenticated Routes */}
                  <Route path="/reservation" element={<ProtectedRoute><Reservation /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route path="/parametres" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                  <Route path="/propose" element={<ProtectedRoute><Propose /></ProtectedRoute>} />
                  <Route path="/besoins" element={<ProtectedRoute><Besoins /></ProtectedRoute>} />
                  <Route path="/favorite" element={<ProtectedRoute><Favorite /></ProtectedRoute>} /> {/* Added Favorite route */}

                  {/* Admin Routes */}
                  <Route path="/admin/books" element={<ProtectedRoute adminOnly><ManageBooks /></ProtectedRoute>} />
                  <Route path="/admin/users" element={<ProtectedRoute adminOnly><ManageUsers /></ProtectedRoute>} />
                  <Route path="/admin/add-book" element={<ProtectedRoute adminOnly><AddBookForm /></ProtectedRoute>} /> {/* Added AddBookForm route */}

                  {/* Fallback Route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </FavoriteProvider>
        </LoanProvider>
      </BookProvider>
    </ThemeProvider>
  );
}

export default App;