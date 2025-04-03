import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Sample data
  const activeReservations = [
    { 
      id: 1, 
      book: 'React Avancé', 
      author: 'A. Developer', 
      reservationDate: '2023-06-10', 
      pickupDate: '2023-06-15',
      status: 'pending'
    },
    { 
      id: 2, 
      book: 'JavaScript Moderne', 
      author: 'E. Script', 
      reservationDate: '2023-06-12', 
      pickupDate: '2023-06-17',
      status: 'ready'
    }
  ];
  
  const reservationHistory = [
    { 
      id: 3, 
      book: 'Réseaux Informatiques', 
      author: 'N. Etwork', 
      reservationDate: '2023-05-01', 
      pickupDate: '2023-05-06',
      status: 'completed'
    },
    { 
      id: 4, 
      book: 'Base de Données', 
      author: 'D. B. Admin', 
      reservationDate: '2023-04-15', 
      pickupDate: '2023-04-20',
      status: 'cancelled'
    }
  ];

  const filteredActive = activeReservations.filter(res => 
    res.book.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === 'all' || res.status === filterStatus)
  );

  const filteredHistory = reservationHistory.filter(res => 
    res.book.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === 'all' || res.status === filterStatus)
  );

  const cancelReservation = (id) => {
    // API call to cancel reservation
    alert(`Reservation ${id} cancelled`);
  };

  return (
    <div className="reservation-page">
      <h1>Mes Réservations</h1>
      
      <div className="reservation-container">
        <div className="tabs">
          <button 
            className={activeTab === 'active' ? 'active' : ''}
            onClick={() => setActiveTab('active')}
          >
            Réservations Actives
          </button>
          <button 
            className={activeTab === 'history' ? 'active' : ''}
            onClick={() => setActiveTab('history')}
          >
            Historique
          </button>
        </div>
        
        <div className="search-filter">
          <input 
            type="text" 
            placeholder="Rechercher par titre..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="ready">Prêt à récupérer</option>
            <option value="completed">Complété</option>
            <option value="cancelled">Annulé</option>
          </select>
        </div>
        
        {activeTab === 'active' ? (
          filteredActive.length > 0 ? (
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Livre</th>
                  <th>Auteur</th>
                  <th>Date Réservation</th>
                  <th>Date Récupération</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredActive.map(res => (
                  <tr key={res.id}>
                    <td>{res.book}</td>
                    <td>{res.author}</td>
                    <td>{res.reservationDate}</td>
                    <td>{res.pickupDate}</td>
                    <td>
                      <span className={`status-${res.status}`}>
                        {res.status === 'pending' && 'En attente'}
                        {res.status === 'ready' && 'Prêt à récupérer'}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="cancel-btn"
                        onClick={() => cancelReservation(res.id)}
                      >
                        Annuler
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-reservations">
              Aucune réservation active trouvée
            </div>
          )
        ) : (
          filteredHistory.length > 0 ? (
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Livre</th>
                  <th>Auteur</th>
                  <th>Date Réservation</th>
                  <th>Date Récupération</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.map(res => (
                  <tr key={res.id}>
                    <td>{res.book}</td>
                    <td>{res.author}</td>
                    <td>{res.reservationDate}</td>
                    <td>{res.pickupDate}</td>
                    <td>
                      <span className={`status-${res.status}`}>
                        {res.status === 'completed' && 'Complété'}
                        {res.status === 'cancelled' && 'Annulé'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-reservations">
              Aucun historique de réservation trouvé
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Reservation;