import api from './api';

export const getBooks = async () => {
  const response = await api.get('/livres');
  return response.data;
};

export const addBook = async (bookData) => {
  const response = await api.post('/livres', bookData);
  return response.data;
};

export const updateBook = async (cote, bookData) => {
  const response = await api.put(`/livres/${cote}`, bookData);
  return response.data;
};

export const deleteBook = async (cote) => {
  const response = await api.delete(`/livres/${cote}`);
  return response.data;
};