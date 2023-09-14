import {client} from '../utils/api-client';
import {store} from '../redux/store';

const serverUrl = import.meta.env.VITE_API_BASE_URL;

export const depositService = {
  getDeposits: async () => {
    try {
      const url = `${serverUrl}/auth/deposits?limit=50`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  createDeposits: async (reqbody) => {
    try {
      const url = `${serverUrl}/deposit/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
