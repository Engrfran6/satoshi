import {client} from '../utils/api-client';

const serverUrl = import.meta.env.VITE_API_BASE_URL;

export const activityService = {
  deleteActivity: async (userId) => {
    try {
      const url = `${serverUrl}/activity/${userId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  getActivity: async () => {
    try {
      const url = `${serverUrl}/activity`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
