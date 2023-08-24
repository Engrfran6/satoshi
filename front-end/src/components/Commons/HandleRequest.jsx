// api.js
import axios from 'axios';

const API_URL = 'https://satochitradebackend.onrender.com'; //My backend URL


const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const userRequest = async (alias, formData, token) => {
  try {
    const response = await api.post(alias, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserData = async (alias, formData, token) => {
  try {
    const response = await api.get(alias, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const fetchData = async (alias, token) => {
  try {
    const response = await api.get(alias, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUserData = async (alias, formData, token) => {
  try {
    const response = await api.delete(alias, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const deleteLoginActivity = async (alias, token) => {
  try {
    const response = await api.delete(alias, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUserData = async (alias, formData, token) => {
  try {
    const response = await api.patch(alias, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const loginUser = async (alias, formData) => {
  try {
    const response = await api.post(alias, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const registerUser = async (alias, formData) => {
  try {
    const response = await api.post(alias, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
