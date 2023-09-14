import {client, imageClient} from '../utils/api-client';
import {store} from '../redux/store';

const serverUrl = import.meta.env.VITE_API_BASE_URL;

export const userService = {
  loginUser: async (email, password) => {
    try {
      const url = `${serverUrl}/auth/login`;
      const method = 'POST';
      const response = await client(url, method, {email, password});
      if (!response) throw new Error('Cannot login');
      return response;
    } catch (e) {
      throw e;
    }
  },

  registerUser: async (reqbody) => {
    try {
      const url = `${serverUrl}/auth/register`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateUser: async (reqbody) => {
    try {
      const url = `${serverUrl}/auth/user`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  getUser: async () => {
    try {
      const url = `${serverUrl}/auth/user`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  uploadImage: async (reqbody) => {
    try {
      const url = `${serverUrl}/upload`;
      const method = 'POST';
      const response = await imageClient(url, method, reqbody);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  kycVerification: async (reqbody) => {
    try {
      const url = `${serverUrl}/verify/create`;
      const method = 'POST';
      const response = await imageClient(url, method, reqbody);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  verifyToken: async () => {
    const url = `${serverUrl}/auth/authorize`;
    const method = 'GET';
    const response = await client(url, method);
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
