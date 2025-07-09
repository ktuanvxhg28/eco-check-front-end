import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const login = (email, password) =>
  axios.post(`${BASE_URL}/token`, { email, password });

// import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// export const listEmployees = () => {
//     return axios.get(REST_API_BASE_URL);
// }

// export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);