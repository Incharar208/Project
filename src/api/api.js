import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => axios.get(API_BASE_URL);
export const addUser = (user) => axios.post(API_BASE_URL, user);
export const updateUser = (id, user) => axios.put(`${API_BASE_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/${id}`);

export const fetchPaginatedUsers = async (page, limit) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const start = (page - 1) * limit;
    const end = start + limit;
    return response.data.slice(start, end); 
  };
  