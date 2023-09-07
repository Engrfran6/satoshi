import {client} from '../utils/api-client';
import {store} from '../redux/store';

const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const investmentService = {
  getInvestments: async () => {
    try {
      const url = `${serverUrl}/auth/investments?limit=50`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  createInvestment: async (reqbody) => {
    try {
      const url = `${serverUrl}/investment/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateInvestment: async (investmentId, reqbody) => {
    try {
      const url = `${serverUrl}/auth/investment/${investmentId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deleteInvestment: async (investmentId) => {
    try {
      const url = `${serverUrl}/auth/investment/${investmentId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
