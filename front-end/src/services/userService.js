import {client} from '../utils/api-client';
import {store} from '../redux/store';
import {API_URL} from '../components/Commons/HandleRequest';

// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiBaseUrl = API_URL;

export const userService = {
  loginUser: async (email, password) => {
    const url = `${apiBaseUrl}/account/login`;
    const method = 'POST';
    const response = await client(url, method, {email, password});
    if (!response) throw new Error('Cannot login');
    return response;
  },

  verifyToken: async () => {
    const url = `${apiBaseUrl}/auth/authorize`;
    const method = 'GET';
    const response = await client(url, method);
    if (!response) throw new Error('Not Authorized');
    return response;
  },

  getPackages: async () => {
    const url = `${apiBaseUrl}/package`;
    const method = 'GET';
    const response = await client(url, method);
    if (!response) throw new Error('Not Authorized');
    return response;
  },

  createDeposit: async () => {
    const url = `${apiBaseUrl}/deposit`;
    const method = 'POST';
    const response = await client(url, method, {});
    if (!response) throw new Error('Not Authorized');
    return response;
  },

  fetchUserFromStore: () => {
    let user = store?.getState()?.user?.user;
    let token;
    if (user) {
      token = user.token || '';
    }
    return {
      user,
      token,
    };
  },
};
