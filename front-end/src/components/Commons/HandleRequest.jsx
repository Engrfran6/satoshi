// api.js
import axios from 'axios';
import {useSelector} from 'react-redux';

const API_URL = 'http://localhost:8000'; //My backend URL

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const userRequest = async (alias, userId, token) => {
  try {
    const response = await api.post(alias, userId, {
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

export const getUserData = async (alias, userId, token) => {
  try {
    const response = await api.get(alias, userId, {
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

export const deleteUserData = async (alias, userId, token) => {
  try {
    const response = await api.delete(alias, userId, {
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

export const updateUserData = async (alias, userId, token) => {
  try {
    const response = await api.patch(alias, userId, {
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
