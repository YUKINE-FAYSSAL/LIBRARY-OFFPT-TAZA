import api from './api';

export const getLoans = async (matricule) => {
  const response = await api.get(`/prets?matricule=${matricule}`);
  return response.data;
};

export const extendLoan = async (pretId) => {
  const response = await api.put(`/prets/${pretId}/prolonger`);
  return response.data;
};

export const createReservation = async (reservationData) => {
  const response = await api.post('/reservations', reservationData);
  return response.data;
};