import api from './api';

export default {
    async getAllBooks() {
        const response = await api.get('/books');
        return response.data;
    },
    async addBook(bookData) {
        const response = await api.post('/books', bookData);
        return response.data;
    },
    async toggleFavorite(bookId) {
        const response = await api.post(`/books/${bookId}/favorite`);
        return response.data;
    },
    async getFavorites() {
        const response = await api.get('/favorites');
        return response.data;
    }
};