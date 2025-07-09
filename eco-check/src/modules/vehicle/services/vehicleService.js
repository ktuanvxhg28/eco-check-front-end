import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/vehicles';

export const getVehicleByOwnerId = (ownerId) => {
  const token = localStorage.getItem("token");

  return axios.get(`${BASE_URL}/${ownerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

