import {client} from '../utils/api-client';
import {store} from '../redux/store';

const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const withdrawalService = {
  getWithdrawals: async () => {
    try {
      const url = `${serverUrl}/auth/withdrawals?limit=50`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  createWithdrawals: async (reqbody) => {
    try {
      const url = `${serverUrl}/withdraw/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateWithdrawals: async (userId, reqbody) => {
    try {
      const url = `${serverUrl}/auth/withdrawal/${userId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deleteWithdrawals: async (userId) => {
    try {
      const url = `${serverUrl}/auth/withdrawal/${userId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
