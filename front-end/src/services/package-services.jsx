import {client} from '../utils/api-client';

const serverUrl = import.meta.env.VITE_API_BASE_URL;

export const packageService = {
  getPackages: async () => {
    try {
      const url = `${serverUrl}/package`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
