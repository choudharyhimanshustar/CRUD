import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Replace with your backend URL

// Create
export const createItem = async (data) => {
  return await axios.post(`${API_URL}/items`, data);
};

// Read
export const getItems = async () => {
  return await axios.get(`${API_URL}/items`);
};

// Update
export const updateItem = async (id, data) => {
  return await axios.put(`${API_URL}/items/${id}`, data);
};

// Delete
export const deleteItem = async (id) => {
  return await axios.delete(`${API_URL}/items/${id}`);
};
