// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; //My backend URL

const api = axios.create({
  baseURL: API_URL,
});

export const userRequest = async (alias, userId) => {
  try {
    const response = await api.post(alias, userId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserData = async (alias, userId) => {
  try {
    const response = await api.get(alias, userId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUserData = async (alias, userId) => {
  try {
    const response = await api.delete(alias, userId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUserData = async (alias, userId) => {
  try {
    const response = await api.patch(alias, userId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

