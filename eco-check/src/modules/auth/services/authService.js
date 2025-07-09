import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const login = (email, password) => axios.post(`${BASE_URL}/token`, { email, password });

